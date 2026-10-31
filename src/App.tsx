const archive2024 = [
  "경영소프트웨어 · 2025년 한국 경제 전망",
  "경제학원론 · 자유무역 vs 보호무역",
  "읽기와 토론 · 기아와 식량 낭비",
  "창의적 사고와 글쓰기 · 사회 이슈 기사 분석",
  "영어로 공부하는 아시아 경제의 이슈 · 일본 문화·관광 분석",
  "선문 초등학생 영어캠프 보조요원"
];

const archive2025 = [
  "조직행동론 · 트럼프 관세정책 팀 프로젝트",
  "생활예절과 문화 · 관계와 존중 에세이",
  "아산의 이해와 탐방 · 지역문화 탐방",
  "도전! 선문 독서왕 서평쓰기 대회 · 장려상"
];

const archive2026 = [
  "HUMAN LINK 외국어 포트폴리오 · 1차 합격",
  "SMILEAGE 장기 멘토링 · 2026.2학기 현재까지",
  "선문글로벌 FLY TRACK 1 · 캐나다 3주",
  "AI를 활용한 PetMart 웹 서비스 제작",
  "ESG 팀 공모 프로젝트 ‘이음(I-Eum)’ · 팀장 / 7월까지 참여"
];

const awards = [
  ["2024.11.20","대상","제2회 SMILEAGE 외국어 포트폴리오 경진대회"],
  ["2024.11.22","최우수상","도전장학 스토리캐스팅"],
  ["2024.11.20","장려상","학습법 관련 우수사례 공모전"],
  ["2025.10.29","장려상","도전! 선문 독서왕 서평쓰기 대회"]
];

function Archive({items}:{items:string[]}) {
  return (
    <details className="archive">
      <summary>이 해의 다른 활동 보기 <span>+</span></summary>
      <div className="archiveList">
        {items.map((item,i)=><div key={item}><b>{String(i+1).padStart(2,"0")}</b><span>{item}</span></div>)}
      </div>
    </details>
  );
}

