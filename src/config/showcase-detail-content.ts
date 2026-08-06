import type { Experience } from "../types/experiences"
import type { Project, ProjectStatus } from "../types/projects"
import type { ShowcaseDetailListItem } from "../types/showcase"
import { getRoutePath } from "./routes"

type ShowcaseDetailContent<T> = {
    backLink: {
        href: string
        label: string
    }
    details: readonly {
        label: string
        value: (item: T) => ShowcaseDetailListItem["value"]
    }[]
}

const projectStatusLabels = {
    "planned": "Planifié",
    "in-progress": "En cours",
    "completed": "Terminé",
    "paused": "En pause",
} as const satisfies Record<ProjectStatus, string>

export const showcaseDetailContent = {
    projects: {
        backLink: {
            href: getRoutePath("projects"),
            label: "Tous les projets",
        },
        details: [
            {
                label: "État",
                value: (project: Project) => projectStatusLabels[project.status],
            },
            {
                label: "Période",
                value: (project: Project) => [project.startedAt, project.endedAt]
                    .filter(Boolean).join(" - "),
            },
        ],
    } satisfies ShowcaseDetailContent<Project>,
    experiences: {
        backLink: {
            href: getRoutePath("experiences"),
            label: "Toutes les expériences",
        },
        details: [
            {
                label: "Organisation",
                value: (experience: Experience) =>  experience.organization,
            },
            {
                label: "Lieu",
                value: (experience: Experience) => experience.location,
            },
            {
                label: "Période",
                value: (experience: Experience) => [experience.startedAt, experience.endedAt]
                    .filter(Boolean).join(" - "),
            },
        ],
    } satisfies ShowcaseDetailContent<Experience>,
}
