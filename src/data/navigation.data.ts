import { ROUTES } from '../routes/paths';
import type { NavItem } from '../types/navigation.types';

export const MAIN_NAVIGATION: NavItem[] = [
    {
        label: 'Home',
        href: ROUTES.HOME,
    },
    {
        label: 'About Us',
        href: ROUTES.ABOUT,
        children: [
            { label: 'Overview', href: `${ROUTES.ABOUT}#overview` },
            { label: 'Our History', href: `${ROUTES.ABOUT}#history` },
            { label: 'Vision and Mission', href: `${ROUTES.ABOUT}#vision-mission` },
            { label: 'Core Values', href: `${ROUTES.ABOUT}#core-values` },
            { label: 'Management and Leadership', href: `${ROUTES.ABOUT}#leadership` },
            { label: 'Staff and Teachers', href: `${ROUTES.ABOUT}#staff` },
        ],
    },
    {
        label: 'Academics',
        href: ROUTES.ACADEMICS,
        children: [
            { label: 'Academic Overview', href: `${ROUTES.ACADEMICS}#overview` },
            { label: 'Nursery & Primary', href: `${ROUTES.ACADEMICS}#nursery-primary` },
            { label: 'Junior Secondary (JSS)', href: `${ROUTES.ACADEMICS}#junior-secondary` },
            { label: 'Senior Secondary (SSS)', href: `${ROUTES.ACADEMICS}#senior-secondary` },
            { label: 'Islamic & Qur’anic Studies', href: `${ROUTES.ACADEMICS}#islamic-studies` },
            { label: 'Curriculum & Assessment', href: `${ROUTES.ACADEMICS}#curriculum` },
        ],
    },
    {
        label: 'Admissions',
        href: ROUTES.ADMISSIONS,
        children: [
            { label: 'Admissions Overview', href: `${ROUTES.ADMISSIONS}#overview` },
            { label: 'Entry Requirements', href: `${ROUTES.ADMISSIONS}#requirements` },
            { label: 'How to Apply', href: `${ROUTES.ADMISSIONS}#how-to-apply` },
            { label: 'Tuition & Fees', href: `${ROUTES.ADMISSIONS}#tuition-fees` },
            { label: 'Frequently Asked Questions', href: `${ROUTES.ADMISSIONS}#faqs` },
        ],
    },
    {
        label: 'School Life',
        href: ROUTES.SCHOOL_LIFE,
        children: [
            { label: 'Student Activities & Clubs', href: `${ROUTES.SCHOOL_LIFE}#clubs` },
            { label: 'Islamic Ethos & Spiritual Life', href: `${ROUTES.SCHOOL_LIFE}#spiritual-life` },
            { label: 'Sports & Recreation', href: `${ROUTES.SCHOOL_LIFE}#sports` },
            { label: 'Campus Facilities', href: `${ROUTES.SCHOOL_LIFE}#facilities` },
            { label: 'Photo Gallery', href: ROUTES.GALLERY },
        ],
    },
    {
        label: 'News & Events',
        href: ROUTES.NEWS_EVENTS,
        children: [
            { label: 'Latest News & Stories', href: `${ROUTES.NEWS_EVENTS}#news` },
            { label: 'Upcoming Events', href: `${ROUTES.NEWS_EVENTS}#events` },
            { label: 'Academic Calendar', href: `${ROUTES.NEWS_EVENTS}#calendar` },
            { label: 'Media Gallery', href: ROUTES.GALLERY },
        ],
    },
    {
        label: 'Contact',
        href: ROUTES.CONTACT,
    },
];

export const FOOTER_EXPLORE_LINKS = [
    { label: 'About Al-MIIC', href: ROUTES.ABOUT },
    { label: 'Academics', href: ROUTES.ACADEMICS },
    { label: 'School life', href: ROUTES.SCHOOL_LIFE },
    { label: 'News & events', href: ROUTES.NEWS_EVENTS },
    { label: 'Campus gallery', href: ROUTES.GALLERY },
] as const;

export const FOOTER_ADMISSIONS_LINKS = [
    { label: 'Requirements', href: `${ROUTES.ADMISSIONS}#requirements` },
    { label: 'How to apply', href: `${ROUTES.ADMISSIONS}#how-to-apply` },
    { label: 'Tuition & fees', href: `${ROUTES.ADMISSIONS}#tuition-fees` },
    { label: 'FAQs', href: `${ROUTES.ADMISSIONS}#faqs` },
] as const;