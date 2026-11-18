import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/Home/HomePage';
import { NotFoundPage } from '../pages/NotFound/NotFoundPage';
import { ROUTES } from './paths';
import { PublicLayout } from '../layout/PublicLayout';
import { AboutPage } from '../pages/About/AboutPage';
import { AcademicsPage } from '../pages/Academics/AcademicsPage';
import { AdmissionsPage } from '../pages/Admissions/AdmissionsPage';

export const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route element={<PublicLayout />}>
                <Route path={ROUTES.HOME} element={<HomePage />} />
                <Route path={ROUTES.ABOUT} element={<AboutPage />} />
                <Route path={ROUTES.ACADEMICS} element={<AcademicsPage />} />
                <Route path={ROUTES.ADMISSIONS} element={<AdmissionsPage />} />
                {/* Catch-all 404 Route */}
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    );
};