import { Route, Routes } from "react-router-dom";
import { ForgotPassword, Home, MyProfile, MyTours, NotFound, Registration, SignIn } from "./pages";

//routes for all the pages
export const routes = {
    homePage:'/',

    registration:'/registration',
    signIn:'/sign-in',
    forgotPassword:'/forgot-password',

    myProfile:'/my-profile',
    myTours:'/my-tours',

    tour:'/tour/:id',
} as const;


export const PublicRoutes = [
    <Route key={routes.homePage} element={<Home/>} path={routes.homePage}/>,   
    <Route key={routes.signIn} element={<SignIn/>} path={routes.signIn}/>, 
    <Route key={routes.registration} element={<Registration/>} path={routes.registration}/>, 
    <Route key={routes.forgotPassword} element={<ForgotPassword/>} path={routes.forgotPassword}/>, 
    <Route key={routes.myProfile} element={<MyProfile/>} path={routes.myProfile}/>, 
    <Route key={routes.myTours} element={<MyTours/>} path={routes.myTours}/>, 
    <Route key={routes.myProfile} element={<MyProfile/>} path={routes.myProfile}/>,  
    <Route key={'*'} element={<NotFound/>} path={'*'}/>,
]

export const RoutesSwitch = () => {
    return <Routes>
        {PublicRoutes}
    </Routes>
}