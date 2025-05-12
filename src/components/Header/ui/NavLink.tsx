import type { routes } from '@/app/routes';
import { cn } from '@/lib/utils';
import { useLocation, Link } from 'react-router-dom';
import type { navLinksText } from '../consts/text';

type NavLinkProps = {
  to: (typeof routes)[keyof typeof routes];
  text: (typeof navLinksText)[keyof typeof navLinksText];
};
export const NavLink: React.FC<NavLinkProps> = ({ to, text }) => {
  const route = useLocation().pathname;

  return (
    <Link
      to={to}
      className={cn(
        'text-blue-900 hover:text-blue-700 h-[100%] relative w-[127px] flex items-center justify-center'
      )}
    >
      {text}
      <div
        className={cn(
          'absolute w-full h-[5px] bottom-0 left-1/2 -translate-x-1/2 bg-blue-500 rounded-[6px] duration-[0.2s]',
          { 'h-[5px]': route === to, 'h-[0px]': route !== to }
        )}
      />
    </Link>
  );
};
