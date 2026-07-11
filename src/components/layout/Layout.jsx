import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PuzzlePiece from "../portfolio/PuzzlePiece";
import Navbar from "../portfolio/Navbar";
import ThemeToggle from "../portfolio/ThemeToggle";
import ChatWidget from "../portfolio/ChatWidget";

const getPuzzlePositions = (section) => {
  if (typeof window === 'undefined') return [];
  const w = window.innerWidth;
  const h = window.innerHeight;

  const positions = {
    home: [
      { id: 1, x: Math.max(30, w * 0.05), y: Math.max(120, h * 0.18), size: 110 },
      { id: 2, x: Math.max(w - 180, w * 0.85), y: Math.max(100, h * 0.15), size: 100 },
      { id: 3, x: Math.max(40, w * 0.06), y: Math.max(300, h * 0.72), size: 95 },
      { id: 4, x: Math.max(w - 160, w * 0.86), y: Math.max(300, h * 0.75), size: 115 },
      { id: 5, x: Math.max(w - 190, w * 0.88), y: Math.max(200, h * 0.45), size: 88 },
      { id: 6, x: Math.max(25, w * 0.04), y: Math.max(200, h * 0.46), size: 92 },
      { id: 7, x: Math.max(w * 0.22, 180), y: Math.max(h - 140, 480), size: 105 },
    ],
    about: [
      { id: 1, x: Math.max(w - 170, w * 0.85), y: Math.max(140, h * 0.2), size: 110 },
      { id: 2, x: Math.max(35, w * 0.05), y: Math.max(120, h * 0.16), size: 100 },
      { id: 3, x: Math.max(w - 180, w * 0.84), y: Math.max(320, h * 0.75), size: 95 },
      { id: 4, x: Math.max(45, w * 0.07), y: Math.max(300, h * 0.68), size: 115 },
      { id: 5, x: Math.max(30, w * 0.04), y: Math.max(200, h * 0.42), size: 88 },
      { id: 6, x: Math.max(w - 160, w * 0.86), y: Math.max(220, h * 0.48), size: 92 },
      { id: 7, x: Math.max(w * 0.72, 220), y: Math.max(h - 130, 460), size: 105 },
    ],
  };

  return positions[section] || positions.home;
};

const Layout = ({ children, puzzleType = "home" }) => {
  const location = useLocation();
  const [currentPuzzles, setCurrentPuzzles] = useState(() =>
    puzzleType ? getPuzzlePositions(puzzleType) : []
  );
  const [taglineOpacity, setTaglineOpacity] = useState(1);

  useEffect(() => {
    const updatePositions = () => {
      if (puzzleType) {
        setCurrentPuzzles(getPuzzlePositions(puzzleType));
      } else {
        setCurrentPuzzles([]);
      }
    };

    updatePositions();
    window.addEventListener("resize", updatePositions);
    return () => window.removeEventListener("resize", updatePositions);
  }, [puzzleType]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const fadeStart = 60;
      const fadeEnd = 260;
      const opacity = scrollY <= fadeStart
        ? 1
        : Math.max(0, 1 - (scrollY - fadeStart) / (fadeEnd - fadeStart));
      setTaglineOpacity(opacity);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen grid-bg relative overflow-x-hidden">
      {/* Ambient Floating Glow Orbs */}
      <div className="ambient-glow-orb-1" aria-hidden="true" />
      <div className="ambient-glow-orb-2" aria-hidden="true" />

      {/* Puzzle Pieces Background */}
      {currentPuzzles.map((piece) => (
        <PuzzlePiece
          key={piece.id}
          id={piece.id}
          initialX={piece.x}
          initialY={piece.y}
          size={piece.size}
          isMoving={true}
        />
      ))}

      {/* Puzzle Tagline */}
      <div className="puzzle-tagline" style={{ opacity: taglineOpacity }}>
        "Every interface is a puzzle. I enjoy solving the hard parts."
      </div>

      {/* Theme Toggle Button */}
      <ThemeToggle />

      {/* RAG Chat Widget */}
      <ChatWidget />

      {/* Main Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <Navbar />

        {/* Content Sections */}
        <div className="container mx-auto px-4 sm:px-8 py-8 sm:py-16" key={location.pathname}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