export default function App(){
  return (
    <main id="top">
      <header className="topbar">
        <a href="#top" className="wordmark">KIM HUIYEON</a>
        <nav>
          <a href="#y2024">2024</a>
          <a href="#y2025">2025</a>
          <a href="#y2026">2026</a>
          <a href="#awards">Awards</a>
        </nav>
      </header>

      <section className="hero">
        <div className="heroIndex">01 — UNIVERSITY PORTFOLIO / 2024—2026</div>
        <div className="heroMain">
          <p className="heroKicker">BUSINESS · PEOPLE · GROWTH</p>
          <h1>
            사람을 이해하는 경험이,<br/>
            <em>HR을 향한 방향</em>이 되었습니다.
          </h1>
          <p className="heroLead">
            선문대학교 경영학과 김희연.  
            배우고 기록하는 데서 시작해, 다른 사람의 성장을 돕는 경험으로 확장해왔습니다.
          </p>
        </div>
        <div className="heroBottom">
          <span>SCROLL TO READ THE STORY</span>
          <span>↓</span>
        </div>
      </section>

      <section className="manifesto">
        <p className="sectionNo">02</p>
        <div>
          <p className="smallLabel">THREE YEARS, ONE DIRECTION</p>
          <h2>Explore.<br/>Connect.<br/><span>Define.</span></h2>
        </div>
        <p className="manifestoText">
          1학년에는 넓게 경험했고, 2학년에는 사람과 조직을 이해하기 시작했고,
          3학년에는 그 경험을 HRD·인사라는 진로로 구체화했습니다.
        </p>
      </section>

      <section className="yearChapter" id="y2024">
        <aside className="yearSide">
          <span>YEAR 01</span>
          <strong>2024</strong>
          <small>1학년 · EXPLORE</small>
        </aside>
        <div className="yearBody">
          <div className="yearIntro">
            <p className="smallLabel">START WITH MYSELF</p>
            <h2>나의 성장 방식을<br/>먼저 배운 해.</h2>
            <p>외국어 학습, 전공 과제, 멘토링과 공모전을 폭넓게 경험하며 스스로 계획하고 기록하고 돌아보는 습관을 만들었습니다.</p>
          </div>

          <article className="featureStory">
            <div className="featureMeta"><span>01</span><span>SMILEAGE · 대상</span></div>
            <div className="featureContent">
              <h3>배운 것을 기록하자,<br/>성장이 보이기 시작했습니다.</h3>
              <p>1년간의 외국어 학습을 목표·과정·성과·성찰로 정리한 포트폴리오로 제2회 SMILEAGE 경진대회 대상을 수상했습니다.</p>
            </div>
            <div className="evidenceStrip">
              <span>Portfolio</span><span>Reflection</span><span>Self-directed Learning</span>
            </div>
          </article>

          <div className="twoColumns">
            <article className="plainStory">
              <span>02 · LEADERSHIP</span>
              <h3>디딤돌그룹<br/>리더·튜터</h3>
              <p>약 10주간 토익 학습계획과 자료를 만들고 팀원의 어려움에 맞춰 학습 방식을 조정했습니다.</p>
              <b>우수팀</b>
            </article>
            <article className="plainStory">
              <span>03 · MENTORING</span>
              <h3>늘벗 공부방<br/>영어 멘토링</h3>
              <p>약 7개월 동안 중학생 멘티의 수준을 진단하고 어휘·문법·독해를 맞춤형으로 지도했습니다.</p>
              <b>장기 관계 · 맞춤형 지원</b>
            </article>
          </div>

          <Archive items={archive2024} />
        </div>
      </section>

      <section className="bridge bridgeDark">
        <span>2024 → 2025</span>
        <p>내 성장을 기록하던 경험은,<br/><em>다른 사람의 성장을 돕는 역할</em>로 이어졌습니다.</p>
      </section>

      <section className="yearChapter warm" id="y2025">
        <aside className="yearSide">
          <span>YEAR 02</span>
          <strong>2025</strong>
          <small>2학년 · CONNECT</small>
        </aside>
        <div className="yearBody">
          <div className="yearIntro">
            <p className="smallLabel">FROM ME TO PEOPLE</p>
            <h2>사람을 이해하는<br/>관점이 생긴 해.</h2>
            <p>조직행동론을 통해 사람의 행동과 동기를 이론으로 바라보고, SMILEAGE 멘토링을 통해 실제로 누군가의 성장 과정을 함께 설계하기 시작했습니다.</p>
          </div>

          <article className="featureStory mentoring">
            <div className="featureMeta"><span>01</span><span>SMILEAGE · MENTOR</span></div>
            <div className="featureContent">
              <h3>답을 알려주기보다,<br/>방향을 함께 찾는 사람으로.</h3>
              <p>학생의 외국어 경험과 목표를 먼저 듣고, 활동 간 연결·성찰·향후 계획을 함께 정리했습니다. 1학년 때의 수상 경험이 타인의 성장을 돕는 경험으로 바뀐 순간입니다.</p>
            </div>
            <div className="process">
              <span>Listen</span><i>→</i><span>Organize</span><i>→</i><span>Feedback</span><i>→</i><span>Grow</span>
            </div>
          </article>

          <Archive items={archive2025} />
        </div>
      </section>

      <section className="bridge bridgeLight">
        <span>2025 → 2026</span>
        <p>사람을 돕는 경험이 쌓이자,<br/>관심은 자연스럽게 <em>조직과 HRD</em>로 향했습니다.</p>
      </section>

      <section className="yearChapter" id="y2026">
        <aside className="yearSide">
          <span>YEAR 03</span>
          <strong>2026</strong>
          <small>3학년 · DEFINE</small>
        </aside>
        <div className="yearBody">
          <div className="yearIntro">
            <p className="smallLabel">MAKE IT CLEAR</p>
            <h2>경험을 진로의 언어로<br/>다시 정의한 해.</h2>
            <p>멘토링을 이어가고, 캐나다에서 다양한 문화의 사람들과 소통하고, AI를 활용한 웹 프로젝트까지 경험하며 HRD·인사라는 방향을 구체화했습니다.</p>
          </div>

          <div className="editorialGrid">
            <article className="editorialLarge">
              <span>GLOBAL · 03 WEEKS</span>
              <h3>Canada,<br/>Calgary</h3>
              <p>영어를 시험 과목이 아닌 사람과 문화를 연결하는 도구로 경험했습니다.</p>
            </article>
            <article className="editorialSmall dark">
              <span>HUMAN LINK</span>
              <h3>ME → YOU → WORLD → WORK → NEXT</h3>
              <p>3년간의 외국어 경험을 HRD 진로와 하나의 스토리로 연결한 포트폴리오. 1차 합격.</p>
            </article>
            <article className="editorialSmall sand">
              <span>AI · DIGITAL</span>
              <h3>PetMart</h3>
              <p>로그인, 찜, 장바구니, 결제까지 사용자 흐름을 구현하며 AI를 개발 보조 도구로 활용했습니다.</p>
            </article>
          </div>

          <Archive items={archive2026} />
        </div>
      </section>

      <section className="awards" id="awards">
        <div className="awardsHead">
          <span>03 — AWARDS</span>
          <h2>결과로 남은<br/>네 번의 성취.</h2>
        </div>
        <div className="awardRows">
          {awards.map(([date,result,title],i)=>(
            <div className="awardRow" key={title}>
              <span>{String(i+1).padStart(2,"0")}</span>
              <small>{date}</small>
              <p>{title}</p>
              <strong>{result}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="hrFit">
        <span>04 — WHY HR</span>
        <h2>
          Listen.<br/>
          Design growth.<br/>
          Connect people.<br/>
          <em>Build better organizations.</em>
        </h2>
        <p>경청하고, 성장 과정을 설계하고, 사람과 경험을 연결하는 방식이 제가 HRD·인사에서 계속 발전시키고 싶은 강점입니다.</p>
      </section>

      <footer>
        <div>
          <strong>KIM HUIYEON</strong>
          <span>Business Administration · HR / HRD</span>
        </div>
        <a href="#top">BACK TO TOP ↑</a>
      </footer>
    </main>
  );
}