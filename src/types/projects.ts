import { ShowcaseCover } from "../types/showcase"

export const projectStatuses = [
    "planned",
    "in-progress",
    "completed",
    "paused",
] as const

export type ProjectStatus = typeof projectStatuses[number]

export type Project = {
  slug: string
  cover?: ShowcaseCover
  title: string
  summary: string
  startedAt: string
  endedAt: string
  status: ProjectStatus
  tags: readonly string[]
  featured: boolean
}
