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
  reviewCount: 0,
  /** Link customers click to read/write reviews on Google. */
  googleReviewsUrl: 'https://share.google/onqMqSvXDVK9l6w2W',
  /** Keyless Google Maps embed — no API key or billing required. */
  mapEmbedSrc: 'https://maps.google.com/maps?q=BK42%20Auto%20Location&output=embed',
};

/**
 * Hardcoded Google reviews. Paste real reviews here — the section shows the
 * map alone until this array has entries, so nothing fake ever goes live.
 */
export const reviews: Review[] = [];
