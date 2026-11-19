import React from 'react';
import { Award, Microscope, Sparkles, Users } from 'lucide-react';
import { Container } from '../../../components/common/Container';
import { SectionHeading } from '../../../components/common/SectionHeading';
import { Reveal } from '../../../components/common/Reveal';
import { DIFFERENCE_DATA } from '../../../data/home.data';
import type { DifferencePillar } from '../../../types/home.types';
import { cn } from '../../../utils/cn';

const ICON_MAP: Record<DifferencePillar['iconName'], React.ReactNode> = {
  award: <Award className="w-6 h-6 stroke-[1.75]" />,
  users: <Users className="w-6 h-6 stroke-[1.75]" />,
  microscope: <Microscope className="w-6 h-6 stroke-[1.75]" />,
  sparkles: <Sparkles className="w-6 h-6 stroke-[1.75]" />,
};

export const DifferenceSection: React.FC = () => {
  return (
    <section
      aria-labelledby="difference-heading"
      className="py-20 sm:py-24 lg:py-28 bg-[var(--color-bg-secondary)]"
    >
      <Container className="space-y-12 lg:space-y-16">
        {/* Top Split Header Row matching s3.png */}
        <Reveal>
          <SectionHeading
            align="split"
            eyebrow={DIFFERENCE_DATA.eyebrow}
            title={<span id="difference-heading">{DIFFERENCE_DATA.title}</span>}
            description={DIFFERENCE_DATA.description}
          />
        </Reveal>

        {/* Horizontal Divider + 4-Column Vertical Border Grid */}
        <div className="border-t border-[var(--color-border-subtle)] pt-10 lg:pt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {DIFFERENCE_DATA.pillars.map((pillar, index) => (
              <Reveal
                key={pillar.number}
                delay={index * 0.08}
                className={cn(
                  'py-6 sm:py-4 lg:py-2 flex flex-col justify-between space-y-6',
                  // Horizontal dividers on mobile, vertical column dividers on desktop matching s3.png
                  index !== 0 && 'border-t sm:border-t-0 border-[var(--color-border-subtle)]',
                  index % 2 === 1 && 'sm:pl-8 lg:pl-7',
                  index % 2 === 0 && 'sm:pr-8 lg:pr-7',
                  index > 0 && 'lg:border-l lg:border-[var(--color-border-subtle)] lg:pl-7',
                  index < DIFFERENCE_DATA.pillars.length - 1 && 'lg:pr-7'
                )}
              >
                {/* Top Row: Gold Outline Icon & Muted Number (01 - 04) */}
                <div className="flex items-center justify-between">
                  <div className="text-[var(--color-brand-gold)]">
                    {ICON_MAP[pillar.iconName]}
                  </div>
                  <span className="text-xs font-semibold tracking-wider text-[var(--color-text-muted)]">
                    {pillar.number}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="font-heading text-lg sm:text-[19px] font-bold text-[var(--color-text-primary)] leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-[1.65]">
                    {pillar.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};