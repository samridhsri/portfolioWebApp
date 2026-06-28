import { useState, useEffect, useRef } from "react";

const TARGET_TEXT = "Hey, I'm Samridh!";

const TypingName = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() =>
    typeof window !== "undefined" && window.matchMedia
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false
  );
  const [displayText, setDisplayText] = useState(() =>
    prefersReducedMotion ? TARGET_TEXT : ""
  );
  const [isDone, setIsDone] = useState(() => prefersReducedMotion);
  const timerRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = (e) => {
      setPrefersReducedMotion(e.matches);
      if (e.matches) {
        setDisplayText(TARGET_TEXT);
        setIsDone(true);
      }
    };
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayText(TARGET_TEXT);
      setIsDone(true);
      return;
    }

    if (displayText.length < TARGET_TEXT.length) {
      const nextChar = TARGET_TEXT[displayText.length];
      // Keystroke delays with organic variation and pause after punctuation
      let delay = 60 + Math.random() * 40;
      if (nextChar === "," || nextChar === "!") {
        delay += 180;
      }

      timerRef.current = setTimeout(() => {
        setDisplayText(TARGET_TEXT.slice(0, displayText.length + 1));
      }, delay);
    } else {
      setIsDone(true);
    }

    return () => clearTimeout(timerRef.current);
  }, [displayText, prefersReducedMotion]);

  return (
    <span className="inline-flex items-center justify-center gap-2 flex-wrap">
      <span className="gradient-text-shimmer drop-shadow-sm whitespace-nowrap">
        {prefersReducedMotion ? TARGET_TEXT : displayText}
      </span>
      {isDone && (
        <span className="animate-wave-hand inline-block" role="img" aria-label="Waving hand">
          👋
        </span>
      )}
      {!prefersReducedMotion && !isDone && (
        <span className="typing-cursor ml-1" aria-hidden="true" />
      )}
    </span>
  );
};

export default TypingName;


