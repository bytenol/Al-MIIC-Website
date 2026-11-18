import React, { useState } from 'react';
import {
    BookOpen,
    CheckCircle2,
    ClipboardCheck,
    GraduationCap,
    Layers,
} from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { Container } from '../../components/common/Container';
import { SectionHeading } from '../../components/common/SectionHeading';
import { Card } from '../../components/common/Card';
import { Reveal } from '../../components/common/Reveal';
import { Button } from '../../components/ui/Button';
import {
    ACADEMICS_HERO,
    ACADEMICS_OVERVIEW,
    ASSESSMENT_MODEL,
    ISLAMIC_STUDIES_PILLARS,
    SECONDARY_STAGES,
    SENIOR_TRACKS,
} from '../../data/academics.data';
import { ROUTES } from '../../routes/paths';
import { cn } from '../../utils/cn';
import type { SeniorTrack } from '../../types/academics.types';

export const AcademicsPage: React.FC = () => {
    const [selectedTrackId, setSelectedTrackId] = useState<SeniorTrack['id']>('science');
    const activeTrack =
        SENIOR_TRACKS.find((track) => track.id === selectedTrackId) || SENIOR_TRACKS[0];

    return (
        <div className="space-y-24 pb-20">
            {/* 1. Academics Hero Banner */}
            <section
                aria-label="Academics Hero"
                className="relative py-20 sm:py-24 lg:py-28 bg-[#06182C] text-white overflow-hidden"
            >
                <img
                    src={ACADEMICS_HERO.bannerImage}
                    alt={ACADEMICS_HERO.bannerAlt}
                    className="absolute inset-0 w-full h-full object-cover object-center opacity-25"
                />
                <div
                    className="absolute inset-0 bg-gradient-to-r from-[#06182C] via-[#06182C]/92 to-[#06182C]/75"
                    aria-hidden="true"
                />
                <Container className="relative z-10 max-w-4xl text-center space-y-6">
                    <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.18em] text-[var(--color-brand-sky)]">
                        {ACADEMICS_HERO.eyebrow}
                    </p>
                    <h1 className="font-heading text-3xl sm:text-5xl lg:text-[3.5rem] font-bold leading-[1.12] tracking-tight text-white">
                        {ACADEMICS_HERO.title}
                    </h1>
                    <p className="text-base sm:text-lg text-slate-200/90 leading-relaxed max-w-2xl mx-auto">
                        {ACADEMICS_HERO.subtitle}
                    </p>
                </Container>
            </section>

            {/* 2. Academic Overview (#overview) */}
            <section id="overview" className="scroll-mt-28">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <Reveal className="lg:col-span-7 space-y-6">
                            <SectionHeading
                                eyebrow={ACADEMICS_OVERVIEW.eyebrow}
                                title={ACADEMICS_OVERVIEW.title}
                            />
                            <p className="text-base sm:text-[17px] text-[var(--color-text-secondary)] leading-[1.7]">
                                {ACADEMICS_OVERVIEW.leadParagraph}
                            </p>
                            <p className="text-[15px] sm:text-base text-[var(--color-text-muted)] leading-[1.7]">
                                {ACADEMICS_OVERVIEW.bodyParagraph}
                            </p>
                        </Reveal>

                        <Reveal delay={0.1} className="lg:col-span-5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {ACADEMICS_OVERVIEW.highlights.map((item) => (
                                    <div
                                        key={item.label}
                                        className="p-5 rounded-xl bg-[var(--color-bg-secondary)] border border-[var(--color-border-subtle)] space-y-1.5"
                                    >
                                        <span className="block text-[11px] font-bold uppercase tracking-wider text-[var(--color-text-eyebrow)]">
                                            {item.label}
                                        </span>
                                        <span className="block font-heading text-lg font-bold text-[var(--color-text-primary)]">
                                            {item.value}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </Reveal>
                    </div>
                </Container>
            </section>

            {/* 3. Junior Secondary (#junior-secondary) & Senior Secondary (#senior-secondary) */}
            <section className="space-y-20">
                <Container className="space-y-20">
                    {SECONDARY_STAGES.map((stage, idx) => {
                        const isReversed = idx % 2 === 1;
                        return (
                            <div
                                key={stage.id}
                                id={stage.anchorId}
                                className="scroll-mt-28 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
                            >
                                {/* Image Column */}
                                <Reveal
                                    className={cn(
                                        'lg:col-span-5',
                                        isReversed && 'lg:order-2'
                                    )}
                                >
                                    <div className="overflow-hidden rounded-signature-lg shadow-[var(--shadow-card)] bg-[var(--color-bg-secondary)] aspect-[4/3.5]">
                                        <img
                                            src={stage.image}
                                            alt={stage.imageAlt}
                                            loading="lazy"
                                            className="w-full h-full object-cover object-center"
                                        />
                                    </div>
                                </Reveal>

                                {/* Content Column */}
                                <Reveal
                                    delay={0.1}
                                    className={cn(
                                        'lg:col-span-7 space-y-6',
                                        isReversed && 'lg:order-1'
                                    )}
                                >
                                    <div className="space-y-2.5">
                                        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-text-eyebrow)]">
                                            {stage.badge}
                                        </p>
                                        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--color-text-primary)] tracking-tight">
                                            {stage.title}
                                        </h2>
                                        <p className="text-base font-medium text-[var(--color-text-secondary)]">
                                            {stage.subtitle}
                                        </p>
                                    </div>

                                    <p className="text-sm sm:text-[15.5px] text-[var(--color-text-secondary)] leading-[1.7]">
                                        {stage.description}
                                    </p>

                                    {/* Core Subjects Grid */}
                                    <div className="p-5 sm:p-6 rounded-xl bg-[var(--color-bg-secondary)] border border-[var(--color-border-subtle)] space-y-3">
                                        <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-primary)] flex items-center gap-2">
                                            <Layers className="w-4 h-4 text-[var(--color-brand-primary)]" />
                                            Core Subjects &amp; Study Areas
                                        </h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                                            {stage.coreSubjects.map((subject) => (
                                                <div
                                                    key={subject}
                                                    className="flex items-start gap-2 text-xs sm:text-[13px] text-[var(--color-text-secondary)]"
                                                >
                                                    <CheckCircle2 className="w-4 h-4 shrink-0 text-[var(--color-brand-primary)] mt-0.5" />
                                                    <span>{subject}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Key Outcomes */}
                                    <div className="space-y-2">
                                        <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)]">
                                            Key Student Outcomes
                                        </h3>
                                        <ul className="space-y-1.5">
                                            {stage.outcomes.map((outcome) => (
                                                <li
                                                    key={outcome}
                                                    className="text-xs sm:text-sm text-[var(--color-text-secondary)] flex items-center gap-2.5"
                                                >
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-gold)] shrink-0" />
                                                    <span>{outcome}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </Reveal>
                            </div>
                        );
                    })}
                </Container>
            </section>

            {/* 4. Senior Secondary Academic Tracks Explorer */}
            <section className="py-16 sm:py-20 bg-[var(--color-bg-secondary)] border-y border-[var(--color-border-subtle)]">
                <Container className="space-y-10">
                    <SectionHeading
                        align="center"
                        eyebrow="SENIOR SECONDARY SPECIALIZATION"
                        title="SS 1 – SS 3 Academic Pathways"
                        description="Select a senior secondary department below to inspect compulsory subjects, electives, and university career pathways."
                    />

                    {/* Track Switcher Tabs */}
                    <div
                        className="flex flex-wrap items-center justify-center gap-3"
                        role="tablist"
                        aria-label="Senior Secondary Academic Tracks"
                    >
                        {SENIOR_TRACKS.map((track) => {
                            const active = track.id === selectedTrackId;
                            return (
                                <button
                                    key={track.id}
                                    type="button"
                                    role="tab"
                                    aria-selected={active}
                                    onClick={() => setSelectedTrackId(track.id)}
                                    className={cn(
                                        'px-5 py-2.5 rounded-lg text-sm font-semibold transition-all cursor-pointer border',
                                        active
                                            ? 'bg-[var(--color-brand-navy)] text-white border-transparent shadow-sm dark:bg-[var(--color-brand-sky)] dark:text-slate-950'
                                            : 'bg-[var(--color-bg-elevated)] text-[var(--color-text-secondary)] border-[var(--color-border-subtle)] hover:text-[var(--color-text-primary)]'
                                    )}
                                >
                                    {track.label}
                                </button>
                            );
                        })}
                    </div>

                    {/* Active Track Panel */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTrack.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.22 }}
                        >
                            <Card variant="elevated" radius="signature" padding="lg" className="space-y-8">
                                <div className="max-w-3xl space-y-2">
                                    <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-text-eyebrow)]">
                                        {activeTrack.tagline}
                                    </span>
                                    <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[var(--color-text-primary)]">
                                        {activeTrack.label} Department
                                    </h3>
                                    <p className="text-sm sm:text-base text-[var(--color-text-secondary)] leading-relaxed pt-1">
                                        {activeTrack.description}
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 border-t border-[var(--color-border-subtle)]">
                                    {/* Compulsory */}
                                    <div className="space-y-3">
                                        <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-primary)] flex items-center gap-2">
                                            <BookOpen className="w-4 h-4 text-[var(--color-brand-primary)]" />
                                            Compulsory Subjects
                                        </h4>
                                        <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                                            {activeTrack.compulsorySubjects.map((sub) => (
                                                <li key={sub} className="flex items-center gap-2">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-primary)]" />
                                                    <span>{sub}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Electives */}
                                    <div className="space-y-3">
                                        <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-primary)] flex items-center gap-2">
                                            <Layers className="w-4 h-4 text-[var(--color-brand-gold)]" />
                                            Elective Options
                                        </h4>
                                        <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                                            {activeTrack.electiveSubjects.map((sub) => (
                                                <li key={sub} className="flex items-center gap-2">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-gold)]" />
                                                    <span>{sub}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* University & Career Pathways */}
                                    <div className="space-y-3">
                                        <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-primary)] flex items-center gap-2">
                                            <GraduationCap className="w-4 h-4 text-[var(--color-brand-primary)]" />
                                            University Pathways
                                        </h4>
                                        <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                                            {activeTrack.careerPathways.map((career) => (
                                                <li key={career} className="flex items-center gap-2">
                                                    <CheckCircle2 className="w-4 h-4 text-[var(--color-brand-primary)] shrink-0" />
                                                    <span>{career}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    </AnimatePresence>
                </Container>
            </section>

            {/* 5. Islamic & Qur'anic Studies (#islamic-studies) */}
            <section id="islamic-studies" className="scroll-mt-28">
                <Container className="space-y-12">
                    <SectionHeading
                        align="split"
                        eyebrow="INTEGRATED TARBIYAH"
                        title="Islamic & Qur’anic Studies"
                        description="Every secondary student benefits from a structured Islamic studies curriculum designed to foster Qur’anic fluency, Arabic literacy, and sound moral character."
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {ISLAMIC_STUDIES_PILLARS.map((pillar, index) => (
                            <Reveal key={pillar.number} delay={index * 0.08} className="flex">
                                <Card variant="subtle" hoverLift className="flex-1 space-y-4">
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs font-bold text-[var(--color-brand-gold)]">
                                            {pillar.number}
                                        </span>
                                        <span
                                            lang="ar"
                                            dir="rtl"
                                            className="text-sm font-semibold text-[var(--color-text-eyebrow)]"
                                        >
                                            {pillar.arabicTitle}
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

            {/* 6. Curriculum & Assessment (#curriculum) */}
            <section
                id="curriculum"
                className="scroll-mt-28 py-16 bg-[var(--color-brand-navy)] text-white"
            >
                <Container className="space-y-12">
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                        <SectionHeading
                            tone="light"
                            eyebrow="EVALUATION & SUPPORT"
                            title="Curriculum & Assessment"
                            description="Transparent continuous assessment and individualized mentoring ensure every student achieves steady mastery."
                        />
                        <Button to={ROUTES.ADMISSIONS} variant="gold" size="lg" withArrow>
                            Apply for Admission
                        </Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {ASSESSMENT_MODEL.map((item, index) => (
                            <Reveal key={item.title} delay={index * 0.08} className="flex">
                                <div className="flex-1 p-7 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                                    <div className="flex items-center justify-between">
                                        <ClipboardCheck className="w-6 h-6 text-[var(--color-brand-sky)]" />
                                        <span className="font-heading text-2xl font-extrabold text-[var(--color-brand-gold)]">
                                            {item.percentage}
                                        </span>
                                    </div>
                                    <h3 className="font-heading text-xl font-bold text-white">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-sky-100/85 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </Container>
            </section>
        </div>
    );
};