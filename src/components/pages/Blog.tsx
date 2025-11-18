import { motion } from 'motion/react';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface BlogProps {
  navigateTo: (page: string) => void;
}

export default function Blog({ navigateTo }: BlogProps) {
  const articles = [
    {
      title: 'The Future of Growth Marketing in 2025',
      excerpt: 'Exploring emerging trends, AI integration, and data-driven strategies that will dominate the marketing landscape.',
      image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwc3RyYXRlZ3l8ZW58MXx8fHwxNzYzMzg3Mjc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      date: 'Nov 15, 2024',
      readTime: '8 min',
      tags: ['Growth', 'Strategy', 'AI'],
      featured: true,
    },
    {
      title: 'How I Grew a Brand from 0 to 200K Followers',
      excerpt: 'A complete breakdown of the strategy, tactics, and mistakes that led to explosive social media growth.',
      image: 'https://images.unsplash.com/photo-1622782914767-404fb9ab3f57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGFuYWx5dGljc3xlbnwxfHx8fDE3NjM0NjI2Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      date: 'Nov 8, 2024',
      readTime: '12 min',
      tags: ['Social Media', 'Case Study'],
      featured: false,
    },
    {
      title: 'A/B Testing Framework for Marketing Success',
      excerpt: 'Step-by-step guide to implementing a systematic testing approach that drives real results.',
      image: 'https://images.unsplash.com/photo-1744473119469-905016183836?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm93dGglMjBhbmFseXRpY3MlMjBjaGFydHN8ZW58MXx8fHwxNzYzNDgwMjMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      date: 'Nov 1, 2024',
      readTime: '10 min',
      tags: ['Analytics', 'Testing', 'Guide'],
      featured: false,
    },
    {
      title: 'Brand Identity: More Than Just a Logo',
      excerpt: 'Understanding the deeper elements of brand identity and how they influence consumer perception.',
      image: 'https://images.unsplash.com/photo-1762718900539-14ba899e6dda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGRlc2lnbiUyMGNyZWF0aXZlfGVufDF8fHx8MTc2MzM4NzUxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      date: 'Oct 25, 2024',
      readTime: '7 min',
      tags: ['Branding', 'Design'],
      featured: false,
    },
    {
      title: 'Content Strategy that Actually Converts',
      excerpt: 'How to create content that not only engages but drives measurable business outcomes.',
      image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwc3RyYXRlZ3l8ZW58MXx8fHwxNzYzMzg3Mjc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      date: 'Oct 18, 2024',
      readTime: '9 min',
      tags: ['Content', 'Strategy'],
      featured: false,
    },
    {
      title: 'The Psychology Behind Viral Marketing',
      excerpt: 'Unpacking the cognitive triggers and emotional drivers that make content spread like wildfire.',
      image: 'https://images.unsplash.com/photo-1622782914767-404fb9ab3f57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGFuYWx5dGljc3xlbnwxfHx8fDE3NjM0NjI2Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      date: 'Oct 11, 2024',
      readTime: '11 min',
      tags: ['Psychology', 'Viral'],
      featured: false,
    },
  ];

  const featuredArticle = articles.find(a => a.featured);
  const regularArticles = articles.filter(a => !a.featured);

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
              Blog
              <span className="text-[#00ffd1]">{'/>'}</span>
            </h1>
            <p className="text-gray-400 font-mono text-lg">
              Thoughts on marketing, growth & innovation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="py-20 bg-[#0c0c0e]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <span className="text-[#00ffd1] font-mono text-sm border border-[#00ffd1]/30 px-3 py-1">
                Featured Article
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 border border-[#0ef75f]/30 bg-black overflow-hidden group cursor-pointer hover:border-[#0ef75f]/60 transition-all"
            >
              <div className="relative h-96 lg:h-auto overflow-hidden">
                <img 
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              </div>

              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-400 font-mono">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-[#00ffd1]" />
                    {featuredArticle.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-[#00ffd1]" />
                    {featuredArticle.readTime}
                  </div>
                </div>

                <h2 className="text-3xl md:text-4xl text-[#0ef75f] mb-4 group-hover:glow-text transition-all">
                  {featuredArticle.title}
                </h2>

                <p className="text-gray-300 mb-6 text-lg">
                  {featuredArticle.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredArticle.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="text-xs font-mono px-2 py-1 border border-[#0ef75f]/30 text-gray-400"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-[#0ef75f] group-hover:gap-4 transition-all">
                  <span className="font-mono">Read Article</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl text-[#0ef75f] mb-4">Latest Articles</h2>
            <p className="text-gray-400 font-mono">Recent posts & insights</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="border border-[#0ef75f]/20 bg-[#0c0c0e] overflow-hidden hover:border-[#0ef75f]/60 transition-all">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-transparent to-transparent" />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3 text-xs text-gray-400 font-mono">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} className="text-[#00ffd1]" />
                        {article.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} className="text-[#00ffd1]" />
                        {article.readTime}
                      </div>
                    </div>

                    <h3 className="text-xl text-[#0ef75f] mb-3 group-hover:text-shadow-neon transition-all">
                      {article.title}
                    </h3>

                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.map((tag, idx) => (
                        <span 
                          key={idx}
                          className="text-xs font-mono px-2 py-1 border border-[#0ef75f]/20 text-gray-500"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 text-[#00ffd1] text-sm font-mono group-hover:gap-3 transition-all">
                      <span>Read More</span>
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-b from-[#0c0c0e] to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border-2 border-[#0ef75f]/30 p-12 bg-black/50 text-center"
          >
            <h2 className="text-3xl md:text-4xl text-[#0ef75f] mb-4">
              Subscribe to the Newsletter
            </h2>
            <p className="text-gray-400 mb-8">
              Get marketing insights, growth tactics, and industry trends delivered to your inbox every week.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="your.email@example.com"
                className="flex-1 px-4 py-3 bg-black border border-[#0ef75f]/30 text-gray-300 font-mono text-sm focus:outline-none focus:border-[#0ef75f] transition-colors"
              />
              <button className="px-6 py-3 bg-[#0ef75f] text-black font-mono uppercase tracking-wider hover:bg-[#0ef75f]/90 transition-all shadow-[0_0_20px_rgba(14,247,95,0.5)]">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
