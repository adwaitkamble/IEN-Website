import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Lightbulb, Rocket, Presentation, Award, CheckCircle2, ChevronDown, ShieldCheck } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Section } from '../components/ui/Section';
import { BackgroundLayer } from '../components/ui/BackgroundLayer';

const eventFlow = [
  {
    day: 'DAY 1',
    title: 'IDEATE & FORM',
    desc: 'A day of discovery where ideas are spoken aloud and teams form around belief.',
    points: [
      'Idea pitching (60–90 seconds)',
      'Audience voting',
      'Idea shortlisting',
      'Team formation',
      'Mentor onboarding',
      'Problem validation'
    ],
    outcome: '~20–25 startup teams formed',
    icon: Lightbulb
  },
  {
    day: 'DAY 2',
    title: 'BUILD & VALIDATE',
    desc: 'Sharpen thinking through execution, exposure, and expert insight.',
    points: [
      'MVP Development',
      'Customer discovery',
      'Market validation',
      'Structured workshop session',
      'Entrepreneur keynote',
      'Live Q&A'
    ],
    outcome: 'Execution + Exposure + Expert Guidance',
    icon: Rocket
  },
  {
    day: 'DAY 3',
    title: 'PITCH & SCALE',
    desc: 'A day where stories meet substance and effort meets evaluation.',
    points: [
      'Pitch deck refinement',
      'Mock pitching sessions',
      '5-minute final pitch + Q&A',
      'Evaluation by judges',
      'Awards & recognition'
    ],
    outcome: 'Top startups ready for incubation & mentorship',
    icon: Presentation
  }
];

const whyParticipate = [
  { title: 'Real Startup Exposure', desc: 'Move from raw idea to market validation.' },
  { title: 'Networking & Mentorship', desc: 'Connect with founders, investors, and industry experts.' },
  { title: 'Incubation Continuity', desc: 'Top teams get CIIL incubation and seed funding prep.' },
  { title: 'Problem-First Focus', desc: 'Solve real problems, don\'t just write code.' },
  { title: 'Pitching Experience', desc: 'Learn to sell your vision to a panel of judges.' },
  { title: 'Team Synergy', desc: 'Form cross-domain teams and build together.' }
];

const faqs = [
  {
    q: 'Do I need a startup idea beforehand?',
    a: 'No, you can join a team whose idea you believe in during the Day 1 pitching and voting session. If you have an idea, you can pitch it and form a team around it.'
  },
  {
    q: 'Can I participate individually?',
    a: 'Ennovate’X is a team-based event. You must form or join a team of 4–5 members on Day 1 to proceed to the next stages.'
  },
  {
    q: 'What happens after the event?',
    a: 'Top performing teams will be selected for incubation support, continuous mentorship, and potential funding opportunities through CIIL and our partner networks.'
  },
  {
    q: 'Is there mentorship after Day 3?',
    a: 'Yes, selected startups will receive ongoing mentorship to help them build their MVP, acquire early customers, and prepare for seed funding.'
  },
  {
    q: 'Are certificates provided?',
    a: 'Yes, all participants who complete the 3-day immersive experience will receive a certificate of participation, and winning teams will receive special recognition.'
  }
];

