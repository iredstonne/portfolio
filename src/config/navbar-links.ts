import { getRoutePath, routes } from "./routes"
import { NavbarLinkConfig } from "../types/navbar-link"

export const navbarLinks = [
  {
    href: getRoutePath("home"),
    label: routes.home.label,
  },
  {
    href: getRoutePath("projects"),
    label: routes.projects.label,
  },
  {
    href: getRoutePath("experiences"),
    label: routes.experiences.label,
  }
] as NavbarLinkConfig[]
