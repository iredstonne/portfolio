export const basePath = import.meta.env.BASE_URL.replace(/\/+$/, "")

const createRoutePath = (segment = ""): string => {
    return segment ? `${basePath}/${segment}` : segment;
}

const routes = {
    home: {
        label: "Accueil",
        path: createRoutePath(),
    },
    projects: {
        label: "Projets",
        path: createRoutePath("projects"),
    },
    experiences: {
        label: "Expériences",
        path: createRoutePath("experiences"),
    },
} as const

export type RouteName = keyof typeof routes

export const getRouteLabel = (routeName: RouteName): string => {
    return routes[routeName].label
}

export const getRoutePath = (routeName: RouteName): string => {
    return routes[routeName].path
}
