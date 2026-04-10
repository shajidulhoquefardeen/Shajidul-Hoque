import React, { useState, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';

// Generates random star properties for inline SVGs
const generateStars = (count: number, maxRadius: number) => {
  return Array.from({ length: count }).map((_, i) => ({
    id: i,
    cx: `${Math.random() * 100}%`,
    cy: `${Math.random() * 100}%`,
    r: Math.random() * maxRadius + 0.5,
    opacity: Math.random() * 0.5 + 0.3
  }));
};

export function MakeBreak() {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Generate random star maps once on mount
  const starsFar = useMemo(() => generateStars(150, 1), []);
  const starsMed = useMemo(() => generateStars(100, 1.5), []);
  const starsNear = useMemo(() => generateStars(50, 2), []);
  const starsTwinkle = useMemo(() => generateStars(80, 1.2), []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section 
      ref={containerRef}
      className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden bg-bg"
      onMouseMove={handleMouseMove}
    >
      {/* Space Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Deep Space Gradient */}
        <div className="absolute inset-0 bg-[#020205]" />
        
        {/* Parallax Stars Layer 1 (Far - Smallest, Slowest) */}
        <motion.div 
          className="absolute inset-[-50%] w-[200%] h-[200%]"
          animate={{
            x: (mousePos.x - (containerRef.current?.offsetWidth || 0) / 2) * -0.4,
            y: (mousePos.y - (containerRef.current?.offsetHeight || 0) / 2) * 0.2,
          }}
          transition={{ type: 'spring', damping: 20, stiffness: 300, mass: 0.5 }}
        >
          <svg className="w-full h-full">
            {starsFar.map(star => (
              <circle key={star.id} cx={star.cx} cy={star.cy} r={star.r} fill="#fff" opacity={star.opacity} />
            ))}
          </svg>
        </motion.div>

        {/* Parallax Stars Layer 2 (Medium - Small, Fast) */}
        <motion.div 
          className="absolute inset-[-50%] w-[200%] h-[200%]"
          animate={{
            x: (mousePos.x - (containerRef.current?.offsetWidth || 0) / 2) * 0.8,
            y: (mousePos.y - (containerRef.current?.offsetHeight || 0) / 2) * -0.6,
          }}
          transition={{ type: 'spring', damping: 25, stiffness: 400, mass: 0.5 }}
        >
          <svg className="w-full h-full">
            {starsMed.map(star => (
              <circle key={star.id} cx={star.cx} cy={star.cy} r={star.r} fill="#fff" opacity={star.opacity + 0.2} />
            ))}
          </svg>
        </motion.div>

        {/* Parallax Stars Layer 3 (Near - Largest, Fastest) */}
        <motion.div 
          className="absolute inset-[-50%] w-[200%] h-[200%]"
          animate={{
            x: (mousePos.x - (containerRef.current?.offsetWidth || 0) / 2) * -1.2,
            y: (mousePos.y - (containerRef.current?.offsetHeight || 0) / 2) * -1.0,
          }}
          transition={{ type: 'spring', damping: 15, stiffness: 350, mass: 0.5 }}
        >
          <svg className="w-full h-full">
            {starsNear.map(star => (
              <circle key={star.id} cx={star.cx} cy={star.cy} r={star.r} fill="#fff" opacity={star.opacity + 0.4} />
            ))}
          </svg>
        </motion.div>

        {/* Twinkling Layer */}
        <motion.div 
          className="absolute inset-[-50%] w-[200%] h-[200%]"
          animate={{
            x: (mousePos.x - (containerRef.current?.offsetWidth || 0) / 2) * 0.3,
            y: (mousePos.y - (containerRef.current?.offsetHeight || 0) / 2) * 0.3,
            opacity: [0.3, 1, 0.3]
          }}
          transition={{
            opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            x: { type: 'spring', damping: 20, stiffness: 300, mass: 0.5 },
            y: { type: 'spring', damping: 20, stiffness: 300, mass: 0.5 }
          }}
        >
          <svg className="w-full h-full">
            {starsTwinkle.map(star => (
              <circle key={star.id} cx={star.cx} cy={star.cy} r={star.r} fill="#fff" opacity={star.opacity} />
            ))}
          </svg>
        </motion.div>
      </div>

      {/* Top/Bottom Blending Gradients */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-bg to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-bg to-transparent z-10 pointer-events-none" />

      {/* Text Content Area */}
      <div 
        className="relative z-20 text-center select-none cursor-default group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Hover Target Area (Invisible but covers the text region) */}
        <div className="absolute inset-[-40px] z-0" />
        
        <AnimatePresence mode="wait">
          <motion.h2
            key={isHovered ? 'break' : 'make'}
            initial={{ opacity: 0, scale: 0.8, filter: 'blur(12px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 1.2, filter: 'blur(12px)' }}
            transition={{ duration: 0.08, ease: "circOut" }}
            className="text-5xl md:text-8xl font-bold tracking-tighter text-white uppercase relative z-10"
            style={{ 
              textShadow: '0 0 40px rgba(255,255,255,0.5)',
              fontFamily: 'var(--font-body)'
            }}
          >
            {isHovered ? 'I BREAK THINGS' : 'I MAKE THINGS'}
          </motion.h2>
        </AnimatePresence>
      </div>

    </section>
  );
}
