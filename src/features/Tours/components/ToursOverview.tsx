import { TourCard } from './TourCard/TourCard';

import { toursMock } from '../constants/mocks';
export const ToursOverview = () => {
  return (
    <div className="flex flex-col items-end px-4 py-8 gap-8 w-full max-w-[1360px] mx-auto">
      {/* TODO: Sorting button */}

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8 w-full max-w-[1360px] mx-auto justify-items-center">
        {toursMock.map((tour) => (
          <TourCard tour={tour} key={tour.id} />
        ))}
      </div>
    </div>
  );
};
