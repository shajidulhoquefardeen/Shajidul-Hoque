import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function MakeBreak() {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

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
          className="absolute inset-[-100%]"
          animate={{
            x: (mousePos.x - (containerRef.current?.offsetWidth || 0) / 2) * -0.8,
            y: (mousePos.y - (containerRef.current?.offsetHeight || 0) / 2) * 0.5,
          }}
          transition={{ type: 'spring', damping: 20, stiffness: 300, mass: 0.5 }}
        >
          {[...Array(150)].map((_, i) => (
            <div
              key={`far-${i}`}
              className="absolute w-[2px] h-[2px] bg-white/50 rounded-full"
              style={{
                left: `${(i * 13.7) % 100}%`,
                top: `${(i * 17.3) % 100}%`,
              }}
            />
          ))}
        </motion.div>

        {/* Parallax Stars Layer 2 (Medium - Small, Fast) */}
        <motion.div 
          className="absolute inset-[-100%]"
          animate={{
            x: (mousePos.x - (containerRef.current?.offsetWidth || 0) / 2) * 1.5,
            y: (mousePos.y - (containerRef.current?.offsetHeight || 0) / 2) * -1.2,
          }}
          transition={{ type: 'spring', damping: 25, stiffness: 400, mass: 0.5 }}
        >
          {[...Array(100)].map((_, i) => (
            <div
              key={`med-${i}`}
              className="absolute w-[3px] h-[3px] bg-white/80 rounded-full"
              style={{
                left: `${(i * 19.1) % 100}%`,
                top: `${(i * 23.7) % 100}%`,
                boxShadow: '0 0 2px rgba(255,255,255,0.3)',
              }}
            />
          ))}
        </motion.div>

        {/* Parallax Stars Layer 3 (Near - Largest, Fastest) */}
        <motion.div 
          className="absolute inset-[-150%]"
          animate={{
            x: (mousePos.x - (containerRef.current?.offsetWidth || 0) / 2) * -2.2,
            y: (mousePos.y - (containerRef.current?.offsetHeight || 0) / 2) * -1.8,
          }}
          transition={{ type: 'spring', damping: 15, stiffness: 350, mass: 0.5 }}
        >
          {[...Array(60)].map((_, i) => (
            <motion.div
              key={`near-${i}`}
              className="absolute w-[4px] h-[4px] bg-white rounded-full"
              style={{
                left: `${(i * 31.3) % 100}%`,
                top: `${(i * 37.7) % 100}%`,
                boxShadow: '0 0 8px #fff',
              }}
              animate={{
                opacity: [0.4, 1, 0.4],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 2 + (i % 3),
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Top/Bottom Blending Gradients */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-bg to-transparent z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-bg to-transparent z-10" />

      {/* Twinkling & Moving Stars */}
      <motion.div 
        className="absolute inset-[-200%] z-10 pointer-events-none"
        animate={{
          x: (mousePos.x - (containerRef.current?.offsetWidth || 0) / 2) * 3.5,
          y: (mousePos.y - (containerRef.current?.offsetHeight || 0) / 2) * 2.8,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 500, mass: 0.5 }}
      >
        {[...Array(80)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[4px] h-[4px] bg-white rounded-full"
            style={{
              left: `${(i * 7.7) % 100}%`,
              top: `${(i * 13.3) % 100}%`,
              boxShadow: '0 0 6px #fff',
            }}
            animate={{
              opacity: [0.1, 0.8, 0.1],
              scale: [0.7, 1.2, 0.7],
            }}
            transition={{
              duration: 2 + (i % 3),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.1,
            }}
          />
        ))}
      </motion.div>

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

      {/* Flashlight effect */}
      <motion.div 
        className="absolute z-30 w-[500px] h-[500px] rounded-full pointer-events-none opacity-40 mix-blend-overlay"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.6) 0%, transparent 70%)',
        }}
        animate={{
          x: mousePos.x - 250,
          y: mousePos.y - 250,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 200, mass: 0.5 }}
      />
    </section>
  );
}

