import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const STAR_BG = `url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0MDAnIGhlaWdodD0nNDAwJz48Y2lyY2xlIGN4PScyMCcgY3k9JzMwJyByPScxJyBmaWxsPScjZmZmJyBvcGFjaXR5PScwLjgnLz48Y2lyY2xlIGN4PScxMDAnIGN5PScxNTAnIHI9JzEnIGZpbGw9JyNmZmYnIG9wYWNpdHk9JzAuNScvPjxjaXJjbGUgY3g9JzIwMCcgY3k9JzUwJyByPScxLjUnIGZpbGw9JyNmZmYnIG9wYWNpdHk9JzAuOScvPjxjaXJjbGUgY3g9JzMwMCcgY3k9JzI1MCcgcj0nMScgZmlsbD0nI2ZmZicgb3BhY2l0eT0nMC42Jy8+PGNpcmNsZSBjeD0nMzUwJyBjeT0nMTAwJyByPScyJyBmaWxsPScjZmZmJyBvcGFjaXR5PScwLjQnLz48Y2lyY2xlIGN4PSc1MCcgY3k9JzMwMCcgcj0nMS41JyBmaWxsPScjZmZmJyBvcGFjaXR5PScwLjcnLz48L3N2Zz4=")`;

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
          style={{ backgroundImage: STAR_BG, backgroundSize: '300px 300px', opacity: 0.4 }}
          animate={{
            x: (mousePos.x - (containerRef.current?.offsetWidth || 0) / 2) * -0.8,
            y: (mousePos.y - (containerRef.current?.offsetHeight || 0) / 2) * 0.5,
          }}
          transition={{ type: 'spring', damping: 20, stiffness: 300, mass: 0.5 }}
        />

        {/* Parallax Stars Layer 2 (Medium - Small, Fast) */}
        <motion.div 
          className="absolute inset-[-100%]"
          style={{ backgroundImage: STAR_BG, backgroundSize: '400px 400px', opacity: 0.6, backgroundPosition: '50px 50px' }}
          animate={{
            x: (mousePos.x - (containerRef.current?.offsetWidth || 0) / 2) * 1.5,
            y: (mousePos.y - (containerRef.current?.offsetHeight || 0) / 2) * -1.2,
          }}
          transition={{ type: 'spring', damping: 25, stiffness: 400, mass: 0.5 }}
        />

        {/* Parallax Stars Layer 3 (Near - Largest, Fastest) */}
        <motion.div 
          className="absolute inset-[-150%]"
          style={{ backgroundImage: STAR_BG, backgroundSize: '500px 500px', opacity: 0.8, backgroundPosition: '100px 100px' }}
          animate={{
            x: (mousePos.x - (containerRef.current?.offsetWidth || 0) / 2) * -2.2,
            y: (mousePos.y - (containerRef.current?.offsetHeight || 0) / 2) * -1.8,
          }}
          transition={{ type: 'spring', damping: 15, stiffness: 350, mass: 0.5 }}
        />

        {/* Twinkling Layer */}
        <motion.div 
          className="absolute inset-[-100%]"
          style={{ backgroundImage: STAR_BG, backgroundSize: '250px 250px', backgroundPosition: '200px 200px' }}
          animate={{
            x: (mousePos.x - (containerRef.current?.offsetWidth || 0) / 2) * 0.5,
            y: (mousePos.y - (containerRef.current?.offsetHeight || 0) / 2) * 0.5,
            opacity: [0.1, 0.9, 0.1]
          }}
          transition={{
            opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            x: { type: 'spring', damping: 20, stiffness: 300, mass: 0.5 },
            y: { type: 'spring', damping: 20, stiffness: 300, mass: 0.5 }
          }}
        />
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

      {/* Flashlight effect */}
      <motion.div 
        className="absolute z-30 w-[500px] h-[500px] rounded-full pointer-events-none opacity-40 mix-blend-screen"
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
