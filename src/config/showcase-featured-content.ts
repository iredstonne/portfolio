import { getRoutePath } from "./routes"

type ShowcaseFeaturedContent = {
    targetId: string
    title: string
    summary: string
    moreLink: {
        label: string
        href: string
    }
}

export const showcaseFeaturedContent = {
    projects: {
        targetId: "projects",
        title: "Projets mis en avant",
        summary: "Une sélection de projets représentatifs de mon travail.",
        moreLink: {
            label: "Découvrir tous les projets",
            href: getRoutePath("projects"),
        },
    } satisfies ShowcaseFeaturedContent,
    experiences: {
        targetId: "experiences",
        title: "Expériences mises en avant",
        summary: "Une sélection d'expériences qui ont façonné ma pratique et renforcé mes compétences.",
        moreLink: {
            label: "Découvrir toutes les expériences",
            href: getRoutePath("experiences"),
        },
    } satisfies ShowcaseFeaturedContent,
}
