import React from 'react';
import { cn } from '../../utils/cn';

export interface SectionHeadingProps {
    eyebrow?: string;
    title: React.ReactNode;
    description?: React.ReactNode;
    align?: 'left' | 'center' | 'split';
    tone?: 'default' | 'light';
    action?: React.ReactNode;
    className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
    eyebrow,
    title,
    description,
    align = 'left',
    tone = 'default',
    action,
    className,
}) => {
    const eyebrowColor =
        tone === 'light'
            ? 'text-[var(--color-brand-sky)]'
            : 'text-[var(--color-text-eyebrow)]';

    const titleColor =
        tone === 'light'
            ? 'text-white'
            : 'text-[var(--color-text-primary)]';

    const descColor =
        tone === 'light'
            ? 'text-sky-100/90'
            : 'text-[var(--color-text-secondary)]';

    if (align === 'split') {
        return (
            <div
                className={cn(
                    'flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-12',
                    className
                )}
            >
                <div className="max-w-2xl space-y-3">
                    {eyebrow && (
                        <p
                            className={cn(
                                'text-xs font-bold uppercase tracking-[0.15em]',
                                eyebrowColor
                            )}
                        >
                            {eyebrow}
                        </p>
                    )}
                    <h2
                        className={cn(
                            'text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-[1.12] tracking-tight',
                            titleColor
                        )}
                    >
                        {title}
                    </h2>
                </div>

                {(description || action) && (
                    <div className="lg:max-w-md space-y-4">
                        {description && (
                            <p className={cn('text-base sm:text-[17px] leading-relaxed', descColor)}>
                                {description}
                            </p>
                        )}
                        {action && <div>{action}</div>}
                    </div>
                )}
            </div>
        );
    }

    return (
        <div
            className={cn(
                'space-y-3.5',
                align === 'center' ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl',
                className
            )}
        >
            {eyebrow && (
                <p
                    className={cn(
                        'text-xs font-bold uppercase tracking-[0.15em]',
                        eyebrowColor
                    )}
                >
                    {eyebrow}
                </p>
            )}
            <h2
                className={cn(
                    'text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-[1.12] tracking-tight',
                    titleColor
                )}
            >
                {title}
            </h2>
            {description && (
                <p className={cn('text-base sm:text-[17px] leading-relaxed pt-1', descColor)}>
                    {description}
                </p>
            )}
            {action && <div className="pt-2">{action}</div>}
        </div>
    );
};