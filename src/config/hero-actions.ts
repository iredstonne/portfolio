import { site } from "./site"
import { HeroActionConfig } from "../types/hero-actions"

export const heroActions = [
  {
    href: `mailto:${site.authorEmail}`,
    variant: "primary",
    label: "Prise de contact",
  }
] as HeroActionConfig[]
