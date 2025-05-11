export interface TourMock {
  id: string;
  name: string;
  imageURL: string;
  destination: {
    country: string;
    city: string;
    type: 'Resorts' | 'Cruises' | 'Hikes';
  };
  tourDates: { startDate: Date; durationDays: number }[];
  mealPlans: string[];
  maxGuests: number;
  hotelId: string;
  prices: { durationDays: number; pricePerPerson: number }[];
  averageRating: number;
  reviewCount: number;
}
