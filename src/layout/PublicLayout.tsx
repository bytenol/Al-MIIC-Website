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
			{/* Keyboard Skip Link */}
			<a
				href="#main-content"
				className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2.5 focus:rounded-lg focus:bg-[var(--color-brand-gold)] focus:text-slate-950 focus:font-bold focus:text-xs focus:shadow-lg"
			>
				Skip to main content
			</a>

			<ScrollToTop />
			<TopBar />
			<Navbar />

			<main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
				<Outlet />
			</main>

			<Footer />
			<BackToTopButton />
		</div>
	);
};