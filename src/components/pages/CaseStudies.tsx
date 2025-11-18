import { motion } from 'motion/react';
import { ArrowRight, TrendingUp, Users, Target } from 'lucide-react';

interface CaseStudiesProps {
  navigateTo: (page: string) => void;
}

export default function CaseStudies({ navigateTo }: CaseStudiesProps) {
  const caseStudies = [
    {
      title: 'Social Media Revolution',
      client: 'Tech Startup',
      industry: 'Technology',
      duration: '6 months',
      image: 'https://images.unsplash.com/photo-1622782914767-404fb9ab3f57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGFuYWx5dGljc3xlbnwxfHx8fDE3NjM0NjI2Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      metrics: [
        { icon: TrendingUp, label: 'Engagement', value: '+200%' },
        { icon: Users, label: 'Followers', value: '+150K' },
        { icon: Target, label: 'Conversion', value: '+85%' },
      ],
      summary: 'Complete social media transformation driving massive engagement growth and brand awareness.',
      tags: ['Social Media', 'Strategy', 'Content'],
    },
    {
      title: 'Growth Hacking Success',
      client: 'E-commerce Brand',
      industry: 'Retail',
      duration: '4 months',
      image: 'https://images.unsplash.com/photo-1744473119469-905016183836?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm93dGglMjBhbmFseXRpY3MlMjBjaGFydHN8ZW58MXx8fHwxNzYzNDgwMjMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      metrics: [
        { icon: TrendingUp, label: 'Revenue', value: '+150%' },
        { icon: Users, label: 'Traffic', value: '+300%' },
        { icon: Target, label: 'ROI', value: '8.5x' },
      ],
      summary: 'Data-driven growth strategy leveraging A/B testing and conversion optimization.',
      tags: ['Growth', 'Analytics', 'Testing'],
    },
    {
      title: 'Brand Identity Launch',
      client: 'Fashion Startup',
      industry: 'Fashion',
      duration: '3 months',
      image: 'https://images.unsplash.com/photo-1762718900539-14ba899e6dda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGRlc2lnbiUyMGNyZWF0aXZlfGVufDF8fHx8MTc2MzM4NzUxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      metrics: [
        { icon: TrendingUp, label: 'Awareness', value: '+250%' },
        { icon: Users, label: 'Reach', value: '1M+' },
        { icon: Target, label: 'Engagement', value: '+120%' },
      ],
      summary: 'Complete brand launch strategy from concept to market leader in Gen Z fashion.',
      tags: ['Branding', 'Launch', 'Strategy'],
    },
    {
      title: 'Digital Transformation',
      client: 'Traditional Retailer',
      industry: 'Retail',
      duration: '8 months',
      image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwc3RyYXRlZ3l8ZW58MXx8fHwxNzYzMzg3Mjc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      metrics: [
        { icon: TrendingUp, label: 'Online Sales', value: '+400%' },
        { icon: Users, label: 'New Customers', value: '+75K' },
        { icon: Target, label: 'Market Share', value: '+15%' },
      ],
      summary: 'Helped traditional business transition to digital-first approach with massive results.',
      tags: ['Strategy', 'Digital', 'Transformation'],
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
              Case Studies
              <span className="text-[#00ffd1]">{'/>'}</span>
            </h1>
            <p className="text-gray-400 font-mono text-lg">
              Real results from real projects
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="py-20 bg-[#0c0c0e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => navigateTo('case-study-detail')}
                className="group cursor-pointer"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 border border-[#0ef75f]/20 hover:border-[#0ef75f]/60 bg-black/50 overflow-hidden transition-all">
                  {/* Image */}
                  <div className="relative h-64 lg:h-auto overflow-hidden">
                    <img 
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{
                      backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(14, 247, 95, 0.05) 2px, rgba(14, 247, 95, 0.05) 4px)',
                    }} />
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-[#00ffd1] font-mono text-sm border border-[#00ffd1]/30 px-3 py-1">
                          {study.client}
                        </span>
                        <span className="text-gray-500 font-mono text-sm">
                          {study.industry}
                        </span>
                        <span className="text-gray-500 font-mono text-sm">
                          {study.duration}
                        </span>
                      </div>

                      <h3 className="text-3xl text-[#0ef75f] mb-4 group-hover:glow-text transition-all">
                        {study.title}
                      </h3>

                      <p className="text-gray-400 mb-6">
                        {study.summary}
                      </p>

                      {/* Metrics */}
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        {study.metrics.map((metric, idx) => (
                          <div key={idx} className="text-center">
                            <metric.icon className="w-6 h-6 mx-auto mb-2 text-[#00ffd1]" />
                            <div className="text-2xl text-[#0ef75f]">
                              {metric.value}
                            </div>
                            <div className="text-xs text-gray-500 font-mono">
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {study.tags.map((tag, idx) => (
                          <span 
                            key={idx}
                            className="text-xs font-mono px-2 py-1 border border-[#0ef75f]/30 text-gray-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-[#0ef75f] group-hover:gap-4 transition-all">
                      <span className="font-mono">Read Full Case Study</span>
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
