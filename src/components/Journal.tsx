import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const entries = [
  { 
    id: "sweetener-shift",
    title: "The Great Sweetener Shift: Why Your Favorite Drinks Are Going Artificial", 
    date: "Apr 09, 2026", 
    readTime: "5 min read", 
    image: "https://picsum.photos/seed/beverage/100/100" 
  },
  { 
    id: "ai-literacy-bangladesh",
    title: "From Tea Stalls to Tech: Why AI Literacy is the New 'Amar Shonar Bangla'", 
    date: "Apr 08, 2026", 
    readTime: "6 min read", 
    image: "https://picsum.photos/seed/tech/100/100" 
  },
];

export function Journal({ hideHeader = false }: { hideHeader?: boolean }) {
  return (
    <section className="bg-bg py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        
        {/* Header */}
        {!hideHeader && (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-12"
          >
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-px bg-stroke" />
                <span className="text-xs text-muted uppercase tracking-[0.3em]">Recent Thoughts</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-body font-light tracking-tight text-text-primary mb-4">
                Recent <span className="font-display italic">thoughts</span>
              </h2>
              <p className="text-muted max-w-md text-sm md:text-base">
                Writing about design, technology, and the intersection of both.
              </p>
            </div>
            
            <Link to="/blog" className="hidden md:inline-flex relative group items-center gap-2 rounded-full text-sm px-6 py-3 text-text-primary overflow-hidden mt-6 md:mt-0">
              <span className="absolute inset-0 accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-gradient-shift" />
              <span className="absolute inset-[1px] bg-bg rounded-full" />
              <span className="relative z-10 flex items-center gap-2">
                View all <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </motion.div>
        )}

        {/* Entries */}
        <div className="flex flex-col gap-4">
          {entries.map((entry, i) => (
            <Link 
              key={i}
              to={`/blog/${entry.id}`}
              className="group flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-4 bg-surface/30 hover:bg-surface border border-stroke rounded-[40px] sm:rounded-full transition-colors duration-300"
            >
              <div className="flex items-center gap-6">
                <img 
                  src={entry.image} 
                  alt={entry.title} 
                  className="w-16 h-16 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <h3 className="text-lg md:text-xl font-medium text-text-primary group-hover:text-accent transition-colors">
                  {entry.title}
                </h3>
              </div>
              <div className="flex items-center gap-6 text-sm text-muted sm:pr-6 pl-22 sm:pl-0">
                <span>{entry.readTime}</span>
                <span className="w-1 h-1 rounded-full bg-stroke" />
                <span>{entry.date}</span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
