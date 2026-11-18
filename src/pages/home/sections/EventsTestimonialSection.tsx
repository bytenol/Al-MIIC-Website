import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Quote } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { Container } from '../../../components/common/Container';
import { Reveal } from '../../../components/common/Reveal';
import { EVENTS_TESTIMONIAL_DATA } from '../../../data/home.data';
import { cn } from '../../../utils/cn';

export const EventsTestimonialSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonials = EVENTS_TESTIMONIAL_DATA.testimonials;
  const currentTestimonial = testimonials[activeIndex];

  return (
    <section
      aria-labelledby="events-heading"
      className="py-20 sm:py-24 lg:py-28 bg-[var(--color-brand-section-blue)] text-white"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Save The Date & Upcoming Events List (6 cols) */}
          <Reveal className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-brand-sky)]">
                {EVENTS_TESTIMONIAL_DATA.eyebrow}
              </p>
              <h2
                id="events-heading"
                className="font-heading text-3xl sm:text-4xl lg:text-[2.65rem] font-bold text-white leading-tight tracking-tight"
              >
                {EVENTS_TESTIMONIAL_DATA.title}
              </h2>
            </div>

            {/* Event Rows separated by thin translucent dividers matching s8.png */}
            <div className="border-t border-white/15 divide-y divide-white/15">
              {EVENTS_TESTIMONIAL_DATA.events.map((event) => (
                <Link
                  key={event.id}
                  to={event.href}
                  className="group py-5 flex items-center justify-between gap-4 hover:bg-white/5 px-2 -mx-2 rounded-lg transition-colors"
                >
                  <div className="flex items-center gap-5 sm:gap-7">
                    {/* Stacked Date & Month */}
                    <div className="w-11 shrink-0 text-left">
                      <span className="block font-heading text-2xl sm:text-[26px] font-bold leading-none text-white">
                        {event.day}
                      </span>
                      <span className="block text-[10px] font-bold uppercase tracking-widest text-sky-200/80 mt-1">
                        {event.month}
                      </span>
                    </div>

                    {/* Event Title & Time/Venue */}
                    <div className="space-y-1">
                      <h3 className="font-heading text-base sm:text-[17px] font-bold text-white group-hover:text-[var(--color-brand-sky)] transition-colors">
                        {event.title}
                      </h3>
                      <p className="text-xs sm:text-[13px] text-sky-100/75">
                        {event.time}
                      </p>
                    </div>
                  </div>

                  <ArrowRight className="w-4 h-4 shrink-0 text-sky-200/80 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </div>
          </Reveal>

          {/* Right Column: White Asymmetric-Corner Testimonial Card matching s8.png (6 cols) */}
          <Reveal delay={0.12} className="lg:col-span-6">
            <div className="bg-white text-[#0A2540] rounded-signature-lg p-8 sm:p-10 lg:p-12 shadow-xl space-y-7">
              {/* Gold Outline Quote Icon */}
              <div className="text-[var(--color-brand-gold)]">
                <Quote className="w-10 h-10 stroke-[1.75]" />
              </div>

              {/* Animated Testimonial Quote */}
              <div className="min-h-[150px] sm:min-h-[140px] flex flex-col justify-between">
                <AnimatePresence mode="wait">
                  <motion.blockquote
                    key={currentTestimonial.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-6"
                  >
                    <p className="font-heading text-xl sm:text-2xl font-bold text-[#0A2540] leading-[1.4] tracking-tight">
                      &ldquo;{currentTestimonial.quote}&rdquo;
                    </p>
                    <footer className="text-xs sm:text-[13px] font-bold text-[#334E68]">
                      author
                    </footer>
                  </motion.blockquote>
                </AnimatePresence>
              </div>

              {/* 3 Horizontal Bar Pagination Indicators matching s8.png */}
              <div
                className="flex items-center gap-2 pt-2"
                role="tablist"
                aria-label="Testimonial slides"
              >
                {testimonials.map((item, idx) => {
                  const isActive = idx === activeIndex;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      aria-label={`View testimonial ${idx + 1}`}
                      onClick={() => setActiveIndex(idx)}
                      className={cn(
                        'h-1 rounded-full transition-all duration-300 cursor-pointer',
                        isActive
                          ? 'w-9 bg-[#0B6AA2]'
                          : 'w-5 bg-slate-200 hover:bg-slate-300'
                      )}
                    />
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
};