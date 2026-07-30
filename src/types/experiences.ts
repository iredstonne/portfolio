import { ShowcaseCover } from "../types/showcase"

export type Experience = {
  slug: string
  cover?: ShowcaseCover
  title: string
  summary: string
  startedAt: string
  endedAt: string
  organization: string
  location: string
  featured: boolean
}
