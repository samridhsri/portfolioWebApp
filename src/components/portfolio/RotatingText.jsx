import { useState, useEffect, useRef } from "react";

const RotatingText = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const textsRef = useRef([
    "Full Stack Developer",
    "I design and build scalable systems with code, data, and intent.",
    "Full-Stack \u2022 Machine Learning \u2022 Systems",
  ]);

  useEffect(() => {
    const texts = textsRef.current;
    const currentText = texts[textIndex];
    const typingSpeed = isDeleting ? 30 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentText.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setTextIndex((prevIndex) => (prevIndex + 1) % textsRef.current.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex]);

  return (
    <span className="text-blue-300">
      {displayText}
      <span className="border-r-2 border-blue-300 animate-pulse ml-0.5">
        &nbsp;
      </span>
    </span>
  );
};

export default RotatingText;
