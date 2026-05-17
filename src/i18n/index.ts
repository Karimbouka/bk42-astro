import { fr } from './fr';
import { en } from './en';
import type { Locale, Translation } from './types';

export const translations: Record<Locale, Translation> = { fr, en };

export const locales: Locale[] = ['fr', 'en'];

export const otherLocale = (l: Locale): Locale => (l === 'fr' ? 'en' : 'fr');

/** Build path like /fr/flotte/ or /en/fleet/ for a logical page key. */
export function localizedPath(locale: Locale, key: keyof Translation['routes']): string {
  const slug = translations[locale].routes[key];
  return slug ? `/${locale}/${slug}/` : `/${locale}/`;
}

/** Given a current locale + page key, return the alt-locale URL. */
export function altLocaleUrl(currentLocale: Locale, key: keyof Translation['routes']): string {
  return localizedPath(otherLocale(currentLocale), key);
}

export type { Locale, Translation };
