import type { TourMock } from '../../../shared/models/Tours';

export const toursMock: TourMock[] = [
  {
    id: '1',
    name: 'Tropical Caribe',
    imageURL: 'https://placehold.co/600x400',
    destination: {
      country: 'Dominican Republic',
      city: 'Punta Cana',
      type: 'Resorts',
    },
    tourDates: [
      {
        startDate: new Date('2024-01-04'),
        durationDays: 7,
      },
    ],
    mealPlans: [
      'Breakfast (BB)',
      'Half-board (HB)',
      'Full-board (FB)',
      'All inclusive (AI)',
    ],
    maxGuests: 20,
    hotelId: 'hotel-123',
    prices: [
      {
        durationDays: 7,
        pricePerPerson: 1400,
      },
    ],
    averageRating: 5.0,
    reviewCount: 19,
  },
  {
    id: '2',
    name: 'Mediterranean Cruise',
    imageURL: 'https://placehold.co/600x400',
    destination: {
      country: 'Italy',
      city: 'Venice',
      type: 'Cruises',
    },
    tourDates: [
      {
        startDate: new Date('2024-05-15'),
        durationDays: 10,
      },
    ],
    mealPlans: ['All inclusive (AI)', 'Full-board (FB)'],
    maxGuests: 150,
    hotelId: 'cruise-456',
    prices: [
      {
        durationDays: 10,
        pricePerPerson: 2500,
      },
    ],
    averageRating: 4.8,
    reviewCount: 45,
  },
  {
    id: '3',
    name: 'Alpine Adventure',
    imageURL: 'https://placehold.co/600x400',
    destination: {
      country: 'Switzerland',
      city: 'Zermatt',
      type: 'Hikes',
    },
    tourDates: [
      {
        startDate: new Date('2024-06-01'),
        durationDays: 5,
      },
    ],
    mealPlans: ['Breakfast (BB)', 'Half-board (HB)'],
    maxGuests: 15,
    hotelId: 'hotel-789',
    prices: [
      {
        durationDays: 5,
        pricePerPerson: 1200,
      },
    ],
    averageRating: 4.9,
    reviewCount: 32,
  },
  {
    id: '4',
    name: 'Safari Expedition',
    imageURL: 'https://placehold.co/600x400',
    destination: {
      country: 'Kenya',
      city: 'Nairobi',
      type: 'Hikes',
    },
    tourDates: [
      {
        startDate: new Date('2024-07-10'),
        durationDays: 8,
      },
    ],
    mealPlans: ['Breakfast (BB)', 'Full-board (FB)'],
    maxGuests: 10,
    hotelId: 'hotel-321',
    prices: [
      {
        durationDays: 8,
        pricePerPerson: 2000,
      },
    ],
    averageRating: 4.7,
    reviewCount: 28,
  },
  {
    id: '5',
    name: 'Caribbean Escape',
    imageURL: 'https://placehold.co/600x400',
    destination: {
      country: 'Bahamas',
      city: 'Nassau',
      type: 'Resorts',
    },
    tourDates: [
      {
        startDate: new Date('2024-03-20'),
        durationDays: 6,
      },
    ],
    mealPlans: ['Breakfast (BB)', 'All inclusive (AI)'],
    maxGuests: 25,
    hotelId: 'hotel-654',
    prices: [
      {
        durationDays: 6,
        pricePerPerson: 1800,
      },
    ],
    averageRating: 4.6,
    reviewCount: 22,
  },
];
