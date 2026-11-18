import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/Home/HomePage';
import { NotFoundPage } from '../pages/NotFound/NotFoundPage';
import { ROUTES } from './paths';
import { PublicLayout } from '../layout/PublicLayout';

export const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route element={<PublicLayout />}>
                <Route path={ROUTES.HOME} element={<HomePage />} />
                {/* Catch-all 404 Route */}
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    );
};