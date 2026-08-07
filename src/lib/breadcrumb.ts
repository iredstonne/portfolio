import { splitNonEmpty } from "./string"

type BreadcrumbItem = {
    name: string
    item: URL
}

export const createBreadcrumbItems = (
    canonicalURL: URL,
    siteURL: URL,
): BreadcrumbItem[] => {
    const pagePath = canonicalURL.pathname.slice(siteURL.pathname.length)
    const pageSegments = splitNonEmpty(pagePath, "/")
    const itemPathSegments: string[] = []
    const items: BreadcrumbItem[] = []
    for (const pageSegment of pageSegments) {
        itemPathSegments.push(pageSegment)
        items.push({
            name: pageSegment,
            item: new URL(itemPathSegments.join("/"), siteURL),
        })
    }
    return items
}
