import { site } from "./site"
import { HeroActionConfig } from "../types/hero-actions"

export const heroActions = [
  {
    href: `mailto:${site.ownerEmail}`,
    variant: "primary",
    label: "Prise de contact",
  }
] as HeroActionConfig[]
