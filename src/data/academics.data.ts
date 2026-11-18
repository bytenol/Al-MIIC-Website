import type {
    AssessmentItem,
    IslamicStudyPillar,
    SecondaryStage,
    SeniorTrack,
} from '../types/academics.types';

export const ACADEMICS_HERO = {
    eyebrow: 'ACADEMICS AT AL-MIIC',
    title: 'Rigorous secondary scholarship rooted in faith and inquiry.',
    subtitle:
        'From Junior Secondary foundations to specialized Senior Secondary tracks, Al-MIIC equips young scholars with intellectual mastery, practical laboratory skills, and deep Islamic literacy.',
    bannerImage:
        'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1920&q=80',
    bannerAlt: 'Secondary school students collaborating over textbooks in the library',
} as const;

export const ACADEMICS_OVERVIEW = {
    eyebrow: 'ACADEMIC OVERVIEW',
    title: 'A balanced secondary curriculum built for modern excellence.',
    leadParagraph:
        'At Al-Mawrid Islamic International College, secondary education bridges the Nigerian National Curriculum (NERDC) with international best practices in science, digital literacy, and critical communication.',
    bodyParagraph:
        'Every student follows a structured weekly timetable where secular academic subjects and Islamic & Qur’anic studies reinforce one another—cultivating disciplined thinkers prepared for top universities and purposeful leadership.',
    highlights: [
        { label: 'Class Levels', value: 'JSS 1 – SS 3' },
        { label: 'Examinations', value: 'BECE · WAEC · NECO' },
        { label: 'Weekly Labs', value: 'Physics, Chemistry, Biology & ICT' },
        { label: 'Islamic Track', value: 'Qur’an, Tajweed & Arabic' },
    ],
} as const;

export const SECONDARY_STAGES: SecondaryStage[] = [
    {
        id: 'junior-secondary',
        anchorId: 'junior-secondary',
        badge: 'AGES 11–14 · JSS 1 TO JSS 3',
        title: 'Junior Secondary School',
        subtitle: 'Broad intellectual discovery, analytical habits, and moral grounding.',
        description:
            'Our Junior Secondary programme transitions learners from foundational knowledge into structured analytical inquiry. Students explore core sciences, mathematics, languages, social sciences, digital technology, and foundational Islamic studies while preparing thoroughly for the Basic Education Certificate Examination (BECE).',
        coreSubjects: [
            'Mathematics & Quantitative Reasoning',
            'English Language & Literature-in-English',
            'Basic Science & Integrated Technology',
            'Information & Communication Technology (ICT)',
            'Social Studies, Civic & Security Education',
            'Arabic Language & Islamic Religious Studies',
            'Business Studies & Agricultural Science',
            'French / Nigerian Languages',
        ],
        outcomes: [
            'Strong numeracy, scientific observation, and structured essay writing',
            'Hands-on familiarity with laboratory safety and digital productivity tools',
            'Confident Qur’anic recitation with Tajweed and foundational Arabic comprehension',
        ],
        image:
            'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1000&q=80',
        imageAlt: 'Junior secondary students participating in an interactive classroom lesson',
    },
    {
        id: 'senior-secondary',
        anchorId: 'senior-secondary',
        badge: 'AGES 14–17 · SS 1 TO SS 3',
        title: 'Senior Secondary School',
        subtitle: 'Focused specialization, examination mastery, and university readiness.',
        description:
            'In Senior Secondary, students select an academic pathway tailored to their strengths and career aspirations—Science & Technology, Humanities & Arts, or Business & Commercial Studies—supported by dedicated practical laboratories, mentorship clinics, and structured WAEC, NECO, and UTME preparation.',
        coreSubjects: [
            'General Mathematics & Further Mathematics',
            'English Language & Civic Education',
            'Islamic Studies & Qur’anic Sciences',
            'Data Processing & Digital Literacy',
            'Track-Specific Core & Elective Subjects',
        ],
        outcomes: [
            'Distinction-level readiness for WAEC, NECO, and UTME examinations',
            'Independent laboratory experimentation and research project execution',
            'University admission counselling, leadership portfolios, and ethical maturity',
        ],
        image:
            'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1000&q=80',
        imageAlt: 'Senior secondary students conducting practical laboratory experiments',
    },
];

