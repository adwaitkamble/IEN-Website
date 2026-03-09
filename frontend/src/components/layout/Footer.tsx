import { Rocket, Mail, MapPin, Phone, ArrowRight, Code, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-300 py-20 border-t border-white/10 relative overflow-hidden antialiased">
      {/* Glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-navy-800/50 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">

          {/* LEFT SECTION */}
          <div className="md:col-span-4 lg:col-span-5">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center overflow-hidden shadow-md group-hover:shadow-lg transition-all duration-300">
                <img
                  src="/logo.png"
                  alt="IEN Logo"
                  className="w-full h-full object-contain p-1"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/ien/48/48';
                  }}
                />
              </div>
              <span className="font-display font-bold text-2xl text-white tracking-tight">
                IEN PCCOE
              </span>
            </Link>

            <p className="text-slate-400 leading-relaxed mb-8 max-w-md">
              The central innovation hub at Pimpri Chinchwad College of Engineering.
              We transform ideas into reality, research into patents, and students into founders.
            </p>

            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/pccoe_ien?igsh=Ym1qMjR2Z2FsZGd5"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gold-500 hover:border-gold-500 hover:text-navy-950 transition-all group"
              >
                <span className="sr-only">Instagram</span>
                <Instagram size={18} className="group-hover:scale-110 transition-transform" />
              </a>

              <a
                href="https://www.linkedin.com/company/innovation-and-entrepreneurship-ien-pccoe/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gold-500 hover:border-gold-500 hover:text-navy-950 transition-all group"
              >
                <span className="sr-only">LinkedIn</span>
                <Linkedin size={18} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* DIVISIONS */}
          <div className="md:col-span-4 lg:col-span-3">
            <h3 className="text-white font-display font-bold text-lg mb-6">Divisions</h3>
            <ul className="space-y-4">

              <li>
                <Link to="/divisions/iic" className="text-slate-400 hover:text-gold-400 transition-colors flex items-center gap-2 group">
                  <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  IIC (Innovation Council)
                </Link>
              </li>

              <li>
                <Link to="/divisions/ipr" className="text-slate-400 hover:text-gold-400 transition-colors flex items-center gap-2 group">
                  <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  IPR Cell
                </Link>
              </li>

              <li>
                <Link to="/divisions/ciil" className="text-slate-400 hover:text-gold-400 transition-colors flex items-center gap-2 group">
                  <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  CIIL
                </Link>
              </li>

            </ul>
          </div>

          {/* CONTACT SECTION */}
          <div className="md:col-span-4 lg:col-span-4">
            <h3 className="text-white font-display font-bold text-lg mb-6">Contact Us</h3>

            <ul className="space-y-4">

              <li className="flex items-start gap-3 text-slate-400">
                <MapPin size={20} className="text-gold-500 shrink-0 mt-0.5" />
                <span className="text-sm">
                  Sector 26, Pradhikaran, Nigdi, Pune, Maharashtra 411044
                </span>
              </li>

              <li className="flex items-center gap-3 text-slate-400">
                <Mail size={20} className="text-gold-500 shrink-0" />
                <a
                  href="mailto:ien.pccoe@gmail.com"
                  className="text-sm hover:text-gold-400 transition-colors"
                >
                  ien.pccoe@gmail.com
                </a>
              </li>

              <li className="flex items-center gap-3 text-slate-400">
                <Phone size={20} className="text-gold-500 shrink-0" />
                <a
                  href="tel:+919284383901"
                  className="text-sm hover:text-gold-400 transition-colors"
                >
                  +91 9284383901
                </a>
              </li>

            </ul>
          </div>

        </div>

        {/* FOOTER BOTTOM */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">

          <p>
            © {new Date().getFullYear()} IEN Club PCCOE. All rights reserved.
          </p>

          <div className="flex items-center gap-2 text-slate-400">
            <Code size={16} className="text-gold-500" />
            <span>
              Developed by <span className="text-gold-400 font-medium">Harshavardhan Karanje</span> and <span className="text-gold-400 font-medium">Adwait Kamble</span>
            </span>
          </div>

          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>

            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
}