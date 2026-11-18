export const DESIGN_TOKENS = {
    colors: {
        lightSkyBlue: '#87CEFA',
        primaryBlue: '#0B6AA2',
        deepNavy: '#0A2540',
        warmGold: '#F2B82E',
        white: '#FFFFFF',
        softSkySurface: '#F2F8FD',
    },
    layout: {
        maxWidth: '1280px', // max-w-7xl
        topBarHeight: '36px',
        navbarHeight: '80px',
    },
    motion: {
        spring: { type: 'spring', stiffness: 300, damping: 28 } as const,
        fadeUp: {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, margin: '-60px' },
            transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
        } as const,
    },
} as const;