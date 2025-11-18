import { motion } from 'motion/react';
import { Download, Award, Briefcase, BookOpen, Code, Languages, Trophy } from 'lucide-react';
import NeonButton from '../ui/NeonButton';

interface ResumeProps {
  navigateTo: (page: string) => void;
}

export default function Resume({ navigateTo }: ResumeProps) {
  const skills = {
    'Marketing Strategy': 95,
    'Social Media Marketing': 90,
    'Data Analytics': 85,
    'Content Creation': 88,
    'SEO/SEM': 82,
    'Brand Development': 90,
    'Marketing Automation': 87,
    'Growth Hacking': 85,
    'Email Marketing': 83,
    'Conversion Optimization': 86,
  };

  const tools = [
    'Google Analytics', 'Meta Business Suite', 'Hootsuite', 'Canva', 'Adobe Creative Suite',
    'Mailchimp', 'HubSpot', 'Semrush', 'Ahrefs', 'Hotjar', 'Figma', 'Notion',
  ];

  const certifications = [
    {
      title: 'Google Analytics Certification',
      issuer: 'Google',
      date: '2024',
      icon: Award,
    },
    {
      title: 'Meta Blueprint Certification',
      issuer: 'Meta',
      date: '2024',
      icon: Award,
    },
    {
      title: 'HubSpot Inbound Marketing',
      issuer: 'HubSpot Academy',
      date: '2023',
      icon: Award,
    },
    {
      title: 'Growth Marketing Certification',
      issuer: 'Reforge',
      date: '2023',
      icon: Award,
    },
  ];

  const languages = [
    { lang: 'French', level: 'Native' },
    { lang: 'English', level: 'Fluent (C1)' },
    { lang: 'Spanish', level: 'Intermediate (B1)' },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-black to-[#0c0c0e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-7xl text-[#0ef75f] mb-4">
              <span className="text-[#00ffd1]">{'<'}</span>
              Resume
              <span className="text-[#00ffd1]">{'/>'}</span>
            </h1>
            <p className="text-gray-400 font-mono text-lg mb-8">
              Professional experience & qualifications
            </p>
            <NeonButton>
              <Download className="inline mr-2" size={18} />
              Download PDF Resume
            </NeonButton>
          </motion.div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-20 bg-[#0c0c0e]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="w-8 h-8 text-[#00ffd1]" />
              <h2 className="text-4xl text-[#0ef75f]">Work Experience</h2>
            </div>
          </motion.div>

          <div className="space-y-8 relative">
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#0ef75f] via-[#00ffd1] to-[#0ef75f]" />

            {[
              {
                title: 'Marketing Intern',
                company: 'Tech Startup Inc.',
                period: 'Jan 2024 - Present',
                achievements: [
                  'Led social media campaigns resulting in 200% engagement increase',
                  'Implemented A/B testing framework improving conversion rates by 45%',
                  'Managed content calendar across 5 platforms reaching 2M+ users',
                  'Developed analytics dashboard for real-time marketing insights',
                ],
              },
              {
                title: 'Freelance Marketing Consultant',
                company: 'Various Clients',
                period: 'Jun 2023 - Dec 2023',
                achievements: [
                  'Consulted for 8+ clients across e-commerce and SaaS industries',
                  'Delivered comprehensive marketing strategies with measurable ROI',
                  'Specialized in growth hacking and performance marketing',
                  'Achieved average client growth of 150% in first 90 days',
                ],
              },
              {
                title: 'Social Media Manager',
                company: 'Local Business Co.',
                period: 'Sep 2022 - May 2023',
                achievements: [
                  'Grew Instagram following from 5K to 50K in 8 months',
                  'Created viral content generating 5M+ impressions',
                  'Managed influencer partnerships and brand collaborations',
                  'Reduced customer acquisition cost by 60%',
                ],
              },
            ].map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="pl-8 relative"
              >
                <div className="absolute left-0 top-0 w-4 h-4 bg-[#0ef75f] border-4 border-black -translate-x-[8.5px]" />
                <div className="border border-[#0ef75f]/30 p-6 bg-black/50 hover:border-[#0ef75f]/60 transition-all">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl text-[#0ef75f] mb-1">{job.title}</h3>
                      <p className="text-gray-400">{job.company}</p>
                    </div>
                    <span className="text-[#00ffd1] font-mono text-sm mt-2 md:mt-0">
                      {job.period}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {job.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-300 text-sm">
                        <span className="text-[#00ffd1] mt-1">▸</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-8 h-8 text-[#00ffd1]" />
              <h2 className="text-4xl text-[#0ef75f]">Education</h2>
            </div>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                degree: 'Master in Marketing',
                school: 'Business School Paris',
                period: '2024 - 2025',
                details: 'Specialization in Digital Strategy & Growth Marketing',
              },
              {
                degree: 'Bachelor in Business Administration',
                school: 'University of Paris',
                period: '2021 - 2024',
                details: 'Focus on Marketing, Consumer Behavior & Data Analysis',
              },
            ].map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border border-[#0ef75f]/30 p-6 bg-[#0c0c0e]/50"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl text-[#0ef75f]">{edu.degree}</h3>
                  <span className="text-[#00ffd1] font-mono text-sm">{edu.period}</span>
                </div>
                <p className="text-gray-400 mb-2">{edu.school}</p>
                <p className="text-gray-300 text-sm">{edu.details}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 bg-[#0c0c0e]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <Code className="w-8 h-8 text-[#00ffd1]" />
              <h2 className="text-4xl text-[#0ef75f]">Skills & Expertise</h2>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {Object.entries(skills).map(([skill, level], index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                className="border border-[#0ef75f]/20 p-4 bg-black/50"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-300 text-sm">{skill}</span>
                  <span className="text-[#00ffd1] font-mono text-xs">{level}%</span>
                </div>
                <div className="w-full bg-gray-800 h-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.03 }}
                    className="h-full bg-gradient-to-r from-[#0ef75f] to-[#00ffd1]"
                    style={{ boxShadow: '0 0 10px rgba(14, 247, 95, 0.5)' }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl text-[#0ef75f] mb-4">Tools & Platforms</h3>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool, index) => (
                <motion.span
                  key={tool}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.02 }}
                  className="px-4 py-2 border border-[#00ffd1]/30 text-gray-300 text-sm font-mono hover:border-[#0ef75f]/50 hover:text-[#0ef75f] transition-all"
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <Trophy className="w-8 h-8 text-[#00ffd1]" />
              <h2 className="text-4xl text-[#0ef75f]">Certifications</h2>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border border-[#0ef75f]/30 p-6 bg-[#0c0c0e]/50 flex items-start gap-4 hover:border-[#0ef75f]/60 transition-all"
              >
                <cert.icon className="w-8 h-8 text-[#00ffd1] flex-shrink-0" />
                <div>
                  <h3 className="text-lg text-[#0ef75f] mb-1">{cert.title}</h3>
                  <p className="text-gray-400 text-sm mb-1">{cert.issuer}</p>
                  <span className="text-[#00ffd1] font-mono text-xs">{cert.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Languages */}
      <section className="py-20 bg-gradient-to-b from-[#0c0c0e] to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <Languages className="w-8 h-8 text-[#00ffd1]" />
              <h2 className="text-4xl text-[#0ef75f]">Languages</h2>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {languages.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center border border-[#0ef75f]/30 p-6 bg-black/50"
              >
                <h3 className="text-xl text-[#0ef75f] mb-2">{item.lang}</h3>
                <p className="text-gray-400 font-mono text-sm">{item.level}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
