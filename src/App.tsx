import { useEffect, useRef, useState, type CSSProperties } from "react";
import { details } from "./details";

const d = (i: number) => ({ "--i": i } as CSSProperties);

const metrics = [
  ["4.33", "/ 4.5", "전체 평점평균", "석차 2 / 82 · 수석 장학 3학기"],
  ["6", "회", "교내 공모전 수상", "대상 · 최우수상 포함"],
  ["5", "번", "팀장·조장 (2026년)", "경진대회 · 일경험 · YLC"],
  ["2", "년째", "지역아동센터 교육멘토", "2025.3 ~ 현재"]
];

/* 한눈에 보기: 각 줄은 자세한 섹션으로 연결 */
const glance: { label: string; head: string; text: string; href: string; go: string }[] = [
  {
    label: "이런 사람입니다",
    head: "공감하고, 끝까지 확인합니다",
    text: "다시 확인하는 사람 · 먼저 다가가는 사람 · 직접 해 보는 사람. 보완할 점은 부탁을 쉽게 거절하지 못하는 것이라, 지금은 역할 분담부터 정합니다.",
    href: "#about",
    go: "성격과 가치관"
  },
  {
    label: "왜 인사·HRD인가",
    head: "아이들의 변화에서 보람을 찾았습니다",
    text: "학습을 거부하던 아이가 1년 만에 나눗셈을 스스로 풀게 된 경험이, 신입사원의 적응과 성장을 돕고 싶다는 목표로 이어졌습니다.",
    href: "#about",
    go: "대표 이야기"
  },
  {
    label: "대표 경험",
    head: "팀을 이끌고 결과를 냈습니다",
    text: "사회적기업 경진대회 본선 진출 팀 ‘그린 하우스’ 팀장, 고용노동부 미래내일 일경험 5조 팀장, SMILEAGE 장기 멘토 (2026년 후배 14명 상담).",
    href: "#project",
    go: "프로젝트와 경험"
  },
  {
    label: "학업",
    head: "4.33 / 4.5 · 전체 석차 2 / 82",
    text: "2학년 두 학기 연속 만점, 수석 성적장학금 3학기 연속. 조직행동론·조직이론·심리학으로 사람과 조직을 공부했습니다.",
    href: "#study",
    go: "성적과 수강 과목"
  },
  {
    label: "수상 · 어학",
    head: "교내 공모전 6회 수상",
    text: "SMILEAGE 외국어 포트폴리오 대상(2024)과 동상(2026), CLEVER:ON 장려상(혁신원장상) 등. TOEIC 675점 (2025.11).",
    href: "#awards",
    go: "수상과 장학"
  },
  {
    label: "다음 목표",
    head: "신입 육성 전문가로 성장합니다",
    text: "졸업 전 TOEIC 850점과 HRD 인턴 지원, 첫 직장에서는 맡기면 안심되는 동료, 40대에는 믿고 의논할 수 있는 HRD 전문가가 목표입니다.",
    href: "#roadmap",
    go: "커리어 로드맵"
  }
];

/* HR 담당자 역량과 근거 경험 */
const competencies = [
  {
    no: "01",
    title: "경청과 코칭",
    hr: "구성원 면담 · 온보딩",
    text: "멘티의 수준과 목표를 먼저 듣고, 그에 맞춰 지도 방식을 바꿔 왔습니다.",
    proof: ["늘벗 공부방 7개월 멘토링", "SMILEAGE 장기 멘토링", "다문화 멘토링 장학 (2026)", "Youth Voice 의견수렴 절차 제안"]
  },
  {
    no: "02",
    title: "학습·성장 설계",
    hr: "교육 프로그램 기획 (HRD)",
    text: "10주 학습계획과 자료를 직접 만들고, 팀원이 막히는 지점에 맞춰 조정했습니다.",
    proof: ["디딤돌그룹 리더·튜터 · 우수팀", "그린 하우스 팀장 · 유사 조직 벤치마킹", "CLEVER:ON 수기 · 4단계 학습법 정리"]
  },
  {
    no: "03",
    title: "조직과 사람에 대한 이해",
    hr: "조직문화 · 동기부여",
    text: "조직행동론과 조직이론에서 배운 시각으로, 사회적기업의 조직운영과 인사·교육 현황을 직접 분석했습니다.",
    proof: ["조직행동론 팀 프로젝트", "조직이론 · 사회적기업 조직 분석"]
  },
  {
    no: "04",
    title: "기록과 문서화",
    hr: "인사 기록 · 성과 정리",
    text: "학습과 경험을 목표·과정·성과·성찰로 정리해, 1학년에 대상, 3학년에 동상을 받았습니다.",
    proof: ["SMILEAGE 포트폴리오 대상 (2024)", "HUMAN LINK 동상 (2026)", "팀 조사 자료 통합 보고서"]
  },
  {
    no: "05",
    title: "다양성 속의 소통",
    hr: "글로벌 인재 · 다양성 관리",
    text: "캐나다에서 매시간 다른 국적의 학생들과 조를 짜 토론하고 발표하며, 영어를 소통의 도구로 썼습니다.",
    proof: ["FLY TRACK 1 · 캐나다 3주", "일본인 룸메이트와 생활"]
  },
  {
    no: "06",
    title: "디지털 도구 활용",
    hr: "HR 데이터 · 인건비 관리",
    text: "AI를 개발 보조 도구로 써서 웹 서비스와 CRM 시연 웹앱을 만들고, 그 과정을 학습법으로 정리해 상을 받았습니다.",
    proof: ["PetMart 웹 서비스", "직원용 CRM 시연 웹앱", "CLEVER:ON 장려상"]
  }
];

/* 핵심 경험: 상황, 역할·행동, 결과, HR 연결 */
type Case = {
  year: string;
  tag: string;
  title: string;
  period: string;
  situation: string;
  action: string;
  result: string;
  link: string;
  photo?: string;
  photoAlt?: string;
  detail?: string;
};

