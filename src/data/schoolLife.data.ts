import type {
    CampusFacility,
    SpiritualPillar,
    SportProgramme,
    StudentClub,
} from '../types/schoolLife.types';

export const SCHOOL_LIFE_HERO = {
    eyebrow: 'SCHOOL LIFE AT AL-MIIC',
    title: 'A vibrant community where character, faith and curiosity thrive.',
    subtitle:
        'Life at Al-Mawrid Islamic International College extends far beyond the classroom—nurturing confident public speakers, ethical leaders, creative thinkers, and disciplined athletes across JSS 1–SS 3.',
    bannerImage:
        'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1920&q=80',
    bannerAlt: 'Students participating enthusiastically in school activities at Al-MIIC',
} as const;

export const DAILY_RHYTHM_HIGHLIGHTS = [
    {
        time: '07:45 AM',
        title: 'Morning Assembly & Adhkar',
        detail: 'Qur’anic recitation, moral reflections, and daily goal setting.',
    },
    {
        time: '08:15 AM',
        title: 'Interactive Academic Blocks',
        detail: 'Core secondary lessons, practical lab sessions, and Arabic/Islamic studies.',
    },
    {
        time: '01:30 PM',
        title: 'Congregational Dhuhr & Lunch',
        detail: 'Guided Salah in the college mosque followed by nutritious halal dining.',
    },
    {
        time: '03:15 PM',
        title: 'Clubs, Sports & Prep',
        detail: 'Co-curricular societies, athletics, and supervised evening study.',
    },
] as const;

export const SPIRITUAL_LIFE_DATA = {
    eyebrow: 'ISLAMIC ETHOS & TARBIYAH',
    title: 'Faith woven naturally into every school day.',
    description:
        'We nurture an uplifting Islamic atmosphere where young Muslims learn to love their faith, observe daily worship with understanding, and embody prophetic manners (Adab) toward peers, teachers, and society.',
    pillars: [
        {
            number: '01',
            title: 'Congregational Salah & Mosque Life',
            description:
                'Daily Dhuhr and Asr prayers are observed in congregation, with senior students rotating in calling the Adhan and leading pre-prayer reminders.',
        },
        {
            number: '02',
            title: 'Jumu’ah Leadership & Khutbah Training',
            description:
                'Under the guidance of Islamic Studies scholars, senior students prepare and deliver structured Friday sermons and moral talks.',
        },
        {
            number: '03',
            title: 'Ramadan & Special Islamic Programmes',
            description:
                'Annual Qur’an recitation competitions, Ramadan Tafsir circles, charity drives, and Eid celebrations unite students and families.',
        },
        {
            number: '04',
            title: 'Pastoral Care & Prefectship',
            description:
                'Dedicated form tutors, hostel patrons/matrons, and an elected Student Representative Council foster accountability and brotherhood/sisterhood.',
        },
    ] as SpiritualPillar[],
};

