# 포트폴리오 작업 규칙

## 디자인 작업에는 supanova 스킬을 적용합니다

`.claude/skills/`에 있는 supanova 스킬을 상황에 맞춰 씁니다.

| 상황 | 쓸 스킬 |
|------|---------|
| 기존 화면을 다듬거나 "AI 티"를 없앨 때 | `supanova-redesign-engine` |
| 새 섹션이나 새 페이지를 처음 만들 때 | `supanova-design-engine` + `supanova-full-output` |
| 최고 완성도가 필요할 때 | 위 둘 + `supanova-premium-aesthetic` |

## 이 저장소에 맞춘 예외

supanova 스킬은 Tailwind CDN을 쓰는 단일 HTML 파일을 전제로 합니다.
이 사이트는 Vite + React + 일반 CSS(`src/styles.css`)이므로 다음은 따르지 않습니다.

- Tailwind CDN, 단일 HTML 출력 → 기존 React 컴포넌트와 CSS 변수로 같은 규칙을 구현합니다.
- 폰트 CDN → `pretendard`, `@fontsource-variable/geist` npm 패키지로 직접 번들합니다.
- Iconify 스크립트 → 필요한 아이콘만 인라인 SVG로 넣습니다.
- 가짜 후기, 가짜 지표, picsum 이미지 → 넣지 않습니다. 포트폴리오에는 실제 경험과 실제 숫자만 씁니다.

그 밖의 규칙(Pretendard, `word-break: keep-all`, 강조색 하나, 보라색 AI 그라데이션 금지,
섹션마다 다른 레이아웃, transform/opacity만 쓰는 모션, 자연스러운 한국어)은 그대로 지킵니다.
