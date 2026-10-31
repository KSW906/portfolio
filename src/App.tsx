const years = [
  {
    year: "2024",
    grade: "1학년",
    label: "EXPLORE",
    title: "경험의 폭을 넓히며, 나를 이해하기 시작했습니다.",
    summary: "경영학의 기초를 배우고 외국어·교육·멘토링 활동을 경험하면서 내가 어떤 방식으로 배우고, 어떤 순간에 가장 몰입하는지를 발견한 시기입니다.",
    note: "기록과 실행을 통해 ‘성장하는 사람’의 방식을 배운 해",
    items: [
      { type:"AWARD", title:"제2회 SMILEAGE 외국어 포트폴리오 경진대회", meta:"대상", desc:"1년간의 외국어 학습을 목표·과정·성과·성찰로 구조화해 포트폴리오로 완성했습니다.", featured:true },
      { type:"AWARD", title:"도전장학 스토리캐스팅", meta:"최우수상", desc:"대학생활 4개년 목표와 실천계획을 세우고 실제 달성 과정을 점검했습니다." },
      { type:"AWARD", title:"학습법 관련 우수사례 공모전", meta:"장려상", desc:"전공과 외국어 학습에서 직접 활용한 학습법과 성과를 사례로 정리했습니다." },
      { type:"MENTORING", title:"선문학습공동체 디딤돌그룹", meta:"리더·튜터 · 우수팀", desc:"약 10주간 토익 학습계획과 자료를 만들고 팀원의 어려움에 맞춰 학습 방식을 조정했습니다.", featured:true },
      { type:"MENTORING", title:"늘벗 공부방 영어 멘토링", meta:"약 7개월", desc:"중학생 멘티의 수준을 진단하고 어휘·문법·독해를 맞춤형으로 지도했습니다." },
      { type:"EDUCATION", title:"선문 초등학생 영어캠프", meta:"보조요원", desc:"수업보조, 학생 인솔, 원어민 교수와 학생 간 소통을 지원하며 교육 현장을 경험했습니다." },
      { type:"MAJOR", title:"경영소프트웨어 · 2025년 한국 경제 전망", meta:"전공 보고서", desc:"국제정세, 성장률, 산업, 고용, 물가·금리를 분석하고 기업·정부 대응 전략을 제안했습니다." },
      { type:"MAJOR", title:"경제학원론 · 자유무역 vs 보호무역", meta:"팀 보고서", desc:"자유무역의 효과와 고용·불평등·무역불균형 문제를 함께 검토했습니다." },
      { type:"LIBERAL", title:"읽기와 토론 · 기아와 식량 낭비", meta:"토론 프로젝트", desc:"입론·반론·확인질문·최종발언까지 준비하며 근거 기반 주장과 상대 논리 분석을 경험했습니다." },
      { type:"LIBERAL", title:"창의적 사고와 글쓰기", meta:"기사 분석 스피치", desc:"사회 이슈 기사의 제목·구성·관점을 비판적으로 분석하고 개선 방향을 제안했습니다." },
      { type:"GLOBAL", title:"영어로 공부하는 아시아 경제의 이슈", meta:"일본 문화·관광 분석", desc:"실제 일본 여행 경험을 바탕으로 문화·사회·관광산업을 조사하고 분석했습니다." }
    ]
  },
  {
    year: "2025",
    grade: "2학년",
    label: "CONNECT",
    title: "사람과 조직을 보는 관점이 생겼습니다.",
    summary: "조직행동론을 통해 사람의 행동과 동기를 이론적으로 바라보기 시작했고, 1학년 때 쌓은 경험을 후배에게 나누는 멘토 역할로 확장했습니다.",
    note: "나의 경험이 다른 사람의 성장 지원으로 이어진 해",
    items: [
      { type:"HRD", title:"SMILEAGE 외국어 포트폴리오 멘토링 시작", meta:"2025.1학기~", desc:"후배들의 외국어 활동과 목표를 듣고 포트폴리오 방향과 학습 계획을 함께 정리하는 멘토 역할을 시작했습니다.", featured:true },
      { type:"MAJOR", title:"조직행동론 · 트럼프 관세정책", meta:"팀 프로젝트 · PPT 제작", desc:"감정지능·거래적 리더십·권력 개념을 실제 정치·경제 사례에 적용해 분석했습니다.", featured:true },
      { type:"AWARD", title:"도전! 선문 독서왕 서평쓰기 대회", meta:"장려상", desc:"『돈으로 살 수 없는 것들』을 자기결정이론, 조직관리, 윤리경영 관점과 연결해 해석했습니다." },
      { type:"LIBERAL", title:"생활예절과 문화", meta:"3편의 에세이", desc:"세대갈등, 명절문화, 생활예절을 통해 타인 존중과 관계 속 소통의 의미를 탐색했습니다." },
      { type:"FIELD", title:"아산의 이해와 탐방", meta:"지역문화 탐방", desc:"박물관·현충사 등 아산 지역의 역사·문화·관광 자원을 현장과 자료조사로 분석했습니다." }
    ]
  },
  {
    year: "2026",
    grade: "3학년",
    label: "DEFINE",
    title: "HRD·인사라는 방향을 구체적으로 선택했습니다.",
    summary: "장기 멘토링, 글로벌 경험, 디지털 프로젝트를 통해 사람의 성장과 조직의 목표를 연결하는 일을 나의 진로로 구체화하고 있습니다.",
    note: "경험을 HR 역량과 진로 언어로 다시 정의한 해",
    items: [
      { type:"PORTFOLIO", title:"HUMAN LINK 외국어 포트폴리오", meta:"1차 합격", desc:"ME→YOU→WORLD→WORK→NEXT 흐름으로 3년간의 외국어 경험을 HRD 진로와 연결했습니다.", featured:true },
      { type:"HRD", title:"SMILEAGE 장기 멘토링", meta:"2026.2학기 현재까지", desc:"학생별 작성 동기·경험·목표를 파악하고 프로그램 추천, 학년별 계획, 스토리 구성, 재점검까지 맞춤형 컨설팅을 이어가고 있습니다.", featured:true },
      { type:"GLOBAL", title:"선문글로벌 FLY TRACK 1 · 캐나다", meta:"3주 · Calgary", desc:"수업·발표·다국적 교류를 통해 영어를 시험 과목이 아닌 관계와 문화를 이해하는 도구로 확장했습니다.", featured:true },
      { type:"DIGITAL", title:"AI를 활용한 PetMart 웹 서비스", meta:"AI·웹 프로젝트", desc:"상품 탐색, 로그인·회원가입, 찜, 장바구니, 결제 흐름을 구현하고 AI를 코드 작성·오류 분석·문제 해결에 활용했습니다." },
      { type:"ESG", title:"ESG 팀 공모 프로젝트 ‘이음(I-Eum)’", meta:"팀장 · 7월까지 참여", desc:"어린이 창업 체험 교실을 기획하고 수업안·QR 보드게임·현장 연계를 준비했습니다. 운영의 어려움을 경험한 뒤 활동을 중도 종료했습니다." }
    ]
  }
];

