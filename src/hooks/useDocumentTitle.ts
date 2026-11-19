import { useEffect } from 'react';
import { SITE_CONFIG } from '../config/site.config';

export interface DocumentMetaOptions {
    title: string;
    description?: string;
}

function upsertMetaTag(attributeName: 'name' | 'property', key: string, content: string): void {
    let tag = document.querySelector(`meta[${attributeName}="${key}"]`);
    if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attributeName, key);
        document.head.appendChild(tag);
    }
    tag.setAttribute('content', content);
}

export function useDocumentTitle({ title, description }: DocumentMetaOptions): void {
    useEffect(() => {
        const fullTitle =
            title === SITE_CONFIG.name
                ? `${SITE_CONFIG.name} (${SITE_CONFIG.shortName})`
                : `${title} | ${SITE_CONFIG.shortName}`;

        document.title = fullTitle;

        if (description) {
            upsertMetaTag('name', 'description', description);
            upsertMetaTag('property', 'og:description', description);
        }

        upsertMetaTag('property', 'og:title', fullTitle);
    }, [title, description]);
}