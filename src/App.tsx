const awards = [
  {
    year: "2024.11.20",
    title: "제2회 SMILEAGE 외국어 포트폴리오 경진대회",
    result: "대상",
    body: "1년간의 외국어 학습과 활동을 기록·성찰해 하나의 성장 포트폴리오로 완성했습니다."
  },
  {
    year: "2024.11.22",
    title: "도전장학 스토리캐스팅",
    result: "최우수상",
    body: "학년별 목표와 실천계획을 세우고 실행 과정을 점검하며 나만의 커리어 계획을 구체화했습니다."
  },
  {
    year: "2024.11.20",
    title: "학습법 관련 우수사례 공모전",
    result: "장려상",
    body: "전공과 외국어 학습에서 직접 활용한 학습법과 성과를 정리해 발표했습니다."
  },
  {
    year: "2025.10.29",
    title: "도전! 선문 독서왕 서평쓰기 대회",
    result: "장려상",
    body: "『돈으로 살 수 없는 것들』을 조직행동론의 동기이론과 연결해 경영학 관점으로 해석했습니다."
  }
];

const featured = [
  {
    year: "2024 → 2026",
    eyebrow: "GROWTH STORY",
    title: "SMILEAGE: 수상자에서 멘토로",
    desc: "1학년 때 나의 외국어 성장 과정을 기록해 대상을 수상한 뒤, 2학년부터는 후배들의 목표·경험·진로를 함께 정리하는 멘토로 역할을 확장했습니다.",
    tags: ["대상 수상", "멘토링", "코칭", "성장관리"],
    note: "2026 HUMAN LINK 포트폴리오 1차 합격"
  },
  {
    year: "2025.1학기 → 2026.2학기",
    eyebrow: "PEOPLE DEVELOPMENT",
    title: "외국어 포트폴리오 장기 멘토링",
    desc: "학생별 작성 동기와 외국어 경험, 목표를 파악한 뒤 학교 프로그램 추천, 학년별 계획 수립, 스토리 구성, 수정본 재점검까지 맞춤형 컨설팅을 진행했습니다.",
    tags: ["경청", "요구분석", "맞춤형 피드백", "동기부여"],
    note: "HRD 진로와 가장 직접적으로 연결된 경험"
  },
  {
    year: "2026.07",
    eyebrow: "GLOBAL EXPERIENCE",
    title: "캐나다 단기어학연수 · FLY TRACK 1",
    desc: "3주간 캐나다 캘거리에서 수업·발표·다국적 교류를 경험하며 영어를 시험 과목이 아닌 관계와 문화를 이해하는 도구로 확장했습니다.",
    tags: ["글로벌 소통", "문화 이해", "적응력", "영어 실전"],
    note: "Mount Royal University · Calgary"
  },
  {
    year: "2026",
    eyebrow: "AI & DIGITAL",
    title: "AI를 활용한 PetMart 웹 서비스 제작",
    desc: "반려동물 쇼핑몰을 주제로 상품 탐색, 로그인·회원가입, 찜, 장바구니, 결제로 이어지는 사용자 흐름을 구현하고 AI를 코드 작성·오류 분석·문제 해결에 활용했습니다.",
    tags: ["AI 활용", "서비스 기획", "UI/UX", "문제해결"],
    note: "동작하는 웹 서비스 형태로 구현"
  },
  {
    year: "2024",
    eyebrow: "LEARNING DESIGN",
    title: "선문학습공동체 디딤돌그룹 · 리더/튜터",
    desc: "토익 학습 경험이 부족한 학생들과 약 10주간 스터디를 운영하며 파트별 학습계획과 자료를 직접 만들고, 팀원의 어려움에 맞춰 학습 방식을 조정했습니다.",
    tags: ["리더십", "학습설계", "자료제작", "팀 운영"],
    note: "우수팀"
  },
  {
    year: "2024",
    eyebrow: "MENTORING",
    title: "늘벗 공부방 영어 멘토링",
    desc: "중학생 멘티의 수준을 진단하고 약 7개월간 어휘·문법·독해 학습을 맞춤형으로 지도했습니다. 학습 변화뿐 아니라 학교생활 고민도 함께 듣고 지원했습니다.",
    tags: ["맞춤형 교육", "공감", "코칭", "장기관계"],
    note: "학습자 변화 관찰 및 수업 방식 조정"
  }
];

