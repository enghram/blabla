import { motion } from 'motion/react';
import { Beaker, Zap, Brain, Sparkles, Play } from 'lucide-react';

interface LabsProps {
  navigateTo: (page: string) => void;
}

export default function Labs({ navigateTo }: LabsProps) {
  const experiments = [
    {
      title: 'AI Content Generator',
      status: 'Active',
      description: 'Experimental tool using AI to generate marketing copy optimized for engagement.',
      tech: ['GPT-4', 'Python', 'React'],
      icon: Brain,
      color: '#0ef75f',
    },
    {
      title: 'Viral Coefficient Calculator',
      status: 'Beta',
      description: 'Interactive dashboard to calculate and visualize viral growth potential.',
      tech: ['React', 'D3.js', 'Analytics'],
      icon: Zap,
      color: '#00ffd1',
    },
    {
      title: 'Engagement Predictor',
      status: 'Research',
      description: 'ML model predicting social media post performance before publishing.',
      tech: ['TensorFlow', 'Python', 'API'],
      icon: Sparkles,
      color: '#ff3b6b',
    },
    {
      title: 'Growth Hacking Playbook',
      status: 'Active',
      description: 'Interactive database of tested growth tactics with implementation guides.',
      tech: ['Notion API', 'Next.js'],
      icon: Beaker,
      color: '#0ef75f',
    },
  ];

  const concepts = [
    {
      title: 'Neuromarketing Dashboard',
      description: 'Visualizing consumer psychology data in real-time',
      progress: 65,
    },
    {
      title: 'Micro-Influencer Network',
      description: 'Platform connecting brands with niche creators',
      progress: 45,
    },
    {
      title: 'A/B Testing Framework',
      description: 'Automated testing suite for marketing campaigns',
      progress: 80,
    },
    {
      title: 'Social Listening AI',
      description: 'Real-time sentiment analysis across platforms',
      progress: 55,
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-black to-[#0c0c0e] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 50% 50%, #0ef75f 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <Beaker className="w-12 h-12 text-[#0ef75f]" />
              <h1 className="text-5xl md:text-7xl text-[#0ef75f]">
                Labs
              </h1>
            </div>
            <p className="text-gray-400 font-mono text-lg max-w-2xl mx-auto">
              Experimental marketing projects & innovation playground
            </p>
            <div className="mt-8 inline-block border border-[#0ef75f]/30 px-6 py-3 bg-black/50">
              <span className="text-[#00ffd1] font-mono text-sm">
                Warning: Experimental features ahead. Results may vary.
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Active Experiments */}
      <section className="py-20 bg-[#0c0c0e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl text-[#0ef75f] mb-4">
              <span className="text-[#00ffd1]">{'<'}</span>
              Active Experiments
              <span className="text-[#00ffd1]">{'/>'}</span>
            </h2>
            <p className="text-gray-400 font-mono">Current projects in development</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {experiments.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#0ef75f] to-[#00ffd1] opacity-0 group-hover:opacity-30 blur transition-opacity" />
                <div className="relative border border-[#0ef75f]/30 p-8 bg-black hover:border-[#0ef75f]/60 transition-all h-full">
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-4 border border-[#0ef75f]/30 bg-[#0c0c0e]">
                      <exp.icon 
                        className="w-8 h-8"
                        style={{ color: exp.color }}
                      />
                    </div>
                    <span 
                      className="text-xs font-mono px-3 py-1 border"
                      style={{ 
                        borderColor: `${exp.color}40`,
                        color: exp.color,
                      }}
                    >
                      {exp.status}
                    </span>
                  </div>

                  <h3 
                    className="text-2xl mb-4"
                    style={{ color: exp.color }}
                  >
                    {exp.title}
                  </h3>

                  <p className="text-gray-400 mb-6">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="text-xs font-mono px-2 py-1 border border-[#00ffd1]/30 text-gray-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button className="mt-6 flex items-center gap-2 text-[#00ffd1] hover:text-[#0ef75f] transition-colors group">
                    <Play size={16} />
                    <span className="font-mono text-sm">View Demo</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Concepts in Development */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl text-[#0ef75f] mb-4">
              Concepts in Development
            </h2>
            <p className="text-gray-400 font-mono">Ideas being prototyped & tested</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {concepts.map((concept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border border-[#0ef75f]/30 p-6 bg-[#0c0c0e]/50"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl text-[#0ef75f]">
                    {concept.title}
                  </h3>
                  <span className="text-[#00ffd1] font-mono text-sm">
                    {concept.progress}%
                  </span>
                </div>

                <p className="text-gray-400 text-sm mb-4">
                  {concept.description}
                </p>

                <div className="w-full bg-gray-800 h-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${concept.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="h-full bg-gradient-to-r from-[#0ef75f] to-[#00ffd1]"
                    style={{
                      boxShadow: '0 0 10px rgba(14, 247, 95, 0.5)',
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-gradient-to-b from-[#0c0c0e] to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border-2 border-[#0ef75f]/30 p-8 md:p-12 bg-black/50"
          >
            <h2 className="text-3xl text-[#0ef75f] mb-6">
              Why Labs?
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                The marketing landscape is evolving faster than ever. What worked yesterday might not work tomorrow. That's why I believe in constant experimentation and innovation.
              </p>
              <p>
                This Labs section is my playground for testing new ideas, exploring emerging technologies, and pushing the boundaries of what's possible in digital marketing.
              </p>
              <p className="text-[#00ffd1] font-mono">
                "Innovation distinguishes between a leader and a follower." - Steve Jobs
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Demo Placeholder */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="border border-[#0ef75f]/30 p-12 bg-[#0c0c0e]/50 text-center"
          >
            <Sparkles className="w-16 h-16 mx-auto mb-6 text-[#00ffd1]" />
            <h3 className="text-3xl text-[#0ef75f] mb-4">
              Interactive Demo Space
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              This is where live demos and interactive prototypes would be embedded. Each experiment comes with hands-on examples you can try.
            </p>
            <div className="inline-block border border-[#00ffd1]/30 px-6 py-3 font-mono text-sm text-gray-500">
              [Demo Interface Placeholder]
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
