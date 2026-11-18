export type NewsCategory = 'All' | 'Academics' | 'School Life' | 'Announcement' | 'Islamic Ethos';

export interface NewsArticle {
    id: string;
    category: Exclude<NewsCategory, 'All'>;
    date: string;
    readTime: string;
    title: string;
    excerpt: string;
    content: string[];
    image: string;
    imageAlt: string;
    featured?: boolean;
}

export interface CollegeEvent {
    id: string;
    day: string;
    month: string;
    fullDate: string;
    title: string;
    time: string;
    venue: string;
    audience: string;
    description: string;
}

export interface AcademicTermSchedule {
    termName: string;
    period: string;
    highlights: string[];
}

export type GalleryCategory =
    | 'All'
    | 'Academics & Labs'
    | 'School Life & Clubs'
    | 'Islamic Ethos'
    | 'Sports & Campus';

export interface GalleryPhoto {
    id: string;
    title: string;
    category: Exclude<GalleryCategory, 'All'>;
    caption: string;
    image: string;
    imageAlt: string;
}