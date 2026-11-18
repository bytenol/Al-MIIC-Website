import React from 'react';
import { cn } from '../../utils/cn';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: 'elevated' | 'subtle' | 'outlined' | 'inverse';
    radius?: 'default' | 'signature' | 'signature-lg';
    padding?: 'none' | 'sm' | 'md' | 'lg';
    hoverLift?: boolean;
}

export const Card: React.FC<CardProps> = ({
    variant = 'elevated',
    radius = 'default',
    padding = 'md',
    hoverLift = false,
    className,
    children,
    ...props
}) => {
    const variantClasses = {
        elevated:
            'bg-[var(--color-bg-elevated)] border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)]',
        subtle:
            'bg-[var(--color-bg-secondary)] border border-[var(--color-border-subtle)]',
        outlined:
            'bg-transparent border border-[var(--color-border-strong)]',
        inverse:
            'bg-[var(--color-brand-navy)] text-white border border-sky-800/40',
    };

    const radiusClasses = {
        default: 'rounded-xl',
        signature: 'rounded-signature',
        'signature-lg': 'rounded-signature-lg',
    };

    const paddingClasses = {
        none: 'p-0',
        sm: 'p-4 sm:p-5',
        md: 'p-6 sm:p-8',
        lg: 'p-8 sm:p-10 lg:p-12',
    };

    return (
        <div
            className={cn(
                'overflow-hidden transition-all duration-300',
                variantClasses[variant],
                radiusClasses[radius],
                paddingClasses[padding],
                hoverLift && 'hover:-translate-y-1 hover:shadow-lg',
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
};