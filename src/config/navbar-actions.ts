import { site } from "./site"

export type NavbarActionConfig = {
  href: string
  label: string
  variant: "primary" | "secondary"
}

export const navbarActions = [
  {
    href: `mailto:${site.ownerEmail}`,
    variant: "primary",
    label: "Contact",
  }
] as NavbarActionConfig[]