export const STUDENT_CLUBS: StudentClub[] = [
    {
        id: 'jets-robotics',
        name: 'JETS, Coding & Robotics Club',
        category: 'STEM & Innovation',
        schedule: 'Wednesdays · 3:15 PM',
        description:
            'Students design electronics prototypes, build web and Python projects, and prepare experiments for inter-school science fairs.',
        highlights: 'Annual Science Fair & Olympiad Prep',
    },
    {
        id: 'literary-debate',
        name: 'Literary, Debating & Public Speaking Society',
        category: 'Arts & Leadership',
        schedule: 'Thursdays · 3:15 PM',
        description:
            'Builds persuasive argumentation, parliamentary debate skills, creative writing, and confident stage presence.',
        highlights: 'Inter-School Debate & Essay Tournaments',
    },
    {
        id: 'quran-arabic-society',
        name: 'Qur’an, Tajweed & Arabic Circle',
        category: 'Faith & Service',
        schedule: 'Tuesdays & Fridays · 3:15 PM',
        description:
            'Dedicated enrichment for advanced Hifz revision, Arabic calligraphy, nasheed vocal training, and classical rhetoric.',
        highlights: 'Annual Musabaqah & Arabic Day',
    },
    {
        id: 'press-media',
        name: 'Al-MIIC Press & Digital Media Club',
        category: 'Arts & Leadership',
        schedule: 'Wednesdays · 3:15 PM',
        description:
            'Student journalists, photographers, and editors produce the termly college newsletter, assembly bulletins, and event coverage.',
        highlights: 'Termly Campus Chronicle Publication',
    },
    {
        id: 'young-entrepreneurs',
        name: 'Young Entrepreneurs & Financial Literacy Club',
        category: 'STEM & Innovation',
        schedule: 'Thursdays · 3:15 PM',
        description:
            'Introduces ethical business planning, teamwork, budgeting, and problem-solving through student-led mini-enterprises.',
        highlights: 'Annual Enterprise Showcase',
    },
    {
        id: 'humanitarian-service',
        name: 'Community Service & Environmental Stewardship',
        category: 'Faith & Service',
        schedule: 'Fridays · 3:15 PM',
        description:
            'Translates Islamic charity (Sadaqah) and environmental responsibility into campus greening and local outreach initiatives.',
        highlights: 'Clean Campus & Charity Outreach Drives',
    },
];

export const SPORTS_PROGRAMMES: SportProgramme[] = [
    {
        id: 'football-athletics',
        title: 'Football & Track Athletics',
        description:
            'Structured coaching in five-a-side and eleven-a-side football, sprints, relay races, and endurance conditioning on our sports field.',
        seasonOrVenue: 'Main College Sports Field',
    },
    {
        id: 'court-sports',
        title: 'Basketball, Volleyball & Table Tennis',
        description:
            'Agility, teamwork, and sportsmanship developed through supervised afternoon training sessions and friendly inter-class leagues.',
        seasonOrVenue: 'Multipurpose Sports Court',
    },
    {
        id: 'inter-house-sports',
        title: 'Annual Inter-House Sports Festival',
        description:
            'A flagship college event uniting students, staff, and parents in spirited track-and-field competitions, march-pasts, and house camaraderie.',
        seasonOrVenue: 'First / Second Term Highlight',
    },
];

export const CAMPUS_FACILITIES: CampusFacility[] = [
    {
        id: 'science-labs',
        title: 'Integrated Science Laboratories',
        description:
            'Dedicated Physics, Chemistry, and Biology laboratories outfitted with modern apparatus, safety stations, and reagent stores for hands-on WAEC/NECO practicals.',
        features: [
            'Separate Physics, Chemistry & Biology labs',
            'Fume cupboards, safety showers & first-aid stations',
            'Small-group practical benches for JSS & SSS',
        ],
        image:
            'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=900&q=80',
        imageAlt: 'Students conducting experiments in the science laboratory',
    },
    {
        id: 'ict-library',
        title: 'Digital Learning Suite & College Library',
        description:
            'A networked computer laboratory and serene reading library stocked with reference textbooks, Islamic literature, periodicals, and e-learning resources.',
        features: [
            'High-speed networked workstations for CBT & coding',
            'Curated print & digital reference collections',
            'Quiet study carrels for senior exam candidates',
        ],
        image:
            'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=900&q=80',
        imageAlt: 'Bookshelves and quiet study tables inside the Al-MIIC library',
    },
    {
        id: 'mosque-boarding',
        title: 'College Mosque & Supervised Boarding Houses',
        description:
            'A spacious central masjid for daily congregational prayers alongside secure, well-ventilated boys’ and girls’ hostels supervised by resident house parents.',
        features: [
            'Dedicated ablution (Wudu) facilities & prayer halls',
            'Separate, secure boys’ and girls’ boarding wings',
            'Sick bay, halal dining hall & evening prep supervision',
        ],
        image:
            'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=900&q=80',
        imageAlt: 'Clean and welcoming campus environment at Al-MIIC',
    },
];