const cases: Case[] = [
  {
    year: "2024",
    tag: "학습 설계 · 리더십",
    title: "디딤돌그룹 리더·튜터",
    period: "약 10주",
    situation: "토익을 함께 공부하는 스터디 그룹에서 팀원마다 수준과 어려움이 달랐습니다.",
    action: "리더·튜터로서 학습계획과 자료를 직접 만들고, 팀원의 어려움에 맞춰 학습 방식을 조정했습니다.",
    result: "우수팀 선정",
    link: "구성원 수준에 맞춘 교육 설계는 HRD 업무의 기본입니다."
  },
  {
    year: "2024",
    tag: "코칭 · 장기 관계",
    title: "늘벗 공부방 영어 멘토링",
    period: "약 7개월",
    situation: "중학생 멘티의 영어 기초가 영역마다 고르지 않았습니다.",
    action: "먼저 수준을 진단하고, 어휘·문법·독해를 멘티에게 맞춰 나누어 지도했습니다.",
    result: "7개월간 한 멘티와 꾸준한 관계 유지",
    link: "진단한 뒤 맞춤으로 지원하는 방식은 구성원 육성·코칭과 같습니다."
  },
  {
    year: "2025 – 현재",
    tag: "멘토링 · 커리어 설계",
    title: "SMILEAGE 장기 멘토",
    period: "2025 ~ 2026.2학기",
    situation: "외국어 포트폴리오를 준비하는 학생들이 활동을 하나의 이야기로 엮는 데 어려움을 겪었습니다.",
    action: "학생의 경험과 목표를 먼저 듣고, 활동 간 연결·성찰·향후 계획을 함께 정리했습니다.",
    result: "2026년 한 해 후배 14명 상담 · 대상 수상 경험을 후배의 성장 지원으로 확장",
    link: "경력 개발 면담과 성장 계획 수립에 그대로 이어지는 경험입니다."
  },
  {
    year: "2026",
    tag: "스토리텔링 · 직무 연결",
    title: "HUMAN LINK 외국어 포트폴리오",
    detail: "humanlink",
    period: "2026",
    situation: "3년 동안의 외국어 경험이 시기별로 흩어져 있어 하나의 방향으로 보이지 않았습니다.",
    action: "나 → 너 → 세계 → 일 → 다음의 흐름으로 경험을 다시 엮어, HRD 진로와 하나의 이야기로 연결했습니다.",
    result: "2026 SMILEAGE 외국어 포트폴리오 경진대회 동상 (1학년 대상에 이어 두 번째 수상)",
    link: "경험을 직무 역량의 언어로 바꾸는 일은 채용과 인재 평가의 핵심입니다."
  },
  {
    year: "2026",
    tag: "글로벌 소통 · 적응",
    title: "FLY TRACK 1 캐나다 캘거리 연수",
    detail: "canada",
    period: "2026.7.2 ~ 7.25 · 3주",
    photo: "/canada-class.jpg",
    photoAlt: "Mount Royal University 여름 영어 프로그램 수업 자리의 이름표와 필기 노트",
    situation: "낯선 나라에서 3주 동안 생활하며, 다양한 국적의 학생들과 영어로 수업을 들어야 했습니다.",
    action: "매시간 새로 짜인 다국적 조에서 토론하고 발표했고, 밴프 체험 뒤에는 고른 사진과 이유를 영어로 발표했습니다. 일본인 룸메이트와 함께 생활하며 서로의 문화를 나눴습니다.",
    result: "연수 후에도 이어지는 관계, 결과보고서에 ‘연수 초반 현지 적응 오리엔테이션 보강’을 건의",
    link: "새 환경에 들어온 사람이 무엇을 필요로 하는지 직접 겪은 경험은 온보딩 설계로 이어집니다."
  }
];

/* 학업 */
const courses = [
  {
    group: "조직 · 인사",
    items: [
      ["조직행동론 (2025-1)", "트럼프 관세정책 팀 프로젝트"],
      ["조직이론 (2026-2)", "사회적기업 브라더스키퍼 조직운영·인사 분석 · 경진대회 본선 진출 · 팀장"],
      ["심리학 START (2025-1)", "충남대 이러닝 학점교류 · 사람의 마음과 행동에 대한 기초"],
      ["생활예절과 문화 (2025-2)", "관계와 존중 에세이"]
    ]
  },
  {
    group: "경영 · 데이터",
    items: [
      ["데이터분석과시각화 (2025-2)", "정보화 필수 · 자료를 정리하고 그래프로 읽는 기초"],
      ["마케팅관리 (2025-1)", "전공선택"],
      ["재무관리 (2025-2)", "전공선택"],
      ["생산운영관리 (2026-1)", "전공선택"],
      ["원가회계 (2026-1)", "무인 포토부스 원가구조 분석과 수익성 향상 전략 · 2인 팀"],
      ["글로벌경영학 (2026-1)", "직접 쓴 기사 요약과 AI 답변을 비교하며 학습"]
    ]
  },
  {
    group: "경제 · 사고 · 글쓰기",
    items: [
      ["경영소프트웨어응용 (2024-2)", "2025년 한국 경제 전망"],
      ["경제학원론 (2024-1)", "자유무역 vs 보호무역"],
      ["영어로 공부하는 아시아 경제의 이슈", "일본 문화·관광 분석"],
      ["읽기와 토론 (2024-1)", "기아와 식량 낭비"],
      ["창의적 사고와 글쓰기 (2024-2)", "사회 이슈 기사 분석"],
      ["아산의 이해와 탐방 (2025-1)", "지역문화 탐방"]
    ]
  }
];

/* 성적: 성적표 화면 기준 (과목별 성적은 공개하지 않음) */
const grades = [
  ["4.33", "/ 4.5", "전체 평점평균", "6개 학기 · 101학점"],
  ["2", "/ 82", "전체 학기 석차", "성적증명 기준"],
  ["4.50", "/ 4.5", "2학년 1·2학기", "두 학기 연속 만점"]
];

