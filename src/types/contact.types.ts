export type EnquiryTopic =
    | 'General Information'
    | 'JSS 1 & Transfer Admissions'
    | 'Schedule a Campus Tour'
    | 'Academics & Islamic Studies'
    | 'Parent & Alumni Relations';

export interface ContactFormValues {
    fullName: string;
    email: string;
    phone: string;
    topic: EnquiryTopic;
    subject: string;
    message: string;
}