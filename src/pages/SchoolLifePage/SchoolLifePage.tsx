import { useState } from 'react';
import {
    Building2,
    CheckCircle2,
    Clock,
    Compass,
    Sparkles,
    Trophy,
    Users,
} from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { Container } from '../../components/common/Container';
import { SectionHeading } from '../../components/common/SectionHeading';
import { Card } from '../../components/common/Card';
import { Reveal } from '../../components/common/Reveal';
import { Button } from '../../components/ui/Button';
import {
    CAMPUS_FACILITIES,
    DAILY_RHYTHM_HIGHLIGHTS,
    SCHOOL_LIFE_HERO,
    SPIRITUAL_LIFE_DATA,
    SPORTS_PROGRAMMES,
    STUDENT_CLUBS,
} from '../../data/schoolLife.data';
import { ROUTES } from '../../routes/paths';
import { cn } from '../../utils/cn';
import type { ClubCategory } from '../../types/schoolLife.types';

const CLUB_CATEGORIES: ClubCategory[] = [
    'All',
    'STEM & Innovation',
    'Arts & Leadership',
    'Faith & Service',
];

export default function SchoolLifePage() {
    const [selectedCategory, setSelectedCategory] = useState<ClubCategory>('All');

    const filteredClubs =
        selectedCategory === 'All'
            ? STUDENT_CLUBS
            : STUDENT_CLUBS.filter((club) => club.category === selectedCategory);

    return (
        <div className="space-y-24 pb-20">
            {/* 1. School Life Hero */}
            <section
                aria-label="School Life Hero"
                className="relative py-20 sm:py-24 lg:py-28 bg-[#06182C] text-white overflow-hidden"
            >
                <img
                    src={SCHOOL_LIFE_HERO.bannerImage}
                    alt={SCHOOL_LIFE_HERO.bannerAlt}
                    className="absolute inset-0 w-full h-full object-cover object-center opacity-25"
                />
                <div
                    className="absolute inset-0 bg-gradient-to-r from-[#06182C] via-[#06182C]/92 to-[#06182C]/75"
                    aria-hidden="true"
                />
                <Container className="relative z-10 max-w-4xl text-center space-y-6">
                    <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.18em] text-[var(--color-brand-sky)]">
                        {SCHOOL_LIFE_HERO.eyebrow}
                    </p>
                    <h1 className="font-heading text-3xl sm:text-5xl lg:text-[3.5rem] font-bold leading-[1.12] tracking-tight text-white">
                        {SCHOOL_LIFE_HERO.title}
                    </h1>
                    <p className="text-base sm:text-lg text-slate-200/90 leading-relaxed max-w-2xl mx-auto">
                        {SCHOOL_LIFE_HERO.subtitle}
                    </p>
                </Container>
            </section>

            {/* 2. A Day at Al-MIIC Rhythm Strip */}
            <section aria-label="Daily Student Rhythm">
                <Container className="space-y-10">
                    <SectionHeading
                        align="center"
                        eyebrow="BALANCED ROUTINE"
                        title="A Purposeful Rhythm Every Day"
                        description="Structured to harmonize rigorous secondary learning with worship, mentorship, and active recreation."
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {DAILY_RHYTHM_HIGHLIGHTS.map((slot, index) => (
                            <Reveal key={slot.time} delay={index * 0.08} className="flex">
                                <Card variant="subtle" className="flex-1 space-y-2.5">
                                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--color-text-eyebrow)]">
                                        <Clock className="w-3.5 h-3.5" />
                                        {slot.time}
                                    </span>
                                    <h3 className="font-heading text-base font-bold text-[var(--color-text-primary)]">
                                        {slot.title}
                                    </h3>
                                    <p className="text-xs sm:text-[13px] text-[var(--color-text-secondary)] leading-relaxed">
                                        {slot.detail}
                                    </p>
                                </Card>
                            </Reveal>
                        ))}
                    </div>
                </Container>
            </section>

            {/* 3. Islamic Ethos & Spiritual Life (#spiritual-life) */}
            <section
                id="spiritual-life"
                className="scroll-mt-28 py-16 sm:py-20 bg-[var(--color-bg-secondary)] border-y border-[var(--color-border-subtle)]"
            >
                <Container className="space-y-12">
                    <SectionHeading
                        align="split"
                        eyebrow={SPIRITUAL_LIFE_DATA.eyebrow}
                        title={SPIRITUAL_LIFE_DATA.title}
                        description={SPIRITUAL_LIFE_DATA.description}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {SPIRITUAL_LIFE_DATA.pillars.map((pillar, index) => (
                            <Reveal key={pillar.number} delay={index * 0.08} className="flex">
                                <Card variant="elevated" hoverLift className="flex-1 space-y-3">
                                    <div className="flex items-center justify-between">
                                        <Sparkles className="w-5 h-5 text-[var(--color-brand-gold)]" />
                                        <span className="text-xs font-bold text-[var(--color-text-muted)]">
                                            {pillar.number}
                                        </span>
                                    </div>
                                    <h3 className="font-heading text-lg font-bold text-[var(--color-text-primary)]">
                                        {pillar.title}
                                    </h3>
                                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                                        {pillar.description}
                                    </p>
                                </Card>
                            </Reveal>
                        ))}
                    </div>
                </Container>
            </section>

            {/* 4. Student Activities & Clubs (#clubs) */}
            <section id="clubs" className="scroll-mt-28">
                <Container className="space-y-10">
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                        <SectionHeading
                            eyebrow="CO-CURRICULAR ENRICHMENT"
                            title="Student Clubs & Societies"
                            description="Every JSS and SSS learner participates in weekly club sessions designed to uncover talents, build teamwork, and inspire leadership."
                        />

                        {/* Filter Pills */}
                        <div
                            className="flex flex-wrap items-center gap-2"
                            role="tablist"
                            aria-label="Filter student clubs by category"
                        >
                            {CLUB_CATEGORIES.map((category) => {
                                const active = selectedCategory === category;
                                return (
                                    <button
                                        key={category}
                                        type="button"
                                        role="tab"
                                        aria-selected={active}
                                        onClick={() => setSelectedCategory(category)}
                                        className={cn(
                                            'px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer border',
                                            active
                                                ? 'bg-[var(--color-brand-primary)] text-white border-transparent shadow-2xs'
                                                : 'bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)] border-[var(--color-border-subtle)] hover:text-[var(--color-text-primary)]'
                                        )}
                                    >
                                        {category}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredClubs.map((club) => (
                                <motion.div
                                    key={club.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.97 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.97 }}
                                    transition={{ duration: 0.2 }}
                                    className="flex"
                                >
                                    <Card
                                        variant="elevated"
                                        hoverLift
                                        className="flex-1 flex flex-col justify-between space-y-4"
                                    >
                                        <div className="space-y-2.5">
                                            <div className="flex items-center justify-between gap-2 text-[11px] font-bold uppercase tracking-wider">
                                                <span className="text-[var(--color-text-eyebrow)]">
                                                    {club.category}
                                                </span>
                                                <span className="text-[var(--color-text-muted)]">
                                                    {club.schedule}
                                                </span>
                                            </div>

                                            <h3 className="font-heading text-lg font-bold text-[var(--color-text-primary)]">
                                                {club.name}
                                            </h3>

                                            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                                                {club.description}
                                            </p>
                                        </div>

                                        <div className="pt-3 border-t border-[var(--color-border-subtle)] flex items-center gap-2 text-xs font-semibold text-[var(--color-text-primary)]">
                                            <Users className="w-4 h-4 text-[var(--color-brand-gold)] shrink-0" />
                                            <span>{club.highlights}</span>
                                        </div>
                                    </Card>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </Container>
            </section>

            {/* 5. Sports & Recreation (#sports) */}
            <section
                id="sports"
                className="scroll-mt-28 py-16 bg-[var(--color-brand-section-blue)] text-white"
            >
                <Container className="space-y-12">
                    <SectionHeading
                        tone="light"
                        align="split"
                        eyebrow="PHYSICAL WELLNESS & TEAMWORK"
                        title="Sports & Inter-House Athletics"
                        description="Healthy bodies support sharp minds. Physical education and organized sports foster resilience, fair play, and school spirit."
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {SPORTS_PROGRAMMES.map((sport, index) => (
                            <Reveal key={sport.id} delay={index * 0.08} className="flex">
                                <div className="flex-1 p-7 rounded-signature bg-white/10 border border-white/15 backdrop-blur-xs space-y-3">
                                    <div className="flex items-center justify-between">
                                        <Trophy className="w-6 h-6 text-[var(--color-brand-gold)]" />
                                        <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--color-brand-sky)]">
                                            {sport.seasonOrVenue}
                                        </span>
                                    </div>
                                    <h3 className="font-heading text-xl font-bold text-white">
                                        {sport.title}
                                    </h3>
                                    <p className="text-sm text-sky-100/85 leading-relaxed">
                                        {sport.description}
                                    </p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </Container>
            </section>

            {/* 6. Campus Facilities (#facilities) */}
            <section id="facilities" className="scroll-mt-28">
                <Container className="space-y-14">
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                        <SectionHeading
                            eyebrow="CAMPUS ENVIRONMENT"
                            title="Purpose-Built Learning Facilities"
                            description="Explore the laboratories, library, prayer halls, and residential spaces designed to support secondary excellence."
                        />
                        <Button to={ROUTES.GALLERY} variant="primary" size="md" withArrow>
                            View Photo Gallery
                        </Button>
                    </div>

                    <div className="space-y-16">
                        {CAMPUS_FACILITIES.map((facility, idx) => {
                            const isReversed = idx % 2 === 1;
                            return (
                                <div
                                    key={facility.id}
                                    className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center"
                                >
                                    <Reveal
                                        className={cn(
                                            'lg:col-span-5',
                                            isReversed && 'lg:order-2'
                                        )}
                                    >
                                        <div className="overflow-hidden rounded-signature-lg shadow-[var(--shadow-card)] bg-[var(--color-bg-secondary)] aspect-[4/3]">
                                            <img
                                                src={facility.image}
                                                alt={facility.imageAlt}
                                                loading="lazy"
                                                className="w-full h-full object-cover object-center"
                                            />
                                        </div>
                                    </Reveal>

                                    <Reveal
                                        delay={0.1}
                                        className={cn(
                                            'lg:col-span-7 space-y-5',
                                            isReversed && 'lg:order-1'
                                        )}
                                    >
                                        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--color-text-eyebrow)]">
                                            <Building2 className="w-4 h-4" />
                                            <span>Campus Facility 0{idx + 1}</span>
                                        </div>

                                        <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[var(--color-text-primary)]">
                                            {facility.title}
                                        </h3>

                                        <p className="text-sm sm:text-base text-[var(--color-text-secondary)] leading-relaxed">
                                            {facility.description}
                                        </p>

                                        <ul className="space-y-2.5 pt-1">
                                            {facility.features.map((feat) => (
                                                <li
                                                    key={feat}
                                                    className="flex items-center gap-2.5 text-sm font-medium text-[var(--color-text-primary)]"
                                                >
                                                    <CheckCircle2 className="w-4 h-4 text-[var(--color-brand-primary)] shrink-0" />
                                                    <span>{feat}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </Reveal>
                                </div>
                            );
                        })}
                    </div>

                    {/* Bottom Callout to Admissions */}
                    <div className="p-8 sm:p-10 rounded-signature bg-[var(--color-bg-secondary)] border border-[var(--color-border-subtle)] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                        <div className="space-y-1.5 max-w-xl">
                            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--color-text-eyebrow)]">
                                <Compass className="w-4 h-4" />
                                <span>Experience Al-MIIC Firsthand</span>
                            </div>
                            <h3 className="font-heading text-xl sm:text-2xl font-bold text-[var(--color-text-primary)]">
                                Ready to see our campus and meet our educators?
                            </h3>
                        </div>
                        <div className="flex flex-wrap gap-3 shrink-0">
                            <Button to={ROUTES.CONTACT} variant="outline" size="md">
                                Schedule a Visit
                            </Button>
                            <Button to={ROUTES.ADMISSIONS} variant="primary" size="md" withArrow>
                                Apply Now
                            </Button>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
};