import { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Card } from '../components/ui/Card';
import { BackgroundLayer } from '../components/ui/BackgroundLayer';
import { Lightbulb, ShieldCheck, Rocket, Building2, ArrowRight, Quote } from 'lucide-react';

const TIMELINE_STEPS = [
  {
    icon: Lightbulb,
    title: "Idea Generation",
    description: "Students and faculty conceptualize innovative solutions to real-world problems.",
    color: "text-amber-400",
    bg: "bg-amber-400/10"
  },
  {
    icon: Building2,
    title: "IIC (Innovation Council)",
    description: "Nurturing ideas through mentorship, hackathons, and prototype development.",
    color: "text-blue-400",
    bg: "bg-blue-400/10"
  },
  {
    icon: ShieldCheck,
    title: "IPR Cell",
    description: "Securing intellectual property rights through patents, copyrights, and designs.",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10"
  },
  {
    icon: Rocket,
    title: "CIIL (Incubation)",
    description: "Transforming prototypes into viable startups with funding and industry linkages.",
    color: "text-purple-400",
    bg: "bg-purple-400/10"
  },
  {
    icon: Building2,
    title: "Successful Startup",
    description: "Graduating as an independent, market-ready venture.",
    color: "text-gold-400",
    bg: "bg-gold-400/10"
  }
];

export default function About() {
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const shouldAnimate = !prefersReducedMotion && !isMobile;

  return (
    <div className="min-h-screen bg-navy-950 pt-24 md:pt-32 pb-16 md:pb-24 relative overflow-hidden">
      <BackgroundLayer />
      {/* Premium Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] md:h-[500px] bg-gradient-to-b from-navy-900/50 to-transparent pointer-events-none z-0" />

      {/* Subtle Accent Glow */}
      {!isMobile && (
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[80px] pointer-events-none z-0 mix-blend-screen" />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Hero Section */}
        <motion.div
          initial={isMobile ? { opacity: 0, y: 15 } : shouldAnimate ? { opacity: 0, y: -10 } : { opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={isMobile ? { duration: 0.4, ease: "easeOut" } : { duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16 md:mb-24"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4 md:mb-6 tracking-tight">
            Our <span className="text-gold-400">Journey</span>
          </h1>
          <div className="w-12 md:w-16 h-1 bg-gold-500/50 mx-auto mb-6 md:mb-8 rounded-full" />
          <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed px-4">
            We believe that true innovation is born from late nights, relentless trial and error, and a community that refuses to settle for the ordinary.
          </p>
        </motion.div>

        {/* The Story Section */}
        <motion.div
          initial={isMobile ? { opacity: 0, y: 12 } : shouldAnimate ? { opacity: 0, y: 15 } : { opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={isMobile ? { duration: 0.4, ease: "easeOut" } : { duration: 0.6, ease: "easeOut" }}
          className="mb-20 md:mb-32"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-center">

            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 md:space-y-8">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white tracking-tight">
                Building the Ecosystem
              </h2>

              <div className="space-y-4 text-slate-300 font-light leading-relaxed text-base md:text-lg">
                <p>
                  The Innovation and Entrepreneurship Network (IEN) wasn't built overnight. It is the result of countless students and faculty members dedicating their time, energy, and passion to solving real-world problems.
                </p>
                <p>
                  We understand that the path from a raw idea to a successful startup is rarely a straight line. It requires mentorship, resources, and, most importantly, a culture that embraces failure as a stepping stone to success.
                </p>
                <p>
                  By integrating the Institution's Innovation Council (IIC), the Intellectual Property Rights (IPR) Cell, and the Center for Innovation, Incubation and Linkages (CIIL), we've created a seamless pipeline. We provide the structure so our innovators can focus on what they do best: building the future.
                </p>
              </div>
            </div>

            {/* Right Pull Quote */}
            <div className="lg:col-span-5">
              <Card variant="glass-dark" className="p-8 md:p-10 border-white/5 bg-white/[0.02] relative overflow-hidden shadow-sm">
                <Quote className="absolute top-4 right-4 w-12 h-12 text-gold-500/10 rotate-180" />
                <div className="relative z-10">
                  <p className="text-xl md:text-2xl font-display font-medium text-white leading-snug mb-6">
                    "Innovation isn't just about the final product. It's about the grit, the late-night prototypes, and the courage to build something new."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-[1px] bg-gold-500/50" />
                    <span className="text-sm font-bold text-gold-400 uppercase tracking-widest">IEN Leadership</span>
                  </div>
                </div>
              </Card>
            </div>

          </div>
        </motion.div>

        {/* Subtle Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-20 md:mb-32" />

        {/* How They Work Together */}
        <motion.div
          initial={isMobile ? { opacity: 0, y: 12 } : shouldAnimate ? { opacity: 0, y: 15 } : { opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={isMobile ? { duration: 0.4, ease: "easeOut" } : { duration: 0.6, ease: "easeOut" }}
          className="mb-20 md:mb-32"
        >
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4 tracking-tight">
              The Innovation Pipeline
            </h2>
            <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto font-light">
              A structured approach to turning raw potential into market-ready ventures.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          >
            {[
              { icon: Lightbulb, color: "blue", title: "1. Ideation (IIC)", desc: "Fostering a culture of innovation through hackathons, workshops, and mentorship. We help innovators refine their ideas and build initial prototypes." },
              { icon: ShieldCheck, color: "emerald", title: "2. Protection (IPR)", desc: "Securing intellectual property rights. We assist with patent searches, drafting, and filing to ensure your hard work is legally protected." },
              { icon: Rocket, color: "purple", title: "3. Incubation (CIIL)", desc: "Transforming prototypes into viable startups. We provide pre-incubation support, industry linkages, and access to funding." }
            ].map((card, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
              >
                <Card variant="glass-dark" className="p-8 border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-300 shadow-sm h-full group">
                  <div className={`w-12 h-12 rounded-xl bg-${card.color}-500/10 flex items-center justify-center mb-6 border border-${card.color}-500/20 group-hover:scale-110 transition-transform duration-300`}>
                    <card.icon className={`w-6 h-6 text-${card.color}-400`} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
                  <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed">
                    {card.desc}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Innovation Lifecycle Timeline */}
        <motion.div
          initial={isMobile ? { opacity: 0, y: 12 } : shouldAnimate ? { opacity: 0, y: 15 } : { opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={isMobile ? { duration: 0.4, ease: "easeOut" } : { duration: 0.6, ease: "easeOut" }}
        >
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white tracking-tight">
              The Journey
            </h2>
          </div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-10 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0" />

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.15 }
                }
              }}
              className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-6 relative z-10"
            >
              {TIMELINE_STEPS.map((step, index) => (
                <motion.div
                  variants={{
                    hidden: { opacity: 0, scale: 0.9, y: 20 },
                    visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 20 } }
                  }}
                  key={index}
                  className="flex flex-col items-center text-center group"
                >
                  <div className={`w-20 h-20 rounded-2xl ${step.bg} border border-white/5 flex items-center justify-center mb-6 transition-all duration-300 shadow-sm bg-navy-900/50 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]`}>
                    <step.icon className={`w-8 h-8 ${step.color}`} />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
                  <p className="text-sm text-slate-400 font-light leading-relaxed px-2">
                    {step.description}
                  </p>

                  {/* Mobile Arrow */}
                  {index < TIMELINE_STEPS.length - 1 && (
                    <div className="lg:hidden my-6">
                      <ArrowRight className="w-5 h-5 text-white/10" />
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
