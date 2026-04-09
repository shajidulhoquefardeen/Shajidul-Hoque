import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Journal } from '../components/Journal';
import { useEffect } from 'react';

export function BlogPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-bg min-h-screen text-text-primary font-body selection:bg-text-primary selection:text-bg flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24">
        <div className="py-12">
          <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 mb-12">
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
              My <span className="text-[#A78BFA] italic font-display">Blog</span>
            </h1>
            <p className="text-xl text-muted mt-6 max-w-2xl">
              Thoughts, tutorials, and insights about design, development, and automation.
            </p>
          </div>
          <Journal hideHeader={true} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
