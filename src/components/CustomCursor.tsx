import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'BUTTON' ||
        target.tagName === 'A'
      );
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <>
      <motion.div
        className="fixed w-2 h-2 bg-[#0ef75f] rounded-full pointer-events-none z-[9999] mix-blend-screen"
        style={{
          left: mousePosition.x - 4,
          top: mousePosition.y - 4,
        }}
      />
      <motion.div
        className="fixed w-8 h-8 border-2 border-[#00ffd1]/50 rounded-full pointer-events-none z-[9999] mix-blend-screen"
        animate={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 400 }}
      />
    </>
  );
}
