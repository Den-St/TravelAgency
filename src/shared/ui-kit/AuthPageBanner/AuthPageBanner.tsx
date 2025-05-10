import { Luggage } from '../Icons';
import { travelAgency } from './text';
import banner from '../../images/travelAgencyBanner.png';

export const AuthPageBanner = () => {
  return (
    <div
      data-testid="AuthPageBanner-testid"
      className={`max-w-[664px] w-[50%] flex flex-col justify-between p-10 rounded-[32px] bg-[length:110%] bg-[position:100%_30%]`}
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="flex">
        <Luggage className="text-white w-[28px] h-[40px]" />
        <h1 className="text-white">{travelAgency}</h1>
      </div>
      <h1 className="font-extrabold text-[64px] leading-[120%] text-blue-900">
        Let’s plan <br /> your next trip!
      </h1>
    </div>
  );
};
