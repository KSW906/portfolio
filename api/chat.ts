// Vercel 서버리스 함수: POST /api/chat
// OpenAI API 키는 Vercel 환경변수 OPENAI_API_KEY에만 두고, 브라우저로는 절대 보내지 않습니다.

// GPT가 답변할 때 참고하는 포트폴리오 정보입니다.
// 사이트 내용(src/App.tsx)이 바뀌면 여기도 함께 고쳐 주세요.
const PROFILE = `
이름: 김희연 (KIM HUIYEON)
소속: 선문대학교 경영학과 3학년
관심 진로: HRD·인사 (사람의 성장을 돕고, 사람과 경험을 연결하는 일)
핵심 스토리: 2024 Explore(나의 성장 방식을 배움) → 2025 Connect(사람을 이해하는 관점) → 2026 Define(경험을 진로의 언어로 정의)

[2024 · 1학년 · EXPLORE]
- 제2회 SMILEAGE 외국어 포트폴리오 경진대회 대상: 1년간의 외국어 학습을 목표·과정·성과·성찰로 정리
- 디딤돌그룹 리더·튜터: 약 10주간 토익 학습계획과 자료 제작, 팀원에 맞춰 학습 방식 조정, 우수팀
- 늘벗 공부방 영어 멘토링: 약 7개월간 중학생 멘티 수준 진단, 어휘·문법·독해 맞춤 지도
- 기타: 경영소프트웨어(2025 한국 경제 전망), 경제학원론(자유무역 vs 보호무역), 읽기와 토론, 창의적 사고와 글쓰기, 아시아 경제 이슈(일본 문화·관광), 선문 초등학생 영어캠프 보조요원

[2025 · 2학년 · CONNECT]
- 조직행동론으로 사람의 행동과 동기를 이론으로 이해 (트럼프 관세정책 팀 프로젝트)
- SMILEAGE 멘토: 학생의 외국어 경험과 목표를 듣고 활동 간 연결·성찰·향후 계획을 함께 정리 (Listen → Organize → Feedback → Grow)
- 기타: 생활예절과 문화 에세이, 아산의 이해와 탐방, 도전! 선문 독서왕 서평쓰기 대회 장려상

[2026 · 3학년 · DEFINE]
- 선문글로벌 FLY TRACK 1: 캐나다 캘거리 3주, 영어를 사람과 문화를 잇는 도구로 경험
- HUMAN LINK 외국어 포트폴리오 1차 합격: ME → YOU → WORLD → WORK → NEXT, 3년간의 외국어 경험을 HRD 진로와 연결
- PetMart: AI를 개발 보조 도구로 활용해 로그인·찜·장바구니·결제 흐름의 웹 서비스 제작
- SMILEAGE 장기 멘토링 (2026년 2학기 현재까지)
- ESG 팀 공모 프로젝트 '이음(I-Eum)' 팀장 (7월까지 참여)

[수상]
- 2024.11.20 대상 · 제2회 SMILEAGE 외국어 포트폴리오 경진대회
- 2024.11.22 최우수상 · 도전장학 스토리캐스팅
- 2024.11.20 장려상 · 학습법 관련 우수사례 공모전
- 2025.10.29 장려상 · 도전! 선문 독서왕 서평쓰기 대회

[강점]
경청하고, 성장 과정을 설계하고, 사람과 경험을 연결하는 것.
`.trim();


type ChatMessage = { role: "user" | "assistant"; content: string };

const MAX_MESSAGES = 10;
const MAX_CHARS = 1000;

const SYSTEM_PROMPT = `당신은 김희연의 포트폴리오 사이트에 있는 안내 도우미입니다.
방문자(주로 채용 담당자)의 질문에 아래 포트폴리오 정보만 근거로 한국어로 짧고 친절하게 답하세요.
정보에 없는 내용은 지어내지 말고 "포트폴리오에는 나와 있지 않아요"라고 답하세요.
답변은 3~5문장 이내로 합니다.

${PROFILE}`;

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8" }
  });
}

export async function POST(request: Request) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return json({ error: "서버에 OPENAI_API_KEY가 설정되지 않았어요." }, 500);

  let messages: ChatMessage[];
  try {
    const body = await request.json();
    messages = Array.isArray(body?.messages) ? body.messages : [];
  } catch {
    return json({ error: "잘못된 요청이에요." }, 400);
  }

  messages = messages
    .filter(m => (m?.role === "user" || m?.role === "assistant") && typeof m.content === "string")
    .slice(-MAX_MESSAGES)
    .map(m => ({ role: m.role, content: m.content.slice(0, MAX_CHARS) }));

  if (!messages.length || messages[messages.length - 1].role !== "user") {
    return json({ error: "질문을 입력해 주세요." }, 400);
  }

  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${apiKey}` },
    body: JSON.stringify({
      model: process.env.OPENAI_MODEL || "gpt-5-mini",
      messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages]
    })
  });

  if (!res.ok) {
    console.error("OpenAI error", res.status, await res.text());
    return json({ error: "GPT 응답을 받지 못했어요. 잠시 후 다시 시도해 주세요." }, 502);
  }

  const data = await res.json();
  const reply: string = data?.choices?.[0]?.message?.content?.trim() || "";
  return json({ reply });
}
