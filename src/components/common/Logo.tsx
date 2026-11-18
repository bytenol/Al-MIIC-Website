import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';
import { SITE_CONFIG } from '../../config/site.config';
import { cn } from '../../utils/cn';

export interface LogoProps {
    variant?: 'default' | 'footer';
    className?: string;
}

export const Logo = ({ variant = 'default', className }: LogoProps) => {
    const isFooter = variant === 'footer';

    return (
        <Link
            to={ROUTES.HOME}
            className={cn(
                'inline-flex items-center gap-3.5 group focus-visible:outline-none',
                className
            )}
            aria-label={`${SITE_CONFIG.name} Home`}
        >
            {/* Emblem Badge with bottom gold/sky accent curve matching reference s1-s10 */}
            <div className="relative shrink-0">
                <img src="./logo/school.jpg" 
                    className={cn(
                        'w-11 h-11 rounded-xl flex items-center justify-center font-heading font-extrabold text-sm tracking-tight transition-transform duration-200 group-hover:scale-[1.03]',
                        isFooter
                            ? 'bg-[#0B6AA2] text-white'
                            : 'bg-[#0B6AA2] text-white shadow-sm'
                    )}
                />
                
                {/* Signature bottom gold accent bar under the badge */}
                <span
                    className="absolute -bottom-1 left-1 right-1 h-1.5 rounded-b-lg bg-[var(--color-brand-gold)]"
                    aria-hidden="true"
                />
            </div>

            {/* Wordmark & Motto */}
            <div className="flex flex-col">
                <span
                    className={cn(
                        'font-heading font-bold text-[17px] sm:text-[18px] leading-tight tracking-tight transition-colors',
                        isFooter
                            ? 'text-white'
                            : 'text-[var(--color-text-primary)]'
                    )}
                >
                    Al-Mawrid Islamic International College (AL-MIIC)
                </span>
                <span
                    className={cn(
                        'text-[9.5px] sm:text-[10px] font-semibold uppercase tracking-[0.16em] mt-0.5',
                        isFooter
                            ? 'text-slate-400'
                            : 'text-[var(--color-text-muted)]'
                    )}
                >
                    {SITE_CONFIG.tagline}
                </span>
            </div>
        </Link>
    );
};