const years = [
  {
    y: "2024",
    step: "1학년 · 탐색",
    head: "나의 성장 방식을 먼저 배운 해",
    text: "외국어 학습, 전공 과제, 멘토링과 공모전을 폭넓게 경험하며 계획하고 기록하고 돌아보는 습관을 만들었습니다.",
    extra: ["SMILEAGE 포트폴리오 대상", "디딤돌그룹 리더·튜터", "늘벗 공부방 멘토링", "초등학생 영어캠프 보조요원"]
  },
  {
    y: "2025",
    step: "2학년 · 연결",
    head: "다른 사람의 성장을 돕기 시작한 해",
    text: "조직행동론으로 사람의 행동과 동기를 배우고, SMILEAGE 멘토로 실제 누군가의 성장 과정을 함께 설계했습니다.",
    extra: ["지역아동센터 교육멘토 시작 (3월~)", "SMILEAGE 멘토 시작", "조직행동론 팀 프로젝트", "독서왕 서평쓰기 장려상"]
  },
  {
    y: "2026",
    step: "3학년 · 정의",
    head: "HR이라는 방향을 분명히 한 해",
    text: "멘토링을 이어가며 해외 연수와 팀 프로젝트를 경험했고, 사회적기업의 인사·교육 제도를 직접 설계해 보며 HR 인사담당이라는 목표를 구체화했습니다. 2학기에는 YLC와 미래내일 일경험에서 여러 팀을 거치며 협업 경험을 넓혔습니다.",
    extra: ["원가회계 원가구조 분석 (1학기)", "캐나다 캘거리 연수 (7월)", "조직이론 팀 프로젝트 · 사회적기업 경진대회 본선 진출 (팀장)", "HUMAN LINK 동상", "CLEVER:ON 장려상", "YLC 대외활동 (9월~)", "미래내일 일경험 5조 팀장", "ESG 공모 ‘이음’ 팀장"]
  }
];

/* 대외활동: 2026년 2학기 (사실 확인된 내용만, 결과는 사용자 확인 후 추가) */
const ylc = [
  {
    when: "1차 Y.E.S",
    id: "debate",
    name: "YLC 경제 세미나(Y.E.S) 토론",
    team: "‘ONEWAY조’ · 4인",
    topic: "상속세 부담 완화, 반대측",
    mine: "3번 토론자로 반론을 맡고 자료조사를 담당, 예상 반론과 교차조사 질문을 팀과 함께 준비",
    hr: "논리적 설득"
  },
  {
    when: "2026.9",
    id: "startup",
    name: "청년창업프로젝트",
    team: "전국 9조 ‘소상공인구조대’ · 3인",
    topic: "무인매장 도난 대응 서비스 ‘지킴박스’ 사업계획",
    mine: "아이디어 보고서(개별 아이디어 6개와 결합안 1개), 1차 사업계획서 초안, 멘토 피드백을 반영한 수정안 작성",
    hr: "피드백 반영"
  },
  {
    when: "2026.9 – 10",
    id: "marketing",
    name: "48대 SKILL-UP 마케팅대회",
    team: "10조 · 4인 · 중간에 팀장을 맡음",
    topic: "삼양식품 진단과 ‘BULDAK KIT’ 신제품 제안",
    mine: "삼양식품 기업·브랜드 분석 보고서를 단독으로 작성해 1차 기업진단의 기초 자료로 제공",
    hr: "자료 기반 진단"
  },
  {
    when: "2026.10",
    id: "research",
    name: "RESEARCH COMPETITION 2026",
    team: "10조 · 3인",
    topic: "LS ELECTRIC 기업 분석 리서치 보고서",
    mine: "A파트 기업·경쟁력 조사 담당: 사업 구조, 고객·지역, 사업별 매출, 수주·생산능력, 강점·위험 정리",
    hr: "분담과 통합"
  },
  {
    when: "2026.10 – 11",
    id: "shipbuilding",
    name: "3·4차 Y.E.S 조선산업 분석",
    team: "충청전라지부 ‘항해일지조’ · 6인 · 조장",
    topic: "삼성중공업 중심 조선업 분석 (PEST · 5 Forces · 전략 제언)",
    mine: "6명이 파트를 나눠 조사한 내용을 51쪽 통합 보고서로 묶고, 산업분석 경쟁 PT와 산업박람회 PT로 발표",
    hr: "다인원 협업"
  }
];

const awardDetail: Record<string, string> = {
  "2026 SMILEAGE 외국어 포트폴리오 경진대회 (HUMAN LINK)": "humanlink",
  "2026 CLEVER:ON 교수·학습 우수사례 공모전 수기분야": "cleveron",
  "제2회 SMILEAGE 외국어 포트폴리오 경진대회": "smileage"
};
const courseDetail: Record<string, string> = { "원가회계 (2026-1)": "cost" };

const awards = [
  ["2026", "동상", "2026 SMILEAGE 외국어 포트폴리오 경진대회 (HUMAN LINK)"],
  ["2026", "장려상 · 혁신원장상", "2026 CLEVER:ON 교수·학습 우수사례 공모전 수기분야"],
  ["2025.10.29", "장려상", "도전! 선문 독서왕 서평쓰기 대회"],
  ["2024.11.22", "최우수상", "도전장학 스토리캐스팅"],
  ["2024.11.20", "대상", "제2회 SMILEAGE 외국어 포트폴리오 경진대회"],
  ["2024.11.20", "장려상", "학습법 관련 우수사례 공모전"]
];

/* 장학: 장학금 수혜 증명서 기준 (금액·개인정보 제외) */
const scholarships = [
  ["2024-2 · 2025-1 · 2025-2", "수석 성적장학금", "3학기 연속"],
  ["2026", "인문100년 국가장학금", "신규 선발"],
  ["2025 – 2026", "안양시인재육성재단 장학금", "지자체"],
  ["2026.4 – 현재", "다문화 멘토링 장학", "멘토 활동"],
  ["2025.4 – 12", "대학 청소년교육지원 장학", "교육지원 활동"]
];

function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SectionHead({ label, title, text }: { label: string; title: string; text?: string }) {
  return (
    <header className="secHead reveal">
      <p className="secLabel">{label}</p>
      <div>
        <h2>{title}</h2>
        {text && <p>{text}</p>}
      </div>
    </header>
  );
}

