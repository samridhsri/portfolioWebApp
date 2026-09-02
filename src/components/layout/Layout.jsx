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

  // Responsive scale factor: smaller on mobile/tablet to avoid cluttering reading space
  const isMobile = w < 640;
  const isTablet = w >= 640 && w < 1024;
  const s = (baseSize) => Math.round(baseSize * (isMobile ? 0.42 : isTablet ? 0.65 : 0.85));

  // Balanced peripheral distribution in outer margins only
  const positions = {
    home: [
      // Left peripheral margin
      { id: 1, x: Math.max(15, w * 0.03), y: Math.max(90, h * 0.16), size: s(85) },
      { id: 3, x: Math.max(12, w * 0.025), y: Math.max(280, h * 0.45), size: s(75) },
      { id: 5, x: Math.max(20, w * 0.035), y: Math.max(480, h * 0.72), size: s(80) },

      // Right peripheral margin
      { id: 2, x: Math.max(w - (isMobile ? 55 : 120), w * 0.92), y: Math.max(85, h * 0.14), size: s(82) },
      { id: 4, x: Math.max(w - (isMobile ? 50 : 115), w * 0.93), y: Math.max(260, h * 0.42), size: s(78) },
      { id: 6, x: Math.max(w - (isMobile ? 58 : 125), w * 0.91), y: Math.max(460, h * 0.70), size: s(85) },
    ],
    about: [
      { id: 1, x: Math.max(w - (isMobile ? 55 : 120), w * 0.92), y: Math.max(95, h * 0.16), size: s(85) },
      { id: 3, x: Math.max(15, w * 0.03), y: Math.max(260, h * 0.42), size: s(78) },
      { id: 5, x: Math.max(w - (isMobile ? 58 : 125), w * 0.91), y: Math.max(440, h * 0.68), size: s(82) },
      { id: 2, x: Math.max(18, w * 0.035), y: Math.max(85, h * 0.14), size: s(80) },
    ],
  };

  return positions[section] || positions.home;
};

const Layout = ({ children, puzzleType = "home" }) => {
  const location = useLocation();
  const [currentPuzzles, setCurrentPuzzles] = useState(() =>
    puzzleType ? getPuzzlePositions(puzzleType) : []
  );

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

  return (
    <div className="min-h-screen grid-bg relative overflow-x-hidden flex flex-col justify-between">
      {/* Ambient Floating Glow Orbs (Subtle Depth) */}
      <div className="ambient-glow-orb-1" aria-hidden="true" />
      <div className="ambient-glow-orb-2" aria-hidden="true" />

      {/* Subtle Peripheral Puzzle Pieces Background (Preserved Identity) */}
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

      {/* Theme Toggle Button */}
      <ThemeToggle />

      {/* RAG Chat Widget */}
      <ChatWidget />

      {/* Main Content */}
      <div className="relative z-10 flex-1">
        {/* Navigation */}
        <Navbar />

        {/* Content Sections */}
        <main className="container mx-auto px-4 sm:px-8 py-6 sm:py-12" key={location.pathname}>
          {children}
        </main>
      </div>

      {/* Elegant Footer with Signature Puzzle Tagline */}
      <footer className="relative z-10 py-6 border-t border-[var(--border-subtle)] text-center text-xs font-mono" style={{ color: 'var(--text-tertiary)' }}>
        <p className="italic">
          &ldquo;Every interface is a puzzle. I enjoy solving the hard parts.&rdquo;
        </p>
        <p className="text-[11px] text-[var(--text-tertiary)] opacity-60 mt-1">
          Designed &amp; engineered by Samridh Srivastava &bull; New York, NY
        </p>
      </footer>
    </div>
  );
};

export default Layout;
