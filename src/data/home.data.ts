import { ROUTES } from '../routes/paths';

import type {
    AcademicPathway,
    DifferencePillar,
    NewsArticlePreview,
    ParentTestimonial,
    SchoolMetric,
    UpcomingEventItem,
} from '../types/home.types';



export const HERO_DATA = {
  arabicMotto: 'رَبِّ زِدْنِي عِلْمًا • عِلْمٌ وَأَخْلَاقٌ وَرِسَالَةٌ',
  arabicTranslation: '“My Lord, increase me in knowledge” — Knowledge, Character & Purpose',
  eyebrow: 'LEARNING THAT SHAPES A LIFETIME',
  headlinePrefix: 'Where bright minds grow into',
  headlineHighlight: 'bold futures.',
  description:
    'A rigorous, caring Islamic international secondary school where every learner is known, challenged and inspired to lead with character.',
  primaryCta: {
    label: 'Begin an application',
    href: ROUTES.ADMISSIONS,
  },
  secondaryCta: {
    label: 'Discover Al-MIIC',
    href: ROUTES.ABOUT,
  },
  backgroundImage:
    './images/deleshittu.jpg',
  backgroundImages: [
    {
      src: './images/senior students with computer.jpg',
      alt: 'Students awarded by the Dele Shittu Foundation.',
    },
    {
      src: './images/deleshittu.jpg',
      alt: 'Students awarded by the Dele Shittu Foundation.',
    },
    {
      src: './images/interdebate1.jpg',
      alt: 'Senior secondary students getting awarded at inter school debate',
    },
    {
      src: './images/interdebate2.jpg',
      alt: 'Senior secondary students getting awarded at inter school debate',
    },
    {
      src: './images/junior student in tech1.jpg',
      alt: 'Students awarded by the Dele Shittu Foundation.',
    },  
    {
      src: './images/assembly.jpg',
      alt: 'Students at the assembly ground',
    },
  ],
} as const;


export const WELCOME_DATA = {
    eyebrow: 'WELCOME TO AL-MIIC',
    title: 'An education grounded in knowledge, character and purpose.',
    leadParagraph:
        'We believe excellent outcomes begin with a deep understanding of each child. Our classrooms balance strong Nigerian and international learning standards with authentic Islamic values, curiosity, creativity and care.',
    secondParagraph:
        'From Junior Secondary through Senior Secondary, learners are guided to think independently, communicate clearly and contribute meaningfully to their communities.',
    ctaLabel: 'Meet our learning community',
    ctaHref: ROUTES.ABOUT,
    badgeNumber: (new Date().getFullYear() - 2013).toString(),
    badgeText: 'years of purposeful education',
    imageUrl: './facilities/al_mawrid.jpeg',
    imageAlt: 'Al-MIIC Front Picture',
} as const;


export const DIFFERENCE_DATA = {
    eyebrow: 'THE AL-MIIC DIFFERENCE',
    title: 'More than excellent results.',
    description:
        'We create the conditions for students to become capable learners and considerate people.',
    pillars: [
        {
            number: '01',
            iconName: 'award',
            title: 'High expectations',
            description:
                'A rigorous curriculum and thoughtful assessment help each learner make meaningful progress.',
        },
        {
            number: '02',
            iconName: 'users',
            title: 'Teachers who know every child',
            description:
                'Qualified educators create supportive relationships and responsive learning experiences.',
        },
        {
            number: '03',
            iconName: 'microscope',
            title: 'Learning by doing',
            description:
                'Well-equipped spaces support practical science, technology, art and collaboration.',
        },
        {
            number: '04',
            iconName: 'sparkles',
            title: 'Character in action',
            description:
                'Leadership, service and Islamic moral reflection are woven into everyday school life.',
        },
    ] satisfies DifferencePillar[],
} as const;

export const PATHWAYS_DATA = {
    eyebrow: 'ONE SCHOOL, EVERY STAGE',
    title: 'A clear pathway from first discoveries to future ambitions.',
    stages: [
        {
            id: 'junior-secondary',
            ageRange: 'AGES up to 9 years',
            stageRange: 'JSS1 TO JSS3',
            title: 'Junior Secondary',
            description:
                'Broad academic exploration across sciences, humanities, Arabic, and technology to build strong study habits.',
            imageUrl: './facilities/computer_lab.jpg',
            imageAlt: 'Junior secondary students collaborating in uniform',
            href: `${ROUTES.ACADEMICS}#junior-secondary`,
            staggered: true,
        },
        {
            id: 'senior-secondary',
            ageRange: 'AGES up to 12 years',
            stageRange: 'SS1 TO SS3',
            title: 'Senior Secondary',
            description:
                'Focused preparation for WAEC, NECO, JAMB, and global university admissions with purposeful mentorship.',
            imageUrl: './facilities/chem_lab.jpg',
            imageAlt: 'Senior secondary students studying in the college computer lab',
            href: `${ROUTES.ACADEMICS}#senior-secondary`,
            staggered: false,
        },
    ] satisfies AcademicPathway[],
} as const;

