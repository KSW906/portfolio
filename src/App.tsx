const awards = [
  {
    year: "2024.11",
    title: "제2회 SMILEAGE 외국어 포트폴리오 경진대회",
    result: "대상",
    body: "1년간의 활동을 정리하며 자신의 성장을 객관적으로 돌아보고, 앞으로 나아갈 수 있는 자신감을 얻은 경험."
  },
  {
    year: "2024.11",
    title: "도전장학 스토리캐스팅",
    result: "최우수상",
    body: "장기 목표와 세부 실천 계획을 세우고 1년 동안 실행하며 진로와 시간 관리 방식을 구체화한 경험."
  },
  {
    year: "2024.11",
    title: "학습법 관련 우수사례 공모전",
    result: "장려상",
    body: "대학생활과 학습 경험을 돌아보고 후배들에게 학습 방법과 응원의 메시지를 공유한 발표 경험."
  }
];

const activities = [
  ["2024 - 2026", "비바체 중앙동아리", "오케스트라 및 앙상블 활동을 이어가며 공연과 지역사회 봉사에 참여."],
  ["2024", "선문디딤돌 · 선문학습공동체", "학습 습관을 점검하고 함께 공부하는 학습 경험을 축적."],
  ["2024 - 2026", "선문 학습법 특강", "여러 학기에 걸쳐 학습 전략과 자기관리 관련 프로그램에 지속적으로 참여."],
  ["2024", "SMILEAGE 경진대회", "외국어 학습 과정을 포트폴리오로 정리해 대상 수상."],
  ["2026.03 - 04", "SW개발과정", "소프트웨어 개발 관련 비교과 과정 이수."],
  ["2026.07", "캐나다 단기 어학연수", "영어 의사소통 역량과 다양한 문화 및 조직 환경을 직접 경험."]
];

const volunteering = [
  ["2024 - 2025", "비바체 오케스트라 및 앙상블 공연", "지역사회 공연 봉사"],
  ["2024", "탕정한마음 아동문예제전", "행사 지원"],
  ["2026", "햇살가득파랑새지역아동센터", "교육지원 및 학습지도"]
];

