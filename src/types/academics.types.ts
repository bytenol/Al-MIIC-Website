export interface SecondaryStage {
    id: string;
    anchorId: string;
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    coreSubjects: string[];
    outcomes: string[];
    image: string;
    imageAlt: string;
}

export interface SeniorTrack {
    id: 'science' | 'humanities' | 'commercial';
    label: string;
    tagline: string;
    description: string;
    compulsorySubjects: string[];
    electiveSubjects: string[];
    careerPathways: string[];
}

export interface IslamicStudyPillar {
    number: string;
    title: string;
    arabicTitle: string;
    description: string;
}

export interface AssessmentItem {
    title: string;
    percentage: string;
    description: string;
}