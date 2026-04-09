/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MakeBreak } from './components/MakeBreak';
import { SelectedWorks } from './components/SelectedWorks';
import { Journal } from './components/Journal';
import { Stats } from './components/Stats';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WorkPage } from './pages/WorkPage';
import { BlogPage } from './pages/BlogPage';
import { AdminPage } from './pages/AdminPage';
import { BlogPostPage } from './pages/BlogPostPage';

function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <MakeBreak />
      <SelectedWorks />
      <Journal />
      <Stats />
      <ContactSection />
      <Footer />
    </>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  // Handle scroll to hash when location changes
  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        setTimeout(() => {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="bg-bg min-h-screen text-text-primary font-body selection:bg-text-primary selection:text-bg">
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      
      {!isLoading && (
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogPostPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      )}
    </div>
  );
}
