import type {
    CoreValue,
    DepartmentHead,
    HistoryMilestone,
    LeadershipMember,
} from '../types/about.types';

export const ABOUT_HERO = {
    eyebrow: 'ABOUT AL-MAWRID',
    title: 'Nurturing intellect, faith and character for a changing world.',
    subtitle:
        'Discover the story, values, leadership and educational philosophy that make Al-Mawrid Islamic International College (Al-MIIC) a distinguished institution of learning.',
    bannerImage:
        'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1920&q=80',
    bannerAlt: 'Al-MIIC campus grounds and students',
} as const;


export const OVERVIEW_DATA = {
    eyebrow: 'INSTITUTIONAL OVERVIEW',
    heading: 'A sanctuary of academic distinction and moral uprightness.',
    paragraph1:
        'Founded with a profound commitment to educational excellence, Al-Mawrid Islamic International College (Al-MIIC) provides a holistic learning environment where students from Nursery through Senior Secondary cultivate intellectual rigor alongside authentic Islamic values.',
    paragraph2:
        'Our curriculum seamlessly integrates national and international educational standards with comprehensive Qur’anic and Arabic studies, ensuring every learner develops both the competence to excel in modern sciences and technology and the moral compass to lead with integrity.',
    stats: [
        { value: (new Date().getFullYear() - 2013).toString() + "+", label: 'Years of Excellence' },
        { value: '100%', label: 'Moral & Academic Focus' },
        { value: '1:12', label: 'Educator-to-Student Ratio' },
    ],
} as const;

export const HISTORY_MILESTONES: HistoryMilestone[] = [
    {
        year: '2013',
        title: 'Foundation of Al-Mawrid',
        description:
            'Established as a modest Islamic nursery and primary school with a vision to bridge modern academic excellence with foundational Islamic moral training.',
    },
    {
        year: '2014',
        title: 'Expansion to Junior Secondary',
        description:
            'In response to community demand and academic success, the college expanded its campus facilities to introduce Junior Secondary classes (JSS 1–3) with specialized science laboratories.',
    },
    {
        year: '2014',
        title: 'Senior Secondary & WAEC Accreditation',
        description:
            'Full accreditation granted for Senior Secondary programs (SS 1–3), empowering students with advanced STEM, humanities, and Islamic jurisprudence tracks.',
    },
    {
        year: 'Present',
        title: 'A Modern International College',
        description:
            'Today, Al-MIIC stands as a premier educational landmark equipped with digital learning suites, robust co-curricular programs, and a thriving community of purposeful scholars.',
    },
];

export const VISION_MISSION_DATA = {
    vision: {
        eyebrow: 'OUR VISION',
        title: 'To be a leading citadel of holistic education.',
        description:
            'To cultivate a generation of knowledgeable, righteous, and globally competitive leaders grounded in Islamic principles and equipped to solve contemporary challenges.',
    },
    mission: {
        eyebrow: 'OUR MISSION',
        title: 'Excellence in teaching, character and service.',
        description:
            'To deliver an inspiring, balanced curriculum delivered by dedicated educators within a secure, nurturing, and spiritually enriching campus environment.',
    },
};

export const CORE_VALUES: CoreValue[] = [
    {
        id: 'faith',
        number: '01',
        title: 'Faith & Taqwa',
        description:
            'Anchoring all daily endeavors in mindfulness of Allah, ethical consciousness, and adherence to authentic Islamic teachings.',
        iconName: 'star',
    },
    {
        id: 'excellence',
        number: '02',
        title: 'Academic Rigor',
        description:
            'Pursuing the highest standards of critical inquiry, intellectual curiosity, and lifelong scholarship across all disciplines.',
        iconName: 'book',
    },
    {
        id: 'integrity',
        number: '03',
        title: 'Honesty & Integrity',
        description:
            'Demonstrating truthfulness, trustworthiness, and accountability in personal conduct and interpersonal relationships.',
        iconName: 'shield',
    },
    {
        id: 'respect',
        number: '04',
        title: 'Respect & Empathy',
        description:
            'Valuing the dignity of every individual, fostering mutual harmony, and serving our community with compassion.',
        iconName: 'heart',
    },
];

export const LEADERSHIP_TEAM: LeadershipMember[] = [
    {
        id: 'proprietor',
        name: 'Hon. Justice, Idris Haroon',
        role: 'Rtd. Grand Kadi, Proprietor',
        bio: 'With decades of experience in educational leadership and Islamic scholarship, Justice Idris Haroon guides the strategic academic direction of Al-MIIC.',
        image:'./images/proprietor.jpg',
        imageAlt: 'Hon. Justice Idris Haroon, Proprietor',
    },
    {
        id: 'dean-academics',
        name: 'Mrs. R.O Nurudeen',
        role: 'Principal',
        bio: 'Overseeing curriculum design, teacher professional development, and examination standards across Nursery, Primary, and Secondary sections.',
        image:'',
        imageAlt: 'Mrs. R.O Nurudeen, Principal',
    },
    {
        id: 'dean-student-affairs',
        name: 'Ustadh Ridwan Mustapha',
        role: 'Chief Imam & Islamic Guidance',
        bio: 'Dedicated to pastoral mentorship, spiritual development, student leadership councils, and character cultivation.',
        image:'',
        imageAlt: 'Ustadh Ridwan Mustapha, Chief Imam & Islamic Guidance',
    },
];

export const DEPARTMENT_HEADS: DepartmentHead[] = [
    {
        id: 'stem',
        name: 'Mr. Samuel Adebayo',
        subjectArea: 'Head of Mathematics & Sciences',
        qualification: 'M.Sc. Physics, University of Ilorin',
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    },
    {
        id: 'humanities',
        name: 'Mrs. Aminat Quadri',
        subjectArea: 'Head of Humanities & Languages',
        qualification: 'B.A. English & Literary Studies',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
    },
    {
        id: 'islamic-studies',
        name: 'Sheikh Abdulrahman Salisu',
        subjectArea: 'Head of Qur’anic & Arabic Studies',
        qualification: 'B.A. Islamic Shariah & Arabic',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    },
    {
        id: 'ict',
        name: 'Mr. David Chidi',
        subjectArea: 'Head of ICT & Computer Education',
        qualification: 'B.Eng. Computer Engineering',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    },
];