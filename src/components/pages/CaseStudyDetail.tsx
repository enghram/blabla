import { motion } from 'motion/react';
import { Download, Target, TrendingUp, Users, Calendar, Building2, ArrowLeft } from 'lucide-react';
import NeonButton from '../ui/NeonButton';

interface CaseStudyDetailProps {
  navigateTo: (page: string) => void;
}

export default function CaseStudyDetail({ navigateTo }: CaseStudyDetailProps) {
  const kpis = [
    { label: 'Engagement Rate', value: '+200%', icon: TrendingUp },
    { label: 'New Followers', value: '+150K', icon: Users },
    { label: 'Conversion Rate', value: '+85%', icon: Target },
    { label: 'ROI', value: '12.5x', icon: TrendingUp },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Back Button */}
      <section className="py-8 bg-black border-b border-[#0ef75f]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigateTo('case-studies')}
            className="flex items-center gap-2 text-[#00ffd1] hover:text-[#0ef75f] transition-colors font-mono"
          >
            <ArrowLeft size={20} />
            Back to Case Studies
          </button>
        </div>
      </section>

      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-black to-[#0c0c0e] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1622782914767-404fb9ab3f57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGFuYWx5dGljc3xlbnwxfHx8fDE3NjM0NjI2Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex flex-wrap gap-4 mb-6">
              <span className="text-[#00ffd1] font-mono text-sm border border-[#00ffd1]/30 px-3 py-1">
                Social Media Campaign
              </span>
              <div className="flex items-center gap-2 text-gray-400 font-mono text-sm">
                <Building2 size={16} />
                Tech Startup
              </div>
              <div className="flex items-center gap-2 text-gray-400 font-mono text-sm">
                <Calendar size={16} />
                6 months (Jan - Jun 2024)
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl text-[#0ef75f] mb-6">
              Social Media Revolution
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mb-8">
              A complete social media transformation that drove massive engagement growth, built a thriving community, and positioned the brand as a thought leader in the tech industry.
            </p>

            <NeonButton>
              <Download className="inline mr-2" size={18} />
              Download PDF
            </NeonButton>
          </motion.div>
        </div>
      </section>

      {/* KPIs */}
      <section className="py-12 bg-black border-y border-[#0ef75f]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {kpis.map((kpi, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <kpi.icon className="w-8 h-8 mx-auto mb-3 text-[#00ffd1]" />
                <div className="text-4xl text-[#0ef75f] mb-2 glow-text">
                  {kpi.value}
                </div>
                <div className="text-gray-400 text-sm font-mono">
                  {kpi.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-20 bg-[#0c0c0e]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl text-[#0ef75f] mb-6">
              <span className="text-[#00ffd1]">{'01.'}</span> The Challenge
            </h2>
            <div className="border-l-4 border-[#0ef75f] pl-6 space-y-4">
              <p className="text-gray-300 text-lg">
                The client, a fast-growing tech startup, was struggling to build meaningful engagement on social media despite having a strong product. Their content wasn't resonating with their target audience, and their growth had plateaued.
              </p>
              <p className="text-gray-300 text-lg">
                Key issues included:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-[#00ffd1] mt-1">▸</span>
                  Low engagement rates (under 1%)
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00ffd1] mt-1">▸</span>
                  Inconsistent brand voice across platforms
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00ffd1] mt-1">▸</span>
                  Limited understanding of audience preferences
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00ffd1] mt-1">▸</span>
                  No clear content strategy or calendar
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl text-[#0ef75f] mb-6">
              <span className="text-[#00ffd1]">{'02.'}</span> Our Approach
            </h2>
            <div className="space-y-8">
              {[
                {
                  phase: 'Discovery & Audit',
                  description: 'Conducted comprehensive social media audit, competitor analysis, and audience research to identify opportunities and gaps.',
                },
                {
                  phase: 'Strategy Development',
                  description: 'Created a data-driven content strategy with defined pillars, messaging framework, and engagement tactics tailored to each platform.',
                },
                {
                  phase: 'Content Creation',
                  description: 'Developed a 90-day content calendar with varied formats including educational posts, behind-the-scenes content, and interactive campaigns.',
                },
                {
                  phase: 'Community Building',
                  description: 'Implemented proactive community management, engagement protocols, and influencer partnerships to foster authentic connections.',
                },
                {
                  phase: 'Optimization',
                  description: 'Continuous A/B testing of content types, posting times, and messaging to maximize engagement and reach.',
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="border border-[#0ef75f]/30 p-6 bg-[#0c0c0e]/50"
                >
                  <h3 className="text-xl text-[#00ffd1] mb-3 font-mono">
                    Phase {index + 1}: {step.phase}
                  </h3>
                  <p className="text-gray-300">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-[#0c0c0e]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl text-[#0ef75f] mb-6">
              <span className="text-[#00ffd1]">{'03.'}</span> Results & Impact
            </h2>
            <div className="border-l-4 border-[#0ef75f] pl-6 space-y-6">
              <p className="text-gray-300 text-lg">
                Within 6 months, we achieved remarkable results that exceeded all initial targets:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { metric: 'Engagement Rate', before: '0.8%', after: '2.4%', change: '+200%' },
                  { metric: 'Follower Growth', before: '50K', after: '200K', change: '+150K' },
                  { metric: 'Monthly Reach', before: '500K', after: '2.5M', change: '+400%' },
                  { metric: 'Conversion Rate', before: '1.2%', after: '2.2%', change: '+85%' },
                  { metric: 'Share of Voice', before: '12%', after: '35%', change: '+192%' },
                  { metric: 'Customer Acquisition Cost', before: '$45', after: '$18', change: '-60%' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="border border-[#00ffd1]/30 p-4 bg-black/50"
                  >
                    <div className="text-sm text-gray-400 font-mono mb-2">{item.metric}</div>
                    <div className="flex items-baseline gap-3">
                      <span className="text-gray-500 line-through">{item.before}</span>
                      <span className="text-[#0ef75f] text-2xl">{item.after}</span>
                    </div>
                    <div className="text-[#00ffd1] font-mono text-sm mt-1">{item.change}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border-2 border-[#0ef75f]/30 p-8 bg-[#0c0c0e]/50 relative"
          >
            <div className="text-6xl text-[#00ffd1] opacity-20 absolute top-4 left-4">"</div>
            <p className="text-xl text-gray-300 italic mb-6 relative z-10">
              Alexandre completely transformed our social media presence. His data-driven approach combined with creative execution delivered results beyond our expectations. The engagement and community growth have been phenomenal.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#0ef75f] to-[#00ffd1] flex items-center justify-center text-black">
                <span>JS</span>
              </div>
              <div>
                <div className="text-[#0ef75f]">Jane Smith</div>
                <div className="text-gray-500 text-sm font-mono">CMO, Tech Startup</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-b from-[#0c0c0e] to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl text-[#0ef75f] mb-6">
              Want Similar Results?
            </h2>
            <p className="text-gray-400 mb-8">
              Let's discuss how I can help you achieve your marketing goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <NeonButton onClick={() => navigateTo('contact')}>
                Start a Project
              </NeonButton>
              <NeonButton variant="outline" onClick={() => navigateTo('case-studies')}>
                View More Case Studies
              </NeonButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
