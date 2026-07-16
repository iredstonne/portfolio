export type HeroActionConfig = {
  href: string
  label: string
  variant: "primary" | "secondary"
}

export const heroActions = [
  {
    href: "mailto:kristofer.gehringer@gmail.com",
    variant: "primary",
    label: "Prise de contact",
  },
  {
    href: "/portfolio/projects",
    variant: "secondary",
    label: "Voir mes projets",
  },
] as HeroActionConfig[]
