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
  tooltip: string
}

export const navbarSocialLinks = [
  {
    icon: "github",
    href: "https://github.com/iredstonne",
    tooltip: "Me suivre sur GitHub"
  },
  {
    icon: "linkedin",
    href: "https://www.linkedin.com/in",
    tooltip: "Se connecter avec moi sur LinkedIn"
  },
] satisfies NavbarSocialLinkConfig[]