function DetailSheet({ id, onClose }: { id: string | null; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  const item = id ? details[id] : null;
  useEffect(() => {
    const dlg = ref.current;
    if (!dlg) return;
    if (item && !dlg.open) {
      dlg.showModal();
      dlg.scrollTop = 0;
      document.documentElement.classList.add("sheetOpen");
    }
    if (!item && dlg.open) dlg.close();
  }, [item]);
  return (
    <dialog
      ref={ref}
      className="sheet"
      aria-labelledby="sheetTitle"
      onClose={() => {
        document.documentElement.classList.remove("sheetOpen");
        onClose();
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) ref.current?.close();
      }}
    >
      {item && (
        <div className="sheetInner">
          <header className="sheetHead">
            <p className="kind">{item.kicker}</p>
            <h2 id="sheetTitle">{item.title}</h2>
            <button className="sheetClose" onClick={() => ref.current?.close()} aria-label="닫기">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>
          </header>
          <p className="sheetSummary">{item.summary}</p>

          <div className="sheetGrid">
            <section>
              <h3>내가 한 일</h3>
              <ul className="sheetRole">
                {item.role.map((r) => <li key={r}>{r}</li>)}
              </ul>
            </section>
            {item.points.length > 0 && (
              <section>
                <h3>핵심 내용</h3>
                <dl className="sheetPoints">
                  {item.points.map((pt) => (
                    <div key={pt.head}><dt>{pt.head}</dt><dd>{pt.text}</dd></div>
                  ))}
                </dl>
              </section>
            )}
          </div>

          {item.video && (
            <video className="sheetVideo" controls preload="none" playsInline poster={item.video.poster}>
              <source src={item.video.src} type="video/mp4" />
            </video>
          )}

          {item.gallery.length > 0 && (
            <section className="sheetGallery" aria-label="주요 페이지">
              <h3>주요 페이지 <small>눌러서 크게 보기</small></h3>
              <div className="galleryStrip">
                {item.gallery.map((src, i) => (
                  <a key={src} href={src} target="_blank" rel="noreferrer">
                    <img src={src} alt={`${item.title} 주요 페이지 ${i + 1}`} loading="lazy" decoding="async" />
                  </a>
                ))}
              </div>
            </section>
          )}

          {item.files.length > 0 ? (
            <section className="sheetFiles">
              <h3>원본 자료</h3>
              <ul>
                {item.files.map((f) => (
                  <li key={f.href}>
                    <a href={f.href} target="_blank" rel="noreferrer">
                      <span>{f.label}</span>
                      <em>PDF</em>
                      <Arrow />
                    </a>
                  </li>
                ))}
              </ul>
              <p className="sheetNote">원본 그대로 실었습니다. 한글(HWP) 파일은 PDF로 변환했고, 용량이 큰 파일은 화질만 조금 낮췄습니다.</p>
            </section>
          ) : (
            <p className="sheetNote">이 활동의 원본 자료는 한글(HWP) 파일이라 요약만 실었습니다.</p>
          )}
        </div>
      )}
    </dialog>
  );
}

