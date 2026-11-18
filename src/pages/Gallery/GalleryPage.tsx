import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { Container } from '../../components/common/Container';
import { SectionHeading } from '../../components/common/SectionHeading';
import { Reveal } from '../../components/common/Reveal';
import { GALLERY_HERO, GALLERY_PHOTOS } from '../../data/newsGallery.data';
import { cn } from '../../utils/cn';
import type { GalleryCategory } from '../../types/newsGallery.types';

const GALLERY_CATEGORIES: GalleryCategory[] = [
    'All',
    'Academics & Labs',
    'School Life & Clubs',
    'Islamic Ethos',
    'Sports & Campus',
];

export const GalleryPage: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>('All');
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    const filteredPhotos =
        selectedCategory === 'All'
            ? GALLERY_PHOTOS
            : GALLERY_PHOTOS.filter((photo) => photo.category === selectedCategory);

    const activePhoto =
        lightboxIndex !== null && filteredPhotos[lightboxIndex]
            ? filteredPhotos[lightboxIndex]
            : null;

    const handleNext = () => {
        if (lightboxIndex === null) return;
        setLightboxIndex((prev) =>
            prev === null ? null : (prev + 1) % filteredPhotos.length
        );
    };

    const handlePrev = () => {
        if (lightboxIndex === null) return;
        setLightboxIndex((prev) =>
            prev === null
                ? null
                : (prev - 1 + filteredPhotos.length) % filteredPhotos.length
        );
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (lightboxIndex === null) return;
            if (e.key === 'Escape') setLightboxIndex(null);
            if (e.key === 'ArrowRight') handleNext();
            if (e.key === 'ArrowLeft') handlePrev();
        };

        if (lightboxIndex !== null) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleKeyDown);
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleKeyDown);
        };
    });

    return (
        <div className="space-y-20 pb-20">
            {/* 1. Gallery Hero */}
            <section
                aria-label="Campus Gallery Hero"
                className="relative py-20 sm:py-24 lg:py-28 bg-[#06182C] text-white overflow-hidden"
            >
                <img
                    src={GALLERY_HERO.bannerImage}
                    alt={GALLERY_HERO.bannerAlt}
                    className="absolute inset-0 w-full h-full object-cover object-center opacity-25"
                />
                <div
                    className="absolute inset-0 bg-gradient-to-r from-[#06182C] via-[#06182C]/92 to-[#06182C]/75"
                    aria-hidden="true"
                />
                <Container className="relative z-10 max-w-4xl text-center space-y-6">
                    <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.18em] text-[var(--color-brand-sky)]">
                        {GALLERY_HERO.eyebrow}
                    </p>
                    <h1 className="font-heading text-3xl sm:text-5xl lg:text-[3.5rem] font-bold leading-[1.12] tracking-tight text-white">
                        {GALLERY_HERO.title}
                    </h1>
                    <p className="text-base sm:text-lg text-slate-200/90 leading-relaxed max-w-2xl mx-auto">
                        {GALLERY_HERO.subtitle}
                    </p>
                </Container>
            </section>

            {/* 2. Filterable Campus Photo Grid */}
            <section aria-label="Campus Photo Collection">
                <Container className="space-y-10">
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                        <SectionHeading
                            eyebrow="VISUAL ARCHIVE"
                            title="Life at Al-MIIC in Pictures"
                            description="Click any photograph to view full-size details."
                        />

                        {/* Category Filter Tabs */}
                        <div
                            className="flex flex-wrap items-center gap-2"
                            role="tablist"
                            aria-label="Filter gallery photos"
                        >
                            {GALLERY_CATEGORIES.map((category) => {
                                const active = selectedCategory === category;
                                return (
                                    <button
                                        key={category}
                                        type="button"
                                        role="tab"
                                        aria-selected={active}
                                        onClick={() => {
                                            setSelectedCategory(category);
                                            setLightboxIndex(null);
                                        }}
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
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {filteredPhotos.map((photo, idx) => (
                            <Reveal key={photo.id} delay={(idx % 4) * 0.06}>
                                <button
                                    type="button"
                                    onClick={() => setLightboxIndex(idx)}
                                    className="group relative w-full text-left overflow-hidden rounded-signature bg-[var(--color-bg-secondary)] border border-[var(--color-border-subtle)] shadow-xs aspect-[4/3.6] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-sky)]"
                                >
                                    <img
                                        src={photo.image}
                                        alt={photo.imageAlt}
                                        loading="lazy"
                                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                                    />

                                    {/* Subtle Gradient Caption Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#06182C]/90 via-[#06182C]/25 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                                    <div className="absolute top-3.5 left-3.5 w-8 h-8 rounded-full bg-white/15 backdrop-blur-xs text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Expand className="w-4 h-4" />
                                    </div>

                                    <div className="absolute bottom-0 left-0 right-0 p-4 space-y-1 text-white">
                                        <span className="block text-[10px] font-bold uppercase tracking-widest text-[var(--color-brand-sky)]">
                                            {photo.category}
                                        </span>
                                        <h2 className="font-heading text-sm sm:text-base font-bold leading-snug">
                                            {photo.title}
                                        </h2>
                                    </div>
                                </button>
                            </Reveal>
                        ))}
                    </motion.div>
                </Container>
            </section>

            {/* 3. Interactive Lightbox Modal */}
            <AnimatePresence>
                {activePhoto && lightboxIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
                        onClick={() => setLightboxIndex(null)}
                        role="dialog"
                        aria-modal="true"
                        aria-label={activePhoto.title}
                    >
                        <div
                            className="relative max-w-4xl w-full space-y-4"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Top Controls */}
                            <div className="flex items-center justify-between text-white text-xs">
                                <span className="font-bold uppercase tracking-widest text-[var(--color-brand-sky)]">
                                    {activePhoto.category} &middot; {lightboxIndex + 1} /{' '}
                                    {filteredPhotos.length}
                                </span>
                                <button
                                    type="button"
                                    onClick={() => setLightboxIndex(null)}
                                    aria-label="Close lightbox"
                                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Image Container with Prev / Next Buttons */}
                            <div className="relative rounded-2xl overflow-hidden bg-slate-900 aspect-[16/10] shadow-2xl">
                                <img
                                    src={activePhoto.image}
                                    alt={activePhoto.imageAlt}
                                    className="w-full h-full object-cover object-center"
                                />

                                {filteredPhotos.length > 1 && (
                                    <>
                                        <button
                                            type="button"
                                            onClick={handlePrev}
                                            aria-label="Previous photograph"
                                            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-950/70 hover:bg-slate-950 text-white flex items-center justify-center transition-colors cursor-pointer"
                                        >
                                            <ChevronLeft className="w-5 h-5" />
                                        </button>
                                        <button
                                            type="button"
                                            onClick={handleNext}
                                            aria-label="Next photograph"
                                            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-950/70 hover:bg-slate-950 text-white flex items-center justify-center transition-colors cursor-pointer"
                                        >
                                            <ChevronRight className="w-5 h-5" />
                                        </button>
                                    </>
                                )}
                            </div>

                            {/* Caption */}
                            <div className="text-white space-y-1">
                                <h3 className="font-heading text-lg sm:text-xl font-bold">
                                    {activePhoto.title}
                                </h3>
                                <p className="text-sm text-slate-300">{activePhoto.caption}</p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};