const archive = [
  { year:"2024", category:"전공", title:"경영소프트웨어 · 2025년 한국 경제 전망", desc:"국제정세, 성장률, 수출·산업, 고용, 물가·금리를 분석하고 기업·정부 대응 전략을 제안." },
  { year:"2024", category:"전공", title:"경제학원론 · 자유무역 vs 보호무역", desc:"자유무역의 후생효과와 고용·불평등·무역불균형 문제를 함께 검토한 팀 보고서." },
  { year:"2024", category:"교양", title:"영어로 공부하는 아시아 경제의 이슈 · 일본 여행기", desc:"일본 문화·사회·관광산업을 실제 여행 경험과 연결해 분석한 장문 보고서." },
  { year:"2024", category:"교양", title:"읽기와 토론 · 기아와 식량 낭비 토론", desc:"입론·반론·확인질문·최종발언까지 준비하며 근거 기반 주장과 상대 논리 분석을 경험." },
  { year:"2024", category:"교양", title:"창의적 사고와 글쓰기 · 사회 이슈 기사 분석", desc:"교제폭력 관련 기사의 제목·구성·관점을 비판적으로 분석하고 개선 방향을 제안." },
  { year:"2024", category:"교육", title:"선문 초등학생 영어캠프 보조요원", desc:"수업보조·학생 인솔·원어민 교수와 학생 간 소통 지원 등 교육 현장 운영 경험." },
  { year:"2025", category:"전공", title:"조직행동론 · 트럼프 관세정책 팀 프로젝트", desc:"감정지능·거래적 리더십·권력 개념을 실제 정치·경제 사례에 적용. PPT 제작 담당." },
  { year:"2025", category:"교양", title:"생활예절과 문화 · 관계와 존중 에세이", desc:"세대갈등, 명절문화, 생활예절을 통해 타인 존중과 관계 속 소통의 의미를 탐색." },
  { year:"2025", category:"교양", title:"아산의 이해와 탐방 · 지역문화 탐방", desc:"박물관·현충사 등 아산의 역사·문화·관광 자원을 현장과 자료조사를 통해 분석." },
  { year:"2025", category:"글쓰기", title:"도전! 선문 독서왕 서평쓰기", desc:"『돈으로 살 수 없는 것들』의 금전적 인센티브 문제를 자기결정이론·윤리경영과 연결. 장려상." },
  { year:"2026", category:"프로젝트", title:"ESG 팀 공모 프로젝트 ‘이음(I-Eum)’", desc:"팀장으로 어린이 창업 체험 교실을 기획하고 수업안·QR 보드게임·현장 연계를 준비. 7월까지 참여 후 중도 종료." },
  { year:"2026", category:"포트폴리오", title:"HUMAN LINK · 외국어 포트폴리오", desc:"ME→YOU→WORLD→WORK→NEXT 흐름으로 3년간 경험을 HRD 진로와 연결한 포트폴리오. 1차 합격." }
];

const journey = [
  ["2024 · 1학년", "넓게 경험하고 기록하기", "전공·교양, 외국어 학습, 멘토링, 동아리와 공모전을 통해 대학생활의 기반을 만들고 네 개의 수상 성과로 연결했습니다."],
  ["2025 · 2학년", "사람을 이해하고 돕는 역할로 확장", "조직행동론을 통해 사람과 조직을 공부하고, SMILEAGE 멘토링을 시작하며 나의 경험을 다른 사람의 성장 지원으로 확장했습니다."],
  ["2026 · 3학년", "HRD·인사라는 방향을 선명하게", "캐나다 연수, 장기 멘토링, 디지털 프로젝트, 현직자 탐색을 통해 사람의 성장과 조직을 연결하는 HRD·인사 진로를 구체화하고 있습니다."]
];

