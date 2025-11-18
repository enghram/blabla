import { motion } from 'motion/react';
import { Award, BookOpen, Briefcase, Heart, Code, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface AboutProps {
  navigateTo: (page: string) => void;
}

export default function About({ navigateTo }: AboutProps) {
  const timeline = [
    {
      year: '2024-2025',
      title: 'Master in Marketing - 5th Year',
      institution: 'Business School',
      description: 'Specialization in Digital Strategy & Growth Marketing',
      icon: BookOpen,
    },
    {
      year: '2023',
      title: 'Marketing Intern',
      institution: 'Tech Startup',
      description: 'Led social media campaigns with 150% engagement increase',
      icon: Briefcase,
    },
    {
      year: '2022',
      title: 'Digital Marketing Certification',
      institution: 'Google & Meta',
      description: 'Advanced certifications in Analytics & Ads',
      icon: Award,
    },
    {
      year: '2021-2024',
      title: 'Bachelor in Business',
      institution: 'University',
      description: 'Focus on Marketing, Consumer Behavior & Data Analysis',
      icon: BookOpen,
    },
  ];

  const values = [
    {
      icon: Code,
      title: 'Data-Driven',
      description: 'Every decision backed by analytics and measurable KPIs',
    },
    {
      icon: TrendingUp,
      title: 'Growth-Focused',
      description: 'Obsessed with optimization and continuous improvement',
    },
    {
      icon: Heart,
      title: 'User-Centric',
      description: 'Understanding audiences to create meaningful connections',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-black to-[#0c0c0e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl text-[#0ef75f] mb-4">
              <span className="text-[#00ffd1]">{'<'}</span>
              About Me
              <span className="text-[#00ffd1]">{'/>'}</span>
            </h1>
            <p className="text-gray-400 font-mono">Marketing strategist with a hacker mindset</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#0ef75f] to-[#00ffd1] opacity-50 blur group-hover:opacity-75 transition-opacity" />
                <div className="relative border-4 border-[#0ef75f] overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1703355685639-d558d1b0f63e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBvZmZpY2V8ZW58MXx8fHwxNzYzNDQxMDkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Alexandre Dubois"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute inset-0" style={{
                      backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(14, 247, 95, 0.1) 2px, rgba(14, 247, 95, 0.1) 4px)',
                    }} />
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <div className="border border-[#0ef75f]/30 p-6 bg-black/50">
                <h2 className="text-3xl text-[#0ef75f] mb-4">
                  Marketing Meets Technology
                </h2>
                <p className="text-gray-300 mb-4">
                  As a 5th-year marketing student, I bridge the gap between creative strategy and data science. My approach combines the analytical rigor of a developer with the creative thinking of a marketer.
                </p>
                <p className="text-gray-300 mb-4">
                  I don't just run campaigns—I hack growth. Every project is an opportunity to experiment, optimize, and push boundaries. From social media virality to conversion rate optimization, I treat marketing like code: testable, measurable, and always improving.
                </p>
                <p className="text-gray-300">
                  My mission is to help brands cut through the noise with authentic, data-driven strategies that actually resonate with real people.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {['Strategy', 'Analytics', 'Creativity'].map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="border border-[#00ffd1]/30 p-4 text-center bg-[#0c0c0e]"
                  >
                    <span className="text-[#00ffd1] font-mono text-sm">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Terminal Section */}
      <section className="py-20 bg-[#0c0c0e]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-black/80 border border-[#0ef75f]/30 p-8 font-mono"
          >
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-[#0ef75f]/20">
              <div className="w-3 h-3 rounded-full bg-[#ff3b6b]" />
              <div className="w-3 h-3 rounded-full bg-[#00ffd1]" />
              <div className="w-3 h-3 rounded-full bg-[#0ef75f]" />
              <span className="text-gray-500 text-xs ml-2">whoami.sh</span>
            </div>

            <div className="space-y-3 text-sm">
              <div><span className="text-[#00ffd1]">$</span> <span className="text-[#0ef75f]">cat personal_info.json</span></div>
              <div className="pl-4 text-gray-300">{'{'}</div>
              <div className="pl-8 text-gray-300">"name": <span className="text-[#00ffd1]">"Alexandre Dubois"</span>,</div>
              <div className="pl-8 text-gray-300">"role": <span className="text-[#00ffd1]">"Marketing Strategist"</span>,</div>
              <div className="pl-8 text-gray-300">"education": <span className="text-[#00ffd1]">"Master in Marketing (5th year)"</span>,</div>
              <div className="pl-8 text-gray-300">"location": <span className="text-[#00ffd1]">"Paris, France"</span>,</div>
              <div className="pl-8 text-gray-300">"interests": [</div>
              <div className="pl-12 text-[#00ffd1]">"Growth Hacking", "Data Science", "Consumer Psychology", "Digital Innovation"</div>
              <div className="pl-8 text-gray-300">],</div>
              <div className="pl-8 text-gray-300">"status": <span className="text-[#0ef75f]">"Available for opportunities"</span></div>
              <div className="pl-4 text-gray-300">{'}'}</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl text-[#0ef75f] mb-4">Journey Timeline</h2>
            <p className="text-gray-400 font-mono">Education & Experience</p>
          </motion.div>

          <div className="space-y-8 relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#0ef75f] via-[#00ffd1] to-[#0ef75f]" />

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-24"
              >
                <div className="absolute left-0 w-16 h-16 bg-[#0c0c0e] border-2 border-[#0ef75f] flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-[#00ffd1]" />
                </div>

                <div className="border border-[#0ef75f]/30 p-6 bg-[#0c0c0e] hover:border-[#0ef75f]/60 transition-all">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl text-[#0ef75f]">{item.title}</h3>
                    <span className="text-[#00ffd1] font-mono text-sm">{item.year}</span>
                  </div>
                  <p className="text-gray-400 mb-2">{item.institution}</p>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-[#0c0c0e] to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl text-[#0ef75f] mb-4">Core Values</h2>
            <p className="text-gray-400 font-mono">What drives my approach</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 border border-[#0ef75f]/20 bg-black/50 hover:border-[#0ef75f]/50 hover:bg-[#0c0c0e]/50 transition-all group"
              >
                <value.icon className="w-12 h-12 mx-auto mb-4 text-[#00ffd1] group-hover:text-[#0ef75f] transition-colors" />
                <h3 className="text-xl text-[#0ef75f] mb-3">{value.title}</h3>
                <p className="text-gray-400 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
