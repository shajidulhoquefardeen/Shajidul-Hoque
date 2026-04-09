import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { SelectedWorks } from '../components/SelectedWorks';
import { useEffect } from 'react';

export function WorkPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-bg min-h-screen text-text-primary font-body selection:bg-text-primary selection:text-bg flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24">
        {/* We can reuse the SelectedWorks component or build a specific grid for all works. 
            For now, we'll reuse SelectedWorks but maybe wrap it in a container that gives it more space. */}
        <div className="py-12">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10 mb-12">
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
              All <span className="text-[#A78BFA] italic font-display">Works</span>
            </h1>
            <p className="text-xl text-muted mt-6 max-w-2xl">
              A comprehensive collection of my projects, experiments, and professional work.
            </p>
          </div>
          <SelectedWorks hideHeader={true} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