const linkSkills = [
  ["L", "Listen", "경청", "멘토링에서 상대의 목표·고민을 먼저 듣고 요구를 파악합니다."],
  ["I", "Interact", "소통", "캐나다 연수와 다양한 팀 활동에서 배경이 다른 사람과 관계를 만듭니다."],
  ["N", "Nurture", "성장 지원", "디딤돌·늘벗·SMILEAGE 멘토링에서 다른 사람의 학습과 성장을 돕습니다."],
  ["K", "Knit", "연결", "경험·정보·사람을 하나의 흐름으로 연결해 결과물을 완성합니다."]
];

export default function App() {
  return (
    <main className="site">
      <header className="header">
        <a className="brand" href="#top"><span className="brandDot" />HUI YEON</a>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#awards">Awards</a>
          <a href="#archive">Archive</a>
          <a href="#goals">Goals</a>
        </nav>
      </header>

      <section className="hero sectionReveal" id="top">
        <div className="heroWatermark" aria-hidden="true">HY</div>
        <div className="chapterMark" aria-hidden="true"><b>01</b><i /><span>INTRO</span></div>
        <p className="kicker">KIM HUI YEON · PORTFOLIO</p>
        <h1>김희연</h1>
        <p className="heroStatement">사람의 성장을 이해하고,<br />경험과 조직을 연결합니다.</p>
        <p className="heroIntro">선문대학교 경영학과에서 전공·교육·글로벌·디지털 경험을 쌓으며 HRD·인사 분야로 진로를 구체화하고 있습니다. 이곳에는 결과뿐 아니라 선택하고, 시도하고, 배우고, 다시 연결해온 과정을 기록합니다.</p>
        <a className="scrollCue" href="#about"><span />SCROLL TO EXPLORE</a>
      </section>

      <section className="transition transitionBlue sectionReveal">
        <p className="step">01 / 06</p>
        <p className="transitionText">나를 성장시킨 경험이,<br />다른 사람의 성장을 돕는 경험으로 이어졌습니다.</p>
      </section>

      <section className="about sectionReveal" id="about">
        <div className="sectionHead">
          <p className="kicker">ABOUT</p>
          <h2>경영학을 배우며<br />결국 ‘사람’에 관심이 모였습니다.</h2>
        </div>
        <div className="aboutStory">
          <p>1학년에는 경제·경영·외국어·교육 활동을 폭넓게 경험했습니다. 활동을 기록하고 성찰하는 과정에서 스스로 성장하는 방법을 배웠고, 이후에는 멘토와 튜터 역할을 맡으며 다른 사람의 성장을 돕는 일에서 더 큰 의미를 느꼈습니다.</p>
          <p>현재는 HRD·인사를 중심으로 진로를 구체화하고 있습니다. 사람의 요구를 듣고, 성장 과정을 설계하고, 서로 다른 경험과 조직의 목표를 연결하는 사람이 되고자 합니다.</p>
          <div className="chips">{["People","Growth","HRD","Communication","AI & Digital"].map((x)=><span key={x}>{x}</span>)}</div>
        </div>
      </section>

      <section className="stats sectionReveal">
        <article><strong>4</strong><span>공식 수상</span></article>
        <article><strong>3Y</strong><span>대학생활 성장 기록</span></article>
        <article><strong>2Y+</strong><span>SMILEAGE 멘토링</span></article>
        <article><strong>3W</strong><span>캐나다 글로벌 경험</span></article>
      </section>

      <section className="contentSection sectionReveal" id="projects">
        <div className="sectionHead">
          <p className="kicker">FEATURED PROJECTS</p>
          <h2>나를 가장 잘 설명하는 경험</h2>
          <p>과제의 개수보다, 사람과 성장이라는 현재의 방향을 만드는 데 의미 있었던 경험을 중심으로 골랐습니다.</p>
        </div>
        <div className="featuredGrid">
          {featured.map((item, i)=>(
            <article className={i===0 ? "featureCard heroCard" : "featureCard"} key={item.title}>
              <div className="featureMeta"><span>{item.eyebrow}</span><b>{item.year}</b></div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <div className="projectTags">{item.tags.map(tag=><span key={tag}>{tag}</span>)}</div>
              <div className="featureNote">{item.note}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="transition transitionWarm sectionReveal">
        <p className="step">02 / 06</p>
        <p className="quote">“내가 잘한 것을 보여주는 것”에서<br />“다른 사람의 성장을 돕는 것”으로 역할이 바뀌었습니다.</p>
      </section>

      <section className="mentoringStory sectionReveal">
        <div className="mentoringLead">
          <p className="kicker">SIGNATURE STORY</p>
          <h2>2024 수상자 → 2025·2026 멘토</h2>
          <p>외국어 포트폴리오를 직접 만들며 얻은 시행착오와 노하우를 후배에게 그대로 답처럼 전달하지 않았습니다. 먼저 목표를 듣고, 경험과 진로의 연결을 함께 찾고, 실제 수정 행동까지 구체화하는 방식으로 멘토링했습니다.</p>
        </div>
        <div className="mentorSteps">
          {["목표 듣기","경험 연결","성장·성찰 정리","수정 계획","재점검"].map((x,i)=>(
            <div key={x}><b>{String(i+1).padStart(2,"0")}</b><span>{x}</span></div>
          ))}
        </div>
      </section>

      <section className="contentSection sectionReveal" id="awards">
        <div className="sectionHead">
          <p className="kicker">AWARDS</p>
          <h2>과정을 끝까지 완성한 결과</h2>
          <p>현재까지 상장으로 확인된 공식 수상 이력입니다.</p>
        </div>
        <div className="awardGrid">
          {awards.map((item, i)=>(
            <article className={i<2 ? "featured" : ""} key={item.title}>
              <span>{item.year} · {item.result}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="journeySection sectionReveal">
        <div className="sectionHead">
          <p className="kicker">JOURNEY</p>
          <h2>학년마다 역할이 달라졌습니다.</h2>
        </div>
        <div className="yearJourney">
          {journey.map(([year,title,desc])=>(
            <article key={year}><span>{year}</span><h3>{title}</h3><p>{desc}</p></article>
          ))}
        </div>
      </section>

      <section className="linkSection sectionReveal">
        <div className="sectionHead">
          <p className="kicker">MY COMPETENCY · LINK</p>
          <h2>경험을 네 가지 역량으로 연결합니다.</h2>
          <p>2026 HUMAN LINK 포트폴리오에서 정리한 역량을 실제 경험 근거와 함께 다시 정의했습니다.</p>
        </div>
        <div className="linkGrid">
          {linkSkills.map(([letter,en,kr,desc])=>(
            <article key={letter}><strong>{letter}</strong><div><span>{en}</span><h3>{kr}</h3><p>{desc}</p></div></article>
          ))}
        </div>
      </section>

      <section className="archiveSection sectionReveal" id="archive">
        <div className="sectionHead">
          <p className="kicker">PROJECT ARCHIVE</p>
          <h2>대학생활에서 만든 결과물</h2>
          <p>대표 경험 외에도 전공·교양·글쓰기·프로젝트에서 쌓은 분석과 기록을 남깁니다.</p>
        </div>
        <div className="archiveGrid">
          {archive.map((item)=>(
            <article key={item.title}>
              <div className="archiveTop"><span>{item.year}</span><b>{item.category}</b></div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="experience sectionReveal">
        <article>
          <p className="kicker">COMMUNITY & EDUCATION</p>
          <h2>사람의 성장을 가까이에서 돕다.</h2>
          <p>영어캠프, 늘벗 공부방, 디딤돌그룹, SMILEAGE 멘토링을 통해 학습자의 상황을 파악하고 맞는 방식으로 지원하는 경험을 이어왔습니다.</p>
          <div className="experienceList">
            <span>2024 · 선문 초등학생 영어캠프 보조요원</span>
            <span>2024 · 늘벗 공부방 영어 멘토 · 약 7개월</span>
            <span>2024 · 디딤돌그룹 리더/튜터 · 우수팀</span>
            <span>2025–2026 · SMILEAGE 외국어 포트폴리오 멘토</span>
          </div>
        </article>
        <article className="globalCard">
          <p className="kicker">GLOBAL & DIGITAL</p>
          <h2>새로운 환경과 도구를 직접 경험하다.</h2>
          <p>캐나다 연수를 통해 문화적 차이를 존중하며 소통하는 법을 배웠고, AI 웹 프로젝트를 통해 새로운 도구를 실제 결과물로 연결하는 경험을 했습니다.</p>
          <div className="chips"><span>Canada</span><span>English</span><span>AI</span><span>Web</span></div>
        </article>
      </section>

      <section className="nowNext sectionReveal">
        <article>
          <p className="kicker">NOW</p>
          <h2>경험을 HRD·인사 역량으로 정리하는 중</h2>
          <p>멘토링과 교육지원 경험에서 쌓은 경청·진단·피드백 역량, 경영학 전공에서 배운 조직 이해, 글로벌·디지털 경험을 하나의 직무 이야기로 연결하고 있습니다.</p>
        </article>
        <article>
          <p className="kicker">NEXT</p>
          <h2>다음에는 실제 조직 안에서 성장 지원을 배우기</h2>
          <p>인턴과 첫 직무 경험에서 교육·인사 운영을 직접 경험하고, 문서·데이터 활용 역량까지 더해 사람의 성장과 조직의 목표를 연결하는 HR 담당자로 성장하고자 합니다.</p>
        </article>
      </section>

      <section className="contentSection goals sectionReveal" id="goals">
        <div className="sectionHead">
          <p className="kicker">CAREER GOALS</p>
          <h2>사람의 성장을 잇는 HR로.</h2>
          <p>지금까지의 경험을 기반으로 다음 단계에서는 실제 HRD·인사 업무의 언어와 도구를 익혀가고자 합니다.</p>
        </div>
        <div className="goalGrid">
          <article><span>01</span><h3>직무 분석</h3><p>HRD·인사 직무와 기업별 요구역량을 구체적으로 비교하고 지원 경험을 선별합니다.</p></article>
          <article><span>02</span><h3>실무 경험</h3><p>인턴·일경험을 통해 교육운영, 인사행정, 구성원 지원 업무를 직접 경험합니다.</p></article>
          <article className="soft"><span>03</span><h3>데이터·디지털</h3><p>AI 활용 경험을 확장해 문서 작성과 인사 데이터 활용 역량을 강화합니다.</p></article>
          <article><span>04</span><h3>글로벌 소통</h3><p>영어 학습과 해외 경험을 이어가며 다양한 배경의 구성원과 소통하는 힘을 기릅니다.</p></article>
        </div>
      </section>

      <section className="closing sectionReveal">
        <p className="kicker">MY ARCHIVE IS STILL GROWING.</p>
        <h2>완벽한 경험만이 아니라,<br />배우고 방향을 바꾼 과정까지 기록합니다.</h2>
        <p>대학생활에서 시작한 이 기록은 인턴, 첫 직장, 새로운 프로젝트와 배움까지 계속 이어질 예정입니다.</p>
      </section>

      <footer>
        <strong>KIM HUI YEON</strong>
        <span>Business Administration · HRD & HR</span>
      </footer>
    </main>
  );
}