export const SENIOR_TRACKS: SeniorTrack[] = [
    {
        id: 'science',
        label: 'Science & Technology',
        tagline: 'For aspiring engineers, medical scientists, technologists, and researchers.',
        description:
            'Combines rigorous theoretical instruction with weekly practical sessions in our dedicated Physics, Chemistry, Biology, and ICT laboratories.',
        compulsorySubjects: [
            'English Language',
            'General Mathematics',
            'Civic Education',
            'Islamic Studies',
            'Physics',
            'Chemistry',
            'Biology',
        ],
        electiveSubjects: [
            'Further Mathematics',
            'Computer Science / Data Processing',
            'Agricultural Science',
            'Technical Drawing',
            'Geography',
        ],
        careerPathways: [
            'Medicine, Pharmacy & Health Sciences',
            'Civil, Electrical & Mechanical Engineering',
            'Computer Science & Software Engineering',
            'Pure & Applied Sciences',
        ],
    },
    {
        id: 'humanities',
        label: 'Humanities & Arts',
        tagline: 'For future legal scholars, diplomats, educators, writers, and policy leaders.',
        description:
            'Develops critical reading, persuasive writing, historical perspective, and deep proficiency in Arabic and Islamic jurisprudence.',
        compulsorySubjects: [
            'English Language',
            'General Mathematics',
            'Civic Education',
            'Islamic Studies',
            'Literature-in-English',
            'Government',
        ],
        electiveSubjects: [
            'Arabic Language',
            'History',
            'Economics',
            'Geography',
            'Data Processing',
        ],
        careerPathways: [
            'Law & Shariah Studies',
            'International Relations & Diplomacy',
            'Mass Communication & Journalism',
            'Education & Public Administration',
        ],
    },
    {
        id: 'commercial',
        label: 'Business & Commercial',
        tagline: 'For ethical entrepreneurs, chartered accountants, economists, and finance leaders.',
        description:
            'Builds quantitative fluency, financial literacy, organizational leadership, and an understanding of ethical business principles.',
        compulsorySubjects: [
            'English Language',
            'General Mathematics',
            'Civic Education',
            'Islamic Studies',
            'Financial Accounting',
            'Economics',
            'Commerce',
        ],
        electiveSubjects: [
            'Government',
            'Data Processing',
            'Marketing',
            'Agricultural Science',
            'Further Mathematics',
        ],
        careerPathways: [
            'Accounting & Auditing',
            'Banking, Finance & Islamic Economics',
            'Business Administration & Entrepreneurship',
            'Actuarial Science & Management',
        ],
    },
];

export const ISLAMIC_STUDIES_PILLARS: IslamicStudyPillar[] = [
    {
        number: '01',
        title: 'Qur’an Memorization & Tajweed',
        arabicTitle: 'القرآن الكريم والتجويد',
        description:
            'Structured daily Hifz and recitation circles ensuring accurate pronunciation (Makharij), fluency, and reverence for the Book of Allah.',
    },
    {
        number: '02',
        title: 'Arabic Language & Comprehension',
        arabicTitle: 'اللغة العربية',
        description:
            'Progressive instruction in Arabic reading, grammar (Nahw & Sarf), vocabulary, and conversation so learners engage directly with primary texts.',
    },
    {
        number: '03',
        title: 'Fiqh, Aqeedah & Seerah',
        arabicTitle: 'الفقه والعقيدة والسيرة',
        description:
            'Practical understanding of acts of worship (Ibadah), sound creed, prophetic biography, and ethical conduct in everyday life.',
    },
    {
        number: '04',
        title: 'Adab & Spiritual Tarbiyah',
        arabicTitle: 'الآداب والتربية',
        description:
            'Congregational Dhuhr prayers, weekly assembly reflections, and mentorship that nurture humility, respect for elders, and self-discipline.',
    },
];

export const ASSESSMENT_MODEL: AssessmentItem[] = [
    {
        title: 'Continuous Assessment (CA)',
        percentage: '40%',
        description:
            'Bi-weekly quizzes, structured assignments, class participation, and practical laboratory reports tracked throughout each term.',
    },
    {
        title: 'Termly Examinations',
        percentage: '60%',
        description:
            'Standardized end-of-term written, oral (Qur’an/Arabic), and practical assessments benchmarked against WAEC/NECO standards.',
    },
    {
        title: 'Academic Advising & Clinics',
        percentage: '1-on-1',
        description:
            'Targeted remedial clinics, peer study groups, and termly parent-teacher progress reviews to ensure no student falls behind.',
    },
];