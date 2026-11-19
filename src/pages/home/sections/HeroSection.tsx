import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Container } from '../../../components/common/Container';
import { Button } from '../../../components/ui/Button';
import { HERO_DATA } from '../../../data/home.data';

const SLIDE_INTERVAL_MS = 6000;

export const HeroSection = () => {
    const slides = HERO_DATA.backgroundImages?.length
        ? HERO_DATA.backgroundImages
        : [{ src: HERO_DATA.backgroundImage, alt: 'Students learning in an Al-MIIC classroom' }];

    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {
        if (slides.length <= 1) return;

        const timer = window.setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % slides.length);
        }, SLIDE_INTERVAL_MS);

        return () => window.clearInterval(timer);
    }, [slides.length]);

    const prefixWords = HERO_DATA.headlinePrefix.split(' ');
    const highlightWords = HERO_DATA.headlineHighlight.split(' ');

    return (
        <section
            aria-label="Hero Banner"
            className="relative min-h-[580px] sm:min-h-[640px] lg:min-h-[680px] flex items-center overflow-hidden bg-[#06182C]"
        >
            {/* 4-Image Crossfade & Subtle Zoom Background */}
            <div className="absolute inset-0 z-0">
                <AnimatePresence mode="sync">
                    <motion.img
                        key={slides[activeSlide].src}
                        src={slides[activeSlide].src}
                        alt={slides[activeSlide].alt}
                        fetchPriority={activeSlide === 0 ? 'high' : 'auto'}
                        initial={{ opacity: 0, scale: 1.07 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{
                            opacity: { duration: 1.2, ease: 'easeInOut' },
                            scale: { duration: 6.5, ease: 'easeOut' },
                        }}
                        className="absolute inset-0 w-full h-full object-cover object-center"
                    />
                </AnimatePresence>

                {/* Dark Directional Gradient Overlay matching s1.jpg */}
                <div
                    className="absolute inset-0 bg-gradient-to-r from-[#05182B]/75 via-[#07213A]/65 to-[#06182C]/60"
                    aria-hidden="true"
                />
                <div
                    className="absolute inset-0 bg-gradient-to-t from-[#05182B]/65 via-transparent to-[#05182B]/25"
                    aria-hidden="true"
                />
            </div>

            {/* Hero Foreground Content */}
            <Container className="relative z-10 py-20 sm:py-28 lg:py-32">
                <div className="max-w-2xl space-y-6">
                    {/* Arabic Calligraphic Phrase + LightSkyBlue Eyebrow */}
                    <motion.div
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.25 }}
                        transition={{ duration: 0.45 }}
                        className="space-y-2.5"
                    >
                        <div className="inline-flex flex-wrap items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-sky-300/25 backdrop-blur-xs">
                            <span
                                lang="ar"
                                dir="rtl"
                                className="text-sm sm:text-[15px] font-semibold text-[var(--color-brand-gold)] leading-normal"
                            >
                                {HERO_DATA.arabicMotto}
                            </span>
                        </div>

                    </motion.div>

                    {/* Main Display Heading — Word-by-word animation re-triggers every time section enters viewport */}
                    <motion.h1
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.25 }}
                        variants={{
                            hidden: {},
                            visible: {
                                transition: {
                                    staggerChildren: 0.065,
                                },
                            },
                        }}
                        className="font-heading text-4xl sm:text-5xl lg:text-[3.85rem] font-bold text-white leading-[1.08] tracking-[-0.025em]"
                    >
                        {prefixWords.map((word, idx) => (
                            <motion.span
                                key={`prefix-${idx}`}
                                variants={{
                                    hidden: { opacity: 0, y: 22, filter: 'blur(4px)' },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        filter: 'blur(0px)',
                                        transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
                                    },
                                }}
                                className="inline-block mr-[0.26em]"
                            >
                                {word}
                            </motion.span>
                        ))}

                        {highlightWords.map((word, idx) => (
                            <motion.span
                                key={`highlight-${idx}`}
                                variants={{
                                    hidden: { opacity: 0, y: 22, filter: 'blur(4px)' },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        filter: 'blur(0px)',
                                        transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
                                    },
                                }}
                                className="inline-block mr-[0.26em] text-[var(--color-brand-gold)]"
                            >
                                {word}
                            </motion.span>
                        ))}
                    </motion.h1>

                    {/* Lead Paragraph */}
                    <motion.p
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.25 }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        className="text-base sm:text-lg text-slate-200/95 leading-relaxed max-w-xl"
                    >
                        {HERO_DATA.description}
                    </motion.p>

                    {/* Dual CTA Row matching s1.jpg */}
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.25 }}
                        transition={{ duration: 0.5, delay: 0.35 }}
                        className="pt-3 flex flex-wrap items-center gap-4"
                    >
                        <Button
                            to={HERO_DATA.primaryCta.href}
                            variant="gold"
                            size="lg"
                            withArrow
                        >
                            {HERO_DATA.primaryCta.label}
                        </Button>

                        <Button
                            to={HERO_DATA.secondaryCta.href}
                            variant="glass"
                            size="lg"
                        >
                            {HERO_DATA.secondaryCta.label}
                        </Button>
                    </motion.div>
                </div>
            </Container>

            {/* Subtle Slide Indicator Bars at Bottom-Right */}
            {slides.length > 1 && (
                <div
                    className="absolute bottom-6 right-6 sm:right-10 z-20 flex items-center gap-2"
                    role="tablist"
                    aria-label="Hero background slides"
                >
                    {slides.map((slide, idx) => {
                        const isCurrent = idx === activeSlide;
                        return (
                            <button
                                key={slide.src}
                                type="button"
                                role="tab"
                                aria-selected={isCurrent}
                                aria-label={`Show campus image ${idx + 1}`}
                                onClick={() => setActiveSlide(idx)}
                                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${isCurrent
                                        ? 'w-8 bg-[var(--color-brand-gold)]'
                                        : 'w-2.5 bg-white/35 hover:bg-white/60'
                                    }`}
                            />
                        );
                    })}
                </div>
            )}
        </section>
    );
};