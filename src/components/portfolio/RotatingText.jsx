import { useState, useEffect, useRef } from "react";

const ROLES = [
  "Full Stack Developer",
  "AI Engineer",
  "LLMOps",
  "ML Engineer",
  "Data Science"
];

const RotatingText = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() =>
    typeof window !== "undefined" && window.matchMedia
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false
  );
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = (e) => {
      setPrefersReducedMotion(e.matches);
      if (e.matches) {
        setDisplayText(ROLES[0]);
      }
    };
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayText(ROLES[0]);
      return;
    }

    const currentRole = ROLES[roleIndex];
    // Natural typing speed: 65-80ms typing, 35ms deleting
    const speed = isDeleting ? 36 : 72;

    timerRef.current = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          // Pause at fully typed role before starting deletion
          timerRef.current = setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentRole.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
        }
      }
    }, speed);

    return () => clearTimeout(timerRef.current);
  }, [displayText, isDeleting, roleIndex, prefersReducedMotion]);

  return (
    <span
      className="font-medium tracking-wide inline-flex items-center justify-center min-w-[260px] sm:min-w-[320px]"
      style={{ color: "var(--accent-secondary)" }}
    >
      <span className="drop-shadow-sm whitespace-nowrap">
        {prefersReducedMotion ? ROLES[0] : displayText}
      </span>
      {!prefersReducedMotion && (
        <span
          className="typing-cursor ml-1.5 inline-block"
          style={{
            backgroundColor: "var(--accent-secondary)",
            boxShadow: "0 0 10px var(--accent-glow)",
            width: "2.5px",
            height: "1.1em"
          }}
          aria-hidden="true"
        />
      )}
    </span>
  );
};

export default RotatingText;


