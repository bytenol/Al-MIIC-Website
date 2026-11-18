import type {
    AdmissionFaq,
    ApplicationStep,
    EntryRequirementGroup,
    FeeComponent,
} from '../types/admissions.types';

export const ADMISSIONS_HERO = {
    eyebrow: 'ADMISSIONS · 2026/2027 SESSION',
    title: 'Begin a purposeful secondary journey at Al-MIIC.',
    subtitle:
        'We welcome curious, motivated learners into Junior Secondary (JSS 1–3) and Senior Secondary (SS 1–2) who are eager to grow in academic excellence and Islamic character.',
    bannerImage:
        'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1920&q=80',
    bannerAlt: 'Students learning in a bright classroom at Al-Mawrid Islamic International College',
} as const;

export const ADMISSIONS_OVERVIEW = {
    eyebrow: 'ADMISSIONS OVERVIEW',
    title: 'An open, supportive process designed around every family.',
    leadParagraph:
        'Choosing the right secondary school is one of the most consequential decisions a family makes. At Al-Mawrid Islamic International College, our admissions team works closely with parents and guardians from your very first campus visit through enrolment.',
    bodyParagraph:
        'Admission is open to boys and girls into Junior Secondary 1 (JSS 1) as well as qualified transfer students into JSS 2, SS 1, and SS 2, based on academic readiness, character references, and entrance screening.',
    keyDates: [
        { label: 'Application Status', value: 'Open for 2026/2027' },
        { label: 'Entry Classes', value: 'JSS 1, JSS 2, SS 1 & SS 2' },
        { label: 'Screening Mode', value: 'Written, Oral & Qur’anic' },
        { label: 'Study Options', value: 'Day & Boarding Available' },
    ],
} as const;

export const ENTRY_REQUIREMENTS: EntryRequirementGroup[] = [
    {
        id: 'jss1-intake',
        stageLabel: 'FRESH SECONDARY ENTRY',
        title: 'Junior Secondary 1 (JSS 1)',
        eligibility:
            'Applicants must be at least 10 years old by September of the admission year and have completed Primary 6.',
        documents: [
            'Completed Al-MIIC Application Form',
            'Copy of Birth Certificate or Sworn Declaration of Age',
            'Primary 5 & Primary 6 Terminal Academic Report Sheets',
            'Primary School Leaving Testimonial / Transfer Certificate',
            'Four (4) recent coloured passport photographs',
            'Immunization and basic medical fitness record',
        ],
        assessmentNote:
            'Candidates sit for a diagnostic screening in English Language, Mathematics, Quantitative/Verbal Aptitude, and a friendly introductory Qur’anic reading assessment.',
    },
    {
        id: 'transfer-intake',
        stageLabel: 'TRANSFER ADMISSIONS',
        title: 'JSS 2, SS 1 & SS 2 Transfers',
        eligibility:
            'Open to students transferring from accredited secondary schools with strong academic standing and good conduct records (SS 1 entrants must present BECE results).',
        documents: [
            'Completed Al-MIIC Transfer Application Form',
            'Official Transfer Certificate & Attestation of Good Conduct from previous school',
            'Last three (3) terms’ academic transcripts / report sheets',
            'BECE Statement of Results (mandatory for SS 1 applicants)',
            'Copy of Birth Certificate and four (4) passport photographs',
            'Medical clearance form',
        ],
        assessmentNote:
            'Transfer applicants complete placement assessments in English, Mathematics, core department subjects (for Senior Secondary), and an oral interview with the Academic Dean.',
    },
];

export const APPLICATION_STEPS: ApplicationStep[] = [
    {
        stepNumber: '01',
        title: 'Submit Application Form',
        description:
            'Obtain the admission form from the College Admissions Office or submit an online expression of interest below to schedule your screening.',
        timeline: 'Step 1 · Online or On-Campus',
    },
    {
        stepNumber: '02',
        title: 'Entrance Screening',
        description:
            'Candidates complete age-appropriate written assessments in English, Mathematics, and General Aptitude on scheduled examination dates.',
        timeline: 'Step 2 · Diagnostic Test',
    },
    {
        stepNumber: '03',
        title: 'Oral & Qur’anic Interview',
        description:
            'A welcoming interaction with the student and parents to understand learning needs, Qur’anic recitation level, and pastoral goals.',
        timeline: 'Step 3 · Family Interaction',
    },
    {
        stepNumber: '04',
        title: 'Offer & Enrolment',
        description:
            'Successful candidates receive a formal Offer of Admission. Acceptance, fee clearance, and uniform fitting complete registration.',
        timeline: 'Step 4 · Confirmation',
    },
];

export const FEE_COMPONENTS: FeeComponent[] = [
    {
        category: 'Tuition & Academic Development',
        coverage:
            'Covers classroom instruction, science laboratory consumables, ICT suite access, library usage, and internal continuous assessments.',
        schedule: 'Payable termly (3 terms per session)',
    },
    {
        category: 'Books, Uniforms & Learning Kit',
        coverage:
            'Includes the official LightSkyBlue & White Al-MIIC school uniforms, sportswear, Jumu’ah attire, and curated textbooks.',
        schedule: 'At initial enrolment / annual renewal',
    },
    {
        category: 'Boarding & Pastoral Care (Optional)',
        coverage:
            'Full-board accommodation, nutritious halal meals, evening prep supervision, laundry, and on-campus healthcare.',
        schedule: 'Payable termly for boarding students',
    },
    {
        category: 'External Examination Fees',
        coverage:
            'Applicable strictly to JSS 3 (BECE) and SS 3 (WAEC/NECO) examination registration cohorts.',
        schedule: 'Billed in examination year',
    },
];

export const ADMISSION_FAQS: AdmissionFaq[] = [
    {
        id: 'faq-1',
        question: 'Does my child need prior Qur’anic memorization before applying to Al-MIIC?',
        answer:
            'No prior memorization quota is required for admission. During our oral assessment, we simply evaluate each learner’s current recitation level so we can place them in the appropriate Tajweed and Hifz support group.',
    },
    {
        id: 'faq-2',
        question: 'Are both Day and Boarding options available for Junior and Senior Secondary?',
        answer:
            'Yes. Families may choose between Day attendance and full Boarding accommodation in our supervised boys’ and girls’ hostels, subject to bed-space availability.',
    },
    {
        id: 'faq-3',
        question: 'Do you accept transfer students into SS 3?',
        answer:
            'In line with national examination council regulations and our commitment to thorough WAEC/NECO preparation, external transfers are admitted up to SS 2 First Term. Direct admission into SS 3 is generally not permitted.',
    },
    {
        id: 'faq-4',
        question: 'Are merit or Hifz scholarships available?',
        answer:
            'Al-MIIC offers partial merit and Qur’anic memorization (Hifz) scholarships to outstanding candidates who excel in the entrance examination and demonstrate exemplary moral conduct. Contact the Admissions Office for current scholarship criteria.',
    },
    {
        id: 'faq-5',
        question: 'How can we book a physical tour of the campus before applying?',
        answer:
            'Parents and prospective students are warmly invited to visit the campus Monday through Friday between 9:00 AM and 3:00 PM. You can book a guided tour via our Contact page or by calling the Admissions Office directly.',
    },
];