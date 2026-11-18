import React from 'react';
import { motion } from 'motion/react';
import { Container } from '../../../components/common/Container';
import { Button } from '../../../components/ui/Button';
import { HERO_DATA } from '../../../data/home.data';

export const HeroSection: React.FC = () => {
    return (
        <section
            aria-label="Hero Banner"
            className="relative min-h-[580px] sm:min-h-[640px] lg:min-h-[680px] flex items-center overflow-hidden bg-[#06182C]"
        >
            {/* Background Image with dark directional overlay matching s1.jpg */}
            <div className="absolute inset-0 z-0">
                <img
                    src={HERO_DATA.backgroundImage}
                    alt="Students learning in an Al-MIIC classroom"
                    className="w-full h-full object-cover object-center"
                    fetchPriority="high"
                />
                <div
                    className="absolute inset-0 bg-gradient-to-r from-[#05182B]/95 via-[#07213A]/85 to-[#06182C]/60"
                    aria-hidden="true"
                />
            </div>

            {/* Hero Foreground Content */}
            <Container className="relative z-10 py-20 sm:py-28 lg:py-32">
                <div className="max-w-2xl space-y-6">
                    {/* Uppercase LightSkyBlue Eyebrow */}
                    <motion.p
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45 }}
                        className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.18em] text-[var(--color-brand-sky)]"
                    >
                        {HERO_DATA.eyebrow}
                    </motion.p>

                    {/* Main Display Heading with Warm Gold Highlight */}
                    <motion.h1
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.08 }}
                        className="font-heading text-4xl sm:text-5xl lg:text-[3.85rem] font-bold text-white leading-[1.06] tracking-[-0.025em]"
                    >
                        {HERO_DATA.headlinePrefix}{' '}
                        <span className="text-[var(--color-brand-gold)]">
                            {HERO_DATA.headlineHighlight}
                        </span>
                    </motion.h1>

                    {/* Lead Paragraph */}
                    <motion.p
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.16 }}
                        className="text-base sm:text-lg text-slate-200/95 leading-relaxed max-w-xl"
                    >
                        {HERO_DATA.description}
                    </motion.p>

                    {/* Dual CTA Row matching s1.jpg */}
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.24 }}
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
        </section>
    );
};