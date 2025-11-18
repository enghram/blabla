import { useState } from 'react';
import { motion } from 'motion/react';
import ProjectCard from '../ui/ProjectCard';
import { Filter } from 'lucide-react';

interface PortfolioProps {
  navigateTo: (page: string) => void;
}

export default function Portfolio({ navigateTo }: PortfolioProps) {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = ['all', 'social media', 'strategy', 'branding', 'growth', 'analytics'];

  const projects = [
    {
      title: 'Social Media Campaign 2024',
      description: 'Complete brand transformation with 200% engagement increase',
      category: 'social media',
      image: 'https://images.unsplash.com/photo-1622782914767-404fb9ab3f57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGFuYWx5dGljc3xlbnwxfHx8fDE3NjM0NjI2Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Growth Strategy Implementation',
      description: 'Data-driven approach resulting in sustainable business growth',
      category: 'strategy',
      image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwc3RyYXRlZ3l8ZW58MXx8fHwxNzYzMzg3Mjc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Brand Identity Redesign',
      description: 'Modern rebrand for tech startup targeting Gen Z audience',
      category: 'branding',
      image: 'https://images.unsplash.com/photo-1762718900539-14ba899e6dda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGRlc2lnbiUyMGNyZWF0aXZlfGVufDF8fHx8MTc2MzM4NzUxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'E-commerce Growth Campaign',
      description: 'Conversion optimization leading to 150% revenue increase',
      category: 'growth',
      image: 'https://images.unsplash.com/photo-1744473119469-905016183836?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm93dGglMjBhbmFseXRpY3MlMjBjaGFydHN8ZW58MXx8fHwxNzYzNDgwMjMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Content Strategy Overhaul',
      description: 'SEO-optimized content strategy boosting organic traffic by 300%',
      category: 'strategy',
      image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwc3RyYXRlZ3l8ZW58MXx8fHwxNzYzMzg3Mjc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Instagram Influencer Campaign',
      description: 'Viral influencer partnership reaching 2M+ impressions',
      category: 'social media',
      image: 'https://images.unsplash.com/photo-1622782914767-404fb9ab3f57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGFuYWx5dGljc3xlbnwxfHx8fDE3NjM0NjI2Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Marketing Analytics Dashboard',
      description: 'Custom dashboard providing real-time marketing insights',
      category: 'analytics',
      image: 'https://images.unsplash.com/photo-1744473119469-905016183836?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm93dGglMjBhbmFseXRpY3MlMjBjaGFydHN8ZW58MXx8fHwxNzYzNDgwMjMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Startup Brand Launch',
      description: 'Complete brand launch strategy from zero to market leader',
      category: 'branding',
      image: 'https://images.unsplash.com/photo-1762718900539-14ba899e6dda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGRlc2lnbiUyMGNyZWF0aXZlfGVufDF8fHx8MTc2MzM4NzUxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Growth Hacking Experiment',
      description: 'A/B testing framework achieving 45% conversion lift',
      category: 'growth',
      image: 'https://images.unsplash.com/photo-1744473119469-905016183836?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm93dGglMjBhbmFseXRpY3MlMjBjaGFydHN8ZW58MXx8fHwxNzYzNDgwMjMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-black to-[#0c0c0e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl text-[#0ef75f] mb-4">
              <span className="text-[#00ffd1]">{'<'}</span>
              Portfolio
              <span className="text-[#00ffd1]">{'/>'}</span>
            </h1>
            <p className="text-gray-400 font-mono text-lg">
              Selected projects & case studies
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center mb-8"
          >
            <div className="inline-flex items-center gap-2 p-2 border border-[#0ef75f]/30 bg-black/50">
              <Filter className="w-4 h-4 text-[#00ffd1]" />
              <span className="text-gray-400 text-sm font-mono mr-2">Filter:</span>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-4 py-2 font-mono text-sm uppercase transition-all ${
                    activeFilter === category
                      ? 'bg-[#0ef75f] text-black'
                      : 'text-gray-400 hover:text-[#00ffd1] border border-[#0ef75f]/20 hover:border-[#00ffd1]/40'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-[#0c0c0e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.05 }}
              >
                <ProjectCard
                  {...project}
                  onClick={() => navigateTo('case-study-detail')}
                />
              </motion.div>
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-gray-400 font-mono">
                No projects found in this category
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
