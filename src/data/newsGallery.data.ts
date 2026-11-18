import type {
    AcademicTermSchedule,
    CollegeEvent,
    GalleryPhoto,
    NewsArticle,
} from '../types/newsGallery.types';

export const NEWS_HERO = {
    eyebrow: 'NEWS, EVENTS & CALENDAR',
    title: 'Stories, milestones and upcoming dates from Al-MIIC.',
    subtitle:
        'Stay connected with academic achievements, student activities, Islamic programmes, and important termly schedules across Junior and Senior Secondary.',
    bannerImage:
        'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1920&q=80',
    bannerAlt: 'Students showcasing science projects at Al-Mawrid Islamic International College',
} as const;

export const NEWS_ARTICLES: NewsArticle[] = [
    {
        id: 'science-fair-2026',
        category: 'Academics',
        date: '18 OCTOBER 2026',
        readTime: '3 min read',
        title: 'Young innovators take centre stage at our science fair',
        excerpt:
            'Students transformed everyday questions into thoughtful experiments and working prototypes.',
        content: [
            'Junior and Senior Secondary scholars at Al-Mawrid Islamic International College demonstrated remarkable ingenuity during this term’s Annual Science & Innovation Exhibition held in the Multipurpose Hall.',
            'Working in supervised laboratory teams, JSS and SSS students presented practical prototypes ranging from solar-powered water purification units and automated irrigation sensors to chemistry titration demonstrations and renewable energy models.',
            'Visiting parents and STEM faculty commended the learners not only for their technical precision, but also for their articulate explanations and ethical reflections on how science serves humanity.',
        ],
        image:
            'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80',
        imageAlt: 'Students presenting science fair prototypes in the laboratory',
        featured: true,
    },
    {
        id: 'reading-week-2026',
        category: 'School Life',
        date: '9 OCTOBER 2026',
        readTime: '2 min read',
        title: 'Reading Week brings stories to life across the college',
        excerpt:
            'Book circles, author sessions and a colourful literary showcase inspired our community.',
        content: [
            'Organized jointly by the Department of Humanities & Languages and the Al-MIIC Press Club, this session’s Reading & Literary Week transformed our library and assembly hall into vibrant hubs of storytelling and critical discussion.',
            'Students across JSS 1–SS 3 participated in timed book reviews, Arabic and English poetry recitations, and inter-class comprehension challenges designed to cultivate lifelong reading habits.',
            'Outstanding readers in each class arm were awarded curated book prizes during Friday assembly.',
        ],
        image:
            'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=80',
        imageAlt: 'Student immersed in reading during Reading Week',
    },
    {
        id: 'waec-prep-clinic',
        category: 'Announcement',
        date: '2 OCTOBER 2026',
        readTime: '2 min read',
        title: 'First Term WAEC preparation clinic launches for SS3',
        excerpt:
            'Structured revision workshops and mentorship sessions prepare senior candidates for excellence.',
        content: [
            'The Office of the Dean of Academic Affairs has commenced the First Term Intensive Examination & Practical Clinic for all SS 3 candidates preparing for upcoming WAEC, NECO, and UTME examinations.',
            'The clinic pairs afternoon past-question workshops in Mathematics, English, and core department subjects with dedicated practical sessions in our Physics, Chemistry, Biology, and ICT laboratories.',
            'Parents of SS 3 students will receive bi-weekly diagnostic progress reports to support home study and targeted academic mentoring.',
        ],
        image:
            'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=900&q=80',
        imageAlt: 'Textbooks and study guides prepared for SS3 revision workshops',
    },
    {
        id: 'quran-musabaqah-2026',
        category: 'Islamic Ethos',
        date: '24 SEPTEMBER 2026',
        readTime: '3 min read',
        title: 'Inter-House Qur’an Recitation & Tajweed Musabaqah',
        excerpt:
            'Students showcased accuracy in Makharij, melodious recitation, and memorization across JSS and SSS categories.',
        content: [
            'Our Qur’anic & Arabic Studies Department hosted the preliminary rounds of the Inter-House Qur’an Musabaqah, bringing together participants across Junior and Senior Secondary levels.',
            'Judges evaluated candidates on Tajweed rules, fluency, breath control, and comprehension of selected verses, highlighting the steady progress achieved during daily morning Hifz circles.',
        ],
        image:
            'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=900&q=80',
        imageAlt: 'Students participating in college assembly programme',
    },
];

