import React from 'react';
import { AlertTriangle, Home, RotateCcw } from 'lucide-react';
import { SITE_CONFIG } from '../../config/site.config';

interface ErrorBoundaryProps {
    children: React.ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

export class ErrorBoundary extends React.Component<
    ErrorBoundaryProps,
    ErrorBoundaryState
> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(): ErrorBoundaryState {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        console.error('Al-MIIC Application Error:', error, errorInfo);
    }

    handleReload = (): void => {
        window.location.reload();
    };

    handleGoHome = (): void => {
        window.location.href = '/';
    };

    render(): React.ReactNode {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex items-center justify-center px-4 py-16 bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]">
                    <div className="max-w-md w-full rounded-2xl bg-[var(--color-bg-secondary)] border border-[var(--color-border-subtle)] p-8 text-center space-y-6 shadow-md">
                        <div className="w-12 h-12 mx-auto rounded-xl bg-amber-500/15 text-[var(--color-brand-gold)] flex items-center justify-center">
                            <AlertTriangle className="w-6 h-6" />
                        </div>

                        <div className="space-y-2">
                            <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-text-eyebrow)]">
                                {SITE_CONFIG.shortName}
                            </p>
                            <h1 className="font-heading text-2xl font-bold">
                                Something went wrong
                            </h1>
                            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                                An unexpected display error occurred while loading this page. Please refresh or
                                return to the homepage.
                            </p>
                        </div>

                        <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
                            <button
                                type="button"
                                onClick={this.handleReload}
                                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold bg-[var(--color-brand-primary)] text-white hover:opacity-95 cursor-pointer"
                            >
                                <RotateCcw className="w-4 h-4" />
                                <span>Reload Page</span>
                            </button>
                            <button
                                type="button"
                                onClick={this.handleGoHome}
                                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold border border-[var(--color-border-strong)] text-[var(--color-text-primary)] hover:bg-[var(--color-bg-elevated)] cursor-pointer"
                            >
                                <Home className="w-4 h-4" />
                                <span>Homepage</span>
                            </button>
                        </div>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}