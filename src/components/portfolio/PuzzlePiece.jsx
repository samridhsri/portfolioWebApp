import { useState, useEffect } from "react";

// Helper function to get computed CSS variable
const getCSSVariable = (variable) => {
  return getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
};

const createClassicPuzzlePiece = (tabTop, tabRight, tabBottom, tabLeft) => {
  let path = "M 20,20 ";

  // Top edge
  if (tabTop) {
    path += "L 40,20 C 40,12 45,8 50,8 C 55,8 60,12 60,20 L 80,20 ";
  } else if (tabTop === false) {
    path += "L 40,20 C 40,28 45,32 50,32 C 55,32 60,28 60,20 L 80,20 ";
  } else {
    path += "L 80,20 ";
  }

  // Right edge
  if (tabRight) {
    path += "L 80,40 C 88,40 92,45 92,50 C 92,55 88,60 80,60 L 80,80 ";
  } else if (tabRight === false) {
    path += "L 80,40 C 72,40 68,45 68,50 C 68,55 72,60 80,60 L 80,80 ";
  } else {
    path += "L 80,80 ";
  }

  // Bottom edge
  if (tabBottom) {
    path += "L 60,80 C 60,88 55,92 50,92 C 45,92 40,88 40,80 L 20,80 ";
  } else if (tabBottom === false) {
    path += "L 60,80 C 60,72 55,68 50,68 C 45,68 40,72 40,80 L 20,80 ";
  } else {
    path += "L 20,80 ";
  }

  // Left edge
  if (tabLeft) {
    path += "L 20,60 C 12,60 8,55 8,50 C 8,45 12,40 20,40 L 20,20 ";
  } else if (tabLeft === false) {
    path += "L 20,60 C 28,60 32,55 32,50 C 32,45 28,40 20,40 L 20,20 ";
  } else {
    path += "L 20,20 ";
  }

  path += "Z";
  return path;
};

const shapes = {
  1: createClassicPuzzlePiece(true, false, null, null),
  2: createClassicPuzzlePiece(null, true, false, null),
  3: createClassicPuzzlePiece(false, null, true, null),
  4: createClassicPuzzlePiece(null, false, null, true),
  5: createClassicPuzzlePiece(true, null, false, null),
  6: createClassicPuzzlePiece(null, true, null, false),
  7: createClassicPuzzlePiece(true, true, false, false),
};

const PuzzlePiece = ({ id, initialX, initialY, size, isMoving }) => {
  const [position, setPosition] = useState({ x: initialX, y: initialY });
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [themeColors, setThemeColors] = useState({
    primary: '#7c3aed',
    secondary: '#8b5cf6'
  });

  // Update colors when theme changes
  useEffect(() => {
    const updateColors = () => {
      const primary = getCSSVariable('--accent-primary') || '#7c3aed';
      const secondary = getCSSVariable('--accent-secondary') || '#8b5cf6';
      setThemeColors({ primary, secondary });
    };

    updateColors();

    // Watch for theme changes
    const observer = new MutationObserver(updateColors);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isDragging) {
      setPosition({ x: initialX, y: initialY });
    }
  }, [initialX, initialY, isDragging]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e) => {
      setPosition({
        x: e.clientX - offset.x,
        y: e.clientY - offset.y,
      });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, offset]);

  const pieceShape = shapes[id] || shapes[1];
  // Use theme colors with variations for each piece
  const pieceColor = {
    start: id % 2 === 0 ? themeColors.primary : themeColors.secondary,
    end: id % 2 === 0 ? themeColors.secondary : themeColors.primary
  };

  return (
    <svg
      className={`puzzle-piece ${isDragging ? "dragging" : ""} ${
        isMoving && !isDragging ? "moving" : ""
      }`}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
      width={size}
      height={size}
      viewBox="0 0 100 100"
      onMouseDown={handleMouseDown}
    >
      <defs>
        <linearGradient
          id={`grad-${id}`}
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop
            offset="0%"
            style={{ stopColor: pieceColor.start, stopOpacity: 1 }}
          />
          <stop
            offset="100%"
            style={{ stopColor: pieceColor.end, stopOpacity: 1 }}
          />
        </linearGradient>
        <filter id={`shadow-${id}`}>
          <feDropShadow dx="2" dy="2" stdDeviation="3" floodOpacity="0.5" />
        </filter>
      </defs>
      <path
        d={pieceShape}
        fill={`url(#grad-${id})`}
        stroke="var(--accent-primary)"
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
        filter={`url(#shadow-${id})`}
        style={{ strokeOpacity: 0.3 }}
      />
      <circle
        cx="35"
        cy="35"
        r="3"
        fill="rgba(255,255,255,0.25)"
        opacity="0.7"
      />
      <circle
        cx="55"
        cy="55"
        r="2.5"
        fill="rgba(255,255,255,0.2)"
        opacity="0.6"
      />
      <circle
        cx="45"
        cy="65"
        r="2"
        fill="rgba(255,255,255,0.15)"
        opacity="0.5"
      />
    </svg>
  );
};

export default PuzzlePiece;
