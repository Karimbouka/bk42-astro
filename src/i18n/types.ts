export type Locale = 'fr' | 'en';

export type LegalSection = {
  title: string;
  body: string;
  items?: string[];
};

export type FeatureItem = { title: string; body: string };

export interface Translation {
  htmlLang: string;
  dateLocale: string;

  // Nav
  navHome: string;
  navFleet: string;
  navBooking: string;
  navAbout: string;
  navContact: string;
  navBook: string;

  // Routes per locale (slug after /<locale>/)
  routes: {
    home: string;     // ''
    fleet: string;
    booking: string;
    about: string;
    contact: string;
    conditions: string;
    privacy: string;
  };

  // Hero
  heroTagline: string;
  heroHeadline: string;
  heroSub: string;
  heroBookNow: string;
  heroViewFleet: string;
  heroScroll: string;

  // Fleet card
  cardSeats: string;
  cardDay: string;
  cardBook: string;

  // FeatureRow
  whyBK: string;
  whyHeadline: string;
  whyItems: FeatureItem[];

  // Footer
  footerTagline: string;
  footerCompany: string;
  footerAbout: string;
  footerFleet: string;
  footerContact: string;
  footerOffices: string;
  footerConditions: string;
  footerPrivacy: string;
  footerCopyright: string;

  // Home
  homeFleetEyebrow: string;
  homeFleetHeadline: string;
  homeViewAll: string;
  homeTaglineEyebrow: string;
  homeTaglineQuote: string;
  homeTaglineBody: string;
  homeBookCta: string;
  homeLuckyNum: string;

  // Fleet
  fleetEyebrow: string;
  fleetHeadline: string;
  fleetSub: string;
  catAll: string;
  catEco: string;
  catCity: string;
  catSuv: string;

  // Pickup groups
  pickupCity: string;
  pickupAirports: string;

  // Booking
  bookBack: string;
  bookEyebrow: string;
  bookHeadline: string;
  bookPickup: string;
  bookPickupLoc: string;
  bookDate: string;
  bookTime: string;
  bookReturn: string;
  bookReturnLoc: string;
  bookDailyRate: string;
  bookDuration: string;
  bookInsurance: string;
  bookDelivery: string;
  bookIncluded: string;
  bookTotal: string;
  bookWhatsApp: string;
  bookNote: string;
  bookDay1: string;
  bookDayN: string;

  // About
  aboutEyebrow: string;
  aboutHeadline: string;
  aboutSub: string;
  aboutApproachEyebrow: string;
  aboutApproachTitle: string;
  aboutApproachBody: string;
  aboutCommitEyebrow: string;
  aboutCommitTitle: string;
  aboutCommitBody: string;

  // Contact
  contactEyebrow: string;
  contactHeadline: string;
  contactSub: string;
  contactName: string;
  contactNamePh: string;
  contactEmail: string;
  contactEmailPh: string;
  contactPhone: string;
  contactPhonePh: string;
  contactMessage: string;
  contactMessagePh: string;
  contactSend: string;
  contactPhoneLabel: string;
  contactWhatsApp: string;
  contactOffice: string;
  contactOfficeVal: string;
  contactOffice2: string;
  contactOfficeVal2: string;
  contactHours: string;
  contactHoursVal: string;

  // Confirmation
  confirmEyebrow: string;
  confirmHeadlineTpl: string; // contains {model}
  confirmSub: string;
  confirmNum: string;
  confirmTotal: string;
  confirmPickup: string;
  confirmReturn: string;
  confirmPickupDate: string;
  confirmReturnDate: string;
  confirmBackHome: string;
  confirmDownload: string;

  // Conditions
  conditionsEyebrow: string;
  conditionsHeadline: string;
  conditionsSub: string;
  conditionsBack: string;
  conditionsSections: LegalSection[];

  // Privacy
  privacyEyebrow: string;
  privacyHeadline: string;
  privacySub: string;
  privacyBack: string;
  privacySections: LegalSection[];

  // SEO
  seo: {
    home: { title: string; description: string };
    fleet: { title: string; description: string };
    booking: { title: string; description: string };
    about: { title: string; description: string };
    contact: { title: string; description: string };
    conditions: { title: string; description: string };
    privacy: { title: string; description: string };
  };
}
