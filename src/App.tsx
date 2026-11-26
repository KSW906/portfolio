import { useEffect, type CSSProperties } from "react";

const d = (i: number) => ({ "--i": i } as CSSProperties);

const metrics = [
  ["4", "회", "교내 공모전 수상", "대상 · 최우수상 포함"],
  ["7", "개월", "중학생 영어 멘토링", "늘벗 공부방"],
  ["10", "주", "스터디 리더·튜터", "디딤돌그룹 우수팀"],
  ["3", "주", "캐나다 캘거리 연수", "FLY TRACK 1"]
];

/* HR 담당자 역량과 근거 경험 */
const competencies = [
  {
    no: "01",
    title: "경청과 코칭",
    hr: "구성원 면담 · 온보딩",
    text: "멘티의 수준과 목표를 먼저 듣고, 그에 맞춰 지도 방식을 바꿔 왔습니다.",
    proof: ["늘벗 공부방 7개월 멘토링", "SMILEAGE 장기 멘토링", "Youth Voice 의견수렴 절차 제안"]
  },
  {
    no: "02",
    title: "학습·성장 설계",
    hr: "교육 프로그램 기획 (HRD)",
    text: "10주 학습계획과 자료를 직접 만들고, 팀원이 막히는 지점에 맞춰 조정했습니다.",
    proof: ["디딤돌그룹 리더·튜터 · 우수팀", "그린 하우스 팀장 · 경력성장 체계 설계"]
  },
  {
    no: "03",
    title: "조직과 사람에 대한 이해",
    hr: "조직문화 · 동기부여",
    text: "조직행동론에서 배운 시각으로, 사회적기업의 조직운영과 인사·교육 현황을 직접 분석했습니다.",
    proof: ["조직행동론 팀 프로젝트", "브라더스키퍼 조직문화 분석"]
  },
  {
    no: "04",
    title: "기록과 문서화",
    hr: "인사 기록 · 성과 정리",
    text: "1년간의 학습을 목표·과정·성과·성찰로 정리해 대상을 받았습니다.",
    proof: ["SMILEAGE 포트폴리오 대상", "HUMAN LINK 1차 합격"]
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
    text: "AI를 개발 보조 도구로 써서 웹 서비스를 만들고, 원가 자료를 표로 정리해 단위당 원가를 계산했습니다.",
    proof: ["PetMart 웹 서비스", "원가회계 원가구조 분석"]
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
    result: "대상 수상 경험을 후배의 성장 지원으로 확장",
    link: "경력 개발 면담과 성장 계획 수립에 그대로 이어지는 경험입니다."
  },
  {
    year: "2026",
    tag: "스토리텔링 · 직무 연결",
    title: "HUMAN LINK 외국어 포트폴리오",
    period: "2026",
    situation: "3년 동안의 외국어 경험이 시기별로 흩어져 있어 하나의 방향으로 보이지 않았습니다.",
    action: "나 → 너 → 세계 → 일 → 다음의 흐름으로 경험을 다시 엮어, HRD 진로와 하나의 이야기로 연결했습니다.",
    result: "1차 합격",
    link: "경험을 직무 역량의 언어로 바꾸는 일은 채용과 인재 평가의 핵심입니다."
  },
  {
    year: "2026",
    tag: "글로벌 소통 · 적응",
    title: "FLY TRACK 1 캐나다 캘거리 연수",
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
      ["조직행동론", "트럼프 관세정책 팀 프로젝트"],
      ["사회적기업 경진대회 (2026)", "브라더스키퍼 조직운영·인사·교육 현황 분석"],
      ["생활예절과 문화", "관계와 존중 에세이"]
    ]
  },
  {
    group: "경영 · 경제",
    items: [
      ["원가회계 (2026-1)", "무인 포토부스 원가구조 분석과 수익성 향상 전략 · 2인 팀"],
      ["경영소프트웨어", "2025년 한국 경제 전망"],
      ["경제학원론", "자유무역 vs 보호무역"],
      ["영어로 공부하는 아시아 경제의 이슈", "일본 문화·관광 분석"]
    ]
  },
  {
    group: "사고 · 글쓰기",
    items: [
      ["읽기와 토론", "기아와 식량 낭비"],
      ["창의적 사고와 글쓰기", "사회 이슈 기사 분석"],
      ["아산의 이해와 탐방", "지역문화 탐방"]
    ]
  }
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
    extra: ["SMILEAGE 멘토 시작", "조직행동론 팀 프로젝트", "독서왕 서평쓰기 장려상"]
  },
  {
    y: "2026",
    step: "3학년 · 정의",
    head: "HR이라는 방향을 분명히 한 해",
    text: "멘토링을 이어가며 해외 연수와 팀 프로젝트를 경험했고, 사회적기업의 인사·교육 제도를 직접 설계해 보며 HR 인사담당이라는 목표를 구체화했습니다.",
    extra: ["원가회계 원가구조 분석 (1학기)", "캐나다 캘거리 연수 (7월)", "사회적기업 경진대회 ‘그린 하우스’ 팀장", "HUMAN LINK 1차 합격", "ESG 공모 ‘이음’ 팀장", "PetMart 웹 서비스"]
  }
];

