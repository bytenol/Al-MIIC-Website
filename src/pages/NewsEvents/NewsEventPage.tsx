import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
    ArrowRight,
    Calendar,
    Clock,
    MapPin,
    Search,
    Users,
    X,
} from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { Container } from '../../components/common/Container';
import { SectionHeading } from '../../components/common/SectionHeading';
import { Card } from '../../components/common/Card';
import { Reveal } from '../../components/common/Reveal';
import { Button } from '../../components/ui/Button';
import {
    ACADEMIC_CALENDAR_TERMS,
    NEWS_ARTICLES,
    NEWS_HERO,
    UPCOMING_EVENTS_LIST,
} from '../../data/newsGallery.data';
import { ROUTES } from '../../routes/paths';
import { cn } from '../../utils/cn';
import type { NewsArticle, NewsCategory } from '../../types/newsGallery.types';

const NEWS_CATEGORIES: NewsCategory[] = [
    'All',
    'Academics',
    'School Life',
    'Announcement',
    'Islamic Ethos',
];

export const NewsEventsPage: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<NewsCategory>('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [activeArticle, setActiveArticle] = useState<NewsArticle | null>(null);
    const location = useLocation();

    // Open article modal automatically if URL hash matches an article ID (e.g., from Homepage)
    useEffect(() => {
        if (!location.hash) return;
        const hashId = location.hash.replace('#', '');
        const matched = NEWS_ARTICLES.find((article) => article.id === hashId);
        if (matched) {
            setActiveArticle(matched);
        }
    }, [location.hash]);

    // Keyboard Escape handler & scroll lock for article modal
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setActiveArticle(null);
            }
        };
        if (activeArticle) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleKeyDown);
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [activeArticle]);

    const filteredArticles = NEWS_ARTICLES.filter((article) => {
        const matchesCategory =
            selectedCategory === 'All' || article.category === selectedCategory;
        const query = searchQuery.trim().toLowerCase();
        const matchesSearch =
            !query ||
            article.title.toLowerCase().includes(query) ||
            article.excerpt.toLowerCase().includes(query);
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="space-y-24 pb-20">
            {/* 1. News & Events Hero */}
            <section
                aria-label="News and Events Hero"
                className="relative py-20 sm:py-24 lg:py-28 bg-[#06182C] text-white overflow-hidden"
            >
                <img
                    src={NEWS_HERO.bannerImage}
                    alt={NEWS_HERO.bannerAlt}
                    className="absolute inset-0 w-full h-full object-cover object-center opacity-25"
                />
                <div
                    className="absolute inset-0 bg-gradient-to-r from-[#06182C] via-[#06182C]/92 to-[#06182C]/75"
                    aria-hidden="true"
                />
                <Container className="relative z-10 max-w-4xl text-center space-y-6">
                    <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.18em] text-[var(--color-brand-sky)]">
                        {NEWS_HERO.eyebrow}
                    </p>
                    <h1 className="font-heading text-3xl sm:text-5xl lg:text-[3.5rem] font-bold leading-[1.12] tracking-tight text-white">
                        {NEWS_HERO.title}
                    </h1>
                    <p className="text-base sm:text-lg text-slate-200/90 leading-relaxed max-w-2xl mx-auto">
                        {NEWS_HERO.subtitle}
                    </p>
                </Container>
            </section>

            {/* 2. Latest News & Stories (#news) */}
            <section id="news" className="scroll-mt-28">
                <Container className="space-y-10">
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                        <SectionHeading
                            eyebrow="CAMPUS CHRONICLE"
                            title="Latest News & Stories"
                            description="Updates from our classrooms, science laboratories, literary societies, and Islamic programmes."
                        />

                        {/* Search Input */}
                        <div className="relative w-full lg:w-72">
                            <Search className="w-4 h-4 text-[var(--color-text-muted)] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                            <input
                                type="search"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search stories..."
                                aria-label="Search news stories"
                                className="w-full rounded-lg border border-[var(--color-border-strong)] bg-[var(--color-bg-elevated)] pl-10 pr-4 py-2.5 text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-sky)]"
                            />
                        </div>
                    </div>

                    {/* Category Filter Pills */}
                    <div
                        className="flex flex-wrap items-center gap-2"
                        role="tablist"
                        aria-label="Filter news by category"
                    >
                        {NEWS_CATEGORIES.map((category) => {
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

                    {/* Stories Grid */}
                    {filteredArticles.length === 0 ? (
                        <div className="p-12 rounded-2xl bg-[var(--color-bg-secondary)] border border-[var(--color-border-subtle)] text-center space-y-3">
                            <p className="font-heading text-lg font-bold text-[var(--color-text-primary)]">
                                No matching stories found
                            </p>
                            <p className="text-sm text-[var(--color-text-secondary)]">
                                Try clearing your search term or selecting a different category.
                            </p>
                            <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                onClick={() => {
                                    setSelectedCategory('All');
                                    setSearchQuery('');
                                }}
                            >
                                Reset Filters
                            </Button>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {filteredArticles.map((article, index) => (
                                <Reveal key={article.id} delay={index * 0.08} className="flex">
                                    <article
                                        id={article.id}
                                        className="group flex flex-col w-full rounded-xl overflow-hidden bg-[var(--color-bg-elevated)] border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)]"
                                    >
                                        <button
                                            type="button"
                                            onClick={() => setActiveArticle(article)}
                                            className="block w-full text-left overflow-hidden aspect-[16/9] bg-[var(--color-bg-secondary)] cursor-pointer"
                                        >
                                            <img
                                                src={article.image}
                                                alt={article.imageAlt}
                                                loading="lazy"
                                                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                                            />
                                        </button>

                                        <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-5">
                                            <div className="space-y-3">
                                                <div className="flex flex-wrap items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.12em]">
                                                    <span className="text-[var(--color-text-eyebrow)]">
                                                        {article.category}
                                                    </span>
                                                    <span className="text-[var(--color-text-muted)]">&mdash;</span>
                                                    <span className="text-[var(--color-text-muted)]">
                                                        {article.date}
                                                    </span>
                                                    <span className="text-[var(--color-text-muted)]">&middot;</span>
                                                    <span className="text-[var(--color-text-muted)]">
                                                        {article.readTime}
                                                    </span>
                                                </div>

                                                <h2 className="font-heading text-xl sm:text-2xl font-bold text-[var(--color-text-primary)] leading-snug">
                                                    <button
                                                        type="button"
                                                        onClick={() => setActiveArticle(article)}
                                                        className="text-left hover:text-[var(--color-brand-primary)] transition-colors cursor-pointer"
                                                    >
                                                        {article.title}
                                                    </button>
                                                </h2>

                                                <p className="text-sm sm:text-[15px] text-[var(--color-text-secondary)] leading-relaxed">
                                                    {article.excerpt}
                                                </p>
                                            </div>

                                            <div>
                                                <button
                                                    type="button"
                                                    onClick={() => setActiveArticle(article)}
                                                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-text-eyebrow)] hover:opacity-80 transition-opacity cursor-pointer"
                                                >
                                                    <span>Read full story</span>
                                                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                                                </button>
                                            </div>
                                        </div>
                                    </article>
                                </Reveal>
                            ))}
                        </div>
                    )}
                </Container>
            </section>

            {/* 3. Upcoming Events (#events — matching s8.png blue visual theme) */}
            <section
                id="events"
                className="scroll-mt-28 py-16 sm:py-20 bg-[var(--color-brand-section-blue)] text-white"
            >
                <Container className="space-y-12">
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                        <SectionHeading
                            tone="light"
                            eyebrow="SAVE THE DATE"
                            title="Upcoming College Events"
                            description="Key gatherings, sporting festivals, parent forums, and admissions dates across the school year."
                        />
                        <Button to={ROUTES.GALLERY} variant="glass" size="md" withArrow>
                            Browse Event Photos
                        </Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {UPCOMING_EVENTS_LIST.map((event, index) => (
                            <Reveal key={event.id} delay={index * 0.08} className="flex">
                                <div className="flex-1 p-6 sm:p-7 rounded-signature bg-white/10 border border-white/15 backdrop-blur-xs flex gap-5 sm:gap-6 items-start">
                                    {/* Stacked Date Pill */}
                                    <div className="shrink-0 w-16 py-3 rounded-xl bg-[var(--color-brand-gold)] text-[#0A2540] text-center shadow-sm">
                                        <span className="block font-heading text-2xl font-extrabold leading-none">
                                            {event.day}
                                        </span>
                                        <span className="block text-[10px] font-bold uppercase tracking-widest mt-1">
                                            {event.month}
                                        </span>
                                    </div>

                                    {/* Event Details */}
                                    <div className="space-y-2">
                                        <p className="text-[11px] font-bold uppercase tracking-wider text-[var(--color-brand-sky)]">
                                            {event.fullDate}
                                        </p>
                                        <h3 className="font-heading text-lg sm:text-xl font-bold text-white">
                                            {event.title}
                                        </h3>
                                        <p className="text-xs sm:text-sm text-sky-100/85 leading-relaxed">
                                            {event.description}
                                        </p>
                                        <div className="pt-2 flex flex-wrap gap-x-5 gap-y-1.5 text-xs text-sky-200/90">
                                            <span className="inline-flex items-center gap-1.5">
                                                <Clock className="w-3.5 h-3.5 text-[var(--color-brand-gold)]" />
                                                {event.time}
                                            </span>
                                            <span className="inline-flex items-center gap-1.5">
                                                <MapPin className="w-3.5 h-3.5 text-[var(--color-brand-gold)]" />
                                                {event.venue}
                                            </span>
                                            <span className="inline-flex items-center gap-1.5">
                                                <Users className="w-3.5 h-3.5 text-[var(--color-brand-gold)]" />
                                                {event.audience}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </Container>
            </section>

            {/* 4. Academic Session Calendar Overview (#calendar) */}
            <section id="calendar" className="scroll-mt-28">
                <Container className="space-y-12">
                    <SectionHeading
                        align="center"
                        eyebrow="THREE-TERM STRUCTURE"
                        title="Academic Session Overview"
                        description="An overview of major academic, spiritual, and co-curricular milestones across our three secondary school terms."
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
                        {ACADEMIC_CALENDAR_TERMS.map((term, index) => (
                            <Reveal key={term.termName} delay={index * 0.08} className="flex">
                                <Card variant="subtle" className="flex-1 space-y-4">
                                    <div className="flex items-center justify-between border-b border-[var(--color-border-subtle)] pb-3">
                                        <h3 className="font-heading text-lg font-bold text-[var(--color-text-primary)]">
                                            {term.termName}
                                        </h3>
                                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--color-text-eyebrow)]">
                                            <Calendar className="w-3.5 h-3.5" />
                                            {term.period}
                                        </span>
                                    </div>

                                    <ul className="space-y-2.5">
                                        {term.highlights.map((item) => (
                                            <li
                                                key={item}
                                                className="text-sm text-[var(--color-text-secondary)] flex items-start gap-2.5 leading-relaxed"
                                            >
                                                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-gold)] mt-2 shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </Card>
                            </Reveal>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Full Story Reader Modal */}
            <AnimatePresence>
                {activeArticle && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
                        onClick={() => setActiveArticle(null)}
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="modal-article-title"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.96, y: 16 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.96, y: 16 }}
                            transition={{ duration: 0.22 }}
                            onClick={(e) => e.stopPropagation()}
                            className="w-full max-w-2xl rounded-2xl bg-[var(--color-bg-elevated)] border border-[var(--color-border-subtle)] shadow-2xl overflow-hidden my-auto"
                        >
                            <div className="relative aspect-[16/8.5] bg-[var(--color-bg-secondary)]">
                                <img
                                    src={activeArticle.image}
                                    alt={activeArticle.imageAlt}
                                    className="w-full h-full object-cover object-center"
                                />
                                <button
                                    type="button"
                                    onClick={() => setActiveArticle(null)}
                                    aria-label="Close story modal"
                                    className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-950/75 hover:bg-slate-950 text-white flex items-center justify-center transition-colors cursor-pointer"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            <div className="p-6 sm:p-8 space-y-5 max-h-[65vh] overflow-y-auto">
                                <div className="flex flex-wrap items-center gap-2.5 text-xs font-bold uppercase tracking-wider">
                                    <span className="text-[var(--color-text-eyebrow)]">
                                        {activeArticle.category}
                                    </span>
                                    <span className="text-[var(--color-text-muted)]">&mdash;</span>
                                    <span className="text-[var(--color-text-muted)]">
                                        {activeArticle.date}
                                    </span>
                                    <span className="text-[var(--color-text-muted)]">&middot;</span>
                                    <span className="text-[var(--color-text-muted)]">
                                        {activeArticle.readTime}
                                    </span>
                                </div>

                                <h2
                                    id="modal-article-title"
                                    className="font-heading text-2xl sm:text-3xl font-bold text-[var(--color-text-primary)] leading-snug"
                                >
                                    {activeArticle.title}
                                </h2>

                                <div className="space-y-4 text-sm sm:text-base text-[var(--color-text-secondary)] leading-[1.75]">
                                    {activeArticle.content.map((paragraph, idx) => (
                                        <p key={idx}>{paragraph}</p>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};