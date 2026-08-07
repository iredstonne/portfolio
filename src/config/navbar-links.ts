import { getRoutePath } from "./routes"
import type { NavbarLinkConfig } from "../types/navbar-link"

export const navbarLinks = [
    {
        href: getRoutePath("home"),
        label: "Accueil",
    },
    {
        href: getRoutePath("projects"),
        label: "Projets",
    },
    {
        href: getRoutePath("experiences"),
        label: "Expériences",
    },
] satisfies NavbarLinkConfig[]
