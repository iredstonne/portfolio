import { ShowcaseCover } from "../types/showcase"

export type ProjectStatus =
    | "planned"
    | "in-progress"
    | "completed"
    | "paused"

export type Project = {
  slug: string
  cover?: ShowcaseCover
  title: string
  summary: string
  startedAt: string
  endedAt: string
  status: ProjectStatus
  technologies: readonly string[]
  featured: boolean
}
