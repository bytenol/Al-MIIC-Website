import React from 'react';
import { Link, type LinkProps } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '../../utils/cn';

export type ButtonVariant =
    | 'primary'
    | 'gold'
    | 'navy'
    | 'sky'
    | 'glass'
    | 'outline'
    | 'link';

export type ButtonSize = 'sm' | 'md' | 'lg';

interface BaseButtonProps {
    variant?: ButtonVariant;
    size?: ButtonSize;
    withArrow?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    className?: string;
    children: React.ReactNode;
}

type ButtonAsButton = BaseButtonProps &
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseButtonProps> & {
        href?: undefined;
        to?: undefined;
    };

type ButtonAsRouterLink = BaseButtonProps &
    Omit<LinkProps, keyof BaseButtonProps> & {
        to: string;
        href?: undefined;
    };

type ButtonAsAnchor = BaseButtonProps &
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseButtonProps> & {
        href: string;
        to?: undefined;
    };

export type ButtonProps = ButtonAsButton | ButtonAsRouterLink | ButtonAsAnchor;

export const Button: React.FC<ButtonProps> = (props) => {
    const {
        variant = 'primary',
        size = 'md',
        withArrow = false,
        leftIcon,
        rightIcon,
        className,
        children,
        ...rest
    } = props;

    const variantClasses: Record<ButtonVariant, string> = {
        primary:
            'bg-[#0B6AA2] hover:bg-[#085584] text-white shadow-sm border border-transparent',
        sky:
            'bg-[var(--color-brand-sky)] hover:bg-[#6ec2f7] text-slate-950 font-semibold shadow-sm border border-transparent',
        gold:
            'bg-[var(--color-brand-gold)] hover:bg-[var(--color-brand-gold-hover)] text-slate-950 font-semibold shadow-sm border border-transparent',
        navy:
            'bg-[var(--color-brand-navy)] hover:bg-[#103459] text-white shadow-sm border border-transparent dark:bg-[var(--color-brand-sky)] dark:text-slate-950',
        glass:
            'bg-white/10 hover:bg-white/20 text-white border border-white/35 backdrop-blur-sm',
        outline:
            'bg-transparent hover:bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)] border border-[var(--color-border-strong)]',
        link:
            'bg-transparent text-[var(--color-text-eyebrow)] hover:opacity-80 p-0 font-semibold inline-flex items-center gap-2',
    };

    const sizeClasses: Record<ButtonSize, string> = {
        sm: 'px-4 py-2 text-xs rounded-lg',
        md: 'px-5 py-2.5 text-sm rounded-lg',
        lg: 'px-6 py-3.5 text-sm sm:text-base rounded-lg',
    };

    const baseClasses = cn(
        'inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-sky)] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer group',
        variant !== 'link' && sizeClasses[size],
        variantClasses[variant],
        className
    );

    const content = (
        <>
            {leftIcon && <span className="shrink-0">{leftIcon}</span>}
            <span>{children}</span>
            {rightIcon ? (
                <span className="shrink-0">{rightIcon}</span>
            ) : withArrow ? (
                <ArrowRight className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
            ) : null}
        </>
    );

    if ('to' in rest && rest.to !== undefined) {
        const { to, ...linkRest } = rest as ButtonAsRouterLink;
        return (
            <Link to={to} className={baseClasses} {...linkRest}>
                {content}
            </Link>
        );
    }

    if ('href' in rest && rest.href !== undefined) {
        const { href, ...anchorRest } = rest as ButtonAsAnchor;
        return (
            <a href={href} className={baseClasses} {...anchorRest}>
                {content}
            </a>
        );
    }

    const buttonRest = rest as ButtonAsButton;
    return (
        <button type="button" className={baseClasses} {...buttonRest}>
            {content}
        </button>
    );
};