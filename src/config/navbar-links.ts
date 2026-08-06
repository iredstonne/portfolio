import { getRouteLabel, getRoutePath } from "./routes"
import { NavbarLinkConfig } from "../types/navbar-link"

export const navbarLinks = [
  {
    href: getRoutePath("home"),
    label: getRouteLabel("home"),
  },
  {
    href: getRoutePath("projects"),
    label: getRouteLabel("projects"),
  },
  {
    href: getRoutePath("experiences"),
    label: getRouteLabel("experiences")
  }
] as NavbarLinkConfig[]
