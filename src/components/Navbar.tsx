import { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4">
      <div className={`inline-flex items-center rounded-full backdrop-blur-md border border-white/10 bg-surface px-2 py-2 transition-shadow duration-300 ${scrolled ? 'shadow-md shadow-black/10' : ''}`}>
        
        {/* Logo */}
        <Link to="/" className="relative group cursor-pointer w-9 h-9 flex items-center justify-center rounded-full overflow-hidden transition-transform duration-300 hover:scale-110">
          <div className="absolute inset-0 accent-gradient animate-gradient-shift opacity-80 group-hover:opacity-100 transition-opacity" />
          <div className="absolute inset-[1px] bg-bg rounded-full flex items-center justify-center z-10">
            <span className="font-display italic text-[13px] text-text-primary">JA</span>
          </div>
        </Link>

        <div className="w-px h-5 bg-stroke mx-1 hidden sm:block" />

        {/* Links */}
        <div className="flex items-center">
          <Link 
            to="/"
            className={`text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-colors ${location.pathname === '/' ? 'text-text-primary bg-stroke/50' : 'text-muted hover:text-text-primary hover:bg-stroke/50'}`}
          >
            Home
          </Link>
          <Link 
            to="/work"
            className={`text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-colors ${location.pathname === '/work' ? 'text-text-primary bg-stroke/50' : 'text-muted hover:text-text-primary hover:bg-stroke/50'}`}
          >
            Work
          </Link>
          <Link 
            to="/blog"
            className={`text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-colors ${location.pathname === '/blog' ? 'text-text-primary bg-stroke/50' : 'text-muted hover:text-text-primary hover:bg-stroke/50'}`}
          >
            Blog
          </Link>
          <Link 
            to="/#resume"
            className="text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-colors text-muted hover:text-text-primary hover:bg-stroke/50"
          >
            Resume
          </Link>
        </div>

        <div className="w-px h-5 bg-stroke mx-1" />

        {/* Say Hi Button */}
        <Link to="/#contact" className="relative group text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-text-primary overflow-hidden">
          <span className="absolute inset-[-2px] accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-gradient-shift" />
          <div className="relative z-10 flex items-center gap-1 bg-surface rounded-full backdrop-blur-md px-3 py-1.5 -mx-3 -my-1.5">
            Say hi <ArrowUpRight className="w-3 h-3" />
          </div>
        </Link>

      </div>
    </nav>
  );
}
