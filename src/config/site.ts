import type { SiteConfig } from "../types/site"
import {
    createPerson,
    createWebSite,
} from "../lib/structured-data"

export const site = {
    name: "Portfolio de Kristofer Gehringer",
    description: "Portfolio de Kristofer Gehringer, développeur web belgo-autrichien.",
    language: "fr",
    locale: "fr_BE",
    authorName: "Kristofer Gehringer",
    authorEmail: "kristofer.gehringer@gmail.com",
    githubUrl: "https://github.com/iredstonne",
    githubHandle: "@iredstonne",
    linkedinUrl: "https://www.linkedin.com/in",
    linkedinHandle: "Kristofer Gehringer",
    repositoryUrl: "https://github.com/iredstonne/portfolio",
} satisfies SiteConfig

const createSiteURL = (): URL => {
    const url = new URL(
        import.meta.env.BASE_URL,
        import.meta.env.SITE,
    )
    if (!url.pathname.endsWith("/")) {
        url.pathname += "/"
    }
    return url
}

export const siteURL = createSiteURL()

export const createSitePath = (path = ""): string => {
    return new URL(path, siteURL).pathname
}

export const websiteStructuredData = createWebSite({
    url: siteURL,
    name: site.name,
    description: site.description,
    inLanguage: site.language,
})

export const personStructuredData = createPerson({
    url: siteURL,
    name: site.authorName,
    email: site.authorEmail,
    sameAs: [
        site.githubUrl,
        site.linkedinUrl,
    ],
})
