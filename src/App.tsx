const years = [
  {
    year: "2024",
    grade: "1학년",
    label: "EXPLORE",
    title: "많이 경험하고, 나를 발견한 해",
    summary: "경영학의 기초를 배우며 전공·교양·외국어·교육 활동을 폭넓게 경험했습니다. 스스로의 성장을 기록하고, 다른 사람의 학습을 돕는 첫 경험도 시작했습니다.",
    highlight: "외국어 포트폴리오 대상 · 도전장학 최우수상 · 학습법 공모전 장려상",
    items: [
      { type:"AWARD", title:"제2회 SMILEAGE 외국어 포트폴리오 경진대회", meta:"대상", desc:"1년간의 외국어 학습 활동을 목표·성과·성찰 중심으로 정리해 포트폴리오로 완성했습니다." },
      { type:"AWARD", title:"도전장학 스토리캐스팅", meta:"최우수상", desc:"대학생활 4개년 목표와 실천계획을 수립하고 실제 활동 달성률을 점검하며 진로 계획을 구체화했습니다." },
      { type:"AWARD", title:"학습법 관련 우수사례 공모전", meta:"장려상", desc:"경영학원론·경제학원론·중국어 학습에서 활용한 방법과 성과를 발표했습니다." },
      { type:"MENTORING", title:"선문학습공동체 디딤돌그룹", meta:"리더·튜터 · 우수팀", desc:"약 10주간 토익 학습계획과 자료를 만들고 팀원의 어려움에 맞춰 학습 방식을 조정했습니다." },
      { type:"MENTORING", title:"늘벗 공부방 영어 멘토링", meta:"약 7개월", desc:"중학생 멘티의 수준을 진단하고 어휘·문법·독해를 맞춤형으로 지도하며 학습과 학교생활을 함께 지원했습니다." },
      { type:"EDUCATION", title:"선문 초등학생 영어캠프", meta:"보조요원", desc:"수업보조, 학생 인솔, 원어민 교수와 학생 간 소통을 지원하며 교육 현장을 경험했습니다." },
      { type:"MAJOR", title:"경영소프트웨어 · 2025년 한국 경제 전망", meta:"전공 보고서", desc:"국제정세, 성장률, 산업, 고용, 물가·금리를 분석하고 기업·정부의 대응 전략을 제안했습니다." },
      { type:"MAJOR", title:"경제학원론 · 자유무역 vs 보호무역", meta:"팀 보고서", desc:"자유무역의 후생효과와 고용·불평등·무역불균형 문제를 함께 검토했습니다." },
      { type:"LIBERAL", title:"읽기와 토론 · 기아와 식량 낭비", meta:"토론 프로젝트", desc:"입론·반론·확인질문·최종발언까지 준비하며 근거 기반 주장과 상대 논리 분석을 경험했습니다." },
      { type:"LIBERAL", title:"창의적 사고와 글쓰기", meta:"기사 분석 스피치", desc:"사회 이슈 기사의 제목·구성·관점을 비판적으로 분석하고 개선 방향을 제안했습니다." },
      { type:"GLOBAL", title:"영어로 공부하는 아시아 경제의 이슈", meta:"일본 문화·관광 분석", desc:"실제 일본 여행 경험을 바탕으로 문화·사회·관광산업을 조사하고 분석했습니다." }
    ]
  },
  {
    year: "2025",
    grade: "2학년",
    label: "CONNECT",
    title: "사람과 조직에 관심을 넓힌 해",
    summary: "전공에서 사람과 조직을 바라보는 관점을 배우고, 1학년 때 쌓은 경험을 다른 학생에게 나누는 멘토 역할로 확장했습니다.",
    highlight: "SMILEAGE 멘토링 시작 · 서평쓰기 장려상 · 조직행동론 팀 프로젝트",
    items: [
      { type:"HRD", title:"SMILEAGE 외국어 포트폴리오 멘토링 시작", meta:"2025.1학기~", desc:"후배들의 외국어 활동과 목표를 듣고, 포트폴리오 방향과 학습 계획을 함께 정리하는 멘토 역할을 시작했습니다." },
      { type:"MAJOR", title:"조직행동론 · 트럼프 관세정책", meta:"팀 프로젝트 · PPT 제작", desc:"감정지능·거래적 리더십·권력 개념을 실제 정치·경제 사례에 적용해 분석했습니다." },
      { type:"AWARD", title:"도전! 선문 독서왕 서평쓰기 대회", meta:"장려상", desc:"『돈으로 살 수 없는 것들』을 자기결정이론, 조직관리, 윤리경영 관점과 연결해 해석했습니다." },
      { type:"LIBERAL", title:"생활예절과 문화", meta:"3편의 에세이", desc:"세대갈등, 명절문화, 생활예절을 통해 타인 존중과 관계 속 소통의 의미를 탐색했습니다." },
      { type:"FIELD", title:"아산의 이해와 탐방", meta:"지역문화 탐방", desc:"박물관·현충사 등 아산 지역의 역사·문화·관광 자원을 현장과 자료조사로 분석했습니다." }
    ]
  },
  {
    year: "2026",
    grade: "3학년",
    label: "DEFINE",
    title: "HRD·인사라는 방향을 선명하게 만든 해",
    summary: "멘토링을 계속하면서 글로벌 경험과 디지털 프로젝트를 더했고, 사람의 성장과 조직을 연결하는 HRD·인사 진로를 구체화했습니다.",
    highlight: "HUMAN LINK 1차 합격 · 캐나다 FLY · AI PetMart · 장기 멘토링",
    items: [
      { type:"PORTFOLIO", title:"HUMAN LINK 외국어 포트폴리오", meta:"1차 합격", desc:"ME→YOU→WORLD→WORK→NEXT 흐름으로 3년간의 외국어 경험을 HRD 진로와 연결했습니다." },
      { type:"HRD", title:"SMILEAGE 장기 멘토링", meta:"2026.2학기 현재까지", desc:"학생별 작성 동기·경험·목표를 파악하고 프로그램 추천, 학년별 계획, 스토리 구성, 재점검까지 맞춤형 컨설팅을 이어가고 있습니다." },
      { type:"GLOBAL", title:"선문글로벌 FLY TRACK 1 · 캐나다", meta:"3주 · Calgary", desc:"수업·발표·다국적 교류를 통해 영어를 시험 과목이 아닌 관계와 문화를 이해하는 도구로 확장했습니다." },
      { type:"DIGITAL", title:"AI를 활용한 PetMart 웹 서비스", meta:"AI·웹 프로젝트", desc:"상품 탐색, 로그인·회원가입, 찜, 장바구니, 결제 흐름을 구현하고 AI를 코드 작성·오류 분석·문제 해결에 활용했습니다." },
      { type:"ESG", title:"ESG 팀 공모 프로젝트 ‘이음(I-Eum)’", meta:"팀장 · 7월까지 참여", desc:"어린이 창업 체험 교실을 기획하고 수업안·QR 보드게임·현장 연계를 준비했습니다. 운영 과정의 어려움을 경험한 뒤 활동을 중도 종료했습니다." }
    ]
  }
];

