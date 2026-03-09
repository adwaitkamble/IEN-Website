import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Instagram, Linkedin, ExternalLink } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { BackgroundLayer } from '../components/ui/BackgroundLayer';

const CONTACT_PERSONS = [
  {
    name: 'Mr. Harshavardhan Karanje',
    role: 'Technical Lead',
    phone: '+91 7770075055',
    tel: '+917770075055'
  },
  {
    name: 'Mr. Jayesh Patil',
    role: 'Convenor',
    phone: '+91 8668705817',
    tel: '+918668705817'
  }
];

const SOCIAL_LINKS = [
  {
    name: 'Instagram',
    icon: Instagram,
    url: 'https://www.instagram.com/pccoe_ien?igsh=Ym1qMjR2Z2FsZGd5'
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://www.linkedin.com/company/innovation-and-entrepreneurship-ien-pccoe/'
  }
];

export default function Contact() {
  return (
    <div className="min-h-screen bg-navy-950 pt-24 md:pt-32 pb-20 md:pb-28 relative overflow-hidden antialiased">
      <BackgroundLayer />

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16 md:mb-24"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 tracking-tight">
            Contact <span className="text-gold-400">Us</span>
          </h1>
          <div className="w-12 md:w-16 h-1 bg-gold-500/50 mx-auto mb-6 rounded-full" />
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Have a question or an idea? We'd love to hear from you. Reach out to our team or visit us at our innovation hub.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white tracking-tight">Official Details</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                  <div className="w-10 h-10 rounded-xl bg-gold-500/10 flex items-center justify-center shrink-0">
                    <MapPin className="text-gold-400" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Our Location</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Sector 26, Pradhikaran, Nigdi, Pune, Maharashtra 411044
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                  <div className="w-10 h-10 rounded-xl bg-gold-500/10 flex items-center justify-center shrink-0">
                    <Mail className="text-gold-400" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Email Address</h4>
                    <p className="text-slate-400 text-sm">ien@pccoe.org</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white tracking-tight">Social Media</h2>
              <div className="flex gap-4">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-white/[0.02] border border-white/10 flex items-center justify-center text-slate-400 hover:text-gold-400 hover:border-gold-500/50 hover:bg-gold-500/5 transition-all duration-300 group"
                  >
                    <social.icon size={24} className="group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Get In Touch Block */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card variant="glass-dark" className="p-8 md:p-10 border-white/10 bg-white/[0.02] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gold-500/50 to-transparent opacity-50" />

              <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-8 tracking-tight">Get in Touch</h2>

              <div className="space-y-6">
                {CONTACT_PERSONS.map((person) => (
                  <a
                    key={person.name}
                    href={`tel:${person.tel}`}
                    className="block group"
                  >
                    <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-gold-500/30 hover:bg-white/[0.05] hover:shadow-md hover:scale-[1.02] transition-all duration-300">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-white font-bold text-lg mb-1 group-hover:text-gold-400 transition-colors">
                            {person.name}
                          </h4>
                          <p className="text-slate-500 text-xs uppercase tracking-widest font-medium">
                            {person.role}
                          </p>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-400 group-hover:bg-gold-500 group-hover:text-navy-950 transition-all">
                          <Phone size={18} />
                        </div>
                      </div>
                      <div className="mt-4 flex items-center gap-2 text-slate-300 font-mono text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold-500/50" />
                        {person.phone}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-white/5 text-center">
                <p className="text-slate-400 text-sm font-light">
                  Click on a contact to call directly from your device.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
