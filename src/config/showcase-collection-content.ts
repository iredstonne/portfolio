type ShowcaseCollectionContent = {
    title: string
    summary: string
    emptyMessage: string
}

export const showcaseCollectionContent = {
    projects: {
        title: "Projects",
        summary: "Une sélection de projets représentatifs de mon travail.",
        emptyMessage: "Aucun projet à présenter pour le moment.",
    } satisfies ShowcaseCollectionContent,
    experiences: {
        title: "Experiences",
        summary: "Une sélection d'expériences qui ont façonné ma pratique et renforcé mes compétences.",
        emptyMessage: "Aucune expérience à présenter pour le moment.",
    } satisfies ShowcaseCollectionContent,
}
