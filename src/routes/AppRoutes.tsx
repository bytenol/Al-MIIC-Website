import { Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { PageLoader } from '../components/ui/PageLoader';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { SITE_CONFIG } from '../config/site.config';
import { ROUTES } from './paths';
import { PublicLayout } from '../layout/PublicLayout';
import { AboutPage } from '../pages/About/AboutPage';
import { AcademicsPage } from '../pages/Academics/AcademicsPage';
import { AdmissionsPage } from '../pages/Admissions/AdmissionsPage';
import { NewsEventsPage } from '../pages/NewsEvents/NewsEventsPage';
import { GalleryPage } from '../pages/Gallery/GalleryPage';
import { ContactPage } from '../pages/Contact/ContactPage';
import { LegalPage } from '../pages/Legal/LegalPage';
import { NotFoundPage } from '../pages/NotFound/NotFoundPage';
import WebsitePage from '../pages/Website/WebsitePage';
import SchoolLifePage from '../pages/SchoolLifePage/SchoolLifePage';


// // Lazy-load secondary pages to keep initial bundle fast
// const AboutPage = lazy(() =>
//     import('../pages/About/AboutPage').then((m) => ({ default: m.AboutPage }))
// );
// const AcademicsPage = lazy(() =>
//     import('../pages/Academics/AcademicsPage').then((m) => ({ default: m.AcademicsPage }))
// );
// const AdmissionsPage = lazy(() =>
//     import('../pages/Admissions/AdmissionsPage').then((m) => ({ default: m.AdmissionsPage }))
// );
// const SchoolLifePage = lazy(() =>
//     import('../pages/SchoolLife/SchoolLifePage').then((m) => ({ default: m.SchoolLifePage }))
// );
// const NewsEventsPage = lazy(() =>
//     import('../pages/NewsEvents/NewsEventsPage').then((m) => ({ default: m.NewsEventsPage }))
// );
// const GalleryPage = lazy(() =>
//     import('../pages/Gallery/GalleryPage').then((m) => ({ default: m.GalleryPage }))
// );
// const ContactPage = lazy(() =>
//     import('../pages/Contact/ContactPage').then((m) => ({ default: m.ContactPage }))
// );
// const LegalPage = lazy(() =>
//     import('../pages/Legal/LegalPage').then((m) => ({ default: m.LegalPage }))
// );
// const NotFoundPage = lazy(() =>
//     import('../pages/NotFound/NotFoundPage').then((m) => ({ default: m.NotFoundPage }))
// );


const ROUTE_SEO_META: Record<string, { title: string; description: string }> = {
    [ROUTES.HOME]: {
        title: SITE_CONFIG.name,
        description:
            'Official public website of Al-Mawrid Islamic International College (Al-MIIC) — Junior & Senior Secondary education grounded in knowledge, Islamic character and purpose.',
    },
    [ROUTES.ABOUT]: {
        title: 'About Us',
        description:
            'Learn about the history, vision, mission, Islamic values, leadership and educators at Al-Mawrid Islamic International College (Al-MIIC).',
    },
    [ROUTES.ACADEMICS]: {
        title: 'Academics (JSS 1 – SS 3)',
        description:
            'Explore Junior Secondary (JSS 1–3), Senior Secondary tracks (Science, Humanities, Business), Islamic & Qur’anic Studies, and assessment standards at Al-MIIC.',
    },
    [ROUTES.ADMISSIONS]: {
        title: 'Admissions 2026/2027',
        description:
            'Entry requirements, application steps, fee overview, FAQs and online screening registration for Junior and Senior Secondary admission at Al-MIIC.',
    },
    [ROUTES.SCHOOL_LIFE]: {
        title: 'School Life & Facilities',
        description:
            'Discover daily Islamic ethos, student clubs, inter-house sports, science laboratories, library and campus life at Al-MIIC.',
    },
    [ROUTES.NEWS_EVENTS]: {
        title: 'News, Events & Calendar',
        description:
            'Latest campus stories, academic achievements, upcoming college events and three-term session calendar at Al-MIIC.',
    },
    [ROUTES.GALLERY]: {
        title: 'Campus Media Gallery',
        description:
            'Browse photographs of classrooms, science labs, library study, student activities and campus grounds at Al-MIIC.',
    },
    [ROUTES.CONTACT]: {
        title: 'Contact Us & Campus Map',
        description:
            'Get in touch with Al-Mawrid Islamic International College, check administrative hours, send an enquiry or view our campus map.',
    },
    [ROUTES.PRIVACY]: {
        title: 'Privacy Policy',
        description: `Institutional privacy policy for ${SITE_CONFIG.name}.`,
    },
    [ROUTES.TERMS]: {
        title: 'Terms & Conditions',
        description: `Website terms and conditions for ${SITE_CONFIG.name}.`,
    },
};

const RouteSeoManager = () => {
    const { pathname } = useLocation();
    const meta = ROUTE_SEO_META[pathname] || {
        title: 'Page Not Found',
        description: `The requested page could not be found on ${SITE_CONFIG.shortName}.`,
    };

    useDocumentTitle(meta);
    return null;
};


export const AppRoutes = () => {
    return (
        <>
            <RouteSeoManager />
            <Suspense fallback={<PageLoader />}>
                <Routes>
                    <Route element={<PublicLayout />}>
                        <Route path={ROUTES.HOME} element={<WebsitePage />} />
                        <Route path={ROUTES.ABOUT} element={<AboutPage />} />
                        <Route path={ROUTES.ACADEMICS} element={<AcademicsPage />} />
                        <Route path={ROUTES.ADMISSIONS} element={<AdmissionsPage />} />
                        <Route path={ROUTES.SCHOOL_LIFE} element={<SchoolLifePage />} />
                        <Route path={ROUTES.NEWS_EVENTS} element={<NewsEventsPage />} />
                        <Route path={ROUTES.GALLERY} element={<GalleryPage />} />
                        <Route path={ROUTES.CONTACT} element={<ContactPage />} />
                        <Route path={ROUTES.PRIVACY} element={<LegalPage type="privacy" />} />
                        <Route path={ROUTES.TERMS} element={<LegalPage type="terms" />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Route>
                </Routes>
            </Suspense>
        </>
    );
};