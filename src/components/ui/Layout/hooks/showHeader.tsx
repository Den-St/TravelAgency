import { routes } from '@/app/routes';
import { useLocation } from 'react-router-dom';

export const useShowHeader = () => {
  const path = useLocation().pathname;
  const headerExcludedRoutes: string[] = [
    routes.registration,
    routes.signIn,
    routes.forgotPassword,
    routes.resetPassword,
  ];
  const showHeader = !headerExcludedRoutes.includes(path);

  return showHeader;
};
