import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  category: string;
  image: string;
  onClick?: () => void;
}

export default function ProjectCard({ title, description, category, image, onClick }: ProjectCardProps) {
  return (
    <motion.div
      className="relative group cursor-pointer overflow-hidden border border-[#0ef75f]/20 bg-[#0c0c0e]"
      whileHover={{ scale: 1.02, rotateY: 2, rotateX: -2 }}
      transition={{ type: 'spring', stiffness: 300 }}
      onClick={onClick}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        <motion.div
          className="absolute inset-0 bg-[#0ef75f]/0 group-hover:bg-[#0ef75f]/10 transition-all duration-300"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        />
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-mono text-[#00ffd1] border border-[#00ffd1]/30 px-2 py-1">
            {category}
          </span>
          <ArrowRight className="text-[#0ef75f] opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
        </div>

        <h3 className="text-[#0ef75f] mb-2 group-hover:text-shadow-neon transition-all">
          {title}
        </h3>

        <p className="text-gray-400 text-sm">
          {description}
        </p>
      </div>

      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0ef75f] via-[#00ffd1] to-[#ff3b6b] opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
}
