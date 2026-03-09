import { useState, useEffect, useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Lightbulb, ShieldCheck, Link as LinkIcon, Users, TrendingUp, Rocket, Zap } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Section } from '../components/ui/Section';
import { AnimatedCounter } from '../components/ui/AnimatedCounter';
import { BackgroundLayer } from '../components/ui/BackgroundLayer';

const stats = [
  { label: 'Active Innovators', value: 1.2, suffix: 'k+', isDecimal: true, icon: Users },
  { label: 'Funded Projects', value: 150, suffix: '+', isDecimal: false, icon: Rocket },
  { label: 'Patents Filed', value: 100, suffix: '+', isDecimal: false, icon: ShieldCheck },
  { label: 'Startups Incubated', value: 50, suffix: '+', isDecimal: false, icon: TrendingUp },
];

const divisions = [
  {
    id: 'iic',
    name: 'IIC',
    fullName: 'Institution Innovation Council',
    desc: 'Fostering the culture of innovation and startup ecosystem among students and faculty.',
    icon: Lightbulb,
    color: 'from-blue-600 to-cyan-500',
    bgLight: 'bg-blue-500/10',
    textPrimary: 'text-blue-400',
    borderHover: 'hover:border-blue-500/50',
    shadowHover: 'hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]'
  },
  {
    id: 'ipr',
    name: 'IPR',
    fullName: 'Intellectual Property Rights',
    desc: 'Guiding and supporting the filing of patents, copyrights, and trademarks for novel ideas.',
    icon: ShieldCheck,
    color: 'from-purple-600 to-pink-500',
    bgLight: 'bg-purple-500/10',
    textPrimary: 'text-purple-400',
    borderHover: 'hover:border-purple-500/50',
    shadowHover: 'hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]'
  },
  {
    id: 'ciil',
    name: 'CIIL',
    fullName: 'Center for Innovation & Industry Linkage',
    desc: 'Bridging the gap between academia and industry through collaborative projects.',
    icon: LinkIcon,
    color: 'from-emerald-600 to-teal-500',
    bgLight: 'bg-emerald-500/10',
    textPrimary: 'text-emerald-400',
    borderHover: 'hover:border-emerald-500/50',
    shadowHover: 'hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]'
  },
];

