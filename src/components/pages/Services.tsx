import { motion } from 'motion/react';
import { TrendingUp, Share2, Palette, Rocket, BarChart3, Zap } from 'lucide-react';
import NeonButton from '../ui/NeonButton';

interface ServicesProps {
  navigateTo: (page: string) => void;
}

export default function Services({ navigateTo }: ServicesProps) {
  const services = [
    {
      icon: TrendingUp,
      title: 'Digital Strategy',
      description: 'Comprehensive marketing strategies aligned with your business goals. From market analysis to execution roadmaps.',
      features: [
        'Market Research & Analysis',
        'Competitive Intelligence',
        'Strategic Planning',
        'KPI Definition',
      ],
      color: '#0ef75f',
    },
    {
      icon: Share2,
      title: 'Social Media Marketing',
      description: 'End-to-end social media management that builds communities and drives engagement across all platforms.',
      features: [
        'Content Strategy & Creation',
        'Community Management',
        'Influencer Partnerships',
        'Social Analytics',
      ],
      color: '#00ffd1',
    },
    {
      icon: Palette,
      title: 'Brand Development',
      description: 'Create memorable brand identities that resonate with your target audience and stand out in the market.',
      features: [
        'Brand Identity Design',
        'Visual Guidelines',
        'Messaging & Positioning',
        'Brand Audits',
      ],
      color: '#ff3b6b',
    },
    {
      icon: Rocket,
      title: 'Growth Marketing',
      description: 'Data-driven growth tactics focused on rapid experimentation and scalable acquisition strategies.',
      features: [
        'Growth Hacking',
        'A/B Testing',
        'Conversion Optimization',
        'Funnel Analysis',
      ],
      color: '#0ef75f',
    },
    {
      icon: BarChart3,
      title: 'Marketing Analytics',
      description: 'Turn data into actionable insights with advanced analytics and reporting dashboards.',
      features: [
        'Google Analytics Setup',
        'Custom Dashboards',
        'Performance Tracking',
        'ROI Measurement',
      ],
      color: '#00ffd1',
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery',
      description: 'Deep dive into your business, audience, and goals',
    },
    {
      step: '02',
      title: 'Strategy',
      description: 'Develop data-driven marketing roadmap',
    },
    {
      step: '03',
      title: 'Execution',
      description: 'Implement campaigns with precision',
    },
    {
      step: '04',
      title: 'Optimization',
      description: 'Continuous testing and improvement',
    },
    {
      step: '05',
      title: 'Reporting',
      description: 'Transparent metrics and insights',
    },
  ];

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
              Services
              <span className="text-[#00ffd1]">{'/>'}</span>
            </h1>
            <p className="text-gray-400 font-mono text-lg max-w-2xl mx-auto">
              Comprehensive marketing solutions for the digital age
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[#0c0c0e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#0ef75f] to-[#00ffd1] opacity-0 group-hover:opacity-50 blur transition-opacity" />
                <div className="relative border border-[#0ef75f]/30 p-8 bg-black hover:border-[#0ef75f]/60 transition-all h-full">
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-4 border border-[#0ef75f]/30 bg-[#0c0c0e]">
                      <service.icon 
                        className="w-8 h-8"
                        style={{ color: service.color }}
                      />
                    </div>
                    <span className="text-[#00ffd1] font-mono text-sm">0{index + 1}</span>
                  </div>

                  <h3 
                    className="text-2xl mb-4"
                    style={{ color: service.color }}
                  >
                    {service.title}
                  </h3>

                  <p className="text-gray-400 mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-[#00ffd1]" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl text-[#0ef75f] mb-4">
              My Process
            </h2>
            <p className="text-gray-400 font-mono">
              A systematic approach to marketing success
            </p>
          </motion.div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#0ef75f] via-[#00ffd1] to-[#0ef75f] transform -translate-y-1/2" />

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {process.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative text-center"
                >
                  <div className="relative inline-block mb-4">
                    <div className="absolute -inset-2 bg-[#0ef75f]/20 blur-lg" />
                    <div className="relative w-20 h-20 border-2 border-[#0ef75f] bg-black flex items-center justify-center mx-auto">
                      <span className="text-3xl text-[#00ffd1] font-mono">
                        {item.step}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl text-[#0ef75f] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-b from-[#0c0c0e] to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-[#0ef75f]/30 p-12 bg-black/50"
          >
            <h2 className="text-3xl md:text-4xl text-[#0ef75f] mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's discuss how I can help you achieve your marketing goals with data-driven strategies and creative execution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <NeonButton onClick={() => navigateTo('contact')}>
                Get In Touch
              </NeonButton>
              <NeonButton variant="outline" onClick={() => navigateTo('portfolio')}>
                View Portfolio
              </NeonButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
