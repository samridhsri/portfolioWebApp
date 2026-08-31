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

  // Responsive scale factor: on mobile (< 640px) shrink to ~45-55px, tablet (~65-75px), desktop (~85-110px)
  const isMobile = w < 640;
  const isTablet = w >= 640 && w < 1024;
  const s = (baseSize) => Math.round(baseSize * (isMobile ? 0.48 : isTablet ? 0.72 : 1.0));

  const positions = {
    home: [
      // Top corners & floating accents
      { id: 1, x: Math.max(15, w * 0.04), y: Math.max(70, h * 0.14), size: s(105) },
      { id: 2, x: Math.max(w - (isMobile ? 70 : 160), w * 0.88), y: Math.max(65, h * 0.12), size: s(98) },
      { id: 11, x: Math.max(w * 0.18, 50), y: Math.max(40, h * 0.06), size: s(80) },
      { id: 12, x: Math.max(w * 0.78, w - (isMobile ? 85 : 200)), y: Math.max(45, h * 0.07), size: s(82) },

      // Mid-lateral flanks
      { id: 3, x: Math.max(10, w * 0.03), y: Math.max(220, h * 0.38), size: s(90) },
      { id: 4, x: Math.max(w - (isMobile ? 65 : 150), w * 0.90), y: Math.max(210, h * 0.36), size: s(94) },
      { id: 5, x: Math.max(18, w * 0.05), y: Math.max(340, h * 0.58), size: s(88) },
      { id: 6, x: Math.max(w - (isMobile ? 75 : 170), w * 0.87), y: Math.max(330, h * 0.56), size: s(100) },

      // Lower viewport & bottom periphery
      { id: 7, x: Math.max(25, w * 0.07), y: Math.max(460, h * 0.78), size: s(95) },
      { id: 8, x: Math.max(w - (isMobile ? 70 : 165), w * 0.89), y: Math.max(450, h * 0.76), size: s(108) },
      { id: 9, x: Math.max(w * 0.22, 60), y: Math.max(h - (isMobile ? 80 : 130), 500), size: s(86) },
      { id: 10, x: Math.max(w * 0.74, w - (isMobile ? 110 : 260)), y: Math.max(h - (isMobile ? 75 : 125), 490), size: s(92) },
    ],
    about: [
      { id: 1, x: Math.max(w - (isMobile ? 75 : 165), w * 0.87), y: Math.max(75, h * 0.15), size: s(105) },
      { id: 2, x: Math.max(18, w * 0.04), y: Math.max(65, h * 0.12), size: s(98) },
      { id: 11, x: Math.max(w * 0.22, 60), y: Math.max(40, h * 0.06), size: s(80) },
      { id: 12, x: Math.max(w * 0.75, w - (isMobile ? 90 : 210)), y: Math.max(45, h * 0.07), size: s(82) },

      { id: 3, x: Math.max(w - (isMobile ? 65 : 155), w * 0.89), y: Math.max(220, h * 0.38), size: s(92) },
      { id: 4, x: Math.max(15, w * 0.05), y: Math.max(210, h * 0.35), size: s(96) },
      { id: 5, x: Math.max(20, w * 0.04), y: Math.max(340, h * 0.58), size: s(88) },
      { id: 6, x: Math.max(w - (isMobile ? 70 : 160), w * 0.88), y: Math.max(330, h * 0.55), size: s(98) },

      { id: 7, x: Math.max(w * 0.76, w - (isMobile ? 110 : 250)), y: Math.max(h - (isMobile ? 80 : 130), 480), size: s(100) },
      { id: 8, x: Math.max(w * 0.18, 50), y: Math.max(h - (isMobile ? 75 : 125), 470), size: s(90) },
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
