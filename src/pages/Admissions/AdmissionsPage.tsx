import React, { useState } from 'react';
import {
    Calendar,
    CheckCircle2,
    ChevronDown,
    FileText,
    HelpCircle,
    Send,
    ShieldCheck,
    Wallet,
} from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { Container } from '../../components/common/Container';
import { SectionHeading } from '../../components/common/SectionHeading';
import { Card } from '../../components/common/Card';
import { Reveal } from '../../components/common/Reveal';
import { Button } from '../../components/ui/Button';
import {
    ADMISSION_FAQS,
    ADMISSIONS_HERO,
    ADMISSIONS_OVERVIEW,
    APPLICATION_STEPS,
    ENTRY_REQUIREMENTS,
    FEE_COMPONENTS,
} from '../../data/admissions.data';
import { SITE_CONFIG } from '../../config/site.config';
import { ROUTES } from '../../routes/paths';
import { cn } from '../../utils/cn';
import type { AdmissionEnquiryFormValues } from '../../types/admissions.types';

const INITIAL_FORM_STATE: AdmissionEnquiryFormValues = {
    studentFullName: '',
    dateOfBirth: '',
    gender: '',
    targetClass: '',
    preferredTrack: '',
    boardingPreference: '',
    currentSchool: '',
    guardianName: '',
    guardianPhone: '',
    guardianEmail: '',
    additionalNotes: '',
};

