import React from 'react';
import { Container } from '../../components/common/Container';
import { Card } from '../../components/common/Card';
import { SITE_CONFIG } from '../../config/site.config';

export interface LegalPageProps {
    type: 'privacy' | 'terms';
}

export const LegalPage: React.FC<LegalPageProps> = ({ type }) => {
    const isPrivacy = type === 'privacy';

    return (
        <div className="py-16 sm:py-20">
            <Container size="narrow" className="space-y-8">
                <div className="space-y-3">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-text-eyebrow)]">
                        INSTITUTIONAL POLICY
                    </p>
                    <h1 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--color-text-primary)]">
                        {isPrivacy ? 'Privacy Policy' : 'Terms & Conditions'}
                    </h1>
                    <p className="text-sm text-[var(--color-text-muted)]">
                        {SITE_CONFIG.name} ({SITE_CONFIG.shortName}) &middot; Effective Session 2026/2027
                    </p>
                </div>

                <Card variant="elevated" padding="lg" className="space-y-6 text-sm sm:text-base text-[var(--color-text-secondary)] leading-relaxed">
                    {isPrivacy ? (
                        <>
                            <section className="space-y-2">
                                <h2 className="font-heading text-lg font-bold text-[var(--color-text-primary)]">
                                    1. Information We Collect
                                </h2>
                                <p>
                                    When prospective parents, guardians, or visitors submit an admission enquiry,
                                    newsletter subscription, or contact form on the {SITE_CONFIG.shortName} public
                                    website, we collect only the contact and candidate details voluntarily provided
                                    (such as names, phone numbers, email addresses, and prospective class level).
                                </p>
                            </section>

                            <section className="space-y-2">
                                <h2 className="font-heading text-lg font-bold text-[var(--color-text-primary)]">
                                    2. How We Use Information
                                </h2>
                                <p>
                                    Submitted information is used strictly by authorized administrative and
                                    admissions personnel to respond to enquiries, schedule campus tours, administer
                                    entrance screenings, and share requested college updates. We never sell or rent
                                    personal records to third parties.
                                </p>
                            </section>

                            <section className="space-y-2">
                                <h2 className="font-heading text-lg font-bold text-[var(--color-text-primary)]">
                                    3. Contact for Data Enquiries
                                </h2>
                                <p>
                                    For questions regarding institutional data handling, please write to{' '}
                                    <a
                                        href={`mailto:${SITE_CONFIG.contact.email}`}
                                        className="font-semibold text-[var(--color-text-eyebrow)] hover:underline"
                                    >
                                        {SITE_CONFIG.contact.email}
                                    </a>
                                    .
                                </p>
                            </section>
                        </>
                    ) : (
                        <>
                            <section className="space-y-2">
                                <h2 className="font-heading text-lg font-bold text-[var(--color-text-primary)]">
                                    1. Purpose of the Public Website
                                </h2>
                                <p>
                                    This website provides official public information regarding academic programmes,
                                    admissions procedures, school life, and campus news at {SITE_CONFIG.name}.
                                </p>
                            </section>

                            <section className="space-y-2">
                                <h2 className="font-heading text-lg font-bold text-[var(--color-text-primary)]">
                                    2. Admissions &amp; Academic Schedules
                                </h2>
                                <p>
                                    While every effort is made to keep calendar dates and programme descriptions
                                    current, the College reserves the right to update session timetables and
                                    admissions screening dates with prior notice to applicants and parents.
                                </p>
                            </section>

                            <section className="space-y-2">
                                <h2 className="font-heading text-lg font-bold text-[var(--color-text-primary)]">
                                    3. Intellectual Property
                                </h2>
                                <p>
                                    All institutional emblems, photography, and written materials published on this
                                    site remain the property of {SITE_CONFIG.name} and may not be reproduced for
                                    commercial use without written permission.
                                </p>
                            </section>
                        </>
                    )}
                </Card>
            </Container>
        </div>
    );
};