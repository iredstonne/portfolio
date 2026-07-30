import { site } from "./site"
import { NavbarActionConfig } from "../types/navbar-actions"

export const navbarActions = [
  {
    href: `mailto:${site.ownerEmail}`,
    variant: "primary",
    label: "Contact",
  }
] as NavbarActionConfig[]
