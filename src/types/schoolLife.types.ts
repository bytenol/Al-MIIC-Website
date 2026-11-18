export type ClubCategory = 'All' | 'STEM & Innovation' | 'Arts & Leadership' | 'Faith & Service';

export interface StudentClub {
    id: string;
    name: string;
    category: Exclude<ClubCategory, 'All'>;
    schedule: string;
    description: string;
    highlights: string;
}

export interface SpiritualPillar {
    number: string;
    title: string;
    description: string;
}

export interface SportProgramme {
    id: string;
    title: string;
    description: string;
    seasonOrVenue: string;
}

export interface CampusFacility {
    id: string;
    title: string;
    description: string;
    features: string[];
    image: string;
    imageAlt: string;
}