export const UPCOMING_EVENTS_LIST: CollegeEvent[] = [
    {
        id: 'parent-teacher-forum',
        day: '08',
        month: 'NOV',
        fullDate: 'Saturday, 8 November 2026',
        title: 'Parent–Teacher Forum (PTF)',
        time: '10:00 AM – 12:30 PM',
        venue: 'Multipurpose Hall',
        audience: 'All JSS 1–SS 3 Parents & Guardians',
        description:
            'Mid-term academic briefing, pastoral feedback sessions with form tutors, and collaborative planning for student welfare.',
    },
    {
        id: 'inter-house-sports',
        day: '16',
        month: 'NOV',
        fullDate: 'Monday, 16 November 2026',
        title: 'Inter-House Sports Day',
        time: '9:00 AM – 3:00 PM',
        venue: 'College Sports Field',
        audience: 'Students, Staff & Invited Families',
        description:
            'Track sprints, relays, football finals, and house march-pasts celebrating teamwork, sportsmanship, and physical vitality.',
    },
    {
        id: 'end-of-term-showcase',
        day: '04',
        month: 'DEC',
        fullDate: 'Friday, 4 December 2026',
        title: 'End-of-Term Academic & Cultural Showcase',
        time: '2:00 PM – 4:30 PM',
        venue: 'Al-MIIC Auditorium',
        audience: 'College Community & Guests',
        description:
            'Debate finals, Qur’anic recitations, STEM project exhibitions, and presentation of First Term merit awards.',
    },
    {
        id: 'entrance-screening-batch-1',
        day: '13',
        month: 'FEB',
        fullDate: 'Saturday, 13 February 2027',
        title: '2026/2027 Entrance Screening (Batch I)',
        time: '9:00 AM – 1:00 PM',
        venue: 'Examination Complex',
        audience: 'Prospective JSS 1 & Transfer Candidates',
        description:
            'Written diagnostic screening and oral/Qur’anic interaction for incoming 2026/2027 session applicants.',
    },
];

export const ACADEMIC_CALENDAR_TERMS: AcademicTermSchedule[] = [
    {
        termName: 'First Term (Michaelmas)',
        period: 'September – December',
        highlights: [
            'Resumption & Orientation for New JSS 1 & Transfer Students',
            'Mid-Term Continuous Assessment & Parent–Teacher Forum',
            'Annual Science Fair & Inter-House Sports Festival',
            'First Term Examinations & Vacation',
        ],
    },
    {
        termName: 'Second Term (Lent)',
        period: 'January – April',
        highlights: [
            'Resumption & SS 3 Mock Examination Series',
            '2026/2027 Admissions Screening Exercises',
            'Annual Qur’an Musabaqah & Arabic Language Day',
            'Second Term Examinations & Holiday',
        ],
    },
    {
        termName: 'Third Term (Trinity)',
        period: 'April – July',
        highlights: [
            'Resumption & External Examinations (BECE, WAEC & NECO)',
            'Leadership Prefectship Elections & Career Guidance Summit',
            'Annual Speech, Prize-Giving & Valedictory Ceremony',
            'End-of-Session Promotional Examinations',
        ],
    },
];

export const GALLERY_HERO = {
    eyebrow: 'CAMPUS MEDIA GALLERY',
    title: 'Moments of discovery, discipline and community.',
    subtitle:
        'Explore photographs capturing everyday classroom inquiry, laboratory experiments, spiritual life, clubs, and sporting events at Al-MIIC.',
    bannerImage:
        'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1920&q=80',
    bannerAlt: 'Al-MIIC campus grounds and student learning spaces',
} as const;

export const GALLERY_PHOTOS: GalleryPhoto[] = [
    {
        id: 'gal-1',
        title: 'Interactive Classroom Inquiry',
        category: 'Academics & Labs',
        caption: 'Students actively participating in a structured secondary discussion session.',
        image:
            'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1100&q=80',
        imageAlt: 'Students engaged in classroom discussion',
    },
    {
        id: 'gal-2',
        title: 'Practical Science & Chemistry Lab',
        category: 'Academics & Labs',
        caption: 'Senior Secondary science students conducting hands-on laboratory experiments.',
        image:
            'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1100&q=80',
        imageAlt: 'Students performing science laboratory experiments',
    },
    {
        id: 'gal-3',
        title: 'Guided Mentorship & Small-Group Learning',
        category: 'Islamic Ethos',
        caption: 'Educators working closely with learners to build confidence and moral clarity.',
        image:
            'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1100&q=80',
        imageAlt: 'Teacher mentoring students in class',
    },
    {
        id: 'gal-4',
        title: 'Quiet Reading & Library Research',
        category: 'Academics & Labs',
        caption: 'Students utilizing the college library resources for independent study and exam prep.',
        image:
            'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1100&q=80',
        imageAlt: 'Students reading books in the college library',
    },
    {
        id: 'gal-5',
        title: 'Junior Secondary Collaborative Session',
        category: 'School Life & Clubs',
        caption: 'JSS students collaborating on peer problem-solving and communication exercises.',
        image:
            'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1100&q=80',
        imageAlt: 'Junior secondary students working together in class',
    },
    {
        id: 'gal-6',
        title: 'Student Assembly & Leadership Participation',
        category: 'School Life & Clubs',
        caption: 'Enthusiastic student engagement during weekly assembly and debate forum.',
        image:
            'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1100&q=80',
        imageAlt: 'Students raising hands enthusiastically in assembly',
    },
    {
        id: 'gal-7',
        title: 'Senior Secondary Study Syndicate',
        category: 'Academics & Labs',
        caption: 'SS 2 and SS 3 scholars reviewing coursework ahead of terminal assessments.',
        image:
            'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1100&q=80',
        imageAlt: 'Senior students studying together',
    },
    {
        id: 'gal-8',
        title: 'Campus Grounds & Environment',
        category: 'Sports & Campus',
        caption: 'A serene, secure learning environment designed for focused study and recreation.',
        image:
            'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1100&q=80',
        imageAlt: 'College campus exterior view',
    },
];