import { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';
import { gsap } from 'gsap';
import { AtSign, LayoutGrid, Github, Instagram, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const roles = ["Designer", "Developer", "Researcher"];

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const videoSrc = "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(videoSrc);
      hls.attachMedia(video);
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = videoSrc;
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    
    tl.fromTo(".hero-content", 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.2, delay: 0.1 }
    );
  }, []);

  return (
    <section 
      id="home" 
      className="relative w-full h-screen overflow-hidden flex items-center justify-center"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          ref={videoRef}
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 opacity-20 pointer-events-none" 
          style={{ 
            backgroundImage: `linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }} 
        />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-bg to-transparent" />
      </div>

      {/* Content */}
      <div className="hero-content relative z-10 w-full max-w-5xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 text-center md:text-left">
          {/* Avatar */}
          <div className="relative shrink-0">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-surface shadow-2xl bg-surface">
              <img 
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Oliver&backgroundColor=6366f1" 
                alt="Avatar" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex flex-col">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight mb-2 flex items-center gap-3">
              Hey, I'm <span className="text-[#A78BFA]">Shajidul</span>
              <span className="text-3xl md:text-5xl">✨</span>
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-6">
              A <span className="text-[#A78BFA]">{roles[roleIndex]}</span> lost in space.
            </h2>

            <p className="text-lg md:text-xl text-muted max-w-2xl mb-10 leading-relaxed">
              By day, I research food & By night, I leverage cutting-edge AI tools to transform complex ideas into functional, beautiful digital experiences.
            </p>

            {/* Actions & Socials */}
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="flex items-center gap-4">
                <a href="#contact" className="flex items-center gap-2 bg-surface border border-stroke hover:border-[#A78BFA]/50 text-text-primary px-6 py-3 rounded-xl transition-all duration-300 group">
                  <AtSign className="w-5 h-5 text-[#A78BFA] group-hover:scale-110 transition-transform" />
                  <span className="font-medium">Contact Me</span>
                </a>
                
                <Link to="/work" className="flex items-center gap-2 bg-surface border border-stroke hover:border-[#A78BFA]/50 text-text-primary px-6 py-3 rounded-xl transition-all duration-300 group">
                  <LayoutGrid className="w-5 h-5 text-[#A78BFA] group-hover:scale-110 transition-transform" />
                  <span className="font-medium">View Projects</span>
                </Link>
              </div>

              <div className="hidden sm:block w-px h-8 bg-stroke" />

              <div className="flex items-center gap-5">
                <a href="https://github.com/shajidulhoquefardeen" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-[#A78BFA] transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://www.instagram.com/sajidfardeen?igsh=Z3N0eTJtaDRveWQ5" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-[#A78BFA] transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/shajidul-hoque-fardeen?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-[#A78BFA] transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="https://x.com/SajidFardeen" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-[#A78BFA] transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-10">
        <span className="text-xs text-muted uppercase tracking-[0.2em]">SCROLL</span>
        <div className="w-px h-10 bg-stroke relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-text-primary animate-scroll-down" />
        </div>
      </div>
    </section>
  );
}
