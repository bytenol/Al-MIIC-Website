export const SITE_CONFIG = {
    name: 'Al-Mawrid Islamic International College',
    shortName: 'Al-MIIC',
    tagline: 'Knowledge. Character. Purpose.',
    admissionsBannerText: 'Admissions for 2026/27 academic session are now open',
    contact: {
        phone: '+234 800 000 0000',
        admissionsPhone: '+234 800 000 0001',
        email: 'info@almiic.edu.ng',
        admissionsEmail: 'admissions@almiic.edu.ng',
        address: 'Al-Mawrid Campus, Nigeria',
        officeHours: [
            { days: 'Monday – Thursday', hours: '8:00 AM – 4:00 PM' },
            { days: 'Friday', hours: '8:00 AM – 1:00 PM (Jumu’ah Break)' },
            { days: 'Saturday (Admissions)', hours: '9:00 AM – 1:00 PM (By Appointment)' },
        ],
        // Replace coordinates/query with Al-MIIC's exact verified campus coordinates
        mapEmbedUrl:
            'https://www.openstreetmap.org/export/embed.html?bbox=4.5100%2C8.4500%2C4.6100%2C8.5300&layer=mapnik&marker=8.4900%2C4.5600',
        mapDirectionsUrl: 'https://www.google.com/maps/search/?api=1&query=Al-Mawrid+Islamic+International+College',
    },
    links: {
        portal: '#portal',
        applyNow: '/admissions',
    },
} as const;