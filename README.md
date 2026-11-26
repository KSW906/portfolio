# Hui Yeon Portfolio

김희연의 개인 포트폴리오 웹사이트입니다.

## 실행

```bash
npm install
npm run dev
```

## 배포

Vercel에서 이 GitHub 저장소를 Import한 뒤 기본 설정으로 배포할 수 있습니다.

- Framework Preset: Vite
- Build Command: `npm run build`
- Output Directory: `dist`

추후 개인 도메인을 연결하면 같은 저장소를 계속 수정하면서 동일한 주소로 운영할 수 있습니다.

## GPT 챗봇 (AI에게 물어보기)

사이트 오른쪽 아래 버튼으로 방문자가 포트폴리오에 대해 질문할 수 있습니다.
`api/chat.ts`(Vercel 서버리스 함수)가 OpenAI API를 호출하고, 답변 근거는 `api/chat.ts` 안의 `PROFILE`에 정리된 포트폴리오 내용입니다.

1. https://platform.openai.com/api-keys 에서 API 키를 발급합니다.
2. Vercel 프로젝트 → Settings → Environment Variables 에 `OPENAI_API_KEY`를 추가하고 다시 배포합니다.
3. (선택) `OPENAI_MODEL`로 모델을 바꿀 수 있습니다. 기본값은 `gpt-5-mini`입니다.

API 키는 서버에만 있고 브라우저로 전달되지 않습니다. 로컬에서 챗봇까지 테스트하려면 `.env`에 키를 넣고 `npx vercel dev`로 실행하세요 (`npm run dev`는 화면만 띄우고 `/api`는 동작하지 않습니다).
사이트 내용을 바꾸면 `api/chat.ts`의 `PROFILE`도 함께 고쳐 주세요.