const awards = [
  ["2024.11.20","대상","제2회 SMILEAGE 외국어 포트폴리오 경진대회"],
  ["2024.11.22","최우수상","도전장학 스토리캐스팅"],
  ["2024.11.20","장려상","학습법 관련 우수사례 공모전"],
  ["2025.10.29","장려상","도전! 선문 독서왕 서평쓰기 대회"]
];

const linkSkills = [
  ["L","Listen","경청","상대의 목표와 어려움을 먼저 듣고 요구를 파악합니다."],
  ["I","Interact","소통","배경이 다른 사람과 관계를 만들고 의견을 나눕니다."],
  ["N","Nurture","성장 지원","학습자에게 맞는 방법과 다음 행동을 함께 찾습니다."],
  ["K","Knit","연결","사람·경험·정보를 연결해 하나의 결과물로 완성합니다."]
];

export default function App(){
  return (
    <main className="site" id="top">
      <header className="header">
        <a className="brand" href="#top"><span>KHY</span><b>김희연 Portfolio</b></a>
        <nav>
          <a href="#timeline">Timeline</a>
          <a href="#awards">Awards</a>
          <a href="#competency">Competency</a>
          <a href="#next">Next</a>
        </nav>
      </header>

      <section className="hero">
        <div className="heroTopline"><span>2024 — 2026</span><span>SUN MOON UNIVERSITY · BUSINESS ADMINISTRATION</span></div>
        <div className="heroGrid">
          <div className="heroCopy">
            <p className="eyebrow">UNIVERSITY PORTFOLIO</p>
            <h1>경험을 기록하고,<br/>사람의 성장을 연결해온<br/><em>김희연</em>입니다.</h1>
            <p className="heroDesc">전공·외국어·멘토링·글로벌·디지털 경험을 통해 무엇을 잘하는지보다, 어떤 일을 오래 의미 있게 할 수 있는지를 찾아왔습니다. 현재는 사람의 성장과 조직의 발전을 연결하는 HRD·인사 분야를 준비하고 있습니다.</p>
            <div className="heroActions">
              <a href="#timeline">3년의 기록 보기</a>
              <a className="ghost" href="#awards">수상 성과 보기</a>
            </div>
          </div>
          <aside className="heroPanel">
            <div><span>01</span><p>2024</p><b>Explore</b></div>
            <div><span>02</span><p>2025</p><b>Connect</b></div>
            <div><span>03</span><p>2026</p><b>Define</b></div>
          </aside>
        </div>
        <div className="heroFoot">
          <span>4 Awards</span><span>3 Years</span><span>Mentoring</span><span>Global</span><span>AI & Digital</span>
        </div>
      </section>

      <section className="intro">
        <div>
          <p className="eyebrow">MY DIRECTION</p>
          <h2>활동의 개수보다,<br/>경험이 어떻게 다음 선택으로 이어졌는지를 보여줍니다.</h2>
        </div>
        <p>1학년에는 넓게 경험하며 나를 탐색했고, 2학년에는 사람과 조직에 대한 관심을 키웠습니다. 3학년에는 멘토링·캐나다 연수·디지털 프로젝트를 통해 HRD·인사라는 진로를 구체화하고 있습니다.</p>
      </section>

      <section className="timelineSection" id="timeline">
        <div className="sectionTitle">
          <p className="eyebrow">YEAR BY YEAR</p>
          <h2>대학생활 3년의 성장 기록</h2>
          <p>연도별로 활동을 나열하는 대신, 그 해의 방향과 대표 경험이 함께 보이도록 구성했습니다.</p>
        </div>

        {years.map((year, yi)=>(
          <article className="yearBlock" key={year.year}>
            <div className="yearRail">
              <span>{String(yi+1).padStart(2,"0")}</span>
              <strong>{year.year}</strong>
              <small>{year.grade}</small>
              <i />
            </div>
            <div className="yearContent">
              <div className="yearIntro">
                <div>
                  <p className="yearLabel">{year.label}</p>
                  <h3>{year.title}</h3>
                </div>
                <div>
                  <p>{year.summary}</p>
                  <span className="highlight">{year.highlight}</span>
                </div>
              </div>
              <div className="yearCards">
                {year.items.map((item, idx)=>(
                  <article className={idx===0 ? "activityCard lead" : "activityCard"} key={item.title}>
                    <div className="cardMeta"><span>{item.type}</span><b>{item.meta}</b></div>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </article>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="awardSection" id="awards">
        <div className="sectionTitle light">
          <p className="eyebrow">AWARDS</p>
          <h2>기록으로 확인되는 성과</h2>
          <p>대학생활에서 공식 상장으로 확인된 수상 이력입니다.</p>
        </div>
        <div className="awardList">
          {awards.map(([date,result,title],i)=>(
            <article key={title}>
              <span>{String(i+1).padStart(2,"0")}</span>
              <div><small>{date}</small><h3>{title}</h3></div>
              <strong>{result}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="storySection">
        <div className="storyNumber">2024 → 2026</div>
        <div className="storyBody">
          <p className="eyebrow">SIGNATURE STORY</p>
          <h2>수상자에서 멘토로</h2>
          <p>2024년에는 나의 외국어 학습과 성장 과정을 포트폴리오로 정리해 대상을 받았습니다. 이후에는 그 경험을 후배에게 전달하는 멘토 역할로 확장했습니다.</p>
          <div className="storyFlow">
            <span>내 경험 기록</span><i>→</i><span>대상 수상</span><i>→</i><span>후배 멘토링</span><i>→</i><span>HRD 진로 구체화</span>
          </div>
        </div>
      </section>

      <section className="competencySection" id="competency">
        <div className="sectionTitle">
          <p className="eyebrow">COMPETENCY · LINK</p>
          <h2>경험에서 확인한 네 가지 역량</h2>
        </div>
        <div className="skillGrid">
          {linkSkills.map(([letter,en,kr,desc])=>(
            <article key={letter}>
              <strong>{letter}</strong>
              <div><span>{en}</span><h3>{kr}</h3><p>{desc}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="nextSection" id="next">
        <div>
          <p className="eyebrow">NOW</p>
          <h2>사람을 이해하는 경험을<br/>HRD·인사 역량으로 정리하는 중입니다.</h2>
        </div>
        <div className="nextCards">
          <article><span>01</span><h3>직무 이해</h3><p>HRD·인사 직무와 기업별 요구역량을 구체적으로 비교합니다.</p></article>
          <article><span>02</span><h3>실무 경험</h3><p>인턴과 일경험을 통해 교육·인사 운영을 직접 경험합니다.</p></article>
          <article><span>03</span><h3>디지털 활용</h3><p>AI 활용 경험을 문서·데이터 기반 HR 업무로 확장합니다.</p></article>
          <article><span>04</span><h3>글로벌 소통</h3><p>영어 학습과 해외 경험을 이어가며 다양한 배경의 구성원과 소통합니다.</p></article>
        </div>
      </section>

      <footer>
        <div><strong>김희연</strong><span>Business Administration · HRD & HR</span></div>
        <a href="#top">BACK TO TOP ↑</a>
      </footer>
    </main>
  );
}