import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card } from '../components/ui/Card';

export default function Placeholder() {
  const location = useLocation();
  const pathName = location.pathname.replace('/', '').charAt(0).toUpperCase() + location.pathname.slice(2);

  return (
    <div className="min-h-[70vh] flex items-center justify-center relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/10 blur-[120px] rounded-full pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center max-w-2xl px-4 relative z-10"
      >
        <Card variant="glass-dark" className="p-12 border-white/10 shadow-2xl">
          <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center mx-auto mb-8 rotate-12 shadow-gold-glow">
            <div className="w-10 h-10 bg-gradient-to-br from-gold-400 to-gold-600 rounded-xl -rotate-12 shadow-inner" />
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 tracking-tight">
            {pathName || 'Page'}
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed">
            This section is currently under development. Check back soon for updates on our {pathName.toLowerCase()} initiatives.
          </p>
        </Card>
      </motion.div>
    </div>
  );
}