export const METRICS_DATA: SchoolMetric[] = [
    { value: `${(new Date().getFullYear() - 2013).toString()}+`, label: 'Years of educational care' },
    { value: '2120', label: 'Students across the school' },
    { value: '74', label: 'Qualified educators' },
    { value: '3', label: 'Clubs and enrichment options' },
];

export const FACILITIES_DATA = {
    eyebrow: 'SPACES THAT INVITE DISCOVERY',
    title: 'Designed for curious minds and active days.',
    description:
        'Our campus supports focused study, practical exploration, play and community. Every space is intentionally designed around how young people learn best.',
    features: [
        'Integrated science laboratories',
        'Digital learning and media suite',
        'Library and quiet reading areas',
        'Sports field and multipurpose court',
    ],
    ctaLabel: 'Explore our facilities',
    ctaHref: `${ROUTES.SCHOOL_LIFE}#facilities`,
    primaryImage: {
        url: './images/Student_holding_academic_folder.jpg',
        alt: 'Students holding academic folder',
    },
    secondaryImage: {
        url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=700&q=80',
        alt: 'Students studying inside the school library',
    },
} as const;

export const NEWS_DATA = {
    eyebrow: 'SCHOOL UPDATES',
    title: 'News & stories',
    viewAllLabel: 'View all stories',
    viewAllHref: ROUTES.NEWS_EVENTS,
    articles: [
        {
            id: 'science-fair-innovators',
            category: 'ACADEMICS',
            date: '18 OCTOBER 2025',
            title: 'Young innovators take centre stage at our science fair',
            excerpt:
                'Students transformed everyday questions into thoughtful experiments and working prototypes.',
            imageUrl:
                'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1100&q=80',
            imageAlt: 'Students gathered in classroom during science presentation',
            href: `${ROUTES.NEWS_EVENTS}/young-innovators-science-fair`,
            featured: true,
        },
        {
            id: 'reading-week-stories',
            category: 'SCHOOL LIFE',
            date: '9 OCTOBER 2025',
            title: 'Reading Week brings stories to life across the school',
            excerpt:
                'Book circles, author sessions and a colourful character parade inspired our community.',
            imageUrl:
                'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80',
            imageAlt: 'Student reading during Reading Week',
            href: `${ROUTES.NEWS_EVENTS}/reading-week-stories`,
            featured: false,
        },
        {
            id: 'waec-preparation-clinic',
            category: 'ANNOUNCEMENT',
            date: '2 OCTOBER 2025',
            title: 'First Term WAEC preparation clinic',
            excerpt:
                'Structured revision workshops and past-question mastery sessions for SS3 candidates.',
            imageUrl:
                'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80',
            imageAlt: 'Senior students preparing for WAEC examinations',
            href: `${ROUTES.NEWS_EVENTS}/first-term-waec-preparation-clinic`,
            featured: false,
        },
    ] satisfies NewsArticlePreview[],
} as const;


export const EVENTS_TESTIMONIAL_DATA = {
    eyebrow: 'SAVE THE DATE',
    title: 'Upcoming events',
    events: [
        {
            id: 'parent-teacher-forum',
            day: '08',
            month: 'NOV',
            title: 'Parent–Teacher Forum',
            time: '10:00 AM',
            venue: 'Multipurpose Hall',
            href: `${ROUTES.NEWS_EVENTS}#events`,
        },
        {
            id: 'inter-house-sports',
            day: '16',
            month: 'NOV',
            title: 'Inter-house Sports Day',
            time: '9:00 AM',
            venue: 'School Sports Field',
            href: `${ROUTES.NEWS_EVENTS}#events`,
        },
        {
            id: 'end-of-term-showcase',
            day: '04',
            month: 'DEC',
            title: 'End-of-Term Showcase',
            time: '2:00 PM',
            venue: 'Al-MIIC Auditorium',
            href: `${ROUTES.NEWS_EVENTS}#events`,
        },
    ] satisfies UpcomingEventItem[],


    testimonials: [
        {
            id: 'parent-primary-5',
            quote:
                'Al-MIIC sees every child as an individual. Our daughter has become more confident, articulate and excited about learning.',
            authorRole: 'Parent of a Primary 5 learner',
        },
        {
            id: 'parent-jss-2',
            quote:
                'The balance of strong academic discipline and genuine Islamic moral guidance gives our family complete peace of mind.',
            authorRole: 'Parent of a JSS 2 learner',
        },
        {
            id: 'parent-ss-3',
            quote:
                'The teachers go above and beyond to mentor students for both national examinations and responsible leadership.',
            authorRole: 'Parent of an SS 3 student',
        },
    ] satisfies ParentTestimonial[],
} as const;