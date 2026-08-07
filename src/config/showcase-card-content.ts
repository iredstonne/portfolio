type ShowcaseCardContent = {
    action: {
        label: string
    }
}

export const showcaseCardContent = {
    projects: {
        action: {
            label: "Voir le projet",
        },
    } satisfies ShowcaseCardContent,
    experiences: {
        action: {
            label: "Voir l'expérience",
        },
    } satisfies ShowcaseCardContent,
}
