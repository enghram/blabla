import { useState } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  navigateTo: (page: string) => void;
}

export default function Navigation({ currentPage, navigateTo }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: '> Home_' },
    { id: 'about', label: '> About_' },
    { id: 'services', label: '> Services_' },
    { id: 'portfolio', label: '> Portfolio_' },
    { id: 'case-studies', label: '> Case Studies_' },
    { id: 'labs', label: '> Labs_' },
    { id: 'resume', label: '> Resume_' },
    { id: 'blog', label: '> Blog_' },
    { id: 'contact', label: '> Contact_' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md border-b border-[#0ef75f]/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div
              className="cursor-pointer"
              onClick={() => navigateTo('home')}
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-[#0ef75f] font-mono text-lg tracking-wider">
                <span className="text-[#00ffd1]">{'<'}</span>
                DedSec
                <span className="text-[#00ffd1]">{'/>'}</span>
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-1">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => navigateTo(item.id)}
                  className={`px-3 py-2 font-mono text-sm transition-all ${
                    currentPage === item.id
                      ? 'text-[#0ef75f] glow-text'
                      : 'text-gray-400 hover:text-[#00ffd1]'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-[#0ef75f] p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          className="fixed inset-y-0 right-0 z-50 w-64 bg-[#0c0c0e] border-l border-[#0ef75f]/30 md:hidden"
        >
          <div className="flex flex-col p-6 space-y-4 mt-16">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => {
                  navigateTo(item.id);
                  setIsMenuOpen(false);
                }}
                className={`text-left px-4 py-3 font-mono text-sm border border-[#0ef75f]/20 transition-all ${
                  currentPage === item.id
                    ? 'text-[#0ef75f] bg-[#0ef75f]/10 glow-border'
                    : 'text-gray-400 hover:text-[#00ffd1] hover:border-[#00ffd1]/40'
                }`}
                whileHover={{ x: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
}
