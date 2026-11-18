import React from 'react';
import { Check } from 'lucide-react';
import { Container } from '../../../components/common/Container';
import { Button } from '../../../components/ui/Button';
import { Reveal } from '../../../components/common/Reveal';
import { FACILITIES_DATA } from '../../../data/home.data';

export const FacilitiesSection: React.FC = () => {
  return (
    <section
      aria-labelledby="facilities-heading"
      className="py-20 sm:py-24 lg:py-28 bg-[var(--color-bg-secondary)]"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          {/* Left Column: Facilities Overview & Checkmark List (5 cols) */}
          <Reveal className="lg:col-span-5 space-y-6">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-text-eyebrow)]">
              {FACILITIES_DATA.eyebrow}
            </p>

            <h2
              id="facilities-heading"
              className="font-heading text-3xl sm:text-4xl lg:text-[2.65rem] font-bold text-[var(--color-text-primary)] leading-[1.12] tracking-tight"
            >
              {FACILITIES_DATA.title}
            </h2>

            <p className="text-[15px] sm:text-base text-[var(--color-text-secondary)] leading-[1.7]">
              {FACILITIES_DATA.description}
            </p>

            {/* 4 Gold-Checkmark Bullet Items matching s6.jpg */}
            <ul className="space-y-3.5 pt-1">
              {FACILITIES_DATA.features.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm sm:text-[15px] font-semibold text-[var(--color-text-primary)]"
                >
                  <Check className="w-4 h-4 shrink-0 text-[var(--color-brand-gold)] stroke-[2.75]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-3">
              <Button to={FACILITIES_DATA.ctaHref} variant="navy" size="lg">
                {FACILITIES_DATA.ctaLabel}
              </Button>
            </div>
          </Reveal>

          {/* Right Column: Two-Photo Asymmetric Collage matching s5.jpg & s6.jpg (7 cols) */}
          <Reveal delay={0.12} className="lg:col-span-7">
            <div className="grid grid-cols-12 gap-4 sm:gap-5 items-end">
              {/* Primary Tall Portrait Photo with Signature Top-Right Curve */}
              <div className="col-span-7 overflow-hidden rounded-signature-lg shadow-[var(--shadow-card)] bg-[var(--color-bg-elevated)] aspect-[4/5]">
                <img
                  src={FACILITIES_DATA.primaryImage.url}
                  alt={FACILITIES_DATA.primaryImage.alt}
                  loading="lazy"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Secondary Bottom-Aligned Photo */}
              <div className="col-span-5 overflow-hidden rounded-xl shadow-[var(--shadow-card)] bg-[var(--color-bg-elevated)] aspect-[3/3.4]">
                <img
                  src={FACILITIES_DATA.secondaryImage.url}
                  alt={FACILITIES_DATA.secondaryImage.alt}
                  loading="lazy"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
};