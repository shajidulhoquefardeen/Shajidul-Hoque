import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Hls from 'hls.js';

export function Footer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

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
    if (!marqueeRef.current) return;
    
    gsap.to(marqueeRef.current, {
      xPercent: -50,
      duration: 40,
      ease: "none",
      repeat: -1,
    });
  }, []);

  return (
    <footer className="relative bg-bg pt-16 md:pt-20 pb-8 md:pb-12 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          ref={videoRef}
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover scale-y-[-1]"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        
        {/* CTA */}
        <div className="text-center mb-12 md:mb-16 px-4">
          <h2 className="text-4xl md:text-6xl font-body font-light text-text-primary">
            Floating ideas into <span className="font-display italic">existence</span>
          </h2>
        </div>

        {/* Footer Bar */}
        <div className="w-full max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-stroke/50">
          <div className="flex items-center gap-6 text-sm text-muted">
            <a href="https://x.com/SajidFardeen" target="_blank" rel="noopener noreferrer" className="hover:text-text-primary transition-colors">Twitter</a>
            <a href="https://www.linkedin.com/in/shajidul-hoque-fardeen?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="hover:text-text-primary transition-colors">LinkedIn</a>
            <a href="https://www.instagram.com/sajidfardeen?igsh=Z3N0eTJtaDRveWQ5" target="_blank" rel="noopener noreferrer" className="hover:text-text-primary transition-colors">Instagram</a>
            <a href="https://github.com/shajidulhoquefardeen" target="_blank" rel="noopener noreferrer" className="hover:text-text-primary transition-colors">GitHub</a>
          </div>
          
          <div className="flex items-center gap-3 text-sm text-text-primary bg-surface/50 backdrop-blur-md px-4 py-2 rounded-full border border-stroke/50">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Available for projects
          </div>
        </div>
        
      </div>
    </footer>
  );
}