const awards = [
  ["2024.11.20", "대상", "제2회 SMILEAGE 외국어 포트폴리오 경진대회"],
  ["2024.11.22", "최우수상", "도전장학 스토리캐스팅"],
  ["2024.11.20", "장려상", "학습법 관련 우수사례 공모전"],
  ["2025.10.29", "장려상", "도전! 선문 독서왕 서평쓰기 대회"]
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

  return (
    <>
      <div className="grain" aria-hidden="true" />

      <nav className="nav" aria-label="주요 메뉴">
        <a href="#top" className="navName">김희연</a>
        <div className="navLinks">
          <a href="#skills">역량</a>
          <a href="#project">프로젝트</a>
          <a href="#cases">경험</a>
          <a href="#study">학업</a>
          <a href="#growth">성장</a>
          <a href="#awards">수상</a>
        </div>
      </nav>

      <main id="top">
        <section className="hero">
          <div className="heroCopy">
            <p className="tag reveal">선문대학교 경영학과 · HR 인사담당 지망</p>
            <h1 className="reveal" style={d(1)}>
              사람이 성장하는 조직을 만드는 <em>인사담당자</em>가 되겠습니다.
            </h1>
            <p className="lead reveal" style={d(2)}>
              멘토링과 스터디 리더로 다른 사람의 성장을 도우며, 사람을 이해하고 돕는 일이 제 길이라는 것을
              알게 되었습니다. HR에 필요한 역량을 3년 동안 어떻게 쌓아 왔는지 정리했습니다.
            </p>
            <div className="actions reveal" style={d(3)}>
              <a href="#skills" className="btn">
                HR 역량 보기 <span className="btnIcon"><Arrow /></span>
              </a>
              <a href="#cases" className="btn ghost">핵심 경험</a>
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
                <div><dt>희망 직무</dt><dd>HR 인사담당 · 인재 육성(HRD)</dd></div>
                <div><dt>강점</dt><dd>경청 · 성장 설계 · 기록</dd></div>
                <div><dt>활동 기간</dt><dd className="num">2024 – 2026</dd></div>
              </dl>
              <p className="now">
                <span className="dot" aria-hidden="true" />
                지금은 SMILEAGE 장기 멘토로 활동하고 있습니다.
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
              text="2026 제2회 전국 대학생 사회적기업 우수사례발굴 경진대회 · 유형 A(지속가능성 향상 방안) · 5인 팀 ‘그린 하우스’ 팀장"
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
                  <div><dt>조사</dt><dd>52쪽 자료조사 보고서 · PESTEL · 조직운영·인사·교육 현황 · 조직문화 이론</dd></div>
                  <div><dt>제안</dt><dd>30쪽 발표자료 · 인포그래픽 · 12개월 시범운영 로드맵 · KPI 7개</dd></div>
                </dl>
              </div>
              <a className="projectImg reveal" style={d(1)} href="/greenhouse-infographic.jpg" target="_blank" rel="noreferrer">
                <img src="/greenhouse-infographic.jpg" alt="브라더스키퍼 지속가능성 향상 방안 인포그래픽" loading="lazy" decoding="async" />
                <span>인포그래픽 크게 보기</span>
              </a>
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
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 학업: 그룹 목록 */}
        <section className="block" id="study">
          <SectionHead
            label="학업"
            title="수업에서 사람과 조직을 보는 눈을 길렀습니다"
            text="수업마다 수행한 과제를 함께 적었습니다."
          />
          <div className="study">
            {courses.map((g, gi) => (
              <div className="courseGroup reveal" key={g.group} style={d(gi)}>
                <h3>{g.group}</h3>
                <ul>
                  {g.items.map(([course, work]) => (
                    <li key={course}>
                      <strong>{course}</strong>
                      <span>{work}</span>
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
            <p className="secLabel">수상</p>
            <h2>결과로 남은 네 번의 수상</h2>
            <p>모두 ‘기록하고 돌아보는 습관’에서 출발한 결과입니다.</p>
          </div>
          <ul className="awardList">
            {awards.map(([date, result, title], i) => (
              <li key={title} className="reveal" style={d(i)}>
                <time className="num">{date}</time>
                <p>{title}</p>
                <strong className={result === "대상" ? "top" : ""}>{result}</strong>
              </li>
            ))}
          </ul>
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

      <footer className="footer">
        <span>김희연 · 선문대학교 경영학과 · HR 인사담당 지망</span>
        <span className="num">© 2026</span>
      </footer>
    </>
  );
}