export default function EnnovateX() {
  const [expandedDay, setExpandedDay] = useState<number | null>(0);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
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
    <div className="overflow-x-hidden relative min-h-screen pt-24 md:pt-32 font-sans bg-black antialiased">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-12 md:pt-20 pb-20 md:pb-28">
        {/* Spotlight Glow */}
        {!isMobile && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/5 blur-[80px] rounded-full pointer-events-none z-0 mix-blend-screen" />
        )}
        
        <motion.div 
          initial={isMobile ? { opacity: 0 } : shouldAnimate ? { opacity: 0 } : { opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={isMobile ? { duration: 0.2 } : { duration: 1.5, ease: "easeOut" }}
          className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center"
        >
          <motion.div
            initial={isMobile ? { opacity: 0 } : shouldAnimate ? { opacity: 0, scale: 0.9 } : { opacity: 1, scale: 1 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={isMobile ? { duration: 0.2 } : { duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center mb-8"
          >
            <span className="text-[10px] md:text-xs text-gold-500/80 uppercase tracking-[0.3em] font-bold mb-2">A Flagship Initiative of</span>
            <span className="text-xs md:text-sm text-gold-400 uppercase tracking-widest font-medium">CIIL — Center for Innovation & Industry Linkage</span>
            <span className="text-[10px] md:text-xs text-gold-500/60 uppercase tracking-[0.3em] font-bold mt-2">IEN PCCOE</span>
            <div className="w-12 h-[1px] bg-gold-500/50 mt-4" />
          </motion.div>

          <motion.div
            initial={isMobile ? { opacity: 0 } : shouldAnimate ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={isMobile ? { duration: 0.2 } : { duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8 md:mb-12 relative"
          >
            <motion.h1 
              animate={shouldAnimate ? { y: [0, -5, 0] } : { y: 0 }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="text-5xl md:text-8xl lg:text-[9rem] font-display font-bold tracking-tighter mb-4 md:mb-6 relative z-10 group"
            >
              <span className="relative inline-block">
                <span className="text-white tracking-wide drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)]">ENNOVATE</span>
                <span className="bg-gradient-to-r from-yellow-400 via-gold-500 to-yellow-300 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(212,175,55,0.35)]">’X</span>
                
                {/* Shimmer Sweep */}
                {shouldAnimate && (
                  <motion.div
                    initial={{ x: '-100%' }}
                    animate={{ x: '200%' }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: [0.4, 0, 0.2, 1] }}
                    className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 pointer-events-none mix-blend-overlay"
                  />
                )}
              </span>
            </motion.h1>
            <h3 className="text-2xl md:text-3xl font-display font-light text-neutral-300 tracking-[0.3em] uppercase mt-8">
              IEN Startup Fest
            </h3>
            <div className="h-[2px] w-[120px] bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-6" />
          </motion.div>

          <motion.div
            initial={isMobile ? { opacity: 0 } : shouldAnimate ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={isMobile ? { duration: 0.2 } : { duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative mb-8 inline-block"
          >
            <p className="text-base md:text-lg text-gold-400 font-medium tracking-[0.2em] uppercase drop-shadow-[0_0_15px_rgba(212,175,55,0.2)]">
              From Idea <span className="font-light opacity-70 mx-1">→</span> MVP <span className="font-light opacity-70 mx-1">→</span> Market <span className="font-light opacity-70 mx-1">→</span> Pitch <span className="font-light opacity-70 mx-1">→</span> Launch
            </p>
            {shouldAnimate && (
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
                className="absolute -bottom-3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-500/50 to-transparent origin-left"
              />
            )}
          </motion.div>

          <motion.p
            initial={isMobile ? { opacity: 0 } : shouldAnimate ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={isMobile ? { duration: 0.2 } : { duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-base md:text-xl text-neutral-300 max-w-2xl mx-auto mb-10 md:mb-14 font-light leading-relaxed md:leading-loose opacity-85"
          >
            A 3-Day Immersive Entrepreneurial Experience Designed to Transform Students into Startup Founders.
          </motion.p>

          <motion.div
            initial={isMobile ? { opacity: 0 } : shouldAnimate ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={isMobile ? { duration: 0.2 } : { duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8 w-full sm:w-auto px-4"
          >
            <Button href="#register" size="lg" className="w-full sm:w-auto bg-gradient-to-r from-yellow-400 to-gold-500 text-black border-none hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all duration-300 font-bold px-10 py-4">
              Register Now
            </Button>
            <Button href="#flow" variant="glass" size="lg" className="w-full sm:w-auto bg-neutral-900/20 border-gold-500/30 text-gold-400 hover:bg-gold-500/10 hover:border-gold-500/50 transition-all duration-300 px-10 py-4">
              View Event Structure
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          {shouldAnimate && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="mt-16 flex flex-col items-center gap-3 text-gold-500/50"
            >
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Scroll</span>
              <div className="w-[1px] h-16 bg-gradient-to-b from-gold-500/50 to-transparent relative overflow-hidden">
                <motion.div 
                  animate={{ y: [0, 64, 0] }}
                  transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                  className="absolute top-0 left-0 w-full h-1/2 bg-gold-400"
                />
              </div>
            </motion.div>
          )}
        </motion.div>
      </section>

      {/* Why Participate */}
      <Section className="relative z-20 pt-20 pb-20 border-t border-white/5 antialiased">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={isMobile ? { opacity: 0 } : shouldAnimate ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={isMobile ? { duration: 0.2 } : { duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white mb-4">
              Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">Participate</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {whyParticipate.map((item, index) => (
              <motion.div
                key={index}
                initial={isMobile ? { opacity: 0 } : shouldAnimate ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={isMobile ? { duration: 0.2 } : { duration: 0.5, delay: shouldAnimate ? index * 0.1 : 0 }}
                className={`bg-white/5 border border-white/10 rounded-xl p-5 ${!isMobile ? 'hover:border-gold-500/30 hover:shadow-md hover:-translate-y-1' : ''} transition-all duration-300 shadow-sm`}
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-gold-500 shrink-0 mt-0.5" size={18} />
                  <div>
                    <h3 className="text-lg font-bold text-neutral-200 mb-1">{item.title}</h3>
                    <p className="text-sm text-neutral-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Eligibility Section */}
      <Section className="relative z-20 pt-20 pb-20 border-t border-white/5 antialiased">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={isMobile ? { opacity: 0 } : shouldAnimate ? { opacity: 0, y: 40 } : { opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={isMobile ? { duration: 0.2 } : { duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className={`bg-neutral-900/50 border border-gold-500/40 rounded-3xl p-8 md:p-12 shadow-sm ${!isMobile ? 'hover:shadow-md' : ''} transition-all duration-300 relative overflow-hidden max-w-4xl mx-auto`}
          >
            {!isMobile && (
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 blur-[80px] rounded-full pointer-events-none" />
            )}
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white flex items-center gap-4">
                <ShieldCheck className="text-gold-400" size={36} />
                Eligibility Criteria
              </h2>
              <div className="flex flex-col items-end">
                <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-sm font-bold tracking-wide shadow-[0_0_15px_rgba(212,175,55,0.2)] mb-2">
                  Limited Seats
                </span>
                <span className="text-xs text-neutral-500 uppercase tracking-widest">Shortlisting After Day 1</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Only Undergraduate Students',
                'Engineering | Management | Design',
                'Team Size: 4–5 Members',
                'Open to early-stage ideas',
                'Cross-domain collaboration encouraged'
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <CheckCircle2 className="text-gold-500 shrink-0 mt-0.5" size={20} />
                  <span className="text-lg text-neutral-200 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* 3-Day Experience Timeline */}
      <Section id="flow" className="relative z-20 pt-20 pb-20 border-t border-white/5 antialiased">
        {!isMobile && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[800px] bg-gold-500/5 blur-[120px] pointer-events-none mix-blend-screen z-0" />
        )}
        
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={isMobile ? { opacity: 0 } : shouldAnimate ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={isMobile ? { duration: 0.2 } : { duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white mb-6">
              3-Day <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">Experience</span>
            </h2>
          </motion.div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {eventFlow.map((day, index) => (
              <motion.div
                key={day.day}
                initial={isMobile ? { opacity: 0 } : shouldAnimate ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={isMobile ? { duration: 0.2 } : { duration: 0.5, delay: shouldAnimate ? index * 0.1 : 0 }}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 shadow-sm ${expandedDay === index ? `bg-white/5 border-gold-500/40` : 'bg-neutral-900/50 border-white/10 hover:border-white/20'}`}
              >
                <button 
                  onClick={() => setExpandedDay(expandedDay === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left"
                >
                  <div className="flex items-center gap-6">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors ${expandedDay === index ? 'bg-gold-500 text-black' : 'bg-white/5 text-gold-400 border border-white/10'}`}>
                      <day.icon size={24} />
                    </div>
                    <div>
                      <div className="text-gold-400 font-bold tracking-widest text-sm mb-1">{day.day}</div>
                      <h3 className="text-2xl md:text-3xl font-display font-bold text-white flex items-center gap-3">
                        {day.title}
                        {index === 2 && <Award className="text-gold-500" size={24} />}
                      </h3>
                    </div>
                  </div>
                  <ChevronDown className={`text-neutral-400 transition-transform duration-300 ${expandedDay === index ? 'rotate-180 text-gold-400' : ''}`} size={24} />
                </button>

                <AnimatePresence initial={false}>
                  {expandedDay === index && (
                    <motion.div
                      initial={isMobile ? { opacity: 0 } : shouldAnimate ? { opacity: 0, height: 0 } : { opacity: 0 }}
                      animate={isMobile ? { opacity: 1 } : shouldAnimate ? { opacity: 1, height: 'auto' } : { opacity: 1 }}
                      exit={isMobile ? { opacity: 0 } : shouldAnimate ? { opacity: 0, height: 0 } : { opacity: 0 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className={shouldAnimate && !isMobile ? "overflow-hidden" : ""}
                    >
                      <div className="px-6 md:px-8 pb-8 pt-2">
                        <div className="pl-0 md:pl-18">
                          <div className="relative pl-6 border-l-2 border-gold-500/30">
                            <ul className="space-y-4 mb-8">
                              {day.points.map((point, i) => (
                                <li key={i} className="flex items-start gap-3 text-neutral-300 text-lg">
                                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0 mt-2.5" />
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>
                            <div className="bg-neutral-900/50 border border-gold-500/20 rounded-xl p-4 inline-block">
                              <div className="text-xs text-gold-500/70 uppercase tracking-widest mb-1 font-bold">Outcome</div>
                              <div className="text-gold-400 font-medium text-lg">{day.outcome}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section className="relative z-20 pt-20 pb-20 border-t border-white/5 antialiased">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={isMobile ? { opacity: 0 } : shouldAnimate ? { opacity: 0, y: 40 } : { opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={isMobile ? { duration: 0.2 } : { duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white mb-6">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">Questions</span>
            </h2>
          </motion.div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={isMobile ? { opacity: 0 } : shouldAnimate ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={isMobile ? { duration: 0.2 } : { duration: 0.5, delay: shouldAnimate ? index * 0.1 : 0 }}
                className="border border-white/10 rounded-xl bg-neutral-900/50 overflow-hidden hover:border-white/20 transition-all duration-300 shadow-sm"
              >
                <button 
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full text-left p-6 flex justify-between items-center gap-4"
                >
                  <span className={`text-lg font-medium transition-colors ${expandedFaq === index ? 'text-gold-400' : 'text-neutral-200'}`}>
                    {faq.q}
                  </span>
                  <ChevronDown className={`text-neutral-400 shrink-0 transition-transform duration-300 ${expandedFaq === index ? 'rotate-180 text-gold-400' : ''}`} size={20} />
                </button>
                <AnimatePresence initial={false}>
                  {expandedFaq === index && (
                    <motion.div
                      initial={isMobile ? { opacity: 0 } : shouldAnimate ? { opacity: 0, height: 0 } : { opacity: 0 }}
                      animate={isMobile ? { opacity: 1 } : shouldAnimate ? { opacity: 1, height: 'auto' } : { opacity: 1 }}
                      exit={isMobile ? { opacity: 0 } : shouldAnimate ? { opacity: 0, height: 0 } : { opacity: 0 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className={shouldAnimate && !isMobile ? "overflow-hidden" : ""}
                    >
                      <div className="p-6 pt-0 text-neutral-400 text-base leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Registration CTA */}
      <section id="register" className="py-20 md:py-28 relative overflow-hidden border-t border-white/5 antialiased">
        {!isMobile && (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)] pointer-events-none" />
        )}
        
        <motion.div 
          initial={isMobile ? { opacity: 0 } : shouldAnimate ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={isMobile ? { duration: 0.2 } : { duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center border border-gold-500/30 rounded-3xl p-10 md:p-16 bg-neutral-900/50 shadow-sm transition-all duration-300"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white mb-4">
            Registrations Open
          </h2>
          <p className="text-xl text-gold-400 font-medium mb-10 tracking-wide">
            Exclusively for Undergraduate Students.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center gap-2 text-neutral-300">
              <div className="w-1.5 h-1.5 bg-gold-500 rounded-full" />
              <span>Limited seats</span>
            </div>
            <div className="flex items-center gap-2 text-neutral-300">
              <div className="w-1.5 h-1.5 bg-gold-500 rounded-full" />
              <span>Competitive selection</span>
            </div>
            <div className="flex items-center gap-2 text-neutral-300">
              <div className="w-1.5 h-1.5 bg-gold-500 rounded-full" />
              <span>Structured 3-Day immersive journey</span>
            </div>
          </div>

          <div className="relative inline-block">
            <Button href="/ennovatex/register" size="lg" className="relative text-lg px-12 py-6 bg-gradient-to-r from-yellow-400 to-gold-500 text-black font-bold hover:brightness-110 shadow-[0_0_30px_rgba(212,175,55,0.4)] border-none transition-all duration-300 hover:scale-105">
              Register for Ennovate’X
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Footer Authority Line */}
      <div className="border-t border-white/5 py-8 text-center relative z-10">
        <p className="text-xs md:text-sm text-gold-500/60 uppercase tracking-widest font-medium mb-4">
          An Official Flagship Innovation Session Under CIIL – IEN PCCOE
        </p>
        <p className="text-sm text-neutral-400">
          Need help? Contact us: <a href="mailto:ien.pccoe@gmail.com" className="text-gold-400 hover:text-gold-300 transition-colors">ien.pccoe@gmail.com</a>
        </p>
      </div>
    </div>
  );
}
