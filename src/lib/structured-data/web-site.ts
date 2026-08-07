import { createFragmentId } from "./fragment-id"

type CreateWebSiteOptions = {
    url: URL
    name: string
    description: string
    inLanguage: string
}

export const createWebSite = ({
    url,
    name,
    description,
    inLanguage,
}: CreateWebSiteOptions) => ({
    "@type": "WebSite",
    "@id": createFragmentId(url, "website"),
    url: url.href,
    name,
    description,
    inLanguage,
})
