import { FormEvent, useEffect, useRef, useState } from "react";

type Msg = { role: "user" | "assistant"; content: string };

const GREETING: Msg = {
  role: "assistant",
  content: "안녕하세요! 김희연의 포트폴리오에 대해 궁금한 점을 물어보세요."
};

const SUGGESTIONS = ["HR을 선택한 이유는?", "가장 큰 성과는?", "멘토링 경험 알려줘"];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([GREETING]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight });
  }, [messages, loading, open]);

  async function send(text: string) {
    const q = text.trim();
    if (!q || loading) return;
    const next: Msg[] = [...messages, { role: "user", content: q }];
    setMessages(next);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next.slice(1) })
      });
      const data = await res.json().catch(() => ({}));
      const reply = res.ok && data.reply ? data.reply : data.error || "답변을 가져오지 못했어요.";
      setMessages(m => [...m, { role: "assistant", content: reply }]);
    } catch {
      setMessages(m => [...m, { role: "assistant", content: "네트워크 오류가 났어요. 다시 시도해 주세요." }]);
    } finally {
      setLoading(false);
    }
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    send(input);
  }

  return (
    <div className="chatWidget">
      {open && (
        <section className="chatPanel" aria-label="포트폴리오 질문하기">
          <header>
            <strong>ASK ABOUT HUIYEON</strong>
            <button type="button" onClick={() => setOpen(false)} aria-label="닫기">×</button>
          </header>
          <div className="chatList" ref={listRef}>
            {messages.map((m, i) => (
              <p key={i} className={m.role}>{m.content}</p>
            ))}
            {loading && <p className="assistant typing">답변을 작성하고 있어요…</p>}
            {messages.length === 1 && (
              <div className="chatSuggest">
                {SUGGESTIONS.map(s => (
                  <button type="button" key={s} onClick={() => send(s)}>{s}</button>
                ))}
              </div>
            )}
          </div>
          <form onSubmit={onSubmit}>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="질문을 입력하세요"
              maxLength={500}
            />
            <button type="submit" disabled={loading || !input.trim()}>보내기</button>
          </form>
        </section>
      )}
      <button type="button" className="chatToggle" onClick={() => setOpen(o => !o)}>
        {open ? "닫기" : "AI에게 물어보기"}
      </button>
    </div>
  );
}
