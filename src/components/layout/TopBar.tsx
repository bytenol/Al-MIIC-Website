import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, PhoneCall } from 'lucide-react';
import { Container } from '../common/Container';
import { SITE_CONFIG } from '../../config/site.config';
import { ROUTES } from '../../routes/paths';

export const TopBar: React.FC = () => {
  return (
    <div className="bg-[var(--color-brand-navy-deep)] text-white text-xs border-b border-white/5">
      <Container className="min-h-9 py-1.5 flex flex-col sm:flex-row items-center justify-between gap-2">
        {/* Left: Admissions status notice in warm gold matching s1.jpg */}
        <Link
          to={ROUTES.ADMISSIONS}
          className="font-semibold text-[var(--color-brand-gold)] hover:underline tracking-wide text-[11.5px] sm:text-xs"
        >
          {SITE_CONFIG.admissionsBannerText}
        </Link>

        {/* Right: Direct Phone & Email links */}
        <div className="hidden sm:flex items-center gap-6 text-slate-200 text-[11.5px]">
          <a
            href={`tel:${SITE_CONFIG.contact.phone.replace(/\s+/g, '')}`}
            className="inline-flex items-center gap-1.5 hover:text-[var(--color-brand-sky)] transition-colors"
          >
            <PhoneCall className="w-3.5 h-3.5 text-[var(--color-brand-sky)]" />
            <span>{SITE_CONFIG.contact.phone}</span>
          </a>

          <a
            href={`mailto:${SITE_CONFIG.contact.email}`}
            className="inline-flex items-center gap-1.5 hover:text-[var(--color-brand-sky)] transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-[var(--color-brand-sky)]" />
            <span>{SITE_CONFIG.contact.email}</span>
          </a>
        </div>
      </Container>
    </div>
  );
};