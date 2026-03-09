import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function IntroScreen() {
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem('ien_intro_seen');
    
    if (!hasSeenIntro) {
      setShowIntro(true);
      sessionStorage.setItem('ien_intro_seen', 'true');
      
      const timer = setTimeout(() => {
        setShowIntro(false);
      }, 2800); // 2.8 seconds total duration
      
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <AnimatePresence>
      {showIntro && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-950 overflow-hidden"
        >
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950" />
          
          {/* Soft Gold Radial Glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold-500/10 blur-[100px] rounded-full pointer-events-none"
          />

          <div className="relative z-10 flex flex-col items-center text-center">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: 1, scale: 1.05 }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="w-24 h-24 mb-8 rounded-full bg-white flex items-center justify-center overflow-hidden shadow-[0_0_40px_rgba(212,175,55,0.15)]"
            >
              <img 
                src="/logo.png" 
                alt="IEN Logo" 
                className="w-full h-full object-contain p-2"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/ien/96/96';
                }}
              />
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-5xl font-display font-bold text-white mb-4 tracking-tight relative overflow-hidden px-4 py-2"
            >
              IEN PCCOE
              {/* Shimmer Effect */}
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '200%' }}
                transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
                className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
              />
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-gold-400/80 font-medium tracking-widest text-sm md:text-base uppercase"
            >
              Engineering the Future of Innovation
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
