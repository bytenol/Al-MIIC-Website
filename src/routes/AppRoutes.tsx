import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/Home/HomePage';
import { NotFoundPage } from '../pages/NotFound/NotFoundPage';
import { ROUTES } from './paths';
import { PublicLayout } from '../layout/PublicLayout';
import { AboutPage } from '../pages/About/AboutPage';
import { AcademicsPage } from '../pages/Academics/AcademicsPage';
import { AdmissionsPage } from '../pages/Admissions/AdmissionsPage';
import { SchoolLifePage } from '../pages/SchoolLife/schoolLifePage';
import { GalleryPage } from '../pages/Gallery/GalleryPage';
import { NewsEventsPage } from '../pages/NewsEvents/NewsEventPage';
import { ContactPage } from '../pages/Contact/ContactPage';
import { LegalPage } from '../pages/Legal/LegalPage';

export const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route element={<PublicLayout />}>
                <Route path={ROUTES.HOME} element={<HomePage />} />
                <Route path={ROUTES.ABOUT} element={<AboutPage />} />
                <Route path={ROUTES.ACADEMICS} element={<AcademicsPage />} />
                <Route path={ROUTES.ADMISSIONS} element={<AdmissionsPage />} />
                <Route path={ROUTES.SCHOOL_LIFE} element={<SchoolLifePage />} />
                <Route path={ROUTES.NEWS_EVENTS} element={<NewsEventsPage />} />
                <Route path={ROUTES.GALLERY} element={<GalleryPage />} />
                <Route path={ROUTES.CONTACT} element={<ContactPage />} />
                <Route path={ROUTES.PRIVACY} element={<LegalPage type="privacy" />} />
                <Route path={ROUTES.TERMS} element={<LegalPage type="terms" />} />
                {/* Catch-all 404 Route */}
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    );
};