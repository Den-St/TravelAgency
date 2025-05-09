import { useLocation } from "react-router-dom";
import { routes } from "../../../app/routes";

export const useShowHeader = () => {
    const path = useLocation().pathname;
    const headerExcludedRoutes:string[] = [routes.registration, routes.signIn, routes.forgotPassword,];
    const showHeader = !headerExcludedRoutes.includes(path);

    return showHeader;
}