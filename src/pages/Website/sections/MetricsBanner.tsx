import React from 'react';
import { Container } from '../../../components/common/Container';
import { Reveal } from '../../../components/common/Reveal';
import { METRICS_DATA } from '../../../data/home.data';
import { cn } from '../../../utils/cn';

export const MetricsBanner: React.FC = () => {
  return (
    <section
      aria-label="Key School Statistics"
      className="bg-[#0A2540] text-white py-12 sm:py-14 border-y border-sky-900/40"
    >
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8">
          {METRICS_DATA.map((metric, index) => (
            <Reveal
              key={metric.label}
              delay={index * 0.06}
              className={cn(
                'px-4 sm:px-6 lg:px-8 flex flex-col justify-center',
                index % 2 === 1 && 'border-l border-white/15',
                index >= 2 && 'lg:border-l lg:border-white/15'
              )}
            >
              <span className="font-heading text-2xl sm:text-3xl lg:text-[2rem] font-bold text-white tracking-tight">
                {metric.value}
              </span>
              <span className="text-xs sm:text-[13px] text-sky-200/80 mt-1.5 font-medium">
                {metric.label}
              </span>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
};