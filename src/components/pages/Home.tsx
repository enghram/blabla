import { motion } from 'motion/react';
import ParticleNetwork from '../effects/ParticleNetwork';
import Terminal from '../ui/Terminal';
import NeonButton from '../ui/NeonButton';
import GlitchText from '../ui/GlitchText';
import ProjectCard from '../ui/ProjectCard';
import { TrendingUp, Users, Zap, Target } from 'lucide-react';

interface HomeProps {
  navigateTo: (page: string) => void;
}

export default function Home({ navigateTo }: HomeProps) {
  const terminalLines = [
    'whoami: Marketing Specialist & Digital Strategist',
    'education: Master in Marketing (5th year)',
    'skills: [Strategy, Social Media, Growth, Analytics]',
    'status: Available for opportunities',
  ];

  const stats = [
    { icon: TrendingUp, value: '+30%', label: 'Avg. Growth Rate' },
    { icon: Users, value: '50K+', label: 'Audience Reached' },
    { icon: Zap, value: '10+', label: 'Projects Delivered' },
    { icon: Target, value: '95%', label: 'Client Satisfaction' },
  ];

  const featuredProjects = [
    {
      title: 'Social Media Campaign 2024',
      description: 'Complete brand transformation with 200% engagement increase',
      category: 'Social Media',
      image: 'https://images.unsplash.com/photo-1622782914767-404fb9ab3f57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGFuYWx5dGljc3xlbnwxfHx8fDE3NjM0NjI2Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Growth Strategy Implementation',
      description: 'Data-driven approach resulting in sustainable business growth',
      category: 'Strategy',
      image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwc3RyYXRlZ3l8ZW58MXx8fHwxNzYzMzg3Mjc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Brand Identity Redesign',
      description: 'Modern rebrand for tech startup targeting Gen Z audience',
      category: 'Branding',
      image: 'https://images.unsplash.com/photo-1762718900539-14ba899e6dda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGRlc2lnbiUyMGNyZWF0aXZlfGVufDF8fHx8MTc2MzM4NzUxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <ParticleNetwork />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-[#00ffd1] font-mono text-sm mb-4"
            >
              {'<welcome/>'} INITIALIZING PORTFOLIO...
            </motion.div>

            <GlitchText className="block mb-6">
              <h1 className="text-5xl md:text-7xl lg:text-8xl text-[#0ef75f] mb-4">
                Alexandre Dubois
              </h1>
            </GlitchText>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              Marketing Strategist <span className="text-[#00ffd1]">|</span> Digital Growth Specialist
              <span className="text-[#00ffd1]">|</span> Data-Driven Creative
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <NeonButton onClick={() => navigateTo('portfolio')}>
                View Portfolio
              </NeonButton>
              <NeonButton variant="outline" onClick={() => navigateTo('contact')}>
                Get In Touch
              </NeonButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="mt-12 inline-block"
            >
              <Terminal lines={terminalLines} className="text-left max-w-lg" />
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-[#0ef75f] rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-[#0ef75f] rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-black to-[#0c0c0e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 border border-[#0ef75f]/20 bg-black/50 hover:border-[#0ef75f]/50 transition-all group"
                whileHover={{ scale: 1.05 }}
              >
                <stat.icon className="w-8 h-8 mx-auto mb-4 text-[#00ffd1] group-hover:text-[#0ef75f] transition-colors" />
                <div className="text-3xl md:text-4xl text-[#0ef75f] mb-2 glow-text">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm font-mono">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-[#0c0c0e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl text-[#0ef75f] mb-4">
              <span className="text-[#00ffd1]">{'<'}</span>
              Featured Projects
              <span className="text-[#00ffd1]">{'/>'}</span>
            </h2>
            <p className="text-gray-400 font-mono">Recent work & case studies</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ProjectCard
                  {...project}
                  onClick={() => navigateTo('case-study-detail')}
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <NeonButton variant="outline" onClick={() => navigateTo('portfolio')}>
              View All Projects →
            </NeonButton>
          </motion.div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl text-[#0ef75f] mb-4">
              Core Competencies
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { skill: 'Digital Strategy', level: 95 },
              { skill: 'Social Media Marketing', level: 90 },
              { skill: 'Data Analytics', level: 85 },
              { skill: 'Content Creation', level: 88 },
              { skill: 'SEO/SEM', level: 82 },
              { skill: 'Brand Development', level: 90 },
              { skill: 'Marketing Automation', level: 87 },
              { skill: 'Growth Hacking', level: 85 },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="border border-[#0ef75f]/20 p-4 bg-[#0c0c0e]/50"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-300 text-sm">{item.skill}</span>
                  <span className="text-[#00ffd1] font-mono text-xs">{item.level}%</span>
                </div>
                <div className="w-full bg-gray-800 h-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.05 }}
                    className="h-full bg-gradient-to-r from-[#0ef75f] to-[#00ffd1] shadow-[0_0_10px_rgba(14,247,95,0.5)]"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-[#0c0c0e] to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl text-[#0ef75f] mb-6">
              Ready to Level Up Your Marketing?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Let's collaborate on your next digital strategy. I bring data-driven insights and creative execution to every project.
            </p>
            <NeonButton onClick={() => navigateTo('contact')}>
              Start a Conversation
            </NeonButton>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
