import { site } from "./site"
import { NavbarLinkConfig } from "../types/navbar-link"

export const navbarLinks = [
  {
    href: `${site.base}`,
    label: "Acceuil",
  },
  {
    href: `${site.base}/projects`,
    label: "Projets",
  },
  {
    href: `${site.base}/experiences`,
    label: "Expériences",
  }
] as NavbarLinkConfig[]
