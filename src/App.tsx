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
    body: "장기 목표와 세부 실천 계획을 세우고 실행하며 진로와 시간 관리 방식을 구체화한 경험."
  },
  {
    year: "2024.11",
    title: "학습법 관련 우수사례 공모전",
    result: "장려상",
    body: "대학생활과 학습 경험을 돌아보고 후배들에게 학습 방법과 응원의 메시지를 공유한 발표 경험."
  }
];

const activities = [
  ["2024 — 2026", "비바체 중앙동아리", "오케스트라와 앙상블 활동을 이어가며 공연과 지역사회 봉사에 참여."],
  ["2024", "선문디딤돌 · 선문학습공동체", "학습 습관을 점검하고 함께 공부하는 경험을 축적."],
  ["2024 — 2026", "선문 학습법 특강", "여러 학기에 걸쳐 학습 전략과 자기관리 프로그램에 지속적으로 참여."],
  ["2024", "SMILEAGE 경진대회", "외국어 학습 과정을 포트폴리오로 정리해 대상 수상."],
  ["2026.03 — 04", "SW개발과정", "소프트웨어 개발 관련 비교과 과정 이수."],
  ["2026.07", "캐나다 단기 어학연수", "영어 의사소통과 다양한 문화 및 조직 환경을 직접 경험."]
];

const growth = [
  ["01", "LEARN", "배우기", "수업과 학습 프로그램으로 기초를 만들었습니다."],
  ["02", "EXPLORE", "탐색하기", "동아리·공모전·SW 과정으로 관심의 범위를 넓혔습니다."],
  ["03", "CONNECT", "연결하기", "봉사와 해외 경험을 통해 사람과 환경을 이해했습니다."],
  ["04", "GROW", "성장하기", "이 경험들이 HRD·인사라는 진로 방향으로 이어졌습니다."]
];

const goals = [
  ["01", "직무 이해", "HRD·인사 채용공고와 기업을 분석하고 직무별 요구 역량을 구체적으로 정리합니다."],
  ["02", "실무 역량", "관련 전공, 취업 특강, 비교과 활동을 통해 조직과 사람을 이해하는 기반을 넓힙니다."],
  ["03", "글로벌 역량", "영어 학습과 해외 경험을 바탕으로 다양한 문화와 조직 환경에 적응하는 힘을 기릅니다."],
  ["04", "기록과 성찰", "활동을 끝내는 데서 멈추지 않고 배운 점과 다음 목표를 계속 기록합니다."]
];

