import { useEffect, type CSSProperties } from "react";

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
  ["2024.11.20", "대상", "제2회 SMILEAGE 외국어 포트폴리오 경진대회"],
  ["2024.11.22", "최우수상", "도전장학 스토리캐스팅"],
  ["2024.11.20", "장려상", "학습법 관련 우수사례 공모전"],
  ["2025.10.29", "장려상", "도전! 선문 독서왕 서평쓰기 대회"]
];

const metrics = [
  ["4", "회", "교내 공모전 수상", "대상 · 최우수상 포함"],
  ["7", "개월", "중학생 영어 멘토링", "늘벗 공부방"],
  ["10", "주", "토익 스터디 리더", "디딤돌그룹 우수팀"],
  ["3", "주", "캐나다 캘거리 연수", "FLY TRACK 1"]
];

const mentoringSteps = [
  ["듣기", "학생의 외국어 경험과 목표를 먼저 묻습니다."],
  ["정리", "흩어진 활동 사이의 연결고리를 함께 찾습니다."],
  ["피드백", "성찰이 빠진 부분을 짚고 다음 계획을 세웁니다."],
  ["성장", "다음 학기에 스스로 이어갈 수 있게 돕습니다."]
];

function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Archive({ items }: { items: string[] }) {
  return (
    <details className="archive reveal">
      <summary>
        <span>이 해의 다른 활동 {items.length}개</span>
        <i aria-hidden="true">+</i>
      </summary>
      <ol>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>
    </details>
  );
}

