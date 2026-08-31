import { useState, useEffect, useRef } from "react";

const ROLES = [
  "AI Engineer",
  "ML Engineer",
  "MLOps Engineer",
  "Software Engineer",
  "Data Scientist",
];

const RotatingText = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];

    if (isPaused) {
      timerRef.current = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, 2000);
      return () => clearTimeout(timerRef.current);
    }

    // Natural typing speed: ~70ms typing, ~35ms deleting
    const speed = isDeleting ? 35 : 70;

    timerRef.current = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          setIsPaused(true);
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
  }, [displayText, isDeleting, isPaused, roleIndex]);

  return (
    <span
      className="font-grotesk font-bold tracking-wide inline-flex items-center justify-center min-w-[260px] sm:min-w-[320px]"
      style={{ color: "var(--accent-secondary)" }}
    >
      <span className="drop-shadow-sm whitespace-nowrap">
        {displayText}
      </span>
      <span
        className="typing-cursor ml-1.5 inline-block"
        style={{
          backgroundColor: "var(--accent-secondary)",
          boxShadow: "0 0 10px var(--accent-glow)",
          width: "2.5px",
          height: "1.1em",
        }}
        aria-hidden="true"
      />
    </span>
  );
};

export default RotatingText;
