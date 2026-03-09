import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  variant?: 'default' | 'dark' | 'light' | 'gradient';
}

export function Section({
  id,
  children,
  className = '',
  containerClassName = '',
  variant = 'default'
}: SectionProps) {
  const variants = {
    default: "bg-navy-950",
    light: "bg-navy-900/50",
    dark: "bg-navy-950",
    gradient: "bg-gradient-to-b from-navy-950 to-navy-900"
  };

  return (
    <section id={id} className={`py-16 md:py-32 relative ${variants[variant]} ${className}`}>
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
}

export function SectionHeader({
  title,
  subtitle,
  align = 'center',
  className = ''
}: {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: 'left' | 'center' | 'right';
  className?: string;
}) {
  const [isMobile, setIsMobile] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const alignments = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto"
  };

  const shouldAnimate = !prefersReducedMotion;
  
  const mobileTransition = { duration: 0.4, ease: "easeOut" as const };
  const desktopTransition = { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] };

  const motionProps = isMobile ? {
    initial: { opacity: 0, y: 12 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: mobileTransition
  } : {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: desktopTransition
  };

  return (
    <div className={`max-w-3xl mb-10 md:mb-24 ${alignments[align]} ${className}`}>
      <motion.h2 
        {...(shouldAnimate ? motionProps : {})}
        className="text-3xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6 text-white"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p 
          {...(shouldAnimate ? {
            ...motionProps,
            transition: { 
              ...(isMobile ? mobileTransition : desktopTransition), 
              delay: isMobile ? 0.05 : 0.1 
            }
          } : {})}
          className="text-lg md:text-xl text-slate-400 leading-relaxed font-light"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
