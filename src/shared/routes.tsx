import { Route, Routes } from "react-router-dom";


export const routes = {
    homePage:'/',
    signIn:'/sign-in',
    myProfile:'/my-profile',
    registration:'/registration',
    forgotPassword:'/forgot-password',
    myTours:'/my-tours',
    myProfile:'/my-profile',
} as const;


export const PublicRoutes = [
    <Route key={routes.signIn} element={<SignIn/>} path={routes.signIn}/>,   
    <Route key={routes.homePage} element={<HomePage/>} path={routes.homePage}/>,   
    <Route key={routes.myProfile} element={<SecurityLevelGuard blockedForAdmin isActiveRequired={false} securityLevel={securityLevels.student}><MyProfile/></SecurityLevelGuard>} path={routes.myProfile}/>,  
    <Route key={'*'} element={<NoMatch title="Не вдалося знайти сторінку" description="Спробуйте перезайти на сайт або повторіть спробу пізніше." is404/>} path={'*'}/>,
]

export const RoutesSwitch = () => {
    return <Routes>
        {PublicRoutes}
    </Routes>
}