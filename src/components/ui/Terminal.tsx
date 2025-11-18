import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface TerminalProps {
  lines: string[];
  className?: string;
}

export default function Terminal({ lines, className = '' }: TerminalProps) {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < lines.length) {
      const timer = setTimeout(() => {
        setDisplayedLines(prev => [...prev, lines[currentIndex]]);
        setCurrentIndex(prev => prev + 1);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, lines]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`bg-black/80 border border-[#0ef75f]/30 p-4 font-mono text-sm ${className}`}
    >
      <div className="flex items-center gap-2 mb-3 pb-2 border-b border-[#0ef75f]/20">
        <div className="w-3 h-3 rounded-full bg-[#ff3b6b]" />
        <div className="w-3 h-3 rounded-full bg-[#00ffd1]" />
        <div className="w-3 h-3 rounded-full bg-[#0ef75f]" />
        <span className="text-gray-500 text-xs ml-2">terminal://dedsec</span>
      </div>

      <div className="space-y-2">
        {displayedLines.map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-[#0ef75f]"
          >
            <span className="text-[#00ffd1]">{'>'}</span> {line}
          </motion.div>
        ))}
        {currentIndex < lines.length && (
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity }}
            className="inline-block w-2 h-4 bg-[#0ef75f] ml-1"
          />
        )}
      </div>
    </motion.div>
  );
}
