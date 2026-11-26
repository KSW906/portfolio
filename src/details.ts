/* 항목별 상세 보기 데이터
   - 이미지와 PDF는 public/docs에 있습니다.
   - 사용자 요청으로 원본 자료를 페이지 삭제 없이 그대로 싣습니다 (용량만 줄임). */

export type DocFile = { label: string; href: string; note?: string };
export type Detail = {
  kicker: string;
  title: string;
  summary: string;
  role: string[];
  points: { head: string; text: string }[];
  gallery: string[];
  files: DocFile[];
  video?: { src: string; poster: string };
};

const doc = (id: string) => `/docs/${id}.pdf`;
const pages = (id: string, nums: number[]) => nums.map((n) => `/docs/${id}-${String(n).padStart(2, "0")}.jpg`);

export const details: Record<string, Detail> = {
  greenhouse: {
    kicker: "조직이론 팀 프로젝트 · 사회적기업 경진대회 본선 진출",
    title: "브라더스키퍼 지속가능성 향상 방안",
    summary:
      "자립준비청년을 직접 고용하는 사회적기업 브라더스키퍼를 사례로, 청년이 일터에서 오래 성장하도록 돕는 인사·교육 제도를 설계했습니다. 5명이 5개 영역을 나눠 조사하고 52쪽 통합 보고서로 묶은 뒤, 30장짜리 경진대회 제출물로 정리했습니다.",
    role: [
      "팀장: 일정과 분담을 정하고 조사 결과를 하나의 전략으로 모음",
      "유사 조직 비교 담당: 소이프, 열여덟 어른과 브라더스키퍼를 비교해 핵심 성공요인 정리"
    ],
    points: [
      { head: "문제 정의", text: "취업률은 42.2%에서 52.4%로 올랐지만 삶의 만족도는 5.6점. 취업 이후의 성장을 보기로 했습니다." },
      { head: "3대 전략", text: "청년 경력성장 체계(Gardener Growth Path), 계약별 성과관리(Impact-Link Contract), 청년 참여 운영체계(Youth Voice)" },
      { head: "결과", text: "2026 제2회 전국 대학생 사회적기업 우수사례발굴 경진대회 유형 A 본선 진출" }
    ],
    gallery: pages("greenhouse-submit", [2, 6, 10, 14, 18, 22]),
    files: [
      { label: "경진대회 제출물", href: doc("greenhouse-submit") },
      { label: "통합 자료조사 보고서", href: doc("greenhouse-report") },
      { label: "조직이론 학기말 발표", href: doc("greenhouse-talk") }
    ]
  },

  work: {
    kicker: "고용노동부 미래내일 일경험 프로젝트형 · 참여기업 아이디뷰티",
    title: "헤어뷰티 매장 맞춤형 CRM 앱 서비스 기획",
    summary:
      "4주 동안 5조 ‘뷰티 인사이트’의 팀장으로, 헤어 매장이 손님의 요청과 시술 기록을 다음 방문까지 이어 갈 수 있는 고객관리 서비스를 기획했습니다. 매주 한 번 팀 회의를 하며 조사, 인터뷰, 아이디어, 시연까지 진행했습니다.",
    role: [
      "팀장: 팀원별 조사 자료를 통합하고 멘토와 소통",
      "고객 데이터를 어떻게 모으고 관리할지 조사",
      "매장 점장 현장 인터뷰 진행 (2026.10.15)",
      "직원용 CRM 시연 웹앱 제작, 재방문 아이디어 ‘HAIR FLASH’ 제안"
    ],
    points: [
      { head: "조사", text: "국내외 CRM 서비스 9개를 비교해 매장에 필요한 기능을 골랐습니다." },
      { head: "제안", text: "사전·사후 카르테, 헤어 카드, 사후 상담·케어로 이어지는 고객 여정을 설계했습니다." },
      { head: "배운 점", text: "‘평소 선호’와 ‘이번 방문 요청’을 나눠 기록해야 현장에서 쓸 수 있다는 것, 그리고 팀 의견을 ‘누가 남기나, 언제 확인하나, 어떤 업무에 쓰나’로 모으는 법을 배웠습니다." }
    ],
    gallery: pages("work-ppt", [2, 5, 8, 11, 14, 17]),
    video: { src: "/idbeauty-demo.mp4", poster: "/idbeauty-demo-poster.jpg" },
    files: [
      { label: "최종 발표 PPT", href: doc("work-ppt") },
      { label: "최종 결과보고서", href: doc("work-report") },
      { label: "CRM 사례 조사", href: doc("work-crm") },
      { label: "재방문 아이디어 보고서", href: doc("work-ideas") },
      { label: "현장 인터뷰 정리", href: doc("work-interview") },
      { label: "고객 이야기", href: doc("work-story") }
    ]
  },

  debate: {
    kicker: "YLC 경제 세미나(Y.E.S) · ONEWAY조 · 4인",
    title: "상속세 부담 완화, 타당한가? (반대측)",
    summary:
      "‘경제적 효율성과 형평성을 고려할 때 상속세 부담 완화는 타당한가’라는 논제에서 반대측을 맡았습니다. 팀은 입론, 예상 반론, 교차조사 질문 흐름, 마무리 발언을 함께 준비했습니다.",
    role: ["3번 토론자: 상대 주장에 대한 반론 담당", "자료조사 담당"],
    points: [
      { head: "반론 1", text: "세금이 줄어 투자 여력이 생기는 것과 실제로 투자하는 것은 다르다는 점을 짚었습니다." },
      { head: "반론 2", text: "GDP 대비 0.7%라는 숫자는 세수의 크기일 뿐, 경제에 주는 비용으로 볼 수 없다고 반박했습니다." },
      { head: "대안", text: "세율을 낮추기보다 연부연납·물납 제도를 고쳐 납부 부담을 줄이자고 제안했습니다." }
    ],
    gallery: [],
    files: []
  },

  startup: {
    kicker: "YLC 청년창업프로젝트 · 전국 9조 ‘소상공인구조대’ · 3인",
    title: "무인매장 도난 대응 서비스 ‘지킴박스’",
    summary:
      "무인매장 점주가 도난을 확인하는 데 드는 시간을 줄이는 서비스입니다. 결제 기록(POS)과 CCTV를 연결해 결제 전후 영상을 자동으로 뽑고, 결제 수량과 실제로 가져간 물건을 대조한 ‘1초 증거 리포트’를 보여 줍니다.",
    role: [
      "아이디어 보고서 작성: 개별 아이디어 6개와 결합안 1개",
      "1차 사업계획서 초안 작성 (2026.9.7)",
      "멘토 요청(원가 구조, B2G 스마트상점, 셀프 온보딩)을 반영한 수정안 작성"
    ],
    points: [
      { head: "범위 조정", text: "‘AI가 절도를 판정한다’ 대신 ‘점주의 확인 시간을 줄인다’로 목표를 현실적으로 좁혔습니다." },
      { head: "피드백 반영", text: "멘토가 짚은 원가, 판로, 도입 방식을 차별점과 함께 다시 정리했습니다." }
    ],
    gallery: pages("startup-ideas", [2, 3, 4]),
    files: [
      { label: "아이디어 보고서 (직접 작성)", href: doc("startup-ideas") },
      { label: "1차 사업계획서", href: doc("startup-plan") },
      { label: "멘토 피드백 반영 수정안", href: doc("startup-revise") }
    ]
  },

  marketing: {
    kicker: "YLC 48대 SKILL-UP 마케팅대회 · 10조 · 4인",
    title: "삼양식품 진단과 ‘BULDAK KIT: TREND DROP’ 제안",
    summary:
      "1차에서는 삼양식품과 불닭 브랜드를 진단하고, 2차에서는 SNS에서 유행하는 불닭 레시피를 재료 준비 없이 한 상자로 만드는 신제품 ‘BULDAK KIT’를 제안했습니다. 첫 제품(DROP 01 콘치즈), 가격 가정, 시제품 평가 기준, 광고 시안, 4주 운영 계획까지 담았습니다.",
    role: [
      "「삼양식품 기업 및 브랜드 분석 보고서」 단독 작성 (자료 기준 2026.9.28)",
      "기업 개요, 실적 추이(2021~2025), 해외 사업, 브랜드·마케팅 정리"
    ],
    points: [
      { head: "자료 정리", text: "삼양식품과 지주회사(삼양라운드스퀘어)를 구분해 실적과 사업 자료를 정리했습니다." },
      { head: "팀 제안", text: "100점 평가표에서 70점 이상인 레시피만 시제품으로 만드는 기준을 세웠습니다." }
    ],
    gallery: [...pages("mkt-brand", [2, 5]), ...pages("mkt-deck", [2, 5, 8, 11])],
    files: [
      { label: "기업·브랜드 분석 보고서 (직접 작성)", href: doc("mkt-brand") },
      { label: "1차 기업진단", href: doc("mkt-diag") },
      { label: "2차 발표 자료", href: doc("mkt-deck") },
      { label: "2차 제안 보고서", href: doc("mkt-report") }
    ]
  },

  research: {
    kicker: "YLC RESEARCH COMPETITION 2026 · 10조 · 3인",
    title: "LS ELECTRIC: 전력기기 슈퍼사이클, 주가가 먼저 달렸는가?",
    summary:
      "AI 데이터센터와 북미 전력망 수요가 LS ELECTRIC의 이익으로 이어지는 경로를 따라가고, PER·PBR 상대가치로 주가를 평가한 리서치 보고서입니다 (주가 기준일 2026.10.30).",
    role: [
      "A파트 기업·경쟁력 조사 담당 (2026.10.24)",
      "사업과 제품, 고객과 지역, 사업별 매출, 수주와 생산능력, 강점·약점·위험 정리"
    ],
    points: [
      { head: "분담과 통합", text: "기업·경쟁력 파트를 맡아 조사한 내용을 팀 공유 자료로 정리해 통합 보고서에 넘겼습니다." }
    ],
    gallery: [...pages("ls-a", [2, 6, 10]), ...pages("ls-team", [2, 7, 12])],
    files: [
      { label: "A파트 기업·경쟁력 조사 (직접 작성)", href: doc("ls-a") },
      { label: "팀 리서치 보고서", href: doc("ls-team") }
    ]
  },

  shipbuilding: {
    kicker: "YLC 3·4차 Y.E.S · 충청전라지부 ‘항해일지조’ · 6인",
    title: "조선업 호황은 삼성중공업의 경쟁력으로 남을까?",
    summary:
      "삼성중공업을 중심으로 조선업을 분석했습니다. 6명이 산업 현황, 기업·경쟁사, PEST, 5 Forces 등을 나눠 조사해 51쪽 통합 보고서로 묶었고, 3차 산업분석 경쟁 PT와 4차 산업박람회 PT로 발표했습니다.",
    role: ["팀원으로 파트 조사와 통합 보고서, 두 번의 발표 준비에 참여"],
    points: [
      { head: "핵심 질문", text: "지금의 호황이 지속적인 수익성 개선으로 이어지는가를 시장, 외부환경, 경쟁구조, 수익성 순서로 따졌습니다." },
      { head: "4차 발표", text: "현황과 PEST, 5 Forces에 전략 제언과 실제 사례를 더해 결론과 향후 전망을 냈습니다." }
    ],
    gallery: pages("yes-pt4", [2, 9, 16, 23, 30, 37]),
    files: [
      { label: "4차 산업박람회 PT", href: doc("yes-pt4") },
      { label: "3차 산업분석 PT", href: doc("yes-pt3") },
      { label: "통합 보고서", href: doc("yes-report") }
    ]
  },

  humanlink: {
    kicker: "2026 SMILEAGE 외국어 포트폴리오 경진대회 · 동상",
    title: "HUMAN LINK: 언어로 사람을 이해하고, HR로 조직을 잇다",
    summary:
      "1학년 때 대상을 받은 뒤 3년 동안 쌓은 외국어 경험을 ME, YOU, WORLD, WORK, NEXT의 다섯 단계로 다시 엮었습니다. 나를 증명하던 언어가 후배를 돕고, 세계와 소통하고, 인사 진로로 이어지는 과정을 담았습니다.",
    role: ["기획, 구성, 디자인, 글 모두 직접 작성"],
    points: [
      { head: "구성", text: "외국어 활동과 대상 수상 → 후배 멘토링 → 캐나다 연수 → 현직자 상담과 진로 구체화 → 사람의 성장을 잇는 HR" },
      { head: "LINK 역량", text: "경험을 L·I·N·K 네 가지 역량으로 묶어 인사 직무와 연결했습니다." }
    ],
    gallery: pages("humanlink", [3, 5, 8, 14, 17, 19]),
    files: [
      { label: "HUMAN LINK 포트폴리오", href: doc("humanlink") },
      { label: "전시 판넬", href: doc("humanlink-panel") }
    ]
  },

  smileage: {
    kicker: "제2회 SMILEAGE 외국어 포트폴리오 경진대회 · 대상 (2024)",
    title: "1학년 외국어 포트폴리오",
    summary:
      "1학년 동안 한 외국어 활동을 목표, 과정, 성과, 성찰로 정리했습니다. 스스로를 STAR(꾸준함, 끈기, 야심, 능동성) 네 가지 역량으로 진단하고 다음 계획을 세웠습니다.",
    role: ["기획, 구성, 글 모두 직접 작성"],
    points: [
      { head: "담은 활동", text: "SET-UP 프로그램, 디딤돌 그룹, 화상영어, 여행 중국어, HSK 5급 공부, 초등 영어캠프, 영어 과외" },
      { head: "성찰", text: "역량마다 점수를 매기고 느낀 점과 앞으로의 계획을 적었습니다." }
    ],
    gallery: pages("smileage2024full", [14, 21, 31, 45, 52, 56]),
    files: [
      { label: "포트폴리오 전체본", href: doc("smileage2024-full") },
      { label: "포트폴리오 요약본", href: doc("smileage2024") }
    ]
  },

  cleveron: {
    kicker: "2026 CLEVER:ON 교수·학습 우수사례 공모전 · 수기분야 장려상(혁신원장상)",
    title: "코드 한 줄 모르던 경영학도, 공부하는 방법을 코딩하다",
    summary:
      "SW 비교과 과정에서 AI를 활용해 반려동물 용품 쇼핑몰 ‘PetMart’를 만들며 익힌 문제해결 방법을 전공 공부에 적용한 수기입니다. 기존의 계획·정리·반복 복습에 ‘문제 나누기, 구체적으로 질문하기, 다른 답과 비교하기, 오답 확인’을 더했습니다.",
    role: ["직접 작성 (수기 20쪽, 성과페스타 전시 자료)"],
    points: [
      { head: "PetMart", text: "상품 탐색, 찜, 장바구니, 주문 화면을 만들고, 장바구니와 결제 화면의 금액이 맞는지 비교하며 기능 간 연결을 점검했습니다." },
      { head: "전공 적용", text: "글로벌경영학에서는 직접 쓴 기사 요약과 AI 답변을 비교했고, 조직이론에서는 AI 예상문제를 풀며 개념 차이를 확인했습니다." },
      { head: "나만의 학습법", text: "THINK → ASK → CHECK → REBUILD. 먼저 생각하고, 질문하고, 확인하고, 다시 고칩니다." }
    ],
    gallery: [...pages("cleveron", [2, 7, 10, 13, 16]), "/docs/cleveron-poster-01.jpg"],
    files: [
      { label: "수기", href: doc("cleveron") },
      { label: "성과페스타 전시 자료", href: doc("cleveron-poster") }
    ]
  },

  cost: {
    kicker: "원가회계 (2026-1) · 2인 팀",
    title: "무인 포토부스 브랜드의 원가구조 분석과 수익성 향상 전략",
    summary: "‘인생네컷’ 형태의 무인 포토부스를 사례로 원가 자료를 표로 정리하고 단위당 원가를 계산해, 수익성을 높일 방법을 찾았습니다.",
    role: ["원가 자료 정리와 단위당 원가 계산"],
    points: [],
    gallery: pages("cost", [2, 3]),
    files: [{ label: "원가회계 보고서", href: doc("cost") }]
  }
};
