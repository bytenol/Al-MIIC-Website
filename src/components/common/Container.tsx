import React from 'react';
import { cn } from '../../utils/cn';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    as?: 'div' | 'section' | 'header' | 'footer' | 'nav';
    size?: 'default' | 'narrow' | 'wide';
}

export const Container: React.FC<ContainerProps> = ({
    as: Component = 'div',
    size = 'default',
    className,
    children,
    ...props
}) => {
    const sizeClasses = {
        narrow: 'max-w-5xl',
        default: 'max-w-7xl',
        wide: 'max-w-[1400px]',
    };

    return (
        <Component
            className={cn(
                'mx-auto w-full px-4 sm:px-6 lg:px-8',
                sizeClasses[size],
                className
            )}
            {...props}
        >
            {children}
        </Component>
    );
};