function YearHead({ year, step, title, text }: { year: string; step: string; title: string; text: string }) {
  return (
    <header className="yearHead reveal">
      <div className="yearNum">
        <strong>{year}</strong>
        <span>{step}</span>
      </div>
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
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
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
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
          <a href="#y2024">2024</a>
          <a href="#y2025">2025</a>
          <a href="#y2026">2026</a>
          <a href="#awards">수상</a>
        </div>
      </nav>

      <main id="top">
        <section className="hero">
          <div className="heroCopy">
            <p className="tag reveal">선문대학교 경영학과 · HRD·인사 지망</p>
            <h1 className="reveal" style={{ "--i": 1 } as CSSProperties}>
              사람을 이해하는 경험이 <em>HR을 향한 방향</em>이 되었습니다.
            </h1>
            <p className="lead reveal" style={{ "--i": 2 } as CSSProperties}>
              배우고 기록하는 데서 시작해, 다른 사람의 성장을 돕는 일로 넓혀 온 3년을 정리했습니다.
            </p>
            <div className="actions reveal" style={{ "--i": 3 } as CSSProperties}>
              <a href="#y2024" className="btn">
                3년의 기록 보기 <span className="btnIcon"><Arrow /></span>
              </a>
              <a href="#awards" className="btn ghost">수상 내역</a>
            </div>
          </div>

          <aside className="profile reveal" style={{ "--i": 2 } as CSSProperties}>
            <div className="profileInner">
              <div className="profileTop">
                <span className="avatar" aria-hidden="true">희연</span>
                <div>
                  <strong>김희연</strong>
                  <small>Kim Huiyeon</small>
                </div>
              </div>
              <dl>
                <div><dt>전공</dt><dd>경영학과 3학년</dd></div>
                <div><dt>관심 분야</dt><dd>HRD · 인재 육성 · 조직문화</dd></div>
                <div><dt>기록 기간</dt><dd className="num">2024 – 2026</dd></div>
              </dl>
              <p className="now">
                <span className="dot" aria-hidden="true" />
                지금은 SMILEAGE 장기 멘토링을 이어가고 있습니다.
              </p>
            </div>
          </aside>
        </section>

        <section className="metrics" aria-label="숫자로 본 활동">
          {metrics.map(([n, unit, label, sub], i) => (
            <div className="metric reveal" key={label} style={{ "--i": i } as CSSProperties}>
              <strong className="num">{n}<small>{unit}</small></strong>
              <p>{label}</p>
              <span>{sub}</span>
            </div>
          ))}
        </section>

        <section className="path">
          <h2 className="reveal">넓게 경험하고, 사람을 이해하고, 진로로 정의했습니다.</h2>
          <ol className="pathLine">
            {[
              ["2024", "탐색", "나에게 맞는 성장 방식 찾기"],
              ["2025", "연결", "다른 사람의 성장 돕기"],
              ["2026", "정의", "HRD·인사로 방향 잡기"]
            ].map(([y, s, d], i) => (
              <li key={y} className="reveal" style={{ "--i": i } as CSSProperties}>
                <a href={`#y${y}`}>
                  <span className="num">{y}</span>
                  <strong>{s}</strong>
                  <p>{d}</p>
                </a>
              </li>
            ))}
          </ol>
        </section>

        {/* 2024: 대표 사례 + 지그재그 */}
        <section className="year" id="y2024">
          <YearHead
            year="2024"
            step="1학년 · 탐색"
            title="나의 성장 방식을 먼저 배운 해"
            text="외국어 학습, 전공 과제, 멘토링과 공모전을 폭넓게 경험하며 스스로 계획하고 기록하고 돌아보는 습관을 만들었습니다."
          />

          <article className="lead2024 reveal">
            <div className="leadBadge">
              <span>SMILEAGE 경진대회</span>
              <strong>대상</strong>
            </div>
            <div>
              <h3>배운 것을 기록하자, 성장이 보이기 시작했습니다.</h3>
              <p>
                1년간의 외국어 학습을 목표·과정·성과·성찰로 정리한 포트폴리오로 제2회 SMILEAGE 외국어
                포트폴리오 경진대회에서 대상을 받았습니다.
              </p>
              <ul className="chips">
                <li>포트폴리오</li>
                <li>성찰 기록</li>
                <li>자기주도 학습</li>
              </ul>
            </div>
          </article>

          <div className="zig">
            <article className="reveal">
              <span className="kind">리더십</span>
              <h3>디딤돌그룹 리더·튜터</h3>
              <p>약 10주간 토익 학습계획과 자료를 만들고, 팀원마다 막히는 지점에 맞춰 학습 방식을 바꿨습니다.</p>
              <b>우수팀 선정</b>
            </article>
            <article className="reveal offset" style={{ "--i": 1 } as CSSProperties}>
              <span className="kind">멘토링</span>
              <h3>늘벗 공부방 영어 멘토링</h3>
              <p>약 7개월 동안 중학생 멘티의 수준을 진단하고 어휘·문법·독해를 맞춤형으로 지도했습니다.</p>
              <b>장기 관계 · 맞춤형 지원</b>
            </article>
          </div>

          <Archive items={archive2024} />
        </section>

        <blockquote className="bridge reveal">
          <p>
            내 성장을 기록하던 경험은, <em>다른 사람의 성장을 돕는 역할</em>로 이어졌습니다.
          </p>
        </blockquote>

        {/* 2025: 좌우 분할 + 프로세스 */}
        <section className="year tinted" id="y2025">
          <div className="yearInner">
            <YearHead
              year="2025"
              step="2학년 · 연결"
              title="사람을 이해하는 관점이 생긴 해"
              text="조직행동론으로 사람의 행동과 동기를 이론으로 바라보고, SMILEAGE 멘토링으로 실제 누군가의 성장 과정을 함께 설계하기 시작했습니다."
            />

            <div className="split">
              <article className="reveal">
                <span className="kind">SMILEAGE 멘토</span>
                <h3>답을 알려주기보다, 방향을 함께 찾는 사람으로.</h3>
                <p>
                  학생의 외국어 경험과 목표를 먼저 듣고, 활동 간 연결·성찰·향후 계획을 함께 정리했습니다.
                  1학년 때 받은 상이 다른 사람의 성장을 돕는 경험으로 바뀐 순간입니다.
                </p>
              </article>
              <ol className="steps reveal" style={{ "--i": 1 } as CSSProperties} aria-label="멘토링 진행 방식">
                {mentoringSteps.map(([t, d], i) => (
                  <li key={t}>
                    <span className="num">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <strong>{t}</strong>
                      <p>{d}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <Archive items={archive2025} />
          </div>
        </section>

        <blockquote className="bridge reveal">
          <p>
            사람을 돕는 경험이 쌓이자, 관심은 자연스럽게 <em>조직과 HRD</em>로 향했습니다.
          </p>
        </blockquote>

        {/* 2026: 벤토 그리드 */}
        <section className="year" id="y2026">
          <YearHead
            year="2026"
            step="3학년 · 정의"
            title="경험을 진로의 언어로 다시 정의한 해"
            text="멘토링을 이어가고, 캐나다에서 다양한 문화의 사람들과 소통하고, AI를 활용한 웹 프로젝트까지 경험하며 HRD·인사라는 방향을 구체화했습니다."
          />

          <div className="bento">
            <article className="b-canada reveal">
              <span className="kind">해외 연수 · 3주</span>
              <h3>캐나다 캘거리</h3>
              <p>영어를 시험 과목이 아니라, 사람과 문화를 잇는 도구로 처음 써 본 시간이었습니다.</p>
            </article>
            <article className="b-link reveal" style={{ "--i": 1 } as CSSProperties}>
              <span className="kind">HUMAN LINK · 1차 합격</span>
              <h3>3년의 외국어 경험을 하나의 진로 이야기로</h3>
              <p className="flow">나 → 너 → 세계 → 일 → 다음</p>
            </article>
            <article className="b-pet reveal" style={{ "--i": 2 } as CSSProperties}>
              <span className="kind">AI 웹 프로젝트</span>
              <h3>PetMart</h3>
              <p>로그인, 찜, 장바구니, 결제까지 사용자 흐름을 직접 구현하며 AI를 개발 보조 도구로 썼습니다.</p>
            </article>
          </div>

          <Archive items={archive2026} />
        </section>

        <section className="awards" id="awards">
          <div className="awardsHead reveal">
            <h2>결과로 남은 네 번의 수상</h2>
            <p>모두 &lsquo;기록하고 돌아보는 습관&rsquo;에서 출발한 결과입니다.</p>
          </div>
          <ul className="awardList">
            {awards.map(([date, result, title], i) => (
              <li key={title} className="reveal" style={{ "--i": i } as CSSProperties}>
                <time className="num">{date}</time>
                <p>{title}</p>
                <strong className={result === "대상" ? "top" : ""}>{result}</strong>
              </li>
            ))}
          </ul>
        </section>

        <section className="closing">
          <div className="closingInner">
            <p className="closingLabel reveal">왜 HR인가</p>
            <h2 className="reveal" style={{ "--i": 1 } as CSSProperties}>
              듣고, 성장을 설계하고, 사람을 잇는 일.
            </h2>
            <p className="reveal" style={{ "--i": 2 } as CSSProperties}>
              경청하고, 성장 과정을 설계하고, 사람과 경험을 연결하는 방식. 이것이 제가 HRD·인사에서 계속 키워
              가고 싶은 강점입니다.
            </p>
            <a href="#top" className="btn light reveal" style={{ "--i": 3 } as CSSProperties}>
              처음으로 <span className="btnIcon up"><Arrow /></span>
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>김희연 · 경영학과 · HR / HRD</span>
        <span className="num">© 2026</span>
      </footer>
    </>
  );
}
