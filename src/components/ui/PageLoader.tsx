import React from 'react';

export const PageLoader: React.FC = () => {
    return (
        <div
            role="status"
            aria-live="polite"
            className="min-h-[55vh] flex flex-col items-center justify-center gap-3 px-4 py-16"
        >
            <div
                className="w-9 h-9 rounded-full border-3 border-[var(--color-border-strong)] border-t-[var(--color-brand-primary)] animate-spin"
                aria-hidden="true"
            />
            <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">
                Loading page...
            </span>
        </div>
    );
};