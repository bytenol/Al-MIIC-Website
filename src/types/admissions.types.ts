export interface EntryRequirementGroup {
    id: string;
    stageLabel: string;
    title: string;
    eligibility: string;
    documents: string[];
    assessmentNote: string;
}

export interface ApplicationStep {
    stepNumber: string;
    title: string;
    description: string;
    timeline: string;
}

export interface FeeComponent {
    category: string;
    coverage: string;
    schedule: string;
}

export interface AdmissionFaq {
    id: string;
    question: string;
    answer: string;
}

export interface AdmissionEnquiryFormValues {
    studentFullName: string;
    dateOfBirth: string;
    gender: 'Male' | 'Female' | '';
    targetClass: 'JSS 1' | 'JSS 2' | 'SS 1' | 'SS 2' | '';
    preferredTrack: 'General (JSS)' | 'Science & Technology' | 'Humanities & Arts' | 'Business & Commercial' | '';
    boardingPreference: 'Day Student' | 'Boarding Student' | '';
    currentSchool: string;
    guardianName: string;
    guardianPhone: string;
    guardianEmail: string;
    additionalNotes: string;
}