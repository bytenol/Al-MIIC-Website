import React, { useState } from 'react';
import {
  Clock,
  ExternalLink,
  Mail,
  MapPin,
  Navigation,
  PhoneCall,
  Send,
  ShieldCheck,
} from 'lucide-react';
import { motion } from 'motion/react';
import { Container } from '../../components/common/Container';
import { SectionHeading } from '../../components/common/SectionHeading';
import { Card } from '../../components/common/Card';
import { Reveal } from '../../components/common/Reveal';
import { Button } from '../../components/ui/Button';
import { SITE_CONFIG } from '../../config/site.config';
import { ROUTES } from '../../routes/paths';
import type { ContactFormValues } from '../../types/contact.types';

const INITIAL_CONTACT_FORM: ContactFormValues = {
  fullName: '',
  email: '',
  phone: '',
  topic: 'General Information',
  subject: '',
  message: '',
};

export const ContactPage: React.FC = () => {
  const [formValues, setFormValues] = useState<ContactFormValues>(INITIAL_CONTACT_FORM);
  const [submittedTicket, setSubmittedTicket] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ticketId = `ENQ-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmittedTicket(ticketId);
  };

  return (
    <div className="space-y-24 pb-20">
      {/* 1. Contact Hero */}
      <section
        aria-label="Contact Us Hero"
        className="relative py-20 sm:py-24 lg:py-28 bg-[#06182C] text-white overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#06182C] via-[#0A2540] to-[#085A8C]/60"
          aria-hidden="true"
        />
        <Container className="relative z-10 max-w-4xl text-center space-y-6">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.18em] text-[var(--color-brand-sky)]">
            GET IN TOUCH
          </p>
          <h1 className="font-heading text-3xl sm:text-5xl lg:text-[3.5rem] font-bold leading-[1.12] tracking-tight text-white">
            We welcome your questions, visits and enquiries.
          </h1>
          <p className="text-base sm:text-lg text-slate-200/90 leading-relaxed max-w-2xl mx-auto">
            Whether you are exploring Junior or Senior Secondary admissions, booking a guided
            campus tour, or reaching out to our administrative office, our team is ready to assist.
          </p>
        </Container>
      </section>

      {/* 2. Direct Contact Channels Grid */}
      <section aria-label="Contact Information Cards">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Campus Address */}
            <Reveal className="flex">
              <Card variant="elevated" hoverLift className="flex-1 space-y-4">
                <div className="w-11 h-11 rounded-xl bg-[var(--color-brand-sky-soft)] text-[var(--color-brand-primary)] flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1.5">
                  <h2 className="font-heading text-lg font-bold text-[var(--color-text-primary)]">
                    Visit Our Campus
                  </h2>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    {SITE_CONFIG.contact.address}
                  </p>
                </div>
                <a
                  href="#campus-map"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[var(--color-text-eyebrow)] hover:opacity-80"
                >
                  <span>View on campus map</span>
                  <Navigation className="w-3.5 h-3.5" />
                </a>
              </Card>
            </Reveal>

            {/* Phone Lines */}
            <Reveal delay={0.08} className="flex">
              <Card variant="elevated" hoverLift className="flex-1 space-y-4">
                <div className="w-11 h-11 rounded-xl bg-[var(--color-brand-sky-soft)] text-[var(--color-brand-primary)] flex items-center justify-center">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div className="space-y-1.5">
                  <h2 className="font-heading text-lg font-bold text-[var(--color-text-primary)]">
                    Call the College
                  </h2>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    Main Reception:{' '}
                    <a
                      href={`tel:${SITE_CONFIG.contact.phone.replace(/\s+/g, '')}`}
                      className="font-semibold text-[var(--color-text-primary)] hover:text-[var(--color-brand-primary)]"
                    >
                      {SITE_CONFIG.contact.phone}
                    </a>
                  </p>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    Admissions Desk:{' '}
                    <a
                      href={`tel:${SITE_CONFIG.contact.admissionsPhone.replace(/\s+/g, '')}`}
                      className="font-semibold text-[var(--color-text-primary)] hover:text-[var(--color-brand-primary)]"
                    >
                      {SITE_CONFIG.contact.admissionsPhone}
                    </a>
                  </p>
                </div>
              </Card>
            </Reveal>

            {/* Email Desks */}
            <Reveal delay={0.16} className="flex">
              <Card variant="elevated" hoverLift className="flex-1 space-y-4">
                <div className="w-11 h-11 rounded-xl bg-[var(--color-brand-sky-soft)] text-[var(--color-brand-primary)] flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-1.5">
                  <h2 className="font-heading text-lg font-bold text-[var(--color-text-primary)]">
                    Email Enquiries
                  </h2>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    General:{' '}
                    <a
                      href={`mailto:${SITE_CONFIG.contact.email}`}
                      className="font-semibold text-[var(--color-text-primary)] hover:text-[var(--color-brand-primary)]"
                    >
                      {SITE_CONFIG.contact.email}
                    </a>
                  </p>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    Admissions:{' '}
                    <a
                      href={`mailto:${SITE_CONFIG.contact.admissionsEmail}`}
                      className="font-semibold text-[var(--color-text-primary)] hover:text-[var(--color-brand-primary)]"
                    >
                      {SITE_CONFIG.contact.admissionsEmail}
                    </a>
                  </p>
                </div>
              </Card>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 3. Interactive Enquiry Form & Office Hours Split */}
      <section aria-labelledby="enquiry-form-heading">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Column: Enquiry Form (7 cols) */}
            <Reveal className="lg:col-span-7">
              <Card variant="elevated" radius="signature" padding="lg" className="space-y-6">
                <div className="space-y-2 border-b border-[var(--color-border-subtle)] pb-5">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-text-eyebrow)]">
                    SEND A MESSAGE
                  </p>
                  <h2
                    id="enquiry-form-heading"
                    className="font-heading text-2xl sm:text-3xl font-bold text-[var(--color-text-primary)]"
                  >
                    Direct Enquiry Form
                  </h2>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    Fill out the form below and the appropriate department will respond promptly.
                  </p>
                </div>

                {submittedTicket ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-8 rounded-2xl bg-[var(--color-brand-sky-soft)] border border-[var(--color-border-strong)] text-center space-y-4"
                  >
                    <div className="w-12 h-12 mx-auto rounded-full bg-[var(--color-brand-primary)] text-white flex items-center justify-center">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-[var(--color-text-primary)]">
                      Message Sent Successfully
                    </h3>
                    <p className="text-sm text-[var(--color-text-secondary)] max-w-md mx-auto leading-relaxed">
                      JazakAllahu Khayran, <strong>{formValues.fullName}</strong>. We have
                      received your message regarding <strong>{formValues.topic}</strong> and will
                      reply to <strong>{formValues.email}</strong> shortly.
                    </p>
                    <div className="inline-block px-4 py-1.5 rounded-lg bg-[var(--color-bg-elevated)] border border-[var(--color-border-subtle)] text-xs font-mono font-bold text-[var(--color-text-eyebrow)]">
                      Enquiry Ref: {submittedTicket}
                    </div>
                    <div className="pt-2">
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          setSubmittedTicket(null);
                          setFormValues(INITIAL_CONTACT_FORM);
                        }}
                      >
                        Send Another Message
                      </Button>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="contact-fullName"
                          className="block text-xs font-semibold text-[var(--color-text-primary)] mb-1.5"
                        >
                          Your Full Name *
                        </label>
                        <input
                          id="contact-fullName"
                          name="fullName"
                          type="text"
                          required
                          value={formValues.fullName}
                          onChange={handleChange}
                          placeholder="Enter your full name"
                          className="w-full rounded-lg border border-[var(--color-border-strong)] bg-[var(--color-bg-primary)] px-3.5 py-2.5 text-sm text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-sky)]"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="contact-email"
                          className="block text-xs font-semibold text-[var(--color-text-primary)] mb-1.5"
                        >
                          Email Address *
                        </label>
                        <input
                          id="contact-email"
                          name="email"
                          type="email"
                          required
                          value={formValues.email}
                          onChange={handleChange}
                          placeholder="you@example.com"
                          className="w-full rounded-lg border border-[var(--color-border-strong)] bg-[var(--color-bg-primary)] px-3.5 py-2.5 text-sm text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-sky)]"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="contact-phone"
                          className="block text-xs font-semibold text-[var(--color-text-primary)] mb-1.5"
                        >
                          Phone Number *
                        </label>
                        <input
                          id="contact-phone"
                          name="phone"
                          type="tel"
                          required
                          value={formValues.phone}
                          onChange={handleChange}
                          placeholder="+234 800 000 0000"
                          className="w-full rounded-lg border border-[var(--color-border-strong)] bg-[var(--color-bg-primary)] px-3.5 py-2.5 text-sm text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-sky)]"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="contact-topic"
                          className="block text-xs font-semibold text-[var(--color-text-primary)] mb-1.5"
                        >
                          Enquiry Category *
                        </label>
                        <select
                          id="contact-topic"
                          name="topic"
                          value={formValues.topic}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-[var(--color-border-strong)] bg-[var(--color-bg-primary)] px-3.5 py-2.5 text-sm text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-sky)]"
                        >
                          <option value="General Information">General Information</option>
                          <option value="JSS 1 & Transfer Admissions">
                            JSS 1 &amp; Transfer Admissions
                          </option>
                          <option value="Schedule a Campus Tour">Schedule a Campus Tour</option>
                          <option value="Academics & Islamic Studies">
                            Academics &amp; Islamic Studies
                          </option>
                          <option value="Parent & Alumni Relations">
                            Parent &amp; Alumni Relations
                          </option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="contact-subject"
                        className="block text-xs font-semibold text-[var(--color-text-primary)] mb-1.5"
                      >
                        Subject *
                      </label>
                      <input
                        id="contact-subject"
                        name="subject"
                        type="text"
                        required
                        value={formValues.subject}
                        onChange={handleChange}
                        placeholder="Brief summary of your enquiry"
                        className="w-full rounded-lg border border-[var(--color-border-strong)] bg-[var(--color-bg-primary)] px-3.5 py-2.5 text-sm text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-sky)]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-message"
                        className="block text-xs font-semibold text-[var(--color-text-primary)] mb-1.5"
                      >
                        Message *
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={4}
                        required
                        value={formValues.message}
                        onChange={handleChange}
                        placeholder="Write your message or preferred date/time for a campus visit..."
                        className="w-full rounded-lg border border-[var(--color-border-strong)] bg-[var(--color-bg-primary)] px-3.5 py-2.5 text-sm text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-sky)]"
                      />
                    </div>

                    <div className="pt-1">
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        rightIcon={<Send className="w-4 h-4" />}
                      >
                        Send Message
                      </Button>
                    </div>
                  </form>
                )}
              </Card>
            </Reveal>

            {/* Right Column: Administrative Hours & Admissions Shortcut (5 cols) */}
            <Reveal delay={0.1} className="lg:col-span-5 space-y-6">
              <Card variant="subtle" className="space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[var(--color-brand-primary)] text-white flex items-center justify-center">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-[var(--color-text-primary)]">
                      Administrative Hours
                    </h3>
                    <p className="text-xs text-[var(--color-text-muted)]">
                      Term-time reception &amp; visitor schedule
                    </p>
                  </div>
                </div>

                <ul className="divide-y divide-[var(--color-border-subtle)] text-sm">
                  {SITE_CONFIG.contact.officeHours.map((slot) => (
                    <li
                      key={slot.days}
                      className="py-3 flex items-center justify-between gap-4"
                    >
                      <span className="font-semibold text-[var(--color-text-primary)]">
                        {slot.days}
                      </span>
                      <span className="text-[var(--color-text-secondary)] text-right">
                        {slot.hours}
                      </span>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card variant="inverse" radius="signature" className="space-y-4">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-brand-sky)]">
                  2026/2027 ADMISSIONS
                </p>
                <h3 className="font-heading text-xl font-bold text-white">
                  Applying for JSS 1 or Secondary Transfer?
                </h3>
                <p className="text-sm text-sky-100/85 leading-relaxed">
                  Skip the queue by submitting your child&rsquo;s candidate screening registration
                  online in minutes.
                </p>
                <div className="pt-1">
                  <Button to={ROUTES.ADMISSIONS} variant="gold" size="md" withArrow>
                    Go to Admissions Form
                  </Button>
                </div>
              </Card>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 4. Interactive Campus Location Map (#campus-map) */}
      <section
        id="campus-map"
        aria-labelledby="map-heading"
        className="scroll-mt-28 py-16 bg-[var(--color-bg-secondary)] border-y border-[var(--color-border-subtle)]"
      >
        <Container className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <SectionHeading
              eyebrow="CAMPUS LOCATION"
              title={<span id="map-heading">Find Us on the Map</span>}
              description={SITE_CONFIG.contact.address}
            />

            <Button
              href={SITE_CONFIG.contact.mapDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="md"
              rightIcon={<ExternalLink className="w-4 h-4" />}
            >
              Open in Google Maps
            </Button>
          </div>

          <Reveal>
            <div className="rounded-signature-lg overflow-hidden border border-[var(--color-border-strong)] shadow-[var(--shadow-card)] bg-[var(--color-bg-elevated)]">
              <div className="relative w-full h-[360px] sm:h-[440px]">
                <iframe
                  title={`${SITE_CONFIG.name} Campus Location Map`}
                  src={SITE_CONFIG.contact.mapEmbedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full border-0"
                />
              </div>
              <div className="px-6 py-3.5 bg-[var(--color-bg-elevated)] border-t border-[var(--color-border-subtle)] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-[var(--color-text-muted)]">
                <span>
                  Interactive map showing {SITE_CONFIG.name} ({SITE_CONFIG.shortName}).
                </span>
                <a
                  href={SITE_CONFIG.contact.mapDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[var(--color-text-eyebrow)] hover:underline"
                >
                  Get turn-by-turn directions &rarr;
                </a>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  );
};