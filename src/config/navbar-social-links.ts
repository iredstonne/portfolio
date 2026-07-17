import {
    faGithub,
    faLinkedin,
    faYoutube
} from "@fortawesome/free-brands-svg-icons"
import {
    type IconDefinition,
} from "@fortawesome/fontawesome-svg-core"

export const availableSocialIconset = {
    github: faGithub,
    linkedin: faLinkedin,
    youtube: faYoutube
} satisfies Record<string, IconDefinition>

export type SocialIconName = keyof typeof availableSocialIconset

export type NavbarSocialLinkConfig = {
  icon: SocialIconName
  href: string
  handle: string
  tooltip: string
}

export const navbarSocialLinks = [
  {
    icon: "github",
    href: "https://github.com/iredstonne",
    handle: "@iredstonne",
    tooltip: "GitHub"
  },
  {
    icon: "linkedin",
    href: "https://www.linkedin.com/in",
    handle: "Kristofer Gehringer",
    tooltip: "LinkedIn"
  },
] satisfies NavbarSocialLinkConfig[]
