import type { Translation } from './types';

export const en: Translation = {
  htmlLang: 'en',
  dateLocale: 'en-GB',

  navHome: 'Home',
  navFleet: 'Fleet',
  navBooking: 'Booking',
  navAbout: 'About',
  navContact: 'Contact',
  navBook: 'Book',

  routes: {
    home: '',
    fleet: 'fleet',
    booking: 'booking',
    about: 'about',
    contact: 'contact',
    conditions: 'terms',
    privacy: 'privacy',
  },

  heroTagline: 'Car Rental, Morocco',
  heroHeadline: 'The Keys to Morocco.',
  heroSub: 'Car rental in Morocco. Delivered to you.',
  heroBookNow: 'Book Now',
  heroViewFleet: 'View Fleet',
  heroScroll: 'Scroll',

  cardSeats: 'seats',
  cardDay: '/ day',
  cardBook: 'Book →',

  whyBK: 'Why BK42',
  whyHeadline: 'Built for a country worth exploring.',
  whyItems: [
    {
      title: 'Airport Delivery',
      body:
        'We meet you at Marrakech, Casablanca, Rabat, Agadir and Tangier. No shuttle, no queues.',
    },
    {
      title: 'Fully Insured',
      body:
        'Every rental includes comprehensive insurance, 24/7 assistance, and a Moroccan SIM card on request.',
    },
    {
      title: '2026 Fleet',
      body:
        'All our cars are brand-new, current-year models. Every vehicle is serviced between each rental.',
    },
    {
      title: 'Flexible Payment',
      body:
        'No deposit required. Payment on pickup, cash or card. Free cancellation up to 48h before.',
    },
  ],

  footerTagline: 'Car rental in Morocco. Larache, Tangier, Rabat, Casablanca.',
  footerCompany: 'Company',
  footerAbout: 'About',
  footerFleet: 'Fleet',
  footerContact: 'Contact',
  footerOffices: 'Offices',
  footerConditions: 'Terms',
  footerPrivacy: 'Privacy',
  footerCopyright: '© 2026 BK42 Car Rental, Morocco',

  homeFleetEyebrow: 'Our Fleet',
  homeFleetHeadline: 'Seven vehicles, ready to go.',
  homeViewAll: 'View full fleet →',
  homeTaglineEyebrow: 'Tagline',
  homeTaglineQuote: '"The Keys to Morocco."',
  homeTaglineBody:
    "A new fleet, direct service, a country to explore. That's what we do, and we do it well.",
  homeBookCta: 'Book Your Car',
  homeLuckyNum: 'Our lucky number',

  fleetEyebrow: 'Fleet',
  fleetHeadline: 'Choose your car.',
  fleetSub: 'Seven 2026 vehicles, all brand new, ready for the road. Airport delivery included.',
  catAll: 'All',
  catEco: 'Economy',
  catCity: 'City Car',
  catSuv: 'Compact SUV',

  pickupCity: 'City Delivery',
  pickupAirports: 'Airports',

  bookBack: '← Back to Fleet',
  bookEyebrow: 'Booking',
  bookHeadline: 'Complete your reservation.',
  bookPickup: 'Pickup',
  bookPickupLoc: 'Pickup Location',
  bookDate: 'Date',
  bookTime: 'Time',
  bookReturn: 'Return',
  bookReturnLoc: 'Return Location',
  bookDailyRate: 'Daily Rate',
  bookDuration: 'Duration',
  bookInsurance: 'Insurance',
  bookDelivery: 'Delivery',
  bookIncluded: 'Included',
  bookTotal: 'Total',
  bookWhatsApp: 'Book on WhatsApp',
  bookNote: 'No deposit, free cancellation up to 48h before.',
  bookDay1: 'day',
  bookDayN: 'days',

  aboutEyebrow: 'About',
  aboutHeadline: 'One Fleet. One Country. One Service.',
  aboutSub:
    'BK42 is a Moroccan car rental company based in Larache, Morocco. We operate a fleet of seven brand-new 2026 vehicles, renewed every year.',
  aboutApproachEyebrow: 'Our Approach',
  aboutApproachTitle: 'Simple, direct, trustworthy.',
  aboutApproachBody:
    'No intermediary agency, no hidden fees. You book, we deliver the car, you drive. Every vehicle is cleaned and serviced between each rental.',
  aboutCommitEyebrow: 'Our Commitment',
  aboutCommitTitle: 'A new car, every time.',
  aboutCommitBody:
    'Our fleet is fully renewed every year. In 2026, you rent a 2026. That is our standard, and we keep it.',

  contactEyebrow: 'Contact',
  contactHeadline: "Let's talk about your trip.",
  contactSub:
    'A question, a special request, a long-term rental. We respond within 2 hours, 7 days a week.',
  contactName: 'Name',
  contactNamePh: 'Your name',
  contactEmail: 'Email',
  contactEmailPh: 'your@email.com',
  contactPhone: 'Phone',
  contactPhonePh: '+212',
  contactMessage: 'Message',
  contactMessagePh: 'How can we help you?',
  contactSend: 'Send',
  contactPhoneLabel: 'Phone',
  contactWhatsApp: 'WhatsApp',
  contactOffice: 'Main Office',
  contactOfficeVal: 'Lot ennour N56, Larache',
  contactOffice2: 'Airport',
  contactOfficeVal2: 'Tangier-Ibn Battouta Airport, Boukhalef, Tangier, Morocco',
  contactHours: 'Hours',
  contactHoursVal: '7 days/week, 06:00 to 23:00',

  confirmEyebrow: 'Booking Confirmed',
  confirmHeadlineTpl: 'Your {model} is ready.',
  confirmSub: 'Marrakech Menara Airport, Friday 12 May 2026, 14:00.',
  confirmNum: 'Confirmation',
  confirmTotal: 'Total',
  confirmPickup: 'Pickup',
  confirmReturn: 'Return',
  confirmPickupDate: '12 May 2026, 14:00',
  confirmReturnDate: '19 May 2026, 10:00',
  confirmBackHome: 'Back to Home',
  confirmDownload: 'Download Itinerary',

  conditionsEyebrow: 'Legal Notice',
  conditionsHeadline: 'Rental Terms.',
  conditionsSub: 'The following conditions apply to all vehicle rentals with BK42 Car Rental, Larache.',
  conditionsBack: 'Back to Home',
  conditionsSections: [
    {
      title: '1. Minimum Rental Period',
      body:
        'The minimum rental period is 24 hours. Any period started beyond this is charged in 24-hour increments.',
    },
    {
      title: '2. Required Documents',
      body: 'The driver must present the following documents at pickup:',
      items: [
        'Valid national ID card or passport.',
        'Valid driving license, issued at least one year ago.',
      ],
    },
    {
      title: '3. Security Deposit',
      body:
        'A security deposit is required at vehicle pickup. The amount depends on the model rented. It is fully refunded after return, provided no damage or violations are found.',
    },
    {
      title: '4. Cancellation',
      body: 'Cancellation is free up to 48 hours before the pickup date. After this period, fees may apply.',
    },
    {
      title: '5. Fuel',
      body:
        'The vehicle is delivered with a full tank. It must be returned with a full tank. Otherwise, missing fuel will be charged.',
    },
    {
      title: '6. Territory of Use',
      body:
        'Vehicles are authorized to operate only within the Kingdom of Morocco. Any exit from the territory is strictly prohibited.',
    },
    { title: '7. Company', body: 'BK42 Car Rental, Larache, Morocco.' },
  ],

  privacyEyebrow: 'Privacy',
  privacyHeadline: 'Privacy Policy.',
  privacySub:
    'BK42 Car Rental respects your privacy and complies with the General Data Protection Regulation (GDPR).',
  privacyBack: 'Back to Home',
  privacySections: [
    {
      title: '1. Data Controller',
      body: 'BK42 Car Rental, Larache, Morocco. Contact: bk42rentcars@gmail.com.',
    },
    {
      title: '2. Data Collected',
      body: 'We only collect data strictly necessary for managing your reservation:',
      items: ['First and last name.', 'Phone number.', 'Email address.'],
    },
    {
      title: '3. Purpose',
      body:
        'Your data is used exclusively to process your booking and contact you about your rental. It is never sold or shared with third parties for commercial purposes.',
    },
    {
      title: '4. Legal Basis',
      body:
        'Processing is based on the execution of the rental contract you request from us, as well as your consent when you contact us.',
    },
    {
      title: '5. Retention Period',
      body:
        'Your data is retained for the time necessary to process your reservation, then archived in accordance with applicable legal obligations.',
    },
    {
      title: '6. Your Rights',
      body:
        'Under GDPR, you have the right of access, rectification, portability, restriction, and objection to processing. You may also request deletion of your data at any time.',
    },
    {
      title: '7. Deletion Request',
      body:
        'To exercise your rights or request deletion of your personal data, write to: bk42rentcars@gmail.com. Your request will be processed as soon as possible.',
    },
  ],

  seo: {
    home: {
      title: 'BK42 | Car Rental in Morocco | Larache, Tangier, Rabat',
      description:
        'Car rental in Morocco. Brand-new 2026 fleet, free airport delivery, comprehensive insurance. Larache, Tangier, Rabat, Casablanca.',
    },
    fleet: {
      title: 'Our 2026 Fleet | Peugeot 208, Dacia Logan, Stepway | BK42',
      description:
        'Seven brand-new 2026 vehicles available for rent in Morocco. Peugeot 208, Dacia Logan, Streetway, Stepway. From 250 MAD/day.',
    },
    booking: {
      title: 'Online Booking | BK42 Morocco Car Rental',
      description:
        'Book your car in Morocco in minutes. No deposit, free cancellation up to 48h before. Free delivery to Tangier, Rabat, Casablanca.',
    },
    about: {
      title: 'About BK42 | Car Rental in Morocco',
      description:
        'BK42 is a Moroccan car rental company based in Larache. Fleet of seven brand-new 2026 vehicles, renewed every year. Direct service, no intermediary.',
    },
    contact: {
      title: 'Contact BK42 | Phone, WhatsApp, Email',
      description:
        'Contact us: +212 7 06 40 18 27, bk42rentcars@gmail.com. Main office Lot ennour N56, Larache. Tangier-Ibn Battouta Airport. Reply within 2h.',
    },
    conditions: {
      title: 'Rental Terms | BK42',
      description:
        "BK42 rental terms and conditions: minimum rental period, required documents, security deposit, cancellation, fuel, territory of use.",
    },
    privacy: {
      title: 'Privacy Policy | BK42',
      description:
        'BK42 privacy policy compliant with GDPR: data collected, purpose, retention period, your rights.',
    },
  },
};
