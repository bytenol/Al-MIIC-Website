import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Globe,
  MessageCircle,
  Share2,
} from 'lucide-react';
import { Container } from '../common/Container';
import { Logo } from '../common/Logo';
import {
  FOOTER_ADMISSIONS_LINKS,
  FOOTER_EXPLORE_LINKS,
} from '../../data/navigation.data';
import { SITE_CONFIG } from '../../config/site.config';
import { ROUTES } from '../../routes/paths';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail('');
  };

  return (
    <footer className="mt-auto">
      {/* 1. Pre-Footer Warm Gold CTA Banner (Reproducing s9.png & s10.png) */}
      <section
        aria-label="Admissions Call to Action"
        className="bg-[var(--color-brand-gold)] text-[#0A2540] py-12 sm:py-16"
      >
        <Container className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          {/* Left: Book Icon + Eyebrow + Display Heading */}
          <div className="flex items-start sm:items-center gap-5 sm:gap-7 max-w-2xl">
            <div className="shrink-0 text-[#0A2540] pt-1 sm:pt-0">
              <BookOpen className="w-10 h-10 sm:w-12 sm:h-12 stroke-[1.75]" />
            </div>
            <div className="space-y-2">
              <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.16em] text-[#0A2540]/80">
                Your Child&rsquo;s Next Chapter
              </p>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-[2.25rem] font-bold leading-[1.15] tracking-tight text-[#0A2540]">
                Come and see what learning feels like at {SITE_CONFIG.shortName}.
              </h2>
            </div>
          </div>

          {/* Right: Solid Dark Navy Button + Make an enquiry link */}
          <div className="flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-center gap-4 shrink-0">
            <Link
              to={ROUTES.ADMISSIONS}
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg bg-[#0A2540] hover:bg-[#103459] text-white font-semibold text-sm shadow-sm transition-colors"
            >
              Apply for admission
            </Link>
            <Link
              to={ROUTES.CONTACT}
              className="inline-flex items-center gap-2 text-sm font-bold text-[#0A2540] hover:opacity-80 transition-opacity group"
            >
              <span>Make an enquiry</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </Container>
      </section>

      {/* 2. Main Deep Navy Footer (Reproducing s9.png & s10.png) */}
      <div className="bg-[#061C30] text-slate-300 pt-16 pb-10">
        <Container className="space-y-12">
          {/* 4-Column Upper Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
            {/* Column 1: Logo, Institutional Blurb & Circular Action Icons (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              <Logo variant="footer" />
              <p className="text-sm text-slate-300/90 leading-relaxed max-w-sm">
                A welcoming Islamic learning community nurturing curious minds,
                principled leaders and purposeful young people.
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="#website"
                  aria-label="Official Website"
                  className="w-9 h-9 rounded-full border border-slate-700 hover:border-[var(--color-brand-sky)] text-slate-300 hover:text-[var(--color-brand-sky)] flex items-center justify-center transition-colors"
                >
                  <Globe className="w-4 h-4" />
                </a>
                <Link
                  to={ROUTES.CONTACT}
                  aria-label="Send a message"
                  className="w-9 h-9 rounded-full border border-slate-700 hover:border-[var(--color-brand-sky)] text-slate-300 hover:text-[var(--color-brand-sky)] flex items-center justify-center transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                </Link>
                <a
                  href="#share"
                  aria-label="Share school page"
                  className="w-9 h-9 rounded-full border border-slate-700 hover:border-[var(--color-brand-sky)] text-slate-300 hover:text-[var(--color-brand-sky)] flex items-center justify-center transition-colors"
                >
                  <Share2 className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Column 2: Explore Links (2 cols) */}
            <div className="lg:col-span-2 space-y-4">
              <h3 className="font-heading text-sm font-bold text-white tracking-wide">
                Explore
              </h3>
              <ul className="space-y-2.5 text-sm">
                {FOOTER_EXPLORE_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-slate-300/90 hover:text-[var(--color-brand-sky)] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Admissions Links (2 cols) */}
            <div className="lg:col-span-2 space-y-4">
              <h3 className="font-heading text-sm font-bold text-white tracking-wide">
                Admissions
              </h3>
              <ul className="space-y-2.5 text-sm">
                {FOOTER_ADMISSIONS_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-slate-300/90 hover:text-[var(--color-brand-sky)] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Stay Informed Newsletter Box (4 cols) */}
            <div className="lg:col-span-4 space-y-4">
              <h3 className="font-heading text-sm font-bold text-white tracking-wide">
                Stay informed
              </h3>
              <p className="text-sm text-slate-300/90 leading-relaxed">
                Monthly news, events and helpful admissions reminders.
              </p>

              {subscribed ? (
                <div className="flex items-center gap-2 text-xs font-medium text-[var(--color-brand-sky)] bg-sky-950/60 border border-sky-800/60 rounded-lg px-4 py-3">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Thank you for subscribing to {SITE_CONFIG.shortName} updates.</span>
                </div>
              ) : (
                <form
                  onSubmit={handleNewsletterSubmit}
                  className="flex items-stretch border-b border-slate-600/80 pb-1.5"
                >
                  <label htmlFor="footer-newsletter-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="footer-newsletter-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full bg-white text-slate-900 placeholder:text-slate-400 text-sm px-3.5 py-2.5 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-sky)]"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe to newsletter"
                    className="px-3.5 text-[var(--color-brand-gold)] hover:text-amber-300 flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Middle Contact Information Row (s10.png) */}
          <div className="pt-8 border-t border-slate-800/90 flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-y-3 gap-x-10 text-xs text-slate-300">
            <span>{SITE_CONFIG.contact.address}</span>
            <a
              href={`tel:${SITE_CONFIG.contact.phone.replace(/\s+/g, '')}`}
              className="hover:text-[var(--color-brand-sky)] transition-colors"
            >
              {SITE_CONFIG.contact.phone}
            </a>
            <a
              href={`mailto:${SITE_CONFIG.contact.email}`}
              className="hover:text-[var(--color-brand-sky)] transition-colors"
            >
              {SITE_CONFIG.contact.email}
            </a>
          </div>

          {/* Bottom Legal & Copyright Row (s10.png) */}
          <div className="pt-6 border-t border-slate-800/90 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-400">
            <p>
              &copy; {new Date().getFullYear()} {SITE_CONFIG.name} ({SITE_CONFIG.shortName}).
              All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                to={ROUTES.PRIVACY}
                className="hover:text-white transition-colors"
              >
                Privacy policy
              </Link>
              <Link
                to={ROUTES.TERMS}
                className="hover:text-white transition-colors"
              >
                Terms &amp; conditions
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};