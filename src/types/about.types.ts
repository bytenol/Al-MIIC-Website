export interface HistoryMilestone {
    year: string;
    title: string;
    description: string;
}

export interface CoreValue {
    id: string;
    number: string;
    title: string;
    description: string;
    iconName: 'book' | 'shield' | 'star' | 'heart' | 'compass';
}

export interface LeadershipMember {
    id: string;
    name: string;
    role: string;
    bio: string;
    image: string;
    imageAlt: string;
}

export interface DepartmentHead {
    id: string;
    name: string;
    subjectArea: string;
    qualification: string;
    image: string;
}