export default function App() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const [open, setOpen] = useState<string | null>(null);
  const More = ({ id, label = "자세히 보기" }: { id: string; label?: string }) => (
    <button type="button" className="more" onClick={() => setOpen(id)}>
      {label} <span className="moreIcon"><Arrow /></span>
    </button>
  );

  return (
    <>
      <div className="grain" aria-hidden="true" />

      <nav className="nav" aria-label="주요 메뉴">
        <a href="#top" className="navName">김희연</a>
        <div className="navLinks">
          <a href="#glance">한눈에</a>
          <a href="#about">소개</a>
          <a href="#skills">역량</a>
          <a href="#project">프로젝트</a>
          <a href="#cases">경험</a>
          <a href="#activities">대외활동</a>
          <a href="#study">학업</a>
          <a href="#growth">성장</a>
          <a href="#awards">수상·장학</a>
        </div>
      </nav>

      <main id="top">
        <section className="hero">
          <div className="heroCopy">
            <p className="tag reveal">선문대학교 경영학과 3학년 · 인사·HRD 지망</p>
            <h1 className="reveal" style={d(1)}>
              배움의 시작을 돕는 <em>HRD 담당자</em>를 꿈꾸는 김희연입니다.
            </h1>
            <p className="lead reveal" style={d(2)}>
              지역아동센터에서 아이들을 가르치고, 후배를 상담하고, 여러 팀을 이끌며 사람이 새 환경에 적응하고
              성장하도록 돕는 일이 제 길이라는 것을 알게 되었습니다. 그 일을 회사에서 이어가고 싶습니다.
            </p>
            <div className="actions reveal" style={d(3)}>
              <a href="#glance" className="btn">
                한눈에 보기 <span className="btnIcon"><Arrow /></span>
              </a>
              <a href="#project" className="btn ghost">대표 프로젝트</a>
            </div>
          </div>

          <aside className="profile reveal" style={d(2)}>
            <div className="profileInner">
              <div className="profileTop">
                <span className="avatar" aria-hidden="true">희연</span>
                <div>
                  <strong>김희연</strong>
                  <small>Kim Huiyeon</small>
                </div>
              </div>
              <dl>
                <div><dt>소속</dt><dd>선문대학교 경영학과 3학년</dd></div>
                <div><dt>희망 직무</dt><dd>인사 · 인재 육성(HRD)</dd></div>
                <div><dt>성격 강점</dt><dd>공감 · 꼼꼼함 · 실행력</dd></div>
                <div><dt>성적</dt><dd><span className="num">4.33 / 4.5</span> · 석차 <span className="num">2 / 82</span></dd></div>
                <div><dt>어학</dt><dd>TOEIC <span className="num">675</span> (2025.11)</dd></div>
              </dl>
              <p className="now">
                <span className="dot" aria-hidden="true" />
                지금은 지역아동센터 교육멘토와 SMILEAGE 장기 멘토로 활동하고 있습니다.
              </p>
            </div>
          </aside>
        </section>

        <section className="metrics" aria-label="숫자로 본 활동">
          {metrics.map(([n, unit, label, sub], i) => (
            <div className="metric reveal" key={label} style={d(i)}>
              <strong className="num">{n}<small>{unit}</small></strong>
              <p>{label}</p>
              <span>{sub}</span>
            </div>
          ))}
        </section>

        {/* 한눈에 보기: 교수님이 1분 안에 읽는 요약 */}
        <section className="glance" id="glance">
          <div className="glanceHead reveal">
            <p className="secLabel">한눈에 보기</p>
            <h2>김희연을 한 장으로</h2>
            <p>성격, 진로를 정한 이유, 대표 경험, 학업, 수상, 목표를 한 줄씩 정리했습니다. 줄마다 자세한 내용으로 이동합니다.</p>
          </div>
          <ol className="glanceList">
            {glance.map((g, i) => (
              <li key={g.label} className="reveal" style={d(i)}>
                <a href={g.href}>
                  <span className="glanceLabel"><span className="num">{String(i + 1).padStart(2, "0")}</span>{g.label}</span>
                  <span className="glanceBody">
                    <strong>{g.head}</strong>
                    <span>{g.text}</span>
                  </span>
                  <span className="glanceGo">{g.go} <span className="moreIcon"><Arrow /></span></span>
                </a>
              </li>
            ))}
          </ol>
        </section>

        {/* 소개: 저는 이런 사람입니다 */}
        <section className="about" id="about">
          <div className="aboutLead reveal">
            <p className="secLabel">저는 이런 사람입니다</p>
            <h2>아이들을 가르치며 찾은 방향</h2>
            <p>
              아이들에게 영어와 수학을 가르치며, 같은 내용도 사람마다 다르게 설명해야 한다는 것을 배웠습니다.
              아이가 달라지는 모습을 보며 느낀 보람을, 이제는 낯선 조직에 들어온 신입사원이 적응하고 성장하도록
              돕는 일로 이어가고 싶습니다.
            </p>
          </div>

          <article className="story reveal">
            <div className="storyHead">
              <p className="kind">하이터치 역량 · 공감과 설득</p>
              <h3>“어차피 못해요”라던 아이가 나눗셈을 풀기까지</h3>
              <small>지역아동센터 교육멘토 · 교외근로 장학생 · 2025.3 ~ 현재</small>
            </div>
            <ol className="storySteps">
              <li><strong>상황</strong><p>곱셈과 나눗셈을 전혀 하지 못하고 학습을 거부하던 경계선 지능 아이의 전담 지도를 맡았습니다.</p></li>
              <li><strong>행동</strong><p>약 1년 동안 경계선 지능의 특성과 지도법을 찾아 공부했습니다. 좋아하는 주제로 대화를 먼저 나누고, 시각 자료와 교구로 아이의 속도에 맞췄습니다. “이 세 문제만 풀어 보자”처럼 작은 목표를 주고, 결과보다 노력한 과정을 칭찬했습니다.</p></li>
              <li><strong>변화</strong><p>1년 뒤 아이는 나눗셈까지 스스로 풀었고, 어려운 문제가 나오면 포기하지 않고 도움을 요청하게 되었습니다.</p></li>
            </ol>
            <p className="storyNote">진도를 끝내는 것보다 이해했는지 확인하는 것이 교육이라는 걸 배웠습니다. 교육받은 내용을 현장에서 쓸 수 있게 돕는 HRD 담당자가 되고 싶은 이유입니다.</p>
          </article>

          <div className="traits">
            {[
              ["다시 확인하는 사람", "이해가 안 되거나 틀린 부분은 그냥 넘기지 않습니다. 시험은 3주 전부터 준비하고, 헷갈린 개념은 관련 문제까지 다시 풉니다. 팀 발표자료도 내용과 글자 크기, 자료의 정확성까지 살핍니다."],
              ["먼저 다가가는 사람", "대학 입학 전에는 내향적이었습니다. 기다리기만 하면 만날 기회도 줄어든다고 생각해, 신입생 OT와 비바체 오케스트라 동아리에서 먼저 인사를 건넸습니다. 지금은 상대가 지나가듯 한 말도 기억하려고 합니다."],
              ["직접 해 보는 사람", "관심이 생기면 먼저 신청해 봅니다. 코딩을 몰랐지만 AI와 함께 PetMart를 만들었고, 기대와 달랐던 프롬프트 강의는 그만두는 대신 다른 방법을 찾아 계속 공부했습니다."]
            ].map(([t, x], i) => (
              <article className="trait reveal" key={t} style={d(i)}>
                <span className="num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{t}</h3>
                <p>{x}</p>
              </article>
            ))}
            <article className="trait weak reveal" style={d(3)}>
              <span className="num">보완 중</span>
              <h3>부탁을 쉽게 거절하지 못합니다</h3>
              <p>
                여러 프로젝트의 팀장을 맡고 있던 2026년, 마케팅 대회 팀장까지 떠맡아 밤늦게까지 일한 적이 있습니다.
                지금은 부탁을 받으면 역할 분담부터 정하고, 상대가 자기 몫을 해 보도록 한 뒤 제 시간이 되는 범위에서 돕습니다.
              </p>
            </article>
          </div>

          <div className="values">
            <article className="value reveal">
              <p className="kind">일할 때 지키는 기준 · 공정성</p>
              <h3>모두를 만족시킬 수는 없어도, 왜 그렇게 정했는지는 납득할 수 있어야 합니다</h3>
              <p>
                팀장을 맡으면 역할을 정하기 전에 팀원 모두에게 희망 업무 1·2순위를 받습니다. 희망이 겹치면 미리 알린
                방식대로 사다리타기로 정합니다. 결정 전에 의견을 들을 기회를 주고, 정한 기준은 끝까지 똑같이 적용합니다.
              </p>
            </article>
            <article className="value reveal" style={d(1)}>
              <p className="kind">실패에서 배운 것 · ESG 공모 ‘이음’ 팀장</p>
              <h3>갈등을 푸는 것과 끝까지 해내는 것은 다른 일이었습니다</h3>
              <p>
                3개 학과 7명이 모인 팀에서 갈등이 생길 때마다 팀원을 따로 만나 이야기를 들었지만, 참여가 줄면서 프로그램을
                끝까지 운영하지 못했습니다. 이후로는 시작할 때 운영 방식과 역할을 먼저 정하고, 팀원이 조사한 자료를 직접
                검토해 피드백합니다. 이후 팀장을 맡은 프로젝트는 이렇게 끝까지 마쳤습니다.
              </p>
            </article>
            <article className="value reveal" style={d(2)}>
              <p className="kind">진로를 정한 과정</p>
              <h3>잘할 수 있는 공부와 오래 하고 싶은 일은 달랐습니다</h3>
              <p>
                1·2학년 때는 회계를 생각했고 성적도 잘 나왔습니다. 하지만 아이들을 가르치고, 후배를 상담하고, 팀을
                조율할 때 더 오래 관심이 갔습니다. 조직행동론과 조직이론을 듣고, 노무사 선배와 현직자의 이야기를 들으며
                인사·HRD로 방향을 정했습니다. 숫자를 정확히 보는 습관은 인사 업무에서도 쓰입니다.
              </p>
            </article>
          </div>

          <div className="roadmap reveal" id="roadmap">
            <div className="roadmapHead">
              <p className="kind">HRD 커리어 로드맵</p>
              <h3>아이들의 변화에서 느낀 보람을, 신입사원의 성장으로</h3>
            </div>
            <ol>
              {[
                ["지금 ~ 2028.2 졸업", "배움의 기반", "HRD 기초와 Excel을 익히고 TOEIC 850점을 목표로 합니다. 경험을 포트폴리오로 정리해 HRD 인턴에 지원합니다.", "현재 TOEIC 675점 (2025.11)"],
                ["졸업 후 첫 직장", "첫 실무 경험", "교육 안내, 일정, 참석자와 설문 관리를 정확하게 해내고 결과보고서로 남깁니다.", "안심하고 맡길 수 있는 동료"],
                ["30대", "적응을 설계", "신입교육과 멘토링을 기획·운영하고, 요구분석부터 효과평가까지 한 과정을 책임집니다.", "새로운 시작을 돕는 사람"],
                ["40대", "성장 지원", "교육 데이터를 분석해 온보딩 체계를 개선하고 후배를 키우는 신입 육성 전문가가 됩니다.", "믿고 의논할 수 있는 전문가"]
              ].map(([when, t, x, tag], i) => (
                <li key={t}>
                  <span className="num">{String(i + 1).padStart(2, "0")}</span>
                  <small>{when}</small>
                  <strong>{t}</strong>
                  <p>{x}</p>
                  <em>{tag}</em>
                </li>
              ))}
            </ol>
            <p className="roadmapFoot">50세에도 익숙한 방식만 고집하지 않고 새로운 교육 방법을 배우며, 일과 가족, 소중한 일상을 함께 지키는 사람이고 싶습니다.</p>
          </div>
        </section>

        {/* 역량: 비대칭 그리드 */}
        <section className="block" id="skills">
          <SectionHead
            label="HR 역량"
            title="인사담당자에게 필요한 역량을 경험으로 쌓았습니다"
            text="각 역량이 HR 업무의 어디에 쓰이는지, 어떤 경험이 근거인지 함께 적었습니다."
          />
          <div className="skills">
            {competencies.map((c, i) => (
              <article key={c.no} className={`skill reveal${i === 0 ? " featured" : ""}`} style={d(i % 3)}>
                <div className="skillTop">
                  <span className="num">{c.no}</span>
                  <em>{c.hr}</em>
                </div>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
                <ul>
                  {c.proof.map((p) => <li key={p}>{p}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* 대표 프로젝트: 사회적기업 경진대회 */}
        <section className="block tinted" id="project">
          <div className="blockInner">
            <SectionHead
              label="대표 프로젝트"
              title="자립준비청년이 일터에서 오래 성장하도록, 인사 제도를 설계했습니다"
              text="조직이론(3학년 2학기) 팀 프로젝트 · 2026 제2회 전국 대학생 사회적기업 우수사례발굴 경진대회 유형 A 본선 진출 · 5인 팀 ‘그린 하우스’ 팀장"
            />

            <div className="project">
              <div className="projectIntro reveal">
                <p className="kind">문제 정의</p>
                <h3>취업률은 올랐지만, 자립은 안정됐을까?</h3>
                <p>
                  자립준비청년 취업자 비율은 2020년 42.2%에서 2023년 52.4%로 올랐지만, 삶의 만족도는 10점 중
                  5.6점이었습니다. 취업 여부만으로는 근속과 직장 적응을 알 수 없다고 보고, 청년을 직접 고용하는
                  사회적기업 브라더스키퍼를 사례로 ‘취업 이후의 성장’을 지원하는 방법을 찾았습니다.
                </p>
<dl className="projectFacts">
                  <div><dt>내 역할</dt><dd><b>팀장</b> · 유사 조직 비교와 핵심 성공요인 조사 (소이프 · 열여덟 어른 벤치마킹)</dd></div>
                  <div><dt>산출물</dt><dd>52쪽 통합 자료조사 보고서 · 30장 경진대회 제출물(본선 진출) · 인포그래픽 · 조직이론 학기말 발표</dd></div>
                </dl>
                <More id="greenhouse" label="보고서와 발표 자료 보기" />
              </div>
              <a className="projectImg reveal" style={d(1)} href="/greenhouse-infographic.jpg" target="_blank" rel="noreferrer">
                <img src="/greenhouse-infographic.jpg" alt="브라더스키퍼 지속가능성 향상 방안 인포그래픽" loading="lazy" decoding="async" />
                <span>인포그래픽 크게 보기</span>
              </a>
            </div>

            <ol className="process reveal" aria-label="진행 과정">
              {[
                ["공모전 분석", "주최 측 의도와 심사기준 6개를 읽고, 2025년 대상작을 분석"],
                ["분담 조사", "5명이 5개 영역을 나눠 조사하고 통합 보고서로 정리"],
                ["과제 선정", "개선과제 5개를 근거·영향·실행 가능성 등 5개 기준으로 평가"],
                ["전략 도출", "핵심 과제를 3대 전략과 12개월 시범운영안으로 구체화"]
              ].map(([t, x], i) => (
                <li key={t}>
                  <span className="num">{String(i + 1).padStart(2, "0")}</span>
                  <strong>{t}</strong>
                  <p>{x}</p>
                </li>
              ))}
            </ol>

            <div className="myPart reveal">
              <p className="kind">내가 맡은 조사가 전략이 되기까지</p>
              <div className="myPartGrid">
                <div>
                  <h3>비슷한 조직은 청년을 어떻게 키우는가</h3>
                  <p>
                    자립준비청년을 직원으로 고용하는 브라더스키퍼, 디자이너로 참여시키는 소이프, 캠페이너로 참여시키는
                    ‘열여덟 어른’을 비교했습니다. 세 조직 모두 청년을 도움만 받는 사람으로 보지 않는다는 공통점과,
                    조직마다 키워 주는 역량이 다르다는 차이를 정리했습니다.
                  </p>
                </div>
                <ul>
                  <li><strong>교육 결과를 눈에 보이게 남기기</strong><span>소이프 → 전략 1 경력기록서</span></li>
                  <li><strong>청년 의견을 정기적으로 듣는 절차</strong><span>열여덟 어른 → 전략 3 Youth Voice</span></li>
                  <li><strong>장기 성과를 외부에 공개하기</strong><span>열여덟 어른 → 근속·경력 이동 지표 제안</span></li>
                </ul>
              </div>
            </div>

            <ol className="strategies">
              {[
                ["Gardener Growth Path", "청년 경력성장 체계", "L1 기초·현장 보조부터 L4 전문직무 확대까지 직무 단계를 나누고, 같은 평가표로 관리자와 본인이 함께 기록합니다. 분기마다 피드백하고, 본인이 동의하면 경력기록서를 발급해 이직·승진 증빙으로 씁니다.", "직무 체계 · 역량 평가 · 경력 개발"],
                ["Impact-Link Contract", "계약별 성과관리", "서비스 이행률·재계약·공헌이익 같은 계약 성과와 청년의 역량 변화를 한 화면에서 따로 기록하고, 분기마다 함께 검토합니다. 고객사에는 개인 정보 없이 집계만 공유합니다.", "성과 관리 · 개인정보 보호"],
                ["Youth Voice", "청년 참여 운영체계", "익명 설문과 정기 간담회로 의견을 받고, 제안마다 검토자를 정해 반영 여부와 이유를 기록한 뒤 결과를 공유합니다. 안전 관련 의견은 비공개로 분류합니다.", "구성원 의견 수렴 · 조직문화"]
              ].map(([en, ko, text, hr], i) => (
                <li key={en} className="strategy reveal" style={d(i)}>
                  <span className="num">전략 {i + 1}</span>
                  <h3>{ko}</h3>
                  <small>{en}</small>
                  <p>{text}</p>
                  <em>{hr}</em>
                </li>
              ))}
            </ol>

            <p className="projectNote reveal">
              확대·수정·중단 판단 기준에 ‘청년의 업무부담·안전·자율 동의’를 넣어, 성과가 좋아도 구성원 보호가
              훼손되면 멈추도록 설계했습니다. 사람을 먼저 지키는 제도가 오래 간다고 생각했기 때문입니다.
            </p>
          </div>
        </section>

        {/* 대표 성과: 단일 스포트라이트 */}
        <section className="block" aria-label="대표 성과">
          <article className="spotlight reveal">
            <div className="leadBadge">
              <span>SMILEAGE 경진대회</span>
              <strong>대상</strong>
            </div>
            <div>
              <p className="kind">대표 성과 · 2024</p>
              <h3>배운 것을 기록하자, 성장이 보이기 시작했습니다.</h3>
              <p>
                1년간의 외국어 학습을 목표·과정·성과·성찰로 정리한 포트폴리오로 제2회 SMILEAGE 외국어 포트폴리오
                경진대회에서 대상을 받았습니다. 이 경험이 이후 후배들의 포트폴리오를 돕는 멘토 활동으로
                이어졌습니다.
              </p>
              <ul className="chips">
                <li>목표 설정</li>
                <li>과정 기록</li>
                <li>성찰</li>
                <li>성과 정리</li>
              </ul>
              <More id="smileage" label="포트폴리오 보기" />
            </div>
          </article>
        </section>

        {/* 핵심 경험: 케이스 행 */}
        <section className="block tinted" id="cases">
          <div className="blockInner">
            <SectionHead
              label="핵심 경험"
              title="상황, 행동, 결과로 정리한 다섯 가지 경험"
              text="경험마다 마지막 줄에 HR 업무와 어떻게 이어지는지 적었습니다."
            />
            <div className="cases">
              {cases.map((c) => (
                <article className="case reveal" key={c.title}>
                  <div className="caseMeta">
                    {c.photo && <img src={c.photo} alt={c.photoAlt} loading="lazy" decoding="async" />}
                    <span className="num">{c.year}</span>
                    <h3>{c.title}</h3>
                    <p>{c.tag}</p>
                    <small>{c.period}</small>
                  </div>
                  <div className="caseMain">
                    <dl className="caseBody">
                      <div><dt>상황</dt><dd>{c.situation}</dd></div>
                      <div><dt>역할·행동</dt><dd>{c.action}</dd></div>
                      <div><dt>결과</dt><dd className="result">{c.result}</dd></div>
                    </dl>
                    <p className="caseLink">
                      <span>HR 연결</span>
                      {c.link}
                    </p>
                    {c.detail && <More id={c.detail} label={c.detail === "humanlink" ? "포트폴리오 보기" : "결과보고서 보기"} />}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 대외활동: 대표 1건 + YLC 목록 */}
        <section className="block" id="activities">
          <SectionHead
            label="대외활동"
            title="3학년 2학기, 여러 팀에 들어가 함께 일하는 법을 익혔습니다"
            text="고용노동부 미래내일 일경험에서는 팀장을, YLC에서는 팀마다 다른 역할을 맡았습니다."
          />

          <article className="program reveal">
            <div className="programText">
              <p className="kind">고용노동부 「미래내일 일경험」 프로젝트형 · 참여기업 아이디뷰티</p>
              <h3>헤어 매장 손님의 이야기가 다음 방문까지 이어지도록, CRM을 기획했습니다</h3>
              <p>
                4주 동안 5조 ‘뷰티 인사이트’의 팀장으로, 헤어뷰티 매장에 맞는 고객관리(CRM) 앱과 데이터 관리 전략을
                기획했습니다. 국내외 CRM 서비스 9개를 비교하고 매장 점장을 인터뷰해, 사전·사후 카르테와 헤어 카드,
                사후 상담·케어 흐름을 제안했습니다.
              </p>
              <dl className="projectFacts">
                <div><dt>내 역할</dt><dd><b>팀장</b> · 팀원별 조사 자료 통합, 현장 인터뷰와 멘토 소통, 고객 데이터 수집·관리 방안 조사</dd></div>
                <div><dt>직접 만든 것</dt><dd>직원용 CRM 시연 웹앱 · 재방문 아이디어 ‘HAIR FLASH’ (빈 예약 시간을 맞는 고객에게 안내)</dd></div>
                <div><dt>산출물</dt><dd>최종 결과보고서(2026.11) · 발표 자료 · 보도자료 · 고객 여정 인포그래픽</dd></div>
              </dl>
              <p className="caseLink">
                <span>HR 연결</span>
                팀원마다 다르던 의견을 ‘누가 기록하나, 언제 확인하나, 어떤 업무에 쓰나’라는 기준으로 모았습니다.
                현장 직원이 실제로 쓸 수 있는 제도를 만드는 일은 인사 제도 설계와 같습니다.
              </p>
              <More id="work" label="PPT와 보고서 보기" />
            </div>
            <a className="programImg" href="/idbeauty-story.jpg" target="_blank" rel="noreferrer">
              <img src="/idbeauty-story.jpg" alt="첫 방문 상담부터 다음 방문까지 고객 기록이 이어지는 과정을 7단계로 정리한 인포그래픽 (가상 인물, AI 생성 이미지)" loading="lazy" decoding="async" />
              <span>고객 여정 인포그래픽 보기</span>
            </a>
            <figure className="programVideo">
              <video controls preload="none" playsInline poster="/idbeauty-demo-poster.jpg">
                <source src="/idbeauty-demo.mp4" type="video/mp4" />
              </video>
              <figcaption>
                <strong>최종 시연 영상 · 42초</strong>
                <span>사전 카르테 작성부터 상담, 시술, 사후 관리까지 손님이 겪는 흐름을 영상으로 보여 줍니다. 제안 서비스를 쓰는 모습을 가상 시나리오로 연출했습니다.</span>
              </figcaption>
            </figure>
          </article>

          <div className="ylc">
            <div className="ylcHead reveal">
              <h3>YLC · Young Leader Club</h3>
              <p>2026년 9월부터 활동하고 있습니다. 토론, 공모전, 산업 분석마다 팀이 새로 꾸려졌고, 맡은 역할도 매번 달랐습니다.</p>
            </div>
            <ol className="ylcList">
              {ylc.map((a, i) => (
                <li className="ylcRow reveal" key={a.name} style={d(i % 3)}>
                  <span className="num ylcWhen">{a.when}</span>
                  <div className="ylcName">
                    <strong>{a.name}</strong>
                    <small>{a.team}</small>
                  </div>
                  <div className="ylcWork">
                    <p className="ylcTopic">{a.topic}</p>
                    <p>{a.mine}</p>
                    <More id={a.id} />
                  </div>
                  <em>{a.hr}</em>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 학업: 그룹 목록 */}
        <section className="block" id="study">
          <SectionHead
            label="학업"
            title="수업에서 사람과 조직을 보는 눈을 길렀습니다"
            text="성적은 전체 평점과 석차만 적고, 수업마다 수행한 과제를 함께 정리했습니다."
          />
          <dl className="grades">
            {grades.map(([n, of, label, sub], i) => (
              <div className="grade reveal" key={label} style={d(i)}>
                <dt>{label}</dt>
                <dd><strong className="num">{n}</strong><span className="num">{of}</span></dd>
                <dd className="gradeSub">{sub}</dd>
              </div>
            ))}
          </dl>
          <div className="study">
            {courses.map((g, gi) => (
              <div className="courseGroup reveal" key={g.group} style={d(gi)}>
                <h3>{g.group}</h3>
                <ul>
                  {g.items.map(([course, work]) => (
                    <li key={course}>
                      <strong>{course}</strong>
                      <span>{work}</span>
                      {courseDetail[course] && <More id={courseDetail[course]} label="보고서 보기" />}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 성장 흐름: 연도 행 */}
        <section className="block" id="growth">
          <SectionHead label="성장 흐름" title="넓게 경험하고, 사람을 이해하고, 진로로 정의했습니다" />
          <ol className="years">
            {years.map((y, i) => (
              <li className="yearRow reveal" key={y.y} style={d(i)}>
                <div className="yearNum">
                  <strong>{y.y}</strong>
                  <span>{y.step}</span>
                </div>
                <div className="yearText">
                  <h3>{y.head}</h3>
                  <p>{y.text}</p>
                </div>
                <ul>
                  {y.extra.map((e) => <li key={e}>{e}</li>)}
                </ul>
              </li>
            ))}
          </ol>
        </section>

        {/* 수상 */}
        <section className="awards" id="awards">
          <div className="awardsHead reveal">
            <p className="secLabel">수상 · 장학</p>
            <h2>결과로 남은 여섯 번의 수상</h2>
            <p>모두 ‘기록하고 돌아보는 습관’에서 출발한 결과입니다. 성적으로는 수석 장학금을 세 학기 연속 받았고, 멘토링과 청소년 교육지원도 장학 활동으로 이어 왔습니다.</p>
          </div>
          <div className="awardCols">
            <ul className="awardList">
              {awards.map(([date, result, title], i) => (
                <li key={title} className="reveal" style={d(i % 3)}>
                  <time className="num">{date}</time>
                  {awardDetail[title] ? (
                    <button type="button" className="awardLink" onClick={() => setOpen(awardDetail[title])}>
                      {title} <span className="moreIcon"><Arrow /></span>
                    </button>
                  ) : (
                    <p>{title}</p>
                  )}
                  <strong className={result === "대상" ? "top" : ""}>{result}</strong>
                </li>
              ))}
            </ul>
            <h3 className="awardSub reveal">장학</h3>
            <ul className="awardList scholar">
              {scholarships.map(([when, name, note], i) => (
                <li key={name} className="reveal" style={d(i % 3)}>
                  <time className="num">{when}</time>
                  <p>{name}</p>
                  <strong>{note}</strong>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 마무리 */}
        <section className="closing">
          <div className="closingInner">
            <p className="closingLabel reveal">제가 되고 싶은 인사담당자</p>
            <h2 className="reveal" style={d(1)}>듣고, 성장을 설계하고, 사람을 잇는 사람.</h2>
            <ol className="pledges">
              {[
                ["듣기", "구성원의 이야기를 먼저 듣고 판단합니다."],
                ["설계", "한 사람의 성장 과정을 구체적인 계획으로 만듭니다."],
                ["연결", "사람과 경험, 사람과 조직을 잇습니다."]
              ].map(([t, s], i) => (
                <li key={t} className="reveal" style={d(i + 2)}>
                  <strong>{t}</strong>
                  <p>{s}</p>
                </li>
              ))}
            </ol>
            <a href="#top" className="btn light reveal" style={d(5)}>
              처음으로 <span className="btnIcon up"><Arrow /></span>
            </a>
          </div>
        </section>
      </main>

      <DetailSheet id={open} onClose={() => setOpen(null)} />

      <footer className="footer">
        <span>김희연 · 선문대학교 경영학과 · HR 인사담당 지망</span>
        <span className="num">© 2026</span>
      </footer>
    </>
  );
}
