import { format } from 'date-fns';

import { ShadowWrapper } from '@/components/ui/ShadowWrapper/ShadowWrapper';
import {
  Star,
  Calendar,
  Wallet,
  CheckMark,
  Info,
  Meal,
  Place,
} from '@/shared/ui-kit/Icons';
import { Button } from '@/components/ui/Button/Button';
import { LinkButton } from '@/components/ui/Button/LinkButton';
import { TourCardDetailRow } from './TourCardDetailRow/TourCardDetailRow';
import type { TourMock } from '../../models/Tours';

import { TOURS } from '../../constants/uiText';

interface TourCardProps {
  key: string;
  tour: TourMock;
}

// TODO: getFirstTourDate(), calcEndDate(), getLowestPrice(), getCancelationDate()
// FINDOUT: data for cancelation date
const CANCELLATION_DATE = 'December 25';

export const TourCard = ({ tour }: TourCardProps) => {
  const {
    name,
    imageURL,
    destination: { country, city },
    averageRating,
    reviewCount,
    tourDates,
    mealPlans,
    prices,
  } = tour;

  return (
    <ShadowWrapper className="flex flex-col md:flex-row lg:flex-col xl:flex-row items-start gap-6 max-w-[664px]">
      <div className="w-full md:w-[40%] lg:w-full h-[200px] sm:h-[336px] md:h-[336px] lg:h-[336px]">
        <img
          src={`${imageURL}`}
          alt={`Image of ${name} in ${city}, ${country}`}
          className="w-full h-full object-cover rounded-[12px]"
          loading="lazy"
        />
      </div>

      <div className="flex flex-col justify-between items-start w-full md:w-[60%] lg:w-full flex-1 gap-6 h-full">
        <div className="flex flex-row items-start gap-2 w-full  justify-between">
          <div className="flex flex-col min-w-[291px] ">
            <h3 className="text-blue-900">{name}</h3>
            <div className="flex flex-row items-center gap-1">
              <Place className="text-grey-700" size={16} />

              <p className=" text-grey-700 caption">{`${city}, ${country}`}</p>
            </div>
          </div>

          <div className="flex flex-col items-end gap-1 min-w-[60px]">
            <div className="flex flex-row items-center gap-1">
              <Star color="#0b3857" />
              <p className="caption text-blue-900">
                {averageRating.toFixed(1)}
              </p>
            </div>
            <p className="caption text-blue-900">
              {reviewCount} {TOURS.card.reviews}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <TourCardDetailRow icon={Calendar}>
            {format(tourDates[0].startDate, 'MMM d')}
          </TourCardDetailRow>
          <TourCardDetailRow icon={Meal}>
            {mealPlans.join(', ')}
          </TourCardDetailRow>
          <TourCardDetailRow icon={Wallet}>
            From <span className="font-bold">${prices[0].pricePerPerson} </span>
            per person
          </TourCardDetailRow>
          <TourCardDetailRow icon={CheckMark} color="text-green-400">
            {TOURS.card.cancelletionAvailable} {CANCELLATION_DATE}
          </TourCardDetailRow>
          <TourCardDetailRow icon={Info} color="text-red-400">
            {TOURS.card.cancelletionNotAvailable}
          </TourCardDetailRow>
        </div>

        {/* Buttons */}
        <div className="flex flex-row justify-end items-end gap-2 w-full mt-auto">
          <LinkButton to="/sign-in" variant="secondary">
            {TOURS.card.buttonDetails}
          </LinkButton>
          <Button> {TOURS.card.buttonBook}</Button>
        </div>
      </div>
    </ShadowWrapper>
  );
};
