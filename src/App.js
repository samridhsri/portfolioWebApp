import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/layout/Layout';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ResumePage from './pages/ResumePage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import '../src/stylesheets/portfolio.css';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout puzzleType="home"><HomePage /></Layout>} />
          <Route path="/about" element={<Layout puzzleType="about"><AboutPage /></Layout>} />
          <Route path="/resume" element={<Layout puzzleType="home"><ResumePage /></Layout>} />
          <Route path="/projects/:projectId" element={<Layout puzzleType={null}><ProjectDetailPage /></Layout>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
