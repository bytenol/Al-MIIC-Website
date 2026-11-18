import React from 'react';
import { Outlet } from 'react-router-dom';
import { ScrollToTop } from '../components/layout/ScrollToTop';
import { TopBar } from '../components/layout/TopBar';
import { Navbar } from '../components/layout/NavBar';
import { Footer } from '../components/layout/Footer';
import { BackToTopButton } from '../components/ui/BackToTopButton';

export const PublicLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]">
      <ScrollToTop />
      <TopBar />
      <Navbar />

      <main id="main-content" className="flex-1">
        <Outlet />
      </main>

      <Footer />
      <BackToTopButton />
    </div>
  );
};