export default function App() {
  return (
    <main className="page">
      <header className="header">
        <a className="brand" href="#top"><span className="dot" /> HUI YEON</a>
        <nav>
          <a href="#about">About</a>
          <a href="#awards">Awards</a>
          <a href="#journey">Journey</a>
          <a href="#goals">Goals</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="heroCopy">
          <p className="eyebrow">BUSINESS · PEOPLE · GROWTH</p>
          <h1>김희연</h1>
          <p className="heroLine">사람의 성장과 조직의 발전을 연결하는 HRD·인사를 향해.</p>
          <p className="lead">선문대학교 경영학과에서 다양한 전공과 비교과 활동을 경험하며, 사람과 조직을 성장시키는 일에 관심을 넓혀가고 있습니다.</p>
          <div className="actions">
            <a className="primary" href="#journey">성장 기록 보기</a>
            <a className="secondary" href="#awards">수상 보기</a>
          </div>
        </div>
        <div className="heroPanel">
          <div className="heroCard heroCardA"><span>01</span><strong>University</strong><p>배움과 경험을 쌓은 시간</p></div>
          <div className="heroCard heroCardB"><span>02</span><strong>People</strong><p>사람과 함께 성장한 경험</p></div>
          <div className="heroCard heroCardC"><span>03</span><strong>Career</strong><p>HRD·인사로 이어지는 방향</p></div>
        </div>
      </section>

      <section className="intro" id="about">
        <div>
          <p className="eyebrow">ABOUT</p>
          <h2>경영학을 배우며<br/>사람에 더 관심을 갖게 되었습니다.</h2>
        </div>
        <div className="introText">
          <p>1학년에는 경영과 경제의 기초를 배우며 진로를 넓게 탐색했고, 2학년에는 회계·마케팅·경영정보 등 다양한 분야를 경험했습니다.</p>
          <p>이후 숫자를 다루는 업무보다 구성원의 역량 개발과 조직문화 형성에 더 큰 흥미가 있다는 점을 발견했고, 현재는 HRD·인사 분야를 중심으로 진로를 구체화하고 있습니다.</p>
        </div>
      </section>

      <section className="stats">
        <article><strong>59</strong><span>비교과 활동 기록</span></article>
        <article><strong>3</strong><span>주요 교내 수상</span></article>
        <article><strong>2Y+</strong><span>비바체 활동</span></article>
        <article><strong>1</strong><span>캐나다 어학연수</span></article>
      </section>

      <section className="section" id="awards">
        <div className="sectionHead">
          <p className="eyebrow">AWARDS</p>
          <h2>결과보다 과정이 남은 수상</h2>
          <p>수상 자체보다 준비 과정에서 무엇을 배웠고 어떤 태도를 얻었는지에 의미를 두었습니다.</p>
        </div>
        <div className="awardGrid">
          {awards.map((item) => (
            <article key={item.title}>
              <div className="awardTop"><span>{item.year}</span><b>{item.result}</b></div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="journey">
        <div className="sectionHead">
          <p className="eyebrow">JOURNEY</p>
          <h2>대학생활에서 쌓아온 경험</h2>
          <p>활동을 많이 하는 것보다, 각 경험을 다음 선택으로 연결하는 것을 중요하게 생각합니다.</p>
        </div>
        <div className="timeline">
          {activities.map(([date,title,desc]) => (
            <article key={date+title}>
              <span>{date}</span>
              <div><h3>{title}</h3><p>{desc}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="volunteer">
        <div>
          <p className="eyebrow">COMMUNITY</p>
          <h2>배운 것을 사람과 연결하기</h2>
          <p>공연, 행사 지원, 교육지원 활동을 통해 대학 안팎에서 사람들과 함께하는 경험을 이어왔습니다.</p>
        </div>
        <div className="volunteerList">
          {volunteering.map(([date,title,type]) => (
            <article key={title}><span>{date}</span><strong>{title}</strong><em>{type}</em></article>
          ))}
        </div>
      </section>

      <section className="language">
        <div className="languageVisual">
          <div className="languageMark">CA</div>
          <div><span>2026.07</span><strong>CANADA</strong><p>단기 어학연수</p></div>
        </div>
        <div>
          <p className="eyebrow">GLOBAL EXPERIENCE</p>
          <h2>영어 학습을 경험으로 확장하다.</h2>
          <p>TOEIC 응시와 1:1 외국어 화상교육을 꾸준히 이어왔고, 2026년에는 캐나다 단기 어학연수에 참여해 영어 의사소통과 다양한 문화 환경을 직접 경험했습니다.</p>
          <div className="miniTags"><span>TOEIC</span><span>1:1 화상교육</span><span>Canada</span></div>
        </div>
      </section>

      <section className="section goals" id="goals">
        <div className="sectionHead">
          <p className="eyebrow">CAREER GOALS</p>
          <h2>지금의 목표는 HRD·인사.</h2>
          <p>사람의 성장을 돕고 조직이 더 나은 방향으로 움직일 수 있도록 기여하는 일을 준비하고 있습니다.</p>
        </div>
        <div className="goalGrid">
          <article><span>01</span><h3>직무 이해</h3><p>HRD·인사 채용공고와 기업을 분석하고 직무별 요구 역량을 구체적으로 정리합니다.</p></article>
          <article><span>02</span><h3>실무 역량</h3><p>관련 전공, 취업 특강, 비교과 활동을 통해 조직과 사람을 이해하는 기반을 넓힙니다.</p></article>
          <article><span>03</span><h3>글로벌 역량</h3><p>영어 학습과 해외 어학연수 경험을 바탕으로 다양한 문화와 조직 환경에 적응하는 힘을 기릅니다.</p></article>
          <article><span>04</span><h3>기록과 성찰</h3><p>활동을 끝내는 데서 멈추지 않고 배운 점과 다음 목표를 포트폴리오에 계속 기록합니다.</p></article>
        </div>
      </section>

      <section className="closing">
        <p>MY ARCHIVE IS STILL GROWING.</p>
        <h2>기록이 쌓일수록<br/>방향은 더 선명해집니다.</h2>
        <span>대학생활의 경험부터 앞으로의 인턴, 첫 직장, 커리어까지 같은 공간에 계속 이어갈 포트폴리오입니다.</span>
      </section>

      <footer>
        <div className="brand"><span className="dot"/>Kim Hui Yeon</div>
        <span>Business Administration · HRD & HR</span>
      </footer>
    </main>
  );
}
