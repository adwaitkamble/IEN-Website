import { useState, useEffect, memo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export const BackgroundLayer = memo(function BackgroundLayer() {
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
    <div className="fixed inset-0 pointer-events-none -z-10 bg-navy-950 overflow-hidden">
      {/* Base Depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(11,44,95,0.8)_0%,rgba(2,12,27,1)_100%)] opacity-60" />

      {/* Desktop Enhancements */}
      {!isMobile && (
        <>
          {/* Subtle Grid Texture */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSIvPjwvc3ZnPg==')] opacity-[0.15] mix-blend-overlay" />

          {/* Soft Blue Depth Glow */}
          <motion.div 
            className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-600/10 blur-[80px] mix-blend-screen"
            animate={shouldAnimate ? { opacity: [0.4, 0.6, 0.4] } : { opacity: 0.5 }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Subtle Gold Radial Glow */}
          <motion.div 
            className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-gold-500/5 blur-[100px] mix-blend-screen"
            animate={shouldAnimate ? { opacity: [0.3, 0.5, 0.3] } : { opacity: 0.4 }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
        </>
      )}
    </div>
  );
});
