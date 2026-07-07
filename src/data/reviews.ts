export interface Review {
  /** Reviewer name as shown on Google */
  author: string;
  /** Whole-star rating, 1–5 */
  rating: number;
  /** Review text, in the language the customer wrote it */
  text: string;
  /** Month/year, e.g. 'Juin 2026' / 'June 2026' */
  date: string;
}

/** Business identity for the map + reviews section (BK42 Auto Location). */
export const business = {
  name: 'BK42 Auto Location',
  /** Overall Google rating shown in the summary. Update when it changes. */
  rating: 5.0,
  /** Number of Google reviews. Update when it changes. */
  reviewCount: 8,
  /** Link customers click to read/write reviews on Google. */
  googleReviewsUrl: 'https://share.google/onqMqSvXDVK9l6w2W',
  /** Postal address for the NAP block — matches the Google Business Profile exactly. */
  address: 'NR 56, Lot Ennour, Larache 92000, Maroc',
  /** Phone in display and tel: forms. */
  phoneDisplay: '+212 7 06 40 18 27',
  phoneTel: '+212706401827',
  whatsappUrl: 'https://wa.me/212706401827',
  email: 'bk42rentcars@gmail.com',
  /** Keyless Google Maps embed — no API key or billing required. */
  mapEmbedSrc: 'https://maps.google.com/maps?q=BK42%20Auto%20Location%2C%20Larache&output=embed',
};

/**
 * Hardcoded Google reviews. Paste real reviews here — the section shows the
 * map alone until this array has entries, so nothing fake ever goes live.
 */
export const reviews: Review[] = [
  {
    author: 'FZ Haddad',
    rating: 5,
    text: 'Clean cars and great experience.',
    date: '06/2026',
  },
  {
    author: 'Adil El bouti',
    rating: 5,
    text: 'Voiture en très bon état, équipe sympathique et ponctuelle. Merci !',
    date: '06/2026',
  },
  {
    author: 'Usssma Benazzouz',
    rating: 5,
    text: 'Muy buen servicio y trato excelente. El coche estaba limpio y en muy buenas condiciones. Lo recomiendo 👍',
    date: '06/2026',
  },
  {
    author: 'Basma Ismaili',
    rating: 5,
    text: 'Service excellent, voitures propres et en très bon état. Je recommande 👍',
    date: '06/2026',
  },
];
