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
  title: string
  ariaLabel: string
}

export const navbarSocialLinks = [
  {
    icon: "github",
    href: "https://github.com/iredstonne",
    title: "Me suivre sur GitHub",
    ariaLabel: "Me suivre sur GitHub",
  },
  {
    icon: "linkedin",
    href: "https://www.linkedin.com/in",
    title: "Se connecter avec moi sur LinkedIn",
    ariaLabel: "Se connecter avec moi sur LinkedIn",
  },
] satisfies NavbarSocialLinkConfig[]