export default function Home() {
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.substring(1);
      const element = document.getElementById(targetId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  const shouldAnimate = !prefersReducedMotion && !isMobile;

  return (
    <div className="overflow-hidden relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-20 md:pb-28 overflow-hidden antialiased">

        {/* Soft Radial Glows */}
        {!isMobile && (
          <>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/5 blur-[100px] rounded-full pointer-events-none z-0 mix-blend-screen" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none z-0 mix-blend-screen" />
          </>
        )}

        {/* Tech Grid Overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSIvPjwvc3ZnPg==')] opacity-10 md:opacity-20 z-0 mix-blend-overlay" />

        {/* Faded Watermark Logo */}
        {shouldAnimate ? (
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-[-5%] md:right-[5%] top-1/2 -translate-y-1/2 w-[300px] md:w-[800px] h-auto opacity-[0.02] md:opacity-[0.04] blur-[1px] z-0 pointer-events-none"
          >
            <img src="/bird.png" alt="" className="w-full h-auto object-contain" loading="lazy" />
          </motion.div>
        ) : (
          <div className="absolute right-[-5%] md:right-[5%] top-1/2 -translate-y-1/2 w-[250px] md:w-[800px] h-auto opacity-[0.02] md:opacity-[0.05] blur-[1px] z-0 pointer-events-none">
            <img src="/bird.png" alt="" className="w-full h-auto object-contain" loading="lazy" />
          </div>
        )}

        {/* PCCOE College Logo */}
        {!isMobile && (
          <motion.div
            initial={shouldAnimate ? { opacity: 0, x: -15 } : { opacity: 1, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-24 md:top-32 left-4 md:left-12 lg:left-16 z-20 hidden sm:flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity duration-300"
          >
            <div className="flex items-center gap-2 bg-white/5 sm:backdrop-blur-md border border-white/10 p-1 pr-3 rounded-md shadow-sm">
              <img
                src="/college.png"
                alt="PCCOE Logo"
                className="h-6 md:h-8 object-contain bg-white rounded-md p-1"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/pccoe/48/48';
                }}
              />
              <div className="flex flex-col">
                <span className="text-[8px] md:text-[10px] font-bold text-slate-300 tracking-wider uppercase leading-none">Pimpri Chinchwad</span>
                <span className="text-[8px] md:text-[10px] text-slate-500 tracking-widest uppercase leading-none mt-0.5">College of Engineering</span>
              </div>
            </div>
          </motion.div>
        )}

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
                delayChildren: isMobile ? 0 : 0.2
              }
            }
          }}
          className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center mt-10"
        >
          <motion.div
            variants={isMobile ? {
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.2 } }
            } : {
              hidden: { opacity: 0, scale: 0.95, y: 10 },
              visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
            }}
            className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-white/5 border border-white/10 sm:backdrop-blur-md mb-6 md:mb-8 shadow-sm"
          >
            <span className={`flex h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-gold-500 ${shouldAnimate ? 'animate-pulse' : ''}`} />
            <span className="text-xs md:text-sm font-medium text-slate-300 tracking-wide uppercase">PCCOE Innovation Hub</span>
          </motion.div>

          <motion.h1
            variants={isMobile ? {
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.2 } }
            } : {
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
            }}
            className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight text-white mb-6 md:mb-8 leading-[1.1]"
          >
            Engineering the Future of <br className="hidden md:block" />
            <span className={`text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-500 to-gold-300 bg-300% ${shouldAnimate ? 'animate-gradient' : 'from-gold-400 to-gold-500'} drop-shadow-sm`}>Innovation.</span>
          </motion.h1>

          <motion.p
            variants={isMobile ? {
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.2 } }
            } : {
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
            }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed font-light px-4"
          >
            The central nervous system for research, technology, and entrepreneurship at PCCOE. We turn bold ideas into disruptive startups.
          </motion.p>

          <motion.div
            variants={isMobile ? {
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.2 } }
            } : {
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
            }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 px-4"
          >
            <Button href="/#divisions" size="lg" icon={!isMobile && <ArrowRight size={18} />} className="w-full sm:w-auto">
              Explore Divisions
            </Button>
            <Button href="/contact" variant="glass" size="lg" className="w-full sm:w-auto">
              Join Us
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        {shouldAnimate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400"
          >
            <span className="text-[10px] md:text-xs uppercase tracking-widest font-semibold">Scroll</span>
            <div className="w-[1px] h-8 md:h-12 bg-gradient-to-b from-slate-400 to-transparent relative overflow-hidden">
              <motion.div
                animate={{ y: [0, 48, 0] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                className="absolute top-0 left-0 w-full h-1/2 bg-gold-500"
              />
            </div>
          </motion.div>
        )}
      </section>

      {/* Stats Section */}
      <Section className="relative z-20 pt-20 md:pt-28 pb-20 md:pb-28 antialiased">
        <motion.div
          initial={isMobile ? { opacity: 0 } : shouldAnimate ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={isMobile ? { duration: 0.2 } : { duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 relative z-10 max-w-[1320px] mx-auto"
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 text-gold-400 mb-4 md:mb-6 group-hover:scale-105 group-hover:bg-white/10 group-hover:border-gold-500/30 transition-all duration-300 shadow-sm relative">
                {!isMobile && (
                  <div className="absolute inset-0 bg-gold-500/20 blur-lg md:blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                )}
                <stat.icon className="w-6 h-6 md:w-8 h-8 relative z-10" />
              </div>
              <div className="text-3xl md:text-5xl font-display font-bold text-white mb-1 md:mb-2 tracking-tight">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} isDecimal={stat.isDecimal} />
              </div>
              <div className="text-[10px] md:text-sm font-medium text-slate-400 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </motion.div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </Section>

      {/* Divisions Section */}
      <Section id="divisions" className="relative overflow-hidden pt-20 md:pt-28 pb-20 md:pb-28 antialiased">
        {/* Background decorative elements */}
        {!isMobile && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[800px] h-[300px] md:h-[500px] bg-gold-500/5 blur-[100px] pointer-events-none mix-blend-screen z-0" />
        )}

        <motion.div
          initial={isMobile ? { opacity: 0 } : shouldAnimate ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={isMobile ? { duration: 0.2 } : { duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 md:mb-20 text-center relative z-10 px-4"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white mb-4 md:mb-6 drop-shadow-sm">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">Innovation</span> Engine
          </h2>
          <p className="text-base md:text-xl text-slate-300 max-w-3xl mx-auto font-light">
            Three specialized divisions working in synergy to support the complete lifecycle of an idea—from conception to commercialization.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-10 relative z-10 px-4 md:px-0 max-w-[1320px] mx-auto">
          {divisions.map((div, index) => (
            <motion.div
              key={div.id}
              initial={isMobile ? { opacity: 0 } : shouldAnimate ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={isMobile ? { duration: 0.2 } : { duration: 0.6, delay: shouldAnimate ? index * 0.1 : 0, ease: [0.22, 1, 0.36, 1] }}
              className="h-full"
            >
              <Link to={`/divisions/${div.id}`} className="block h-full group">
                <Card variant="glass-dark" className={`relative h-full p-6 md:p-8 transition-all duration-300 ${!isMobile ? 'hover:scale-[1.02] hover:-translate-y-1 hover:shadow-md hover:border-gold-500/30' : ''} shadow-sm border border-white/10 overflow-hidden`}>
                  {/* Glow behind card content */}
                  {!isMobile && (
                    <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  )}

                  <div className={`w-16 h-16 md:w-20 md:h-20 rounded-xl md:rounded-2xl bg-gradient-to-br ${div.color} flex items-center justify-center text-white mb-6 md:mb-10 shadow-sm ${!isMobile ? 'group-hover:scale-105' : ''} transition-all duration-300`}>
                    <div.icon className="w-8 h-8 md:w-10 md:h-10" />
                  </div>

                  <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2 md:mb-3">{div.name}</h3>
                  <h4 className={`text-xs md:text-sm font-bold uppercase tracking-wider ${div.textPrimary} mb-4 md:mb-8 h-auto md:h-10`}>{div.fullName}</h4>
                  <p className="text-slate-300 mb-6 md:mb-10 leading-relaxed text-base md:text-lg font-light">
                    {div.desc}
                  </p>

                  <div className="mt-auto pt-6 md:pt-8 border-t border-white/10">
                    <div
                      className={`inline-flex items-center gap-2 font-semibold text-slate-300 ${!isMobile ? `group-hover:${div.textPrimary}` : ''} transition-colors text-base md:text-lg`}
                    >
                      Explore Division <ArrowRight size={18} className={!isMobile ? "group-hover:translate-x-1 transition-transform" : ""} />
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 relative overflow-hidden antialiased">
        {!isMobile && (
          <>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-[80px] pointer-events-none mix-blend-screen" />
          </>
        )}

        <motion.div
          initial={isMobile ? { opacity: 0 } : shouldAnimate ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={isMobile ? { duration: 0.2 } : { duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center"
        >
          <div className="w-16 h-16 md:w-20 md:h-20 mx-auto bg-white/5 sm:backdrop-blur-md rounded-xl md:rounded-2xl border border-white/10 flex items-center justify-center text-white mb-6 md:mb-8 shadow-sm">
            <Zap className="w-8 h-8 md:w-10 md:h-10 text-gold-400" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white mb-6 md:mb-8 leading-tight">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-500">Build the Future?</span>
          </h2>
          <p className="text-lg md:text-2xl text-slate-300 mb-8 md:mb-12 max-w-2xl mx-auto font-light">
            Join a community of builders, thinkers, and creators. Get access to mentorship, funding, and resources.
          </p>
          <div className="relative inline-block w-full sm:w-auto">
            {shouldAnimate && <div className="absolute inset-0 bg-gold-500/20 blur-lg rounded-full animate-pulse hidden sm:block" />}
            <Button href="/contact" size="lg" icon={<ArrowRight size={18} />} className="relative text-base md:text-lg px-8 md:px-10 py-4 md:py-5 w-full sm:w-auto justify-center">
              Apply to Incubator
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

