import { useState, useRef, useEffect, useCallback } from "react";

const CHAT_API_URL =
  process.env.REACT_APP_CHAT_API_URL || "http://localhost:8000";

function renderBold(text) {
  return text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
    i % 2 === 1 ? <strong key={i}>{part}</strong> : part
  );
}

const STARTERS = [
  "What did you build at FairWAI?",
  "What distributed systems and ML projects have you built?",
  "What is your experience with LLM optimization and agents?",
];

const SOURCE_LABELS = {
  "about.md": "About",
  "education.md": "Education",
  "experience.md": "Experience",
  "projects.md": "Projects",
  "skills.md": "Skills",
  "faqs.md": "FAQ",
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [streaming, setStreaming] = useState(false);
  const bottomRef = useRef(null);
  const abortRef = useRef(null);

  useEffect(() => {
    fetch(`${CHAT_API_URL}/health`).catch(() => {});
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: streaming ? "auto" : "smooth" });
  }, [messages, streaming]);

  const sendMessage = useCallback(
    async (text) => {
      const userText = text ?? input.trim();
      if (!userText || streaming) return;

      const history = messages.map((m) => ({ role: m.role, content: m.content }));
      const nextMessages = [
        ...messages,
        { role: "user", content: userText },
        { role: "assistant", content: "", sources: [] },
      ];
      setMessages(nextMessages);
      setInput("");
      setStreaming(true);

      const ctrl = new AbortController();
      abortRef.current = ctrl;

      try {
        const res = await fetch(`${CHAT_API_URL}/chat`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: userText, history }),
          signal: ctrl.signal,
        });

        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        let buffer = "";

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          buffer += decoder.decode(value, { stream: true });

          const lines = buffer.split("\n");
          buffer = lines.pop();

          for (const line of lines) {
            if (!line.startsWith("data: ")) continue;
            const raw = line.slice(6).trim();
            if (raw === "[DONE]") break;
            try {
              const payload = JSON.parse(raw);
              setMessages((prev) => {
                const updated = [...prev];
                const last = { ...updated[updated.length - 1] };
                if (payload.sources) last.sources = payload.sources;
                if (payload.text) last.content += payload.text;
                if (payload.error) {
                  last.content = (last.content ? last.content + "\n" : "") + `Error: ${payload.error}`;
                }
                updated[updated.length - 1] = last;
                return updated;
              });
            } catch {
              // skip malformed SSE lines
            }
          }
        }
      } catch (err) {
        if (err.name !== "AbortError") {
          setMessages((prev) => {
            const updated = [...prev];
            const last = { ...updated[updated.length - 1] };
            last.content = "Connection error. Please try again.";
            updated[updated.length - 1] = last;
            return updated;
          });
        }
      } finally {
        setStreaming(false);
        abortRef.current = null;
      }
    },
    [input, messages, streaming]
  );

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleClose = () => {
    abortRef.current?.abort();
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating toggle button */}
      <button
        className="chat-widget-btn"
        onClick={() => setIsOpen((o) => !o)}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
      </button>

      {/* Chat panel */}
      {isOpen && (
        <div className="chat-panel">
          {/* Header */}
          <div className="chat-panel-header">
            <div className="chat-panel-title">
              <span className="chat-panel-dot" />
              Ask Samridh
            </div>
            <button className="chat-panel-close" onClick={handleClose} aria-label="Close">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="chat-messages">
            {messages.length === 0 && (
              <div className="chat-starters">
                <p className="chat-starters-label">Ask me about:</p>
                {STARTERS.map((q) => (
                  <button
                    key={q}
                    className="chat-starter-btn"
                    onClick={() => sendMessage(q)}
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {messages.map((msg, i) => {
              const hasText = Boolean(msg.content && msg.content.trim());
              return (
                <div key={i} className={`chat-message chat-message-${msg.role}`}>
                  {hasText ? (
                    <div className="chat-bubble">{renderBold(msg.content.trimStart())}</div>
                  ) : (
                    msg.role === "assistant" && streaming && i === messages.length - 1 && (
                      <div className="chat-bubble chat-typing">
                        <span className="chat-dot" />
                        <span className="chat-dot" />
                        <span className="chat-dot" />
                      </div>
                    )
                  )}
                  {msg.role === "assistant" && hasText && msg.sources?.length > 0 && (
                    <div className="chat-sources">
                      {msg.sources.map((src) => (
                        <span key={src} className="chat-source-chip">
                          {SOURCE_LABELS[src] ?? src.replace(".md", "")}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="chat-input-row">
            <textarea
              className="chat-input"
              rows={1}
              placeholder="Ask me about my projects, stack, or background..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={streaming}
            />
            <button
              className="chat-send-btn"
              onClick={() => sendMessage()}
              disabled={streaming || !input.trim()}
              aria-label="Send"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
