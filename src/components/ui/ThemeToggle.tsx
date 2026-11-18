import React from 'react';
import { Moon, Sun, Monitor } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import { cn } from '../../utils/cn';
import type { ThemeMode } from '../../types/theme.types';

export interface ThemeToggleProps {
    className?: string;
    showSystem?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
    className,
    showSystem = false,
}) => {
    const { theme, resolvedTheme, setTheme, toggleTheme } = useTheme();

    if (!showSystem) {
        return (
            <button
                type="button"
                onClick={toggleTheme}
                className={cn(
                    'p-2 rounded-lg text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-secondary)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-sky)] cursor-pointer',
                    className
                )}
                aria-label={`Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} theme`}
                title={`Current theme: ${theme} (${resolvedTheme}). Click to toggle.`}
            >
                {resolvedTheme === 'dark' ? (
                    <Sun className="w-4 h-4 text-[var(--color-brand-gold)]" />
                ) : (
                    <Moon className="w-4 h-4" />
                )}
            </button>
        );
    }

    const modes: Array<{ value: ThemeMode; label: string; icon: React.ReactNode }> = [
        { value: 'light', label: 'Light', icon: <Sun className="w-3.5 h-3.5" /> },
        { value: 'dark', label: 'Dark', icon: <Moon className="w-3.5 h-3.5" /> },
        { value: 'system', label: 'Auto', icon: <Monitor className="w-3.5 h-3.5" /> },
    ];

    return (
        <div
            className={cn(
                'inline-flex items-center p-1 rounded-lg bg-[var(--color-bg-secondary)] border border-[var(--color-border-subtle)]',
                className
            )}
            role="group"
            aria-label="Select theme preference"
        >
            {modes.map((mode) => {
                const active = theme === mode.value;
                return (
                    <button
                        key={mode.value}
                        type="button"
                        onClick={() => setTheme(mode.value)}
                        className={cn(
                            'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium transition-colors cursor-pointer',
                            active
                                ? 'bg-[var(--color-brand-sky)] text-slate-950 font-semibold shadow-xs'
                                : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
                        )}
                        aria-pressed={active}
                    >
                        {mode.icon}
                        <span>{mode.label}</span>
                    </button>
                );
            })}
        </div>
    );
};