import { motion } from 'motion/react';
import { Mail, MapPin, Calendar, Github, Linkedin, Twitter, Instagram, Send } from 'lucide-react';
import { useState } from 'react';
import NeonButton from '../ui/NeonButton';

interface ContactProps {
  navigateTo: (page: string) => void;
}

export default function Contact({ navigateTo }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'alexandre.dubois@example.com',
      link: 'mailto:alexandre.dubois@example.com',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Paris, France',
      link: null,
    },
    {
      icon: Calendar,
      label: 'Book a Call',
      value: 'Schedule on Calendly',
      link: 'https://calendly.com',
    },
  ];

  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', url: '#', color: '#0ef75f' },
    { icon: Twitter, label: 'Twitter', url: '#', color: '#00ffd1' },
    { icon: Instagram, label: 'Instagram', url: '#', color: '#ff3b6b' },
    { icon: Github, label: 'GitHub', url: '#', color: '#0ef75f' },
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
              Get In Touch
              <span className="text-[#00ffd1]">{'/>'}</span>
            </h1>
            <p className="text-gray-400 font-mono text-lg">
              Let's collaborate on your next project
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-[#0c0c0e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl text-[#0ef75f] mb-8">
                Contact Information
              </h2>

              <div className="space-y-6 mb-12">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-4 p-4 border border-[#0ef75f]/20 bg-black/50 hover:border-[#0ef75f]/50 transition-all group"
                  >
                    <div className="p-3 border border-[#0ef75f]/30 bg-[#0c0c0e]">
                      <item.icon className="w-6 h-6 text-[#00ffd1] group-hover:text-[#0ef75f] transition-colors" />
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm mb-1">{item.label}</div>
                      {item.link ? (
                        <a 
                          href={item.link}
                          className="text-[#0ef75f] hover:text-[#00ffd1] transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-gray-300">{item.value}</div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <h3 className="text-2xl text-[#0ef75f] mb-6">Connect on Social</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-4 border border-[#0ef75f]/30 bg-black hover:border-[#0ef75f]/60 transition-all group"
                      style={{
                        boxShadow: `0 0 0 rgba(14, 247, 95, 0)`,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = `0 0 20px ${social.color}80`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = '0 0 0 rgba(14, 247, 95, 0)';
                      }}
                    >
                      <social.icon 
                        className="w-6 h-6 text-gray-400 group-hover:text-[#0ef75f] transition-colors"
                      />
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Availability */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-12 p-6 border-2 border-[#0ef75f]/30 bg-black"
              >
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-[#0ef75f] rounded-full animate-pulse mt-1.5" />
                  <div>
                    <h3 className="text-lg text-[#0ef75f] mb-2">Currently Available</h3>
                    <p className="text-gray-400 text-sm">
                      Open to freelance projects, internships, and full-time opportunities starting Summer 2025.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl text-[#0ef75f] mb-8">
                Send a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-400 font-mono text-sm mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-black border border-[#0ef75f]/30 text-gray-300 font-mono text-sm focus:outline-none focus:border-[#0ef75f] transition-colors"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-400 font-mono text-sm mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-black border border-[#0ef75f]/30 text-gray-300 font-mono text-sm focus:outline-none focus:border-[#0ef75f] transition-colors"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-400 font-mono text-sm mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 bg-black border border-[#0ef75f]/30 text-gray-300 font-mono text-sm focus:outline-none focus:border-[#0ef75f] transition-colors"
                    placeholder="What's this about?"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-400 font-mono text-sm mb-2">
                    Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full px-4 py-3 bg-black border border-[#0ef75f]/30 text-gray-300 font-mono text-sm focus:outline-none focus:border-[#0ef75f] transition-colors resize-none"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>

                <NeonButton type="submit" className="w-full">
                  <Send className="inline mr-2" size={18} />
                  Send Message
                </NeonButton>
              </form>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-8 p-4 border border-[#00ffd1]/30 bg-black/50"
              >
                <p className="text-gray-400 text-sm font-mono">
                  <span className="text-[#00ffd1]">Note:</span> I typically respond within 24-48 hours. For urgent inquiries, please use the Calendly link above to book a call.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-[#0ef75f]/30 p-12 bg-[#0c0c0e]/50 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: 'radial-gradient(circle at 50% 50%, #0ef75f 1px, transparent 1px)',
              backgroundSize: '30px 30px',
            }} />
            
            <div className="relative z-10">
              <MapPin className="w-16 h-16 mx-auto mb-6 text-[#00ffd1]" />
              <h3 className="text-3xl text-[#0ef75f] mb-4">
                Based in Paris, France
              </h3>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Available for remote work worldwide and in-person meetings in the Paris area.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
