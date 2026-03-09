import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, ArrowRight, CheckCircle2, XCircle } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { BackgroundLayer } from '../components/ui/BackgroundLayer';

export default function Events() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const targetDate = new Date('2026-03-15T00:00:00');
    const registrationDeadline = new Date('2026-03-14T23:59:59');

    const updateTimer = () => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      if (now > registrationDeadline) {
        setIsRegistrationOpen(false);
      }

      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60)
        });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-24 pb-32 min-h-screen bg-navy-950 relative overflow-hidden">
      <BackgroundLayer />
      <Section className="relative z-20">
        <div className="text-center mb-16">
          <motion.h1
            initial={isMobile ? { opacity: 0, y: 12 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={isMobile ? { duration: 0.4, ease: "easeOut" } : { duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6"
          >
            Upcoming <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">Events</span>
          </motion.h1>
          <motion.p
            initial={isMobile ? { opacity: 0, y: 12 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={isMobile ? { duration: 0.4, delay: 0.05, ease: "easeOut" } : { duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto font-light"
          >
            Discover and participate in our latest innovation and entrepreneurship programs.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={isMobile ? { opacity: 0, y: 12 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={isMobile ? { duration: 0.4, delay: 0.1, ease: "easeOut" } : { duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <Card variant="glass-dark" className={`relative overflow-hidden group border-gold-500/30 ${isMobile ? '' : 'hover:border-gold-500/60 hover:shadow-[0_0_40px_rgba(212,175,55,0.15)] hover:-translate-y-1'} transition-all duration-500`}>
              {/* Gold Badge */}
              <div className="absolute top-0 right-0 bg-gradient-to-r from-gold-600 to-gold-400 text-navy-950 font-bold text-xs uppercase tracking-wider py-1 px-4 rounded-bl-lg z-20 shadow-lg">
                Upcoming
              </div>

              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />

              <div className="relative z-10 p-6 md:p-8 flex flex-col md:flex-row gap-8">
                {/* Date/Time Column */}
                <div className="flex-shrink-0 flex flex-col items-center justify-center bg-navy-900/80 rounded-2xl p-6 border border-white/5 min-w-[160px]">
                  <span className="text-gold-400 font-bold text-sm uppercase tracking-widest mb-1">March</span>
                  <span className="text-5xl font-display font-bold text-white mb-2">15</span>
                  <span className="text-slate-400 text-xs font-medium uppercase tracking-wider">2026</span>
                </div>

                {/* Content Column */}
                <div className="flex-grow flex flex-col justify-center">
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-3 group-hover:text-gold-400 transition-colors">
                    EnnovateX
                  </h2>
                  <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6 font-light">
                    A premier innovation and entrepreneurship focused event designed to ignite creative problem-solving and foster startup culture among students. Join us for an immersive experience of ideation and networking.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    <div className="flex items-center gap-3 text-slate-300">
                      <Clock className="w-5 h-5 text-gold-500/70" />
                      <span className="text-sm font-medium">Reg. Deadline: 14 March</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-300">
                      <MapPin className="w-5 h-5 text-gold-500/70" />
                      <span className="text-sm font-medium">PCCOE Campus</span>
                    </div>
                  </div>

                  {/* Countdown Timer */}
                  <div className="flex gap-4 mb-8">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-lg bg-navy-900 border border-white/10 flex items-center justify-center text-white font-bold text-lg mb-1">
                        {timeLeft.days.toString().padStart(2, '0')}
                      </div>
                      <span className="text-[10px] text-slate-400 uppercase tracking-wider">Days</span>
                    </div>
                    <div className="text-gold-500 font-bold text-xl mt-2">:</div>
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-lg bg-navy-900 border border-white/10 flex items-center justify-center text-white font-bold text-lg mb-1">
                        {timeLeft.hours.toString().padStart(2, '0')}
                      </div>
                      <span className="text-[10px] text-slate-400 uppercase tracking-wider">Hours</span>
                    </div>
                    <div className="text-gold-500 font-bold text-xl mt-2">:</div>
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-lg bg-navy-900 border border-white/10 flex items-center justify-center text-white font-bold text-lg mb-1">
                        {timeLeft.minutes.toString().padStart(2, '0')}
                      </div>
                      <span className="text-[10px] text-slate-400 uppercase tracking-wider">Mins</span>
                    </div>
                    <div className="text-gold-500 font-bold text-xl mt-2">:</div>
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-lg bg-navy-900 border border-white/10 flex items-center justify-center text-white font-bold text-lg mb-1">
                        {timeLeft.seconds.toString().padStart(2, '0')}
                      </div>
                      <span className="text-[10px] text-slate-400 uppercase tracking-wider">Secs</span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div>
                    {isRegistrationOpen ? (
                      <Button
                        href="/ennovatex"
                        className="w-full sm:w-auto px-8"
                        icon={<ArrowRight size={18} />}
                      >
                        Register Now
                      </Button>
                    ) : (
                      <div className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 font-medium">
                        <XCircle size={18} />
                        Registration Closed
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </Section>
    </div>
  );
}
