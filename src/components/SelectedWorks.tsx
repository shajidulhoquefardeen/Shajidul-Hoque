import { motion } from 'motion/react';
import { ArrowRight, Github, Globe, Package } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: "Domposer",
    description: "Domposer is a website builder which has a UI that allows you to quickly add and rearrange HTML and CSS, upload and download created projects and files, login to save up to 5 projects and can be installed as a progressive web application. The stack is Laravel for the backend/API's and vanilla JS for the frontend. The Github repository for this is private at the moment.",
    image: "https://picsum.photos/seed/domposer/800/600",
    links: { website: "#", github: null, npm: null }
  },
  {
    title: "Bay.js",
    description: "An easy to use, lightweight library for web-components. It doesn't need a build step but can be included in a build step if you want to. It's a great way to create reusable components for your projects. It's available as a NPM package and doesn't use any dependencies and is 11kb minified. It also doesn't use eval or new Function so can be used in strict CSP policies without a build step.",
    image: "https://picsum.photos/seed/bayjs/800/600",
    links: { website: "#", github: "#", npm: "#" }
  },
  {
    title: "Cookiemunch",
    description: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
    image: "https://picsum.photos/seed/cookie/800/600",
    links: { website: "#", github: "#", npm: "#" }
  }
];

export function SelectedWorks({ hideHeader = false }: { hideHeader?: boolean }) {
  return (
    <section id="work" className="bg-bg py-20 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        
        {/* Header */}
        {!hideHeader && (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-16"
          >
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-px bg-stroke" />
                <span className="text-xs text-muted uppercase tracking-[0.3em] font-medium">Selected Work</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-body font-light tracking-tight text-text-primary mb-4">
                Featured <span className="font-display italic">projects</span>
              </h2>
            </div>
            
            <Link to="/work" className="hidden md:inline-flex relative group items-center gap-2 rounded-full text-sm px-6 py-3 text-text-primary overflow-hidden mt-6 md:mt-0 border border-stroke">
              <span className="absolute inset-0 accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-gradient-shift" />
              <span className="absolute inset-[1px] bg-bg rounded-full transition-colors" />
              <span className="relative z-10 flex items-center gap-2 font-medium">
                View all work <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </motion.div>
        )}

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group bg-[#0a0a0a] rounded-[2rem] overflow-hidden flex flex-col h-full shadow-2xl border border-white/5"
            >
              {/* Image Container with Soft Blending */}
              <div className="relative h-52 overflow-hidden bg-[#0a0a0a] p-6 pb-0">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-contain object-top transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                {/* Aggressive dark gradient for seamless blending starting from the image bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />
              </div>

              {/* Content Container */}
              <div className="px-8 pb-10 pt-0 flex flex-col flex-1">
                <h3 className="text-[1.75rem] font-bold text-white mb-5 tracking-tight">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-[1.05rem] leading-[1.6] mb-10 flex-1 font-normal">
                  {project.description}
                </p>

                {/* Footer Icons */}
                <div className="flex items-center gap-5 mt-auto">
                  {project.links.website && (
                    <a href={project.links.website} className="text-white hover:text-blue-400 transition-opacity">
                      <Globe className="w-7 h-7 stroke-[2px]" />
                    </a>
                  )}
                  {project.links.github && (
                    <a href={project.links.github} className="text-white hover:text-blue-400 transition-opacity">
                      <Github className="w-7 h-7 stroke-[2px]" />
                    </a>
                  )}
                  {project.links.npm && (
                    <a href={project.links.npm} className="text-white hover:text-blue-400 transition-opacity">
                      <Package className="w-7 h-7 stroke-[2px]" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
