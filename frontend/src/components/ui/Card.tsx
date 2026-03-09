import React, { useState, useEffect } from 'react';
import { motion, HTMLMotionProps, useReducedMotion } from 'motion/react';

interface CardProps extends HTMLMotionProps<"div"> {
  variant?: 'default' | 'glass' | 'glass-dark' | 'gradient' | 'tech';
  gradientColor?: string;
}

export const Card = React.memo(function Card({
  children,
  variant = 'default',
  gradientColor = 'from-navy-800 to-navy-600',
  className = '',
  ...props
}: CardProps) {
  const [isMobile, setIsMobile] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const baseStyles = "rounded-3xl overflow-hidden transition-all duration-400 ease-out relative z-10";

  const variants = {
    default: `bg-navy-900 border border-white/5 shadow-sm`,
    glass: `bg-white/5 backdrop-blur-sm sm:backdrop-blur-md border border-white/10 shadow-sm ${isMobile ? '' : 'hover:bg-white/10'}`,
    'glass-dark': `bg-navy-900/40 backdrop-blur-sm sm:backdrop-blur-md border border-white/10 shadow-sm ${isMobile ? '' : 'hover:border-white/20 hover:bg-navy-900/60'}`,
    gradient: `bg-gradient-to-br ${gradientColor} text-white shadow-md`,
    tech: `bg-navy-900/40 backdrop-blur-sm sm:backdrop-blur-md border border-white/10 shadow-sm ${isMobile ? '' : 'hover:shadow-[0_0_25px_rgba(212,175,55,0.15)] hover:border-gold-500/40'} overflow-hidden group`
  };

  const motionProps: any = isMobile ? {
    whileTap: { scale: 0.98 },
    transition: { duration: 0.15 }
  } : {
    whileHover: { y: -8, scale: 1.01 },
    transition: { type: 'spring', stiffness: 300, damping: 20 }
  };

  return (
    <motion.div
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...motionProps}
      {...props}
    >
      {children}
    </motion.div>
  );
});