const awards = [
  ["2024.11.20","대상","제2회 SMILEAGE 외국어 포트폴리오 경진대회"],
  ["2024.11.22","최우수상","도전장학 스토리캐스팅"],
  ["2024.11.20","장려상","학습법 관련 우수사례 공모전"],
  ["2025.10.29","장려상","도전! 선문 독서왕 서평쓰기 대회"]
];

const strengths = [
  ["LISTEN","경청","상대의 목표와 어려움을 먼저 듣고 요구를 파악합니다."],
  ["DESIGN","성장 설계","학습자와 팀에 필요한 다음 행동을 구조화합니다."],
  ["CONNECT","연결","경험·사람·정보를 하나의 흐름으로 묶어 결과물로 만듭니다."],
  ["ADAPT","적응","새로운 문화·도구·환경에서도 빠르게 배우고 관계를 만듭니다."]
];

export default function App(){
  return (
    <main className="site" id="top">
      <header className="header">
        <a className="brand" href="#top">
          <span className="brandMark">KH</span>
          <span className="brandText">HUIYEON KIM</span>
        </a>
        <nav>
          <a href="#story">Story</a>
          <a href="#timeline">Journey</a>
          <a href="#awards">Awards</a>
          <a href="#strengths">Strengths</a>
        </nav>
      </header>

      <section className="hero">
        <div className="heroMeta">
          <span>BUSINESS ADMINISTRATION</span>
          <span>HR · HRD PORTFOLIO</span>
          <span>2024—2026</span>
        </div>

        <div className="heroBody">
          <div className="heroCopy">
            <p className="eyebrow">PEOPLE · GROWTH · ORGANIZATION</p>
            <h1>
              사람을 이해하고,<br/>
              성장을 돕고,<br/>
              <em>조직과 연결합니다.</em>
            </h1>
            <p className="heroDesc">
              다양한 경험을 통해 제가 오래 몰입할 수 있는 일은
              사람의 변화와 성장을 가까이에서 돕는 일이라는 것을 발견했습니다.
              현재는 그 경험을 HRD·인사라는 진로로 연결하고 있습니다.
            </p>
          </div>

          <aside className="heroAside">
            <div className="profileStamp">
              <span>KIM</span>
              <strong>희연</strong>
              <small>HRD · PEOPLE DEVELOPMENT</small>
            </div>
            <div className="heroQuote">
              <span>MY QUESTION</span>
              <p>“사람이 더 잘할 수 있도록 돕는 일은 어떻게 설계할 수 있을까?”</p>
            </div>
          </aside>
        </div>

        <div className="heroFooter">
          <a href="#timeline">EXPLORE MY JOURNEY ↓</a>
          <div><span>4 Awards</span><span>Mentoring</span><span>Global</span><span>AI & Digital</span></div>
        </div>
      </section>

      <section className="storyIntro" id="story">
        <div className="storyLabel">01 · ABOUT</div>
        <div className="storyHeadline">
          <p className="eyebrow">MY DIRECTION</p>
          <h2>성장 경험을 기록하던 학생에서,<br/>다른 사람의 성장을 돕는 멘토로.</h2>
        </div>
        <div className="storyText">
          <p>1학년에는 전공·외국어·교육 활동을 넓게 경험했습니다. 활동을 기록하고 성찰하면서 스스로 성장하는 방법을 배웠습니다.</p>
          <p>2학년부터는 외국어 포트폴리오 멘토링을 통해 다른 학생의 목표와 고민을 듣고, 경험을 정리하고, 다음 행동을 함께 설계하는 역할을 시작했습니다.</p>
          <p>그 경험이 쌓이며 현재는 <b>사람의 성장과 조직의 목표를 연결하는 HRD·인사</b>를 진로로 구체화하고 있습니다.</p>
        </div>
      </section>

      <section className="signature">
        <div className="signatureTop">
          <span>SIGNATURE STORY</span>
          <span>2024 → 2026</span>
        </div>
        <div className="signatureGrid">
          <div className="signatureBig">FROM<br/>ME</div>
          <div className="signatureArrow">→</div>
          <div className="signatureBig accent">TO<br/>PEOPLE</div>
          <div className="signatureExplain">
            <p>2024</p><strong>나의 성장을 기록</strong>
            <i />
            <p>2025</p><strong>후배의 성장을 지원</strong>
            <i />
            <p>2026</p><strong>HRD 진로로 연결</strong>
          </div>
        </div>
      </section>

      <section className="timeline" id="timeline">
        <div className="timelineHeader">
          <div className="storyLabel">02 · JOURNEY</div>
          <div>
            <p className="eyebrow">YEAR BY YEAR</p>
            <h2>대학생활 3년의 변화</h2>
            <p>연도별로 무엇을 했는지보다, 그 경험이 어떻게 다음 선택으로 이어졌는지를 보여줍니다.</p>
          </div>
        </div>

        {years.map((year, yi)=>(
          <section className="yearSection" key={year.year}>
            <aside className="yearSticky">
              <span>{String(yi+1).padStart(2,"0")}</span>
              <strong>{year.year}</strong>
              <small>{year.grade}</small>
              <b>{year.label}</b>
            </aside>

            <div className="yearMain">
              <div className="yearLead">
                <h3>{year.title}</h3>
                <div>
                  <p>{year.summary}</p>
                  <span>{year.note}</span>
                </div>
              </div>

              <div className="yearItems">
                {year.items.map((item)=>(
                  <article className={item.featured ? "workCard featured" : "workCard"} key={item.title}>
                    <div className="workPreview">
                      <span>{item.type}</span>
                      <b>{item.meta}</b>
                      <div className="mediaSlot">자료 이미지 추가 예정</div>
                    </div>
                    <div className="workText">
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        ))}
      </section>

      <section className="awardSection" id="awards">
        <div className="awardHeader">
          <div className="storyLabel">03 · AWARDS</div>
          <div>
            <p className="eyebrow">RESULTS</p>
            <h2>과정을 끝까지 완성한 결과</h2>
          </div>
        </div>
        <div className="awardGrid">
          {awards.map(([date,result,title],i)=>(
            <article key={title}>
              <span>{String(i+1).padStart(2,"0")}</span>
              <small>{date}</small>
              <h3>{title}</h3>
              <strong>{result}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="strengthSection" id="strengths">
        <div className="strengthHeader">
          <div className="storyLabel">04 · STRENGTHS</div>
          <div>
            <p className="eyebrow">HOW I WORK</p>
            <h2>HRD·인사로 연결되는 나의 방식</h2>
          </div>
        </div>
        <div className="strengthGrid">
          {strengths.map(([en,kr,desc],i)=>(
            <article key={en}>
              <span>{String(i+1).padStart(2,"0")}</span>
              <small>{en}</small>
              <h3>{kr}</h3>
              <p>{desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="future">
        <div className="futureLabel">NEXT</div>
        <div>
          <p className="eyebrow">MY NEXT CHAPTER</p>
          <h2>이제는 실제 조직 안에서<br/>사람의 성장을 돕는 경험을 쌓고 싶습니다.</h2>
        </div>
        <div className="futureList">
          <span>HRD·인사 직무 분석</span>
          <span>교육·인사 운영 실무 경험</span>
          <span>AI·데이터 활용 역량</span>
          <span>글로벌 커뮤니케이션</span>
        </div>
      </section>

      <footer>
        <div>
          <strong>김희연 · KIM HUIYEON</strong>
          <span>Business Administration · HR / HRD</span>
        </div>
        <a href="#top">BACK TO TOP ↑</a>
      </footer>
    </main>
  );
}