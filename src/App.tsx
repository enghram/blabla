import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Services from './components/pages/Services';
import Portfolio from './components/pages/Portfolio';
import CaseStudies from './components/pages/CaseStudies';
import CaseStudyDetail from './components/pages/CaseStudyDetail';
import Labs from './components/pages/Labs';
import Resume from './components/pages/Resume';
import Blog from './components/pages/Blog';
import Contact from './components/pages/Contact';
import Navigation from './components/Navigation';
import CustomCursor from './components/CustomCursor';
import Scanlines from './components/effects/Scanlines';
import NoiseTexture from './components/effects/NoiseTexture';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const navigateTo = (page: string) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage(page);
      setIsTransitioning(false);
      window.scrollTo(0, 0);
    }, 600);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home navigateTo={navigateTo} />;
      case 'about':
        return <About navigateTo={navigateTo} />;
      case 'services':
        return <Services navigateTo={navigateTo} />;
      case 'portfolio':
        return <Portfolio navigateTo={navigateTo} />;
      case 'case-studies':
        return <CaseStudies navigateTo={navigateTo} />;
      case 'case-study-detail':
        return <CaseStudyDetail navigateTo={navigateTo} />;
      case 'labs':
        return <Labs navigateTo={navigateTo} />;
      case 'resume':
        return <Resume navigateTo={navigateTo} />;
      case 'blog':
        return <Blog navigateTo={navigateTo} />;
      case 'contact':
        return <Contact navigateTo={navigateTo} />;
      default:
        return <Home navigateTo={navigateTo} />;
    }
  };

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <CustomCursor />
      <NoiseTexture />
      <Scanlines />
      
      <Navigation currentPage={currentPage} navigateTo={navigateTo} />
      
      <AnimatePresence mode="wait">
        {isTransitioning && (
          <motion.div
            key="transition"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 0.6, ease: [0.87, 0, 0.13, 1] }}
            className="fixed inset-0 bg-gradient-to-b from-[#0ef75f] via-[#00ffd1] to-[#0ef75f] z-50 origin-top"
            style={{
              backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)'
            }}
          />
        )}
      </AnimatePresence>

      <main className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
