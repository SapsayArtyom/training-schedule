import { RouteProps } from "react-router-dom"
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage"
// import { AboutPageAsync } from "../../pages/AboutPage/AboutPage.async"
import { HomePageAsync } from "../../pages/HomePage/HomePage.async"
import { SizePageAsync } from "../../pages/SizePage/SizePage.async"

export enum AppRoutes {
    HOME = 'home',
    SIZES = 'sizes',
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.HOME]: '/',
    [AppRoutes.SIZES]: '/sizes',
    [AppRoutes.NOT_FOUND]: '*',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.HOME]: {
        path: RoutePath.home,
        element: <HomePageAsync />
    },
    [AppRoutes.SIZES]: {
        path: RoutePath.sizes,
        element: <SizePageAsync />
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />
    }
}