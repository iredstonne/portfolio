export type NavbarActionConfig = {
  href: string
  label: string
  variant: "primary" | "secondary"
}

export const navbarActions = [
  {
    href: "mailto:kristofer.gehringer@gmail.com",
    variant: "primary",
    label: "Contact",
  }
] as NavbarActionConfig[]
