import { getBasePath } from "./site"

export const routes = {
    home: {
        label: "Accueil",
        segment: "",
    },
    projects: {
        label: "Projets",
        segment: "projects",
    },
    experiences: {
        label: "Expériences",
        segment: "experiences",
    },
} as const

export type RouteName = keyof typeof routes

export const getRoutePath = (routeName: RouteName): string => {
    const { segment } = routes[routeName]
    return segment ? `${getBasePath()}/${segment}` : getBasePath()
}
