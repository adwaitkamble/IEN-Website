import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Button } from '../ui/Button';

const divisions = [
  { name: 'IIC', path: '/divisions/iic', desc: 'Institution Innovation Council' },
  { name: 'IPR', path: '/divisions/ipr', desc: 'Intellectual Property Rights' },
  { name: 'CIIL', path: '/divisions/ciil', desc: 'Center for Innovation & Industry Linkage' },
];

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Events', path: '/events' },
  { name: 'Team', path: '/team' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const location = useLocation();
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);

      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(false);
  }, [location]);

  const shouldAnimate = !prefersReducedMotion && !isMobile;

  const navClass = scrolled
    ? `bg-navy-950/80 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] py-3`
    : `bg-transparent py-5 border-b border-transparent`;

  const linkClass =
    'relative text-slate-200 hover:text-gold-400 transition-colors duration-300 tracking-wide overflow-hidden group';

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: isHidden ? -100 : 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={`fixed top-0 w-full z-50 transition-colors duration-500 ${navClass}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`rounded-lg bg-white border border-white/10 transition-all duration-300 ${scrolled ? 'h-9 w-9' : 'h-10 w-10'} flex items-center justify-center`}
            >
              <img
                src="/logo.png"
                alt="IEN Logo"
                className="w-full h-full object-contain p-1"
              />
            </motion.div>
            <span className={`font-display font-bold text-white transition-all duration-300 ${scrolled ? 'text-lg' : 'text-xl'}`}>
              IEN <span className="text-gold-500">PCCOE</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.slice(0, 2).map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`${linkClass} ${isActive ? 'text-gold-400' : ''}`}
                >
                  {link.name}
                  <span className={`absolute left-0 bottom-0 w-full h-[2px] bg-gold-400 origin-left transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
                </Link>
              );
            })}

            {/* Divisions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown(true)}
              onMouseLeave={() => setActiveDropdown(false)}
            >
              <button className={`flex items-center gap-1 text-sm ${linkClass}`}>
                Divisions
                <motion.div animate={{ rotate: activeDropdown ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <ChevronDown size={14} />
                </motion.div>
                <span className={`absolute left-0 bottom-0 w-full h-[2px] bg-gold-400 origin-left transition-transform duration-300 ${activeDropdown || location.pathname.includes('/divisions') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
              </button>

              <AnimatePresence>
                {activeDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, type: 'spring', stiffness: 300, damping: 25 }}
                    className="absolute top-full pt-4 w-72"
                  >
                    <div className="bg-navy-950/95 backdrop-blur-xl border border-white/10 rounded-xl p-2 shadow-2xl overflow-hidden relative">
                      {/* Subtle inner glow */}
                      <div className="absolute inset-0 bg-gold-500/5 blur-xl z-0 pointer-events-none" />

                      <div className="relative z-10">
                        {divisions.map((div, i) => (
                          <motion.div
                            key={div.name}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.05 }}
                          >
                            <Link
                              to={div.path}
                              className="block p-4 hover:bg-white/5 rounded-lg group transition-colors"
                            >
                              <div className="font-bold text-white group-hover:text-gold-400 transition-colors flex items-center justify-between">
                                {div.name}
                                <motion.span
                                  initial={{ opacity: 0, x: -5 }}
                                  whileHover={{ opacity: 1, x: 0 }}
                                  className="text-gold-500 opacity-0 group-hover:opacity-100 transition-all duration-300"
                                >
                                  →
                                </motion.span>
                              </div>
                              <div className="text-xs text-slate-400 mt-1">
                                {div.desc}
                              </div>
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>


            {navLinks.slice(2).map((link) => {

              const isActive = location.pathname === link.path;

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`${linkClass} ${isActive ? 'text-gold-400' : ''}`}
                >
                  {link.name}
                </Link>
              );
            })}


            {/* ENNOVATEX BUTTON */}

            <Link
              to="/ennovatex"
              className={`flex items-center gap-3 px-4 py-2 ml-2 ${location.pathname === '/ennovatex'
                ? 'bg-gold-500/10 rounded-lg'
                : ''
                }`}
            >

              <span className={`w-1.5 h-1.5 bg-gold-500 rounded-full ${shouldAnimate ? 'animate-pulse' : ''}`} />

              <div className="flex flex-col">

                <span className="text-[8px] tracking-[0.2em] uppercase text-gold-500/60 font-bold">
                  CIIL Presents
                </span>

                <span className="text-gold-400 font-bold text-sm">
                  ENNOVATE’X
                </span>

              </div>

            </Link>


            <Button href="/exams" variant="glass" size="sm">
              Exams Portal
            </Button>

          </div>


          {/* Mobile Button */}

          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>
      </div>



      {/* Mobile Menu */}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden bg-navy-900 border-t border-white/10"
          >

            <div className="px-4 py-6 space-y-4">

              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block text-white text-base font-semibold"
                >
                  {link.name}
                </Link>
              ))}

              <Link
                to="/ennovatex"
                className="flex items-center gap-3 p-3 bg-gold-500/10 rounded-lg border border-gold-500/20"
              >
                <span className="w-2 h-2 bg-gold-500 rounded-full"></span>

                <div className="flex flex-col">

                  <span className="text-[10px] text-gold-500 uppercase tracking-widest font-bold">
                    CIIL Presents
                  </span>

                  <span className="text-gold-400 font-bold">
                    ENNOVATE’X
                  </span>

                </div>

              </Link>

              <Button href="/exams" variant="primary" className="w-full">
                Online Exams Portal
              </Button>

            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </motion.nav>
  );
}