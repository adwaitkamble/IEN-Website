import { useEffect } from 'react';
import { motion } from 'framer-motion';

export function IntroAnimation({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    // Timer-based completion to guarantee unmount
    const timer = setTimeout(() => {
      sessionStorage.setItem('ien_intro_seen', 'true');
      onComplete();
    }, 1800); // 1.8 seconds total duration

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: [1, 1, 0] }}
      transition={{ duration: 1.8, times: [0, 0.8, 1], ease: "easeInOut" }}
      className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-navy-950 overflow-hidden"
    >
      {/* Dark navy gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 z-0" />
      
      {/* Soft gold radial glow */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gold-500/20 blur-[100px] rounded-full pointer-events-none z-0"
      />

      <div className="relative z-10 flex flex-col items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white flex items-center justify-center overflow-hidden shadow-[0_0_40px_rgba(212,175,55,0.15)] mb-8"
        >
          <img 
            src="/logo.png" 
            alt="IEN Logo" 
            className="w-full h-full object-contain p-2"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/ien/128/128';
            }}
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-center"
        >
          <motion.h1 
            className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-4 relative inline-block text-transparent bg-clip-text"
            style={{
              backgroundImage: 'linear-gradient(to right, #ffffff 0%, #ffffff 40%, #d4af37 50%, #ffffff 60%, #ffffff 100%)',
              backgroundSize: '200% auto'
            }}
            animate={{
              backgroundPosition: ['200% center', '-200% center']
            }}
            transition={{
              duration: 1.5,
              delay: 0.3,
              ease: "easeInOut"
            }}
          >
            IEN PCCOE
          </motion.h1>
          <p className="text-sm md:text-base text-slate-400 font-light tracking-widest uppercase">
            Engineering the Future of Innovation
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
