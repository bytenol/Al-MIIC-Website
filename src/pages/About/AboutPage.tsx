import React from 'react';
import { BookOpen, Compass, Heart, Shield, Star } from 'lucide-react';
import { Container } from '../../components/common/Container';
import { SectionHeading } from '../../components/common/SectionHeading';
import { Card } from '../../components/common/Card';
import { Reveal } from '../../components/common/Reveal';
import { Button } from '../../components/ui/Button';
import {
    ABOUT_HERO,
    CORE_VALUES,
    DEPARTMENT_HEADS,
    HISTORY_MILESTONES,
    LEADERSHIP_TEAM,
    OVERVIEW_DATA,
    VISION_MISSION_DATA,
} from '../../data/about.data';
import { ROUTES } from '../../routes/paths';
import type { CoreValue } from '../../types/about.types';

const ICON_MAP: Record<CoreValue['iconName'], React.ReactNode> = {
    star: <Star className="w-6 h-6 stroke-[1.75]" />,
    book: <BookOpen className="w-6 h-6 stroke-[1.75]" />,
    shield: <Shield className="w-6 h-6 stroke-[1.75]" />,
    heart: <Heart className="w-6 h-6 stroke-[1.75]" />,
    compass: <Compass className="w-6 h-6 stroke-[1.75]" />,
};

