import { createSitePath } from "./site"

const routes = {
    home: createSitePath(),
    projects: createSitePath("projects"),
    experiences: createSitePath("experiences"),
} as const

export type RouteName = keyof typeof routes

export const getRoutePath = (routeName: RouteName): string => {
    return routes[routeName]
}
