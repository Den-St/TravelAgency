import { Luggage, User } from '@/shared/ui-kit/Icons';
import { useState } from 'react';
import { headerText, navLinksText } from '../consts/text';
import { routes } from '@/app/routes';
import { LinkButton } from '@/components/ui/Button/LinkButton';
import { NavLink } from './NavLink';
import { Link } from 'react-router-dom';

// type Roles = "client" | "travelAgent";

// const RolesNavLinks:Record<Roles, React.ReactNode> = {

// }

export const Header = () => {
  const [isAuthed] = useState(true); //just for testing unauthed user
  //   const [role] = useState<"client" | "travelAgent">("client"); //just for testing diferent roles layout

  return (
    <header
      data-testid="Header-testid"
      className="bg-white h-18 flex items-center justify-between px-10"
    >
      <div className="flex gap-[10px] items-center">
        <Luggage width={48} height={48} className="text-blue-500" size={48} />
        <h2 className="text-blue-500">{headerText.title}</h2>
      </div>

      <nav className="flex gap-2 h-[100%]">
        <NavLink text={navLinksText.mainPage} to={routes.homePage} />
        {isAuthed && (
          <NavLink text={navLinksText.myTours} to={routes.myTours} />
        )}
      </nav>

      {isAuthed ? (
        <Link to={routes.myProfile}>
          <User size={24} className="text-blue-900" />
        </Link>
      ) : (
        <LinkButton to={routes.signIn} variant={'secondary'}>
          {headerText.signIn}
        </LinkButton>
      )}
    </header>
  );
};