export const AboutPage: React.FC = () => {
    return (
        <div className="space-y-24 pb-20">
            {/* 1. About Hero Section */}
            <section
                aria-label="About Al-MIIC Hero"
                className="relative py-20 sm:py-24 lg:py-28 bg-[#06182C] text-white overflow-hidden"
            >
                <img
                    src={ABOUT_HERO.bannerImage}
                    alt={ABOUT_HERO.bannerAlt}
                    className="absolute inset-0 w-full h-full object-cover object-center opacity-30"
                />
                <div
                    className="absolute inset-0 bg-gradient-to-r from-[#06182C] via-[#06182C]/90 to-[#06182C]/70"
                    aria-hidden="true"
                />
                <Container className="relative z-10 max-w-4xl text-center space-y-6">
                    <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.18em] text-[var(--color-brand-sky)]">
                        {ABOUT_HERO.eyebrow}
                    </p>
                    <h1 className="font-heading text-3xl sm:text-5xl lg:text-[3.5rem] font-bold leading-[1.12] tracking-tight text-white">
                        {ABOUT_HERO.title}
                    </h1>
                    <p className="text-base sm:text-lg text-slate-200/90 leading-relaxed max-w-2xl mx-auto">
                        {ABOUT_HERO.subtitle}
                    </p>
                </Container>
            </section>

            {/* 2. Institutional Overview (#overview) */}
            <section id="overview" className="scroll-mt-28">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                        <Reveal className="lg:col-span-6 space-y-6">
                            <SectionHeading
                                eyebrow={OVERVIEW_DATA.eyebrow}
                                title={OVERVIEW_DATA.heading}
                            />
                            <p className="text-base sm:text-[17px] text-[var(--color-text-secondary)] leading-[1.7]">
                                {OVERVIEW_DATA.paragraph1}
                            </p>
                            <p className="text-[15px] sm:text-base text-[var(--color-text-muted)] leading-[1.7]">
                                {OVERVIEW_DATA.paragraph2}
                            </p>
                        </Reveal>

                        <Reveal delay={0.1} className="lg:col-span-6">
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                {OVERVIEW_DATA.stats.map((stat) => (
                                    <div
                                        key={stat.label}
                                        className="p-6 rounded-2xl bg-[var(--color-bg-secondary)] border border-[var(--color-border-subtle)] text-center space-y-2 shadow-xs"
                                    >
                                        <span className="block font-heading text-3xl sm:text-4xl font-extrabold text-[var(--color-brand-primary)]">
                                            {stat.value}
                                        </span>
                                        <span className="block text-xs font-semibold text-[var(--color-text-secondary)]">
                                            {stat.label}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </Reveal>
                    </div>
                </Container>
            </section>

            {/* 3. Vision & Mission (#vision-mission) */}
            <section id="vision-mission" className="scroll-mt-28 py-16 bg-[var(--color-bg-secondary)] border-y border-[var(--color-border-subtle)]">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Reveal className="flex">
                            <Card variant="elevated" className="flex-1 space-y-4">
                                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-text-eyebrow)]">
                                    {VISION_MISSION_DATA.vision.eyebrow}
                                </p>
                                <h3 className="font-heading text-2xl font-bold text-[var(--color-text-primary)]">
                                    {VISION_MISSION_DATA.vision.title}
                                </h3>
                                <p className="text-sm sm:text-base text-[var(--color-text-secondary)] leading-relaxed">
                                    {VISION_MISSION_DATA.vision.description}
                                </p>
                            </Card>
                        </Reveal>

                        <Reveal delay={0.1} className="flex">
                            <Card variant="inverse" className="flex-1 space-y-4">
                                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-brand-sky)]">
                                    {VISION_MISSION_DATA.mission.eyebrow}
                                </p>
                                <h3 className="font-heading text-2xl font-bold text-white">
                                    {VISION_MISSION_DATA.mission.title}
                                </h3>
                                <p className="text-sm sm:text-base text-sky-100/90 leading-relaxed">
                                    {VISION_MISSION_DATA.mission.description}
                                </p>
                            </Card>
                        </Reveal>
                    </div>
                </Container>
            </section>

            {/* 4. Core Values (#core-values) */}
            <section id="core-values" className="scroll-mt-28">
                <Container className="space-y-12">
                    <SectionHeading
                        align="center"
                        eyebrow="OUR FOUNDATIONAL PRINCIPLES"
                        title="Core Values That Guide Us"
                        description="The moral and intellectual tenets that shape every classroom, interaction, and extracurricular experience at Al-MIIC."
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {CORE_VALUES.map((val, index) => (
                            <Reveal key={val.id} delay={index * 0.08} className="flex">
                                <Card variant="subtle" hoverLift className="flex-1 space-y-4">
                                    <div className="flex items-center justify-between">
                                        <div className="text-[var(--color-brand-gold)]">
                                            {ICON_MAP[val.iconName]}
                                        </div>
                                        <span className="text-xs font-bold text-[var(--color-text-muted)]">
                                            {val.number}
                                        </span>
                                    </div>
                                    <h3 className="font-heading text-lg font-bold text-[var(--color-text-primary)]">
                                        {val.title}
                                    </h3>
                                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                                        {val.description}
                                    </p>
                                </Card>
                            </Reveal>
                        ))}
                    </div>
                </Container>
            </section>

            {/* 5. Our History Timeline (#history) */}
            <section id="history" className="scroll-mt-28 py-16 bg-[var(--color-bg-secondary)] border-y border-[var(--color-border-subtle)]">
                <Container className="space-y-12">
                    <SectionHeading
                        align="center"
                        eyebrow="JOURNEY OF GROWTH"
                        title="Our History & Milestones"
                        description="Tracing the purposeful evolution of Al-Mawrid Islamic International College over the years."
                    />

                    <div className="max-w-3xl mx-auto space-y-8">
                        {HISTORY_MILESTONES.map((milestone, index) => (
                            <Reveal key={milestone.year} delay={index * 0.1}>
                                <div className="flex gap-6 sm:gap-8 items-start">
                                    <div className="shrink-0 w-20 sm:w-24 py-1.5 px-3 rounded-lg bg-[var(--color-brand-primary)] text-white text-center font-heading font-extrabold text-sm shadow-xs">
                                        {milestone.year}
                                    </div>
                                    <div className="space-y-1.5 pt-1">
                                        <h3 className="font-heading text-lg sm:text-xl font-bold text-[var(--color-text-primary)]">
                                            {milestone.title}
                                        </h3>
                                        <p className="text-sm sm:text-base text-[var(--color-text-secondary)] leading-relaxed">
                                            {milestone.description}
                                        </p>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </Container>
            </section>

            {/* 6. Management & Leadership (#leadership) */}
            <section id="leadership" className="scroll-mt-28">
                <Container className="space-y-12">
                    <SectionHeading
                        align="center"
                        eyebrow="ADMINISTRATION"
                        title="Management and Leadership"
                        description="Experienced educators and administrators dedicated to student welfare, academic rigor, and institutional vision."
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {LEADERSHIP_TEAM.map((member, index) => (
                            <Reveal key={member.id} delay={index * 0.1} className="flex">
                                <Card variant="elevated" hoverLift className="flex-1 space-y-4 p-0 overflow-hidden">
                                    <div className="aspect-[4/3] bg-[var(--color-bg-secondary)] overflow-hidden">
                                        <img
                                            src={member.image}
                                            alt={member.imageAlt}
                                            className="w-full h-full object-cover object-center"
                                        />
                                    </div>
                                    <div className="p-6 space-y-2">
                                        <h3 className="font-heading text-xl font-bold text-[var(--color-text-primary)]">
                                            {member.name}
                                        </h3>
                                        <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-eyebrow)]">
                                            {member.role}
                                        </p>
                                        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed pt-1">
                                            {member.bio}
                                        </p>
                                    </div>
                                </Card>
                            </Reveal>
                        ))}
                    </div>
                </Container>
            </section>

            {/* 7. Faculty Department Heads (#staff) */}
            <section id="staff" className="scroll-mt-28 py-16 bg-[var(--color-bg-secondary)] border-y border-[var(--color-border-subtle)]">
                <Container className="space-y-12">
                    <SectionHeading
                        align="center"
                        eyebrow="ACADEMIC DEPARTMENTS"
                        title="Meet Our Department Heads"
                        description="Subject specialists fostering inquiry and mastery across all study areas."
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {DEPARTMENT_HEADS.map((dept, index) => (
                            <Reveal key={dept.id} delay={index * 0.08} className="flex">
                                <div className="flex-1 bg-[var(--color-bg-elevated)] border border-[var(--color-border-subtle)] rounded-xl p-6 text-center space-y-4 shadow-xs">
                                    <div className="w-20 h-20 mx-auto rounded-full overflow-hidden bg-[var(--color-bg-secondary)] shadow-sm">
                                        <img
                                            src={dept.image}
                                            alt={dept.name}
                                            className="w-full h-full object-cover object-center"
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <h3 className="font-heading text-base font-bold text-[var(--color-text-primary)]">
                                            {dept.name}
                                        </h3>
                                        <p className="text-xs font-semibold text-[var(--color-text-eyebrow)]">
                                            {dept.subjectArea}
                                        </p>
                                        <p className="text-[11px] text-[var(--color-text-muted)] pt-1">
                                            {dept.qualification}
                                        </p>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>

                    <div className="pt-6 text-center">
                        <Button to={ROUTES.ADMISSIONS} variant="primary" size="lg" withArrow>
                            Join our learning community
                        </Button>
                    </div>
                </Container>
            </section>
        </div>
    );
};