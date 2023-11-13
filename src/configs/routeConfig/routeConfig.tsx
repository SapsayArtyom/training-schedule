import { RouteProps } from "react-router-dom"
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage"
import { AboutPageAsync } from "../../pages/AboutPage/AboutPage.async"
import { HomePageAsync } from "../../pages/HomePage/HomePage.async"

export enum AppRoutes {
    HOME = 'home',
    // ABOUT = 'about',
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.HOME]: '/',
    // [AppRoutes.ABOUT]: '/about',
    [AppRoutes.NOT_FOUND]: '*',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.HOME]: {
        path: RoutePath.home,
        element: <HomePageAsync />
    },
    // [AppRoutes.ABOUT]: {
    //     path: RoutePath.about,
    //     element: <AboutPageAsync />
    // },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />
    }
}