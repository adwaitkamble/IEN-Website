import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'motion/react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  children?: React.ReactNode;
  className?: string;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  icon,
  iconPosition = 'right',
  ...props
}: ButtonProps) {
  const [isMobile, setIsMobile] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const baseStyles = "inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 ease-out rounded-xl focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: `bg-gradient-to-r from-gold-400 to-gold-600 text-navy-950 font-bold shadow-sm ${isMobile ? '' : 'hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:-translate-y-1'}`,
    secondary: `bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-sm ${isMobile ? '' : 'hover:bg-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:-translate-y-1'}`,
    outline: `border-2 border-gold-500/50 text-gold-400 ${isMobile ? '' : 'hover:border-gold-500 hover:text-navy-950 hover:bg-gold-500 hover:-translate-y-1'}`,
    ghost: `text-slate-300 ${isMobile ? '' : 'hover:text-gold-400 hover:bg-white/5'}`,
    glass: `bg-white/5 backdrop-blur-md border border-white/10 text-white shadow-sm ${isMobile ? '' : 'hover:bg-white/10 hover:border-gold-500/50 hover:shadow-[0_0_15px_rgba(212,175,55,0.2)] hover:-translate-y-1'}`
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg font-bold"
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="transition-transform duration-300 group-hover:-translate-x-1">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="transition-transform duration-300 group-hover:translate-x-1">{icon}</span>}
    </>
  );

  const motionProps = isMobile ? {
    whileTap: { scale: 0.95 } as const,
    transition: { duration: 0.15 } as const
  } : {
    whileTap: { scale: 0.98 } as const,
    whileHover: { scale: 1.02 } as const,
    transition: { type: 'spring', stiffness: 400, damping: 17 } as const
  };

  if (href) {
    if (href.startsWith('/#')) {
      return (
        <motion.div {...motionProps} className="inline-block w-full sm:w-auto">
          <Link
            to={href}
            className={combinedClassName}
            onClick={(e) => {
              if (window.location.pathname === '/') {
                e.preventDefault();
                const targetId = href.substring(2);
                const element = document.getElementById(targetId);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                  window.history.pushState(null, '', href);
                }
              }
            }}
          >
            {content}
          </Link>
        </motion.div>
      );
    }
    if (href.startsWith('#')) {
      return (
        <motion.div {...motionProps} className="inline-block w-full sm:w-auto">
          <a
            href={href}
            className={combinedClassName}
            onClick={(e) => {
              e.preventDefault();
              const targetId = href.substring(1);
              const element = document.getElementById(targetId);
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                window.history.pushState(null, '', href);
              }
            }}
          >
            {content}
          </a>
        </motion.div>
      );
    }
    return (
      <motion.div {...motionProps} className="inline-block w-full sm:w-auto">
        <Link to={href} className={combinedClassName}>
          {content}
        </Link>
      </motion.div>
    );
  }

  const {
    onAnimationStart,
    onAnimationEnd,
    onDrag,
    onDragEnd,
    onDragStart,
    style,
    ...buttonProps
  } = props;

  return (
    <motion.button
      whileTap={isMobile ? { scale: 0.97 } : undefined}
      transition={isMobile ? { duration: 0.15 } : undefined}
      className={combinedClassName}
      {...buttonProps}
    >
      {content}
    </motion.button>
  );
}