export default function App() {
  return (
    <main className="site">
      <header className="header">
        <a className="brand" href="#top"><span className="brandDot" />HUI YEON</a>
        <nav>
          <a href="#about">About</a>
          <a href="#awards">Awards</a>
          <a href="#journey">Journey</a>
          <a href="#goals">Goals</a>
        </nav>
      </header>

      <section className="hero sectionReveal" id="top">
        <div className="heroWatermark" aria-hidden="true">HY</div>
        <div className="chapterMark" aria-hidden="true"><b>01</b><i /><span>INTRO</span></div>
        <p className="kicker">KIM HUI YEON · PORTFOLIO</p>
        <h1>김희연</h1>
        <p className="heroStatement">사람의 성장과 조직의 발전을<br />연결하는 일을 준비합니다.</p>
        <p className="heroIntro">선문대학교 경영학과에서 다양한 경험을 쌓으며 HRD·인사 분야로 진로를 구체화하고 있습니다. 이 페이지는 대학생활에서 시작해 앞으로의 커리어까지 이어질 성장 기록입니다.</p>
        <a className="scrollCue" href="#about"><span />SCROLL TO EXPLORE</a>
      </section>

      <section className="transition transitionBlue sectionReveal">
        <p className="step">01 / 05</p>
        <p className="transitionText">무엇을 했는지보다,<br className="mobileBreak" /> 그 경험이 나를 어떻게 바꾸었는지.</p>
      </section>

      <section className="about sectionReveal" id="about">
        <div className="sectionHead">
          <p className="kicker">ABOUT</p>
          <h2>경영학을 배우며<br />사람에 더 관심을 갖게 되었습니다.</h2>
        </div>
        <div className="aboutStory">
          <p>1학년에는 경영과 경제의 기초를 배우며 진로를 넓게 탐색했습니다. 2학년에는 회계, 마케팅, 경영정보 등 여러 분야를 경험하며 내가 오래 몰입할 수 있는 일이 무엇인지 확인했습니다.</p>
          <p>그 과정에서 숫자 자체보다 사람의 역량 개발, 조직문화, 구성원의 변화에 더 큰 흥미가 있다는 점을 발견했고 현재는 HRD·인사를 중심으로 진로를 구체화하고 있습니다.</p>
          <div className="chips">{["People","Growth","Organization","HRD"].map((x)=><span key={x}>{x}</span>)}</div>
        </div>
      </section>

      <section className="stats sectionReveal">
        <article><strong>59</strong><span>비교과 활동</span></article>
        <article><strong>3</strong><span>주요 수상</span></article>
        <article><strong>2Y+</strong><span>비바체 활동</span></article>
        <article><strong>1</strong><span>캐나다 어학연수</span></article>
      </section>

      <section className="contentSection sectionReveal" id="awards">
        <div className="sectionHead">
          <p className="kicker">AWARDS</p>
          <h2>결과보다 과정이 남은 수상</h2>
          <p>수상 자체보다 준비 과정에서 무엇을 배웠고 어떤 태도를 얻었는지에 의미를 두었습니다.</p>
        </div>
        <div className="awardGrid">
          {awards.map((item, i) => (
            <article className={i === 0 ? "featured" : ""} key={item.title}>
              <span>{item.year} · {item.result}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="transition transitionWarm sectionReveal">
        <p className="step">02 / 05</p>
        <p className="quote">기록은 활동을 나열하는 일이 아니라,<br />다음 선택의 이유를 남기는 일이라고 생각합니다.</p>
      </section>

      <section className="contentSection sectionReveal" id="journey">
        <div className="sectionHead">
          <p className="kicker">JOURNEY</p>
          <h2>대학생활에서 쌓아온 경험</h2>
          <p>활동을 많이 하는 것보다, 각 경험을 다음 선택으로 연결하는 것을 중요하게 생각합니다.</p>
        </div>
        <div className="timeline">
          {activities.map(([date,title,desc], i) => (
            <article key={date+title}>
              <b>{String(i+1).padStart(2,"0")}</b>
              <span>{date}</span>
              <div><h3>{title}</h3><p>{desc}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="growthMap sectionReveal">
        <div className="sectionHead">
          <p className="kicker">GROWTH MAP</p>
          <h2>경험은 쌓이는 것이 아니라,<br />서로 연결되며 방향을 만듭니다.</h2>
          <p>대학생활에서의 활동을 네 단계로 정리했습니다. 각각의 경험이 다음 경험의 이유가 되고, 결국 HRD·인사라는 방향으로 이어졌습니다.</p>
        </div>
        <div className="growthPath">
          {growth.map(([no,en,kr,desc], i)=>(
            <article key={no}>
              <div className={"growthNode " + (i===growth.length-1 ? "active" : "")}>{no}</div>
              <span>{en}</span>
              <h3>{kr}</h3>
              <p>{desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="experience sectionReveal">
        <article>
          <p className="kicker">COMMUNITY</p>
          <h2>배운 것을 사람과 연결하기</h2>
          <p>공연, 행사 지원, 교육지원 활동을 통해 대학 안팎에서 사람들과 함께하는 경험을 이어왔습니다.</p>
          <div className="experienceList">
            <span>2024–25 · 비바체 공연 · 지역사회 공연 봉사</span>
            <span>2024 · 탕정한마음 아동문예제전 · 행사 지원</span>
            <span>2026 · 지역아동센터 · 교육지원 및 학습지도</span>
          </div>
        </article>
        <article className="globalCard">
          <p className="kicker">GLOBAL EXPERIENCE</p>
          <h2>영어 학습을<br />경험으로 확장하다.</h2>
          <p>TOEIC 응시와 1:1 외국어 화상교육을 이어왔고, 2026년 캐나다 단기 어학연수에 참여해 다양한 문화 환경을 직접 경험했습니다.</p>
          <div className="chips"><span>TOEIC</span><span>1:1 화상교육</span><span>Canada</span></div>
        </article>
      </section>

      <section className="nowNext sectionReveal">
        <article>
          <p className="kicker">NOW</p>
          <h2>지금은 방향을<br />선명하게 만드는 중</h2>
          <p>HRD·인사 직무 이해, 관련 활동, 영어와 글로벌 경험을 하나의 이야기로 정리하고 있습니다.</p>
        </article>
        <article>
          <p className="kicker">NEXT</p>
          <h2>다음에는 경험을<br />실무로 연결합니다.</h2>
          <p>인턴과 첫 직무 경험에서 사람의 성장을 돕는 실제 업무를 배우고, 그 과정을 다시 이 포트폴리오에 기록합니다.</p>
        </article>
      </section>

      <section className="contentSection goals sectionReveal" id="goals">
        <div className="sectionHead">
          <p className="kicker">CAREER GOALS</p>
          <h2>지금의 목표는 HRD·인사.</h2>
          <p>사람의 성장을 돕고 조직이 더 나은 방향으로 움직일 수 있도록 기여하는 일을 준비하고 있습니다.</p>
        </div>
        <div className="goalGrid">
          {goals.map(([no,title,body], i)=>(
            <article className={i===2 ? "soft" : ""} key={no}>
              <span>{no}</span><h3>{title}</h3><p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="closing sectionReveal">
        <p className="kicker">MY ARCHIVE IS STILL GROWING.</p>
        <h2>대학생활에서 시작한 기록은<br />커리어 전체로 이어집니다.</h2>
        <p>인턴, 첫 직장, 새로운 프로젝트와 배움까지. 앞으로의 경험을 같은 공간에 차분하게 계속 쌓아갈 포트폴리오입니다.</p>
      </section>

      <footer>
        <strong>KIM HUI YEON</strong>
        <span>Business Administration · HRD & HR</span>
      </footer>
    </main>
  );
}
