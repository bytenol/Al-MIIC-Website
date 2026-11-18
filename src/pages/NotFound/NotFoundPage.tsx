import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Compass } from 'lucide-react';
import { ROUTES } from '../../routes/paths';
import { SITE_CONFIG } from '../../config/site.config';

export const NotFoundPage: React.FC = () => {
    return (
        <section className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-md w-full text-center space-y-6 p-8 rounded-2xl bg-[var(--color-bg-secondary)] border border-[var(--color-border-subtle)]">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-[var(--color-brand-sky)]/20 text-[var(--color-brand-sky-dark)] flex items-center justify-center">
                    <Compass className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                    <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-brand-sky-dark)]">
                        Error 404
                    </p>
                    <h1 className="text-2xl sm:text-3xl font-bold text-[var(--color-text-primary)]">
                        Page Not Found
                    </h1>
                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                        The page you are looking for on the {SITE_CONFIG.shortName} website might have been moved,
                        renamed, or does not exist.
                    </p>
                </div>

                <div className="pt-2">
                    <Link
                        to={ROUTES.HOME}
                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm bg-[var(--color-brand-navy)] text-white hover:opacity-95 transition-opacity"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Return to Homepage
                    </Link>
                </div>
            </div>
        </section>
    );
};