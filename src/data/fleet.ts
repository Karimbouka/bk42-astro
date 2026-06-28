export type CarColor = 'Noir' | 'Gris' | 'Blanc';
export type CarCategoryKey = 'eco' | 'city' | 'suv';

export interface Car {
  id: string;
  model: string;
  year: number;
  color: CarColor;
  /** Color label per locale */
  colorLabel: { fr: string; en: string };
  /** Category key — translated via t.cat* */
  catKey: CarCategoryKey;
  price: number; // MAD per day
  seats: number;
  gear: { fr: string; en: string };
  fuel: { fr: string; en: string };
  img: string; // path under /images/cars/
  alt: { fr: string; en: string };
}

const gear = { fr: 'Manuelle', en: 'Manual' };
const diesel = { fr: 'Diesel', en: 'Diesel' };

const colorLabels = {
  Noir: { fr: 'Noir', en: 'Black' },
  Gris: { fr: 'Gris', en: 'Grey' },
  Blanc: { fr: 'Blanc', en: 'White' },
} as const;

export const fleet: Car[] = [
  {
    id: 'streetway-gris-1',
    model: 'Dacia Streetway',
    year: 2026,
    color: 'Gris',
    colorLabel: colorLabels.Gris,
    catKey: 'city',
    price: 300, seats: 5, gear, fuel: diesel,
    img: 'streetway-gris.webp',
    alt: { fr: 'Dacia Streetway 2026 grise, location au Maroc', en: 'Dacia Streetway 2026 grey, rent in Morocco' },
  },
  {
    id: '208-noir',
    model: 'Peugeot 208',
    year: 2026,
    color: 'Noir',
    colorLabel: colorLabels.Noir,
    catKey: 'city',
    price: 350, seats: 5, gear, fuel: diesel,
    img: 'peugeot-208-noir.jpg',
    alt: { fr: 'Peugeot 208 2026 noire, location au Maroc', en: 'Peugeot 208 2026 black, rent in Morocco' },
  },
  {
    id: 'logan-noir',
    model: 'Dacia Logan',
    year: 2026,
    color: 'Noir',
    colorLabel: colorLabels.Noir,
    catKey: 'eco',
    price: 250, seats: 5, gear, fuel: diesel,
    img: 'logan-noir.jpg',
    alt: { fr: 'Dacia Logan 2026 noire, location au Maroc', en: 'Dacia Logan 2026 black, rent in Morocco' },
  },
  {
    id: 'stepway-noir',
    model: 'Dacia Stepway',
    year: 2026,
    color: 'Noir',
    colorLabel: colorLabels.Noir,
    catKey: 'suv',
    price: 350, seats: 5, gear, fuel: diesel,
    img: 'stepway-noir.jpg',
    alt: { fr: 'Dacia Stepway 2026 noire, SUV compact au Maroc', en: 'Dacia Stepway 2026 black, compact SUV in Morocco' },
  },
  {
    id: '208-blanc',
    model: 'Peugeot 208',
    year: 2026,
    color: 'Blanc',
    colorLabel: colorLabels.Blanc,
    catKey: 'city',
    price: 350, seats: 5, gear, fuel: diesel,
    img: 'peugeot-208-blanc.webp',
    alt: { fr: 'Peugeot 208 2026 blanche, location au Maroc', en: 'Peugeot 208 2026 white, rent in Morocco' },
  },
  {
    id: '208-gris',
    model: 'Peugeot 208',
    year: 2026,
    color: 'Gris',
    colorLabel: colorLabels.Gris,
    catKey: 'city',
    price: 350, seats: 5, gear, fuel: diesel,
    img: 'peugeot-208-gris.jpg',
    alt: { fr: 'Peugeot 208 2026 grise, location au Maroc', en: 'Peugeot 208 2026 grey, rent in Morocco' },
  },
  {
    id: 'streetway-gris-2',
    model: 'Dacia Streetway',
    year: 2026,
    color: 'Gris',
    colorLabel: colorLabels.Gris,
    catKey: 'city',
    price: 300, seats: 5, gear, fuel: diesel,
    img: 'streetway-gris.webp',
    alt: { fr: 'Dacia Streetway 2026 grise, location au Maroc', en: 'Dacia Streetway 2026 grey, rent in Morocco' },
  },
];

export const PICKUP_CITIES = [
  'Tanger', 'Tétouan', 'Larache', 'Asilah', 'Ksar el-Kébir',
  'Chefchaouen', 'Rabat', 'Kénitra', 'Casablanca',
] as const;

export const PICKUP_AIRPORTS = [
  'Aéroport Tanger Ibn Batouta',
  'Aéroport Tétouan Sania Ramel',
  'Aéroport Rabat-Salé',
  'Aéroport Mohammed V Casablanca',
] as const;