export const AdmissionsPage: React.FC = () => {
    const [openFaqId, setOpenFaqId] = useState<string | null>(ADMISSION_FAQS[0].id);
    const [formValues, setFormValues] = useState<AdmissionEnquiryFormValues>(INITIAL_FORM_STATE);
    const [submittedRef, setSubmittedRef] = useState<string | null>(null);

    const handleFieldChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormValues((prev) => ({ ...prev, [name]: value }));
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const randomCode = `ALMIIC-${Math.floor(100000 + Math.random() * 900000)}`;
        setSubmittedRef(randomCode);
    };

    const toggleFaq = (id: string) => {
        setOpenFaqId((prev) => (prev === id ? null : id));
    };

    const isSeniorClass = formValues.targetClass === 'SS 1' || formValues.targetClass === 'SS 2';

    return (
        <div className="space-y-24 pb-20">
            {/* 1. Admissions Hero */}
            <section
                aria-label="Admissions Hero"
                className="relative py-20 sm:py-24 lg:py-28 bg-[#06182C] text-white overflow-hidden"
            >
                <img
                    src={ADMISSIONS_HERO.bannerImage}
                    alt={ADMISSIONS_HERO.bannerAlt}
                    className="absolute inset-0 w-full h-full object-cover object-center opacity-25"
                />
                <div
                    className="absolute inset-0 bg-gradient-to-r from-[#06182C] via-[#06182C]/92 to-[#06182C]/75"
                    aria-hidden="true"
                />
                <Container className="relative z-10 max-w-4xl text-center space-y-6">
                    <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.18em] text-[var(--color-brand-sky)]">
                        {ADMISSIONS_HERO.eyebrow}
                    </p>
                    <h1 className="font-heading text-3xl sm:text-5xl lg:text-[3.5rem] font-bold leading-[1.12] tracking-tight text-white">
                        {ADMISSIONS_HERO.title}
                    </h1>
                    <p className="text-base sm:text-lg text-slate-200/90 leading-relaxed max-w-2xl mx-auto">
                        {ADMISSIONS_HERO.subtitle}
                    </p>
                    <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
                        <Button href="#application-form" variant="gold" size="lg" withArrow>
                            Start Online Application
                        </Button>
                        <Button to={ROUTES.CONTACT} variant="glass" size="lg">
                            Book a Campus Tour
                        </Button>
                    </div>
                </Container>
            </section>

            {/* 2. Admissions Overview (#overview) */}
            <section id="overview" className="scroll-mt-28">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <Reveal className="lg:col-span-7 space-y-6">
                            <SectionHeading
                                eyebrow={ADMISSIONS_OVERVIEW.eyebrow}
                                title={ADMISSIONS_OVERVIEW.title}
                            />
                            <p className="text-base sm:text-[17px] text-[var(--color-text-secondary)] leading-[1.7]">
                                {ADMISSIONS_OVERVIEW.leadParagraph}
                            </p>
                            <p className="text-[15px] sm:text-base text-[var(--color-text-muted)] leading-[1.7]">
                                {ADMISSIONS_OVERVIEW.bodyParagraph}
                            </p>
                        </Reveal>

                        <Reveal delay={0.1} className="lg:col-span-5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {ADMISSIONS_OVERVIEW.keyDates.map((item) => (
                                    <div
                                        key={item.label}
                                        className="p-5 rounded-xl bg-[var(--color-bg-secondary)] border border-[var(--color-border-subtle)] space-y-1.5"
                                    >
                                        <span className="block text-[11px] font-bold uppercase tracking-wider text-[var(--color-text-eyebrow)]">
                                            {item.label}
                                        </span>
                                        <span className="block font-heading text-base sm:text-lg font-bold text-[var(--color-text-primary)]">
                                            {item.value}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </Reveal>
                    </div>
                </Container>
            </section>

            {/* 3. Entry Requirements (#requirements) */}
            <section
                id="requirements"
                className="scroll-mt-28 py-16 sm:py-20 bg-[var(--color-bg-secondary)] border-y border-[var(--color-border-subtle)]"
            >
                <Container className="space-y-12">
                    <SectionHeading
                        align="center"
                        eyebrow="ELIGIBILITY & DOCUMENTATION"
                        title="Entry Requirements"
                        description="Review the age criteria, required credentials, and screening format for fresh Junior Secondary and transfer applicants."
                    />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {ENTRY_REQUIREMENTS.map((group, idx) => (
                            <Reveal key={group.id} delay={idx * 0.1} className="flex">
                                <Card
                                    variant="elevated"
                                    radius="signature"
                                    padding="lg"
                                    className="flex-1 flex flex-col justify-between space-y-6"
                                >
                                    <div className="space-y-4">
                                        <span className="inline-block text-xs font-bold uppercase tracking-[0.15em] text-[var(--color-text-eyebrow)]">
                                            {group.stageLabel}
                                        </span>
                                        <h3 className="font-heading text-2xl font-bold text-[var(--color-text-primary)]">
                                            {group.title}
                                        </h3>
                                        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                                            {group.eligibility}
                                        </p>

                                        <div className="pt-2 space-y-2.5">
                                            <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-primary)] flex items-center gap-2">
                                                <FileText className="w-4 h-4 text-[var(--color-brand-primary)]" />
                                                Required Documents
                                            </h4>
                                            <ul className="space-y-2">
                                                {group.documents.map((doc) => (
                                                    <li
                                                        key={doc}
                                                        className="flex items-start gap-2.5 text-sm text-[var(--color-text-secondary)]"
                                                    >
                                                        <CheckCircle2 className="w-4 h-4 shrink-0 text-[var(--color-brand-primary)] mt-0.5" />
                                                        <span>{doc}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="p-4 rounded-xl bg-[var(--color-bg-secondary)] border border-[var(--color-border-subtle)] text-xs sm:text-[13px] text-[var(--color-text-secondary)] leading-relaxed">
                                        <strong className="text-[var(--color-text-primary)]">
                                            Screening Format:{' '}
                                        </strong>
                                        {group.assessmentNote}
                                    </div>
                                </Card>
                            </Reveal>
                        ))}
                    </div>
                </Container>
            </section>

            {/* 4. How to Apply Roadmap (#how-to-apply) */}
            <section id="how-to-apply" className="scroll-mt-28">
                <Container className="space-y-12">
                    <SectionHeading
                        align="split"
                        eyebrow="ADMISSION ROADMAP"
                        title="How to apply to Al-MIIC."
                        description="A transparent four-stage pathway from initial application to classroom orientation."
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {APPLICATION_STEPS.map((step, index) => (
                            <Reveal key={step.stepNumber} delay={index * 0.08} className="flex">
                                <Card variant="subtle" hoverLift className="flex-1 flex flex-col justify-between space-y-6">
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between">
                                            <span className="font-heading text-2xl font-extrabold text-[var(--color-brand-gold)]">
                                                {step.stepNumber}
                                            </span>
                                            <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                                                {step.timeline}
                                            </span>
                                        </div>
                                        <h3 className="font-heading text-lg font-bold text-[var(--color-text-primary)]">
                                            {step.title}
                                        </h3>
                                        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </Card>
                            </Reveal>
                        ))}
                    </div>
                </Container>
            </section>

            {/* 5. Interactive Online Admission Application Form (#application-form) */}
            <section
                id="application-form"
                className="scroll-mt-28 py-16 sm:py-20 bg-[var(--color-bg-secondary)] border-y border-[var(--color-border-subtle)]"
            >
                <Container size="narrow">
                    <Card variant="elevated" radius="signature-lg" padding="lg" className="space-y-8">
                        <div className="space-y-2 border-b border-[var(--color-border-subtle)] pb-6">
                            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-text-eyebrow)]">
                                ONLINE ADMISSION EXPRESSION OF INTEREST
                            </p>
                            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[var(--color-text-primary)]">
                                Register Candidate for 2026/2027 Screening
                            </h2>
                            <p className="text-sm text-[var(--color-text-secondary)]">
                                Complete the details below. Our Admissions Officer will contact you within 1–2
                                working days with your screening slip and examination date.
                            </p>
                        </div>

                        {submittedRef ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="p-8 rounded-2xl bg-[var(--color-brand-sky-soft)] border border-[var(--color-border-strong)] text-center space-y-4"
                            >
                                <div className="w-12 h-12 mx-auto rounded-full bg-[var(--color-brand-primary)] text-white flex items-center justify-center">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                                <h3 className="font-heading text-xl sm:text-2xl font-bold text-[var(--color-text-primary)]">
                                    Application Request Received
                                </h3>
                                <p className="text-sm text-[var(--color-text-secondary)] max-w-lg mx-auto leading-relaxed">
                                    Thank you, <strong>{formValues.guardianName}</strong>. Your admission enquiry
                                    for <strong>{formValues.studentFullName}</strong> ({formValues.targetClass}) has
                                    been logged.
                                </p>
                                <div className="inline-block px-4 py-2 rounded-lg bg-[var(--color-bg-elevated)] border border-[var(--color-border-subtle)] text-xs font-mono font-bold text-[var(--color-text-eyebrow)]">
                                    Reference ID: {submittedRef}
                                </div>
                                <div className="pt-2">
                                    <Button
                                        type="button"
                                        variant="outline"
                                        size="sm"
                                        onClick={() => {
                                            setSubmittedRef(null);
                                            setFormValues(INITIAL_FORM_STATE);
                                        }}
                                    >
                                        Submit Another Application
                                    </Button>
                                </div>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleFormSubmit} className="space-y-6">
                                {/* Student Information */}
                                <div className="space-y-4">
                                    <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-eyebrow)]">
                                        1. Candidate Details
                                    </h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="sm:col-span-2">
                                            <label
                                                htmlFor="studentFullName"
                                                className="block text-xs font-semibold text-[var(--color-text-primary)] mb-1.5"
                                            >
                                                Student Full Name *
                                            </label>
                                            <input
                                                id="studentFullName"
                                                name="studentFullName"
                                                type="text"
                                                required
                                                value={formValues.studentFullName}
                                                onChange={handleFieldChange}
                                                placeholder="Surname, First Name, Middle Name"
                                                className="w-full rounded-lg border border-[var(--color-border-strong)] bg-[var(--color-bg-primary)] px-3.5 py-2.5 text-sm text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-sky)]"
                                            />
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="dateOfBirth"
                                                className="block text-xs font-semibold text-[var(--color-text-primary)] mb-1.5"
                                            >
                                                Date of Birth *
                                            </label>
                                            <input
                                                id="dateOfBirth"
                                                name="dateOfBirth"
                                                type="date"
                                                required
                                                value={formValues.dateOfBirth}
                                                onChange={handleFieldChange}
                                                className="w-full rounded-lg border border-[var(--color-border-strong)] bg-[var(--color-bg-primary)] px-3.5 py-2.5 text-sm text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-sky)]"
                                            />
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="gender"
                                                className="block text-xs font-semibold text-[var(--color-text-primary)] mb-1.5"
                                            >
                                                Gender *
                                            </label>
                                            <select
                                                id="gender"
                                                name="gender"
                                                required
                                                value={formValues.gender}
                                                onChange={handleFieldChange}
                                                className="w-full rounded-lg border border-[var(--color-border-strong)] bg-[var(--color-bg-primary)] px-3.5 py-2.5 text-sm text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-sky)]"
                                            >
                                                <option value="">Select gender</option>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="targetClass"
                                                className="block text-xs font-semibold text-[var(--color-text-primary)] mb-1.5"
                                            >
                                                Class Applying For *
                                            </label>
                                            <select
                                                id="targetClass"
                                                name="targetClass"
                                                required
                                                value={formValues.targetClass}
                                                onChange={handleFieldChange}
                                                className="w-full rounded-lg border border-[var(--color-border-strong)] bg-[var(--color-bg-primary)] px-3.5 py-2.5 text-sm text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-sky)]"
                                            >
                                                <option value="">Select class</option>
                                                <option value="JSS 1">JSS 1 (Junior Secondary 1)</option>
                                                <option value="JSS 2">JSS 2 (Transfer)</option>
                                                <option value="SS 1">SS 1 (Senior Secondary 1)</option>
                                                <option value="SS 2">SS 2 (Transfer)</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="boardingPreference"
                                                className="block text-xs font-semibold text-[var(--color-text-primary)] mb-1.5"
                                            >
                                                Study Mode *
                                            </label>
                                            <select
                                                id="boardingPreference"
                                                name="boardingPreference"
                                                required
                                                value={formValues.boardingPreference}
                                                onChange={handleFieldChange}
                                                className="w-full rounded-lg border border-[var(--color-border-strong)] bg-[var(--color-bg-primary)] px-3.5 py-2.5 text-sm text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-sky)]"
                                            >
                                                <option value="">Select preference</option>
                                                <option value="Day Student">Day Student</option>
                                                <option value="Boarding Student">Boarding Student</option>
                                            </select>
                                        </div>

                                        {isSeniorClass && (
                                            <div className="sm:col-span-2">
                                                <label
                                                    htmlFor="preferredTrack"
                                                    className="block text-xs font-semibold text-[var(--color-text-primary)] mb-1.5"
                                                >
                                                    Preferred Senior Secondary Track *
                                                </label>
                                                <select
                                                    id="preferredTrack"
                                                    name="preferredTrack"
                                                    required={isSeniorClass}
                                                    value={formValues.preferredTrack}
                                                    onChange={handleFieldChange}
                                                    className="w-full rounded-lg border border-[var(--color-border-strong)] bg-[var(--color-bg-primary)] px-3.5 py-2.5 text-sm text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-sky)]"
                                                >
                                                    <option value="">Select academic department</option>
                                                    <option value="Science & Technology">Science &amp; Technology</option>
                                                    <option value="Humanities & Arts">Humanities &amp; Arts</option>
                                                    <option value="Business & Commercial">Business &amp; Commercial</option>
                                                </select>
                                            </div>
                                        )}

                                        <div className="sm:col-span-2">
                                            <label
                                                htmlFor="currentSchool"
                                                className="block text-xs font-semibold text-[var(--color-text-primary)] mb-1.5"
                                            >
                                                Current / Previous School *
                                            </label>
                                            <input
                                                id="currentSchool"
                                                name="currentSchool"
                                                type="text"
                                                required
                                                value={formValues.currentSchool}
                                                onChange={handleFieldChange}
                                                placeholder="Name of current primary or secondary school"
                                                className="w-full rounded-lg border border-[var(--color-border-strong)] bg-[var(--color-bg-primary)] px-3.5 py-2.5 text-sm text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-sky)]"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Parent / Guardian Information */}
                                <div className="space-y-4 pt-4 border-t border-[var(--color-border-subtle)]">
                                    <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-eyebrow)]">
                                        2. Parent / Guardian Contact
                                    </h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="sm:col-span-2">
                                            <label
                                                htmlFor="guardianName"
                                                className="block text-xs font-semibold text-[var(--color-text-primary)] mb-1.5"
                                            >
                                                Parent / Guardian Full Name *
                                            </label>
                                            <input
                                                id="guardianName"
                                                name="guardianName"
                                                type="text"
                                                required
                                                value={formValues.guardianName}
                                                onChange={handleFieldChange}
                                                placeholder="Title and Full Name"
                                                className="w-full rounded-lg border border-[var(--color-border-strong)] bg-[var(--color-bg-primary)] px-3.5 py-2.5 text-sm text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-sky)]"
                                            />
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="guardianPhone"
                                                className="block text-xs font-semibold text-[var(--color-text-primary)] mb-1.5"
                                            >
                                                Phone Number (WhatsApp preferred) *
                                            </label>
                                            <input
                                                id="guardianPhone"
                                                name="guardianPhone"
                                                type="tel"
                                                required
                                                value={formValues.guardianPhone}
                                                onChange={handleFieldChange}
                                                placeholder="+234 800 000 0000"
                                                className="w-full rounded-lg border border-[var(--color-border-strong)] bg-[var(--color-bg-primary)] px-3.5 py-2.5 text-sm text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-sky)]"
                                            />
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="guardianEmail"
                                                className="block text-xs font-semibold text-[var(--color-text-primary)] mb-1.5"
                                            >
                                                Email Address *
                                            </label>
                                            <input
                                                id="guardianEmail"
                                                name="guardianEmail"
                                                type="email"
                                                required
                                                value={formValues.guardianEmail}
                                                onChange={handleFieldChange}
                                                placeholder="parent@example.com"
                                                className="w-full rounded-lg border border-[var(--color-border-strong)] bg-[var(--color-bg-primary)] px-3.5 py-2.5 text-sm text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-sky)]"
                                            />
                                        </div>

                                        <div className="sm:col-span-2">
                                            <label
                                                htmlFor="additionalNotes"
                                                className="block text-xs font-semibold text-[var(--color-text-primary)] mb-1.5"
                                            >
                                                Additional Notes or Questions (Optional)
                                            </label>
                                            <textarea
                                                id="additionalNotes"
                                                name="additionalNotes"
                                                rows={3}
                                                value={formValues.additionalNotes}
                                                onChange={handleFieldChange}
                                                placeholder="Share any relevant information about the student's Qur’anic background, medical needs, or preferred screening date."
                                                className="w-full rounded-lg border border-[var(--color-border-strong)] bg-[var(--color-bg-primary)] px-3.5 py-2.5 text-sm text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-sky)]"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                    <p className="text-xs text-[var(--color-text-muted)]">
                                        Need immediate assistance? Call{' '}
                                        <a
                                            href={`tel:${SITE_CONFIG.contact.phone.replace(/\s+/g, '')}`}
                                            className="font-semibold text-[var(--color-text-eyebrow)] hover:underline"
                                        >
                                            {SITE_CONFIG.contact.phone}
                                        </a>
                                    </p>
                                    <Button
                                        type="submit"
                                        variant="primary"
                                        size="lg"
                                        rightIcon={<Send className="w-4 h-4" />}
                                    >
                                        Submit Application Enquiry
                                    </Button>
                                </div>
                            </form>
                        )}
                    </Card>
                </Container>
            </section>

            {/* 6. Tuition & Fees Overview (#tuition-fees) */}
            <section id="tuition-fees" className="scroll-mt-28">
                <Container className="space-y-12">
                    <SectionHeading
                        align="split"
                        eyebrow="TRANSPARENT FEE STRUCTURE"
                        title="Tuition & Fees"
                        description="Al-MIIC maintains a clear, predictable billing structure with no hidden levies. Official termly fee schedules for Day and Boarding students are issued alongside the admission prospectus."
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {FEE_COMPONENTS.map((fee, index) => (
                            <Reveal key={fee.category} delay={index * 0.08} className="flex">
                                <Card variant="subtle" className="flex-1 flex flex-col justify-between space-y-4">
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between gap-2">
                                            <Wallet className="w-5 h-5 text-[var(--color-brand-primary)]" />
                                            <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[var(--color-text-eyebrow)]">
                                                <Calendar className="w-3.5 h-3.5" />
                                                {fee.schedule}
                                            </span>
                                        </div>
                                        <h3 className="font-heading text-lg font-bold text-[var(--color-text-primary)]">
                                            {fee.category}
                                        </h3>
                                        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                                            {fee.coverage}
                                        </p>
                                    </div>
                                </Card>
                            </Reveal>
                        ))}
                    </div>
                </Container>
            </section>

            {/* 7. Frequently Asked Questions (#faqs) */}
            <section
                id="faqs"
                className="scroll-mt-28 py-16 bg-[var(--color-bg-secondary)] border-y border-[var(--color-border-subtle)]"
            >
                <Container size="narrow" className="space-y-10">
                    <SectionHeading
                        align="center"
                        eyebrow="COMMON QUESTIONS"
                        title="Admissions FAQs"
                        description="Answers to the questions parents and guardians ask most frequently."
                    />

                    <div className="space-y-3">
                        {ADMISSION_FAQS.map((faq) => {
                            const isOpen = openFaqId === faq.id;
                            return (
                                <div
                                    key={faq.id}
                                    className="rounded-xl bg-[var(--color-bg-elevated)] border border-[var(--color-border-subtle)] overflow-hidden shadow-2xs"
                                >
                                    <button
                                        type="button"
                                        onClick={() => toggleFaq(faq.id)}
                                        aria-expanded={isOpen}
                                        className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[var(--color-bg-secondary)]/50 transition-colors"
                                    >
                                        <span className="font-heading text-sm sm:text-base font-bold text-[var(--color-text-primary)] flex items-center gap-3">
                                            <HelpCircle className="w-4 h-4 shrink-0 text-[var(--color-brand-primary)]" />
                                            <span>{faq.question}</span>
                                        </span>
                                        <ChevronDown
                                            className={cn(
                                                'w-4 h-4 shrink-0 text-[var(--color-text-muted)] transition-transform duration-200',
                                                isOpen && 'rotate-180 text-[var(--color-brand-primary)]'
                                            )}
                                        />
                                    </button>

                                    <AnimatePresence initial={false}>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.2 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="px-6 pb-5 pt-1 text-sm text-[var(--color-text-secondary)] leading-relaxed border-t border-[var(--color-border-subtle)]/60">
                                                    {faq.answer}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                    </div>
                </Container>
            </section>
        </div>
    );
};