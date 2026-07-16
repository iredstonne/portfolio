export type NavbarLinkConfig = {
  href: string
  label: string
}

export const navbarLinks = [
  {
    href: "/portfolio",
    label: "Acceuil",
  },
  {
    href: "/portfolio/projects",
    label: "Projets",
  },
  {
    href: "/portfolio/experiences",
    label: "Expériences",
  }
] satisfies NavbarLinkConfig[]
