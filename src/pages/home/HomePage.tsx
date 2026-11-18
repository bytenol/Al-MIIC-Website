import React from 'react';
import { HeroSection } from './sections/HeroSection';
import { WelcomeSection } from './sections/WelcomeSection';
import { DifferenceSection } from './sections/DifferenceSection';
import { MetricsBanner } from './sections/MetricsBanner';
import { FacilitiesSection } from './sections/FacilitiesSection';
import { NewsSection } from './sections/NewsSection';
import { EventsTestimonialSection } from './sections/EventsTestimonialSection';
import { PathwaysSection } from './sections/PathwaySection';

export const HomePage: React.FC = () => {
    return (
        <>
            <HeroSection />
            <WelcomeSection />
            <DifferenceSection />
            <PathwaysSection />
            <MetricsBanner />
            <FacilitiesSection />
            <NewsSection />
            <EventsTestimonialSection />
        </>
    );
};