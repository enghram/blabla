import { motion } from 'motion/react';

interface GlitchTextProps {
  children: React.ReactNode;
  className?: string;
}

export default function GlitchText({ children, className = '' }: GlitchTextProps) {
  return (
    <motion.div
      className={`relative inline-block ${className}`}
      whileHover="hover"
    >
      <motion.span
        className="relative z-10"
        variants={{
          hover: {
            textShadow: [
              '2px 2px 0 #ff3b6b, -2px -2px 0 #00ffd1',
              '-2px 2px 0 #ff3b6b, 2px -2px 0 #00ffd1',
              '2px -2px 0 #ff3b6b, -2px 2px 0 #00ffd1',
              '0 0 0 transparent',
            ],
          },
        }}
        transition={{ duration: 0.3, repeat: Infinity }}
      >
        {children}
      </motion.span>
    </motion.div>
  );
}
