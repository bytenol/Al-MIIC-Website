export interface DifferencePillar {
    number: string;
    iconName: 'award' | 'users' | 'microscope' | 'sparkles';
    title: string;
    description: string;
}

export interface AcademicPathway {
    id: string;
    ageRange: string;
    stageRange: string;
    title: string;
    description: string;
    imageUrl: string;
    imageAlt: string;
    href: string;
    staggered?: boolean;
}

export interface SchoolMetric {
    value: string;
    label: string;
}

export interface NewsArticlePreview {
    id: string;
    category: string;
    date: string;
    title: string;
    excerpt: string;
    imageUrl: string;
    imageAlt: string;
    href: string;
    featured?: boolean;
}

export interface UpcomingEventItem {
    id: string;
    day: string;
    month: string;
    title: string;
    time: string;
    venue: string;
    href: string;
}

export interface ParentTestimonial {
    id: string;
    quote: string;
    authorRole: string;
}