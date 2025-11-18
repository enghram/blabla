import { motion } from 'motion/react';

interface NeonButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
}

export default function NeonButton({ 
  children, 
  onClick, 
  variant = 'primary',
  className = '' 
}: NeonButtonProps) {
  const variants = {
    primary: 'bg-[#0ef75f] text-black hover:bg-[#0ef75f]/90 shadow-[0_0_20px_rgba(14,247,95,0.5)]',
    secondary: 'bg-[#00ffd1] text-black hover:bg-[#00ffd1]/90 shadow-[0_0_20px_rgba(0,255,209,0.5)]',
    outline: 'border-2 border-[#0ef75f] text-[#0ef75f] hover:bg-[#0ef75f]/10 shadow-[0_0_20px_rgba(14,247,95,0.3)]',
  };

  return (
    <motion.button
      onClick={onClick}
      className={`px-6 py-3 font-mono uppercase tracking-wider transition-all ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
}
