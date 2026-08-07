import type { JsonLdNode } from "../../types/structured-data"
import { createFragmentId } from "./fragment-id"

type CreateCollectionPageOptions = {
    url: URL
    name: string
    description: string
    inLanguage: string
    isPartOf: JsonLdNode
    breadcrumb?: JsonLdNode
    mainEntity?: JsonLdNode
}

export const createCollectionPage = ({
    url,
    name,
    description,
    inLanguage,
    isPartOf,
    breadcrumb,
    mainEntity,
}: CreateCollectionPageOptions) => ({
    "@type": "CollectionPage",
    "@id": createFragmentId(url, "webpage"),
    url: url.href,
    name,
    description,
    inLanguage,
    breadcrumb,
    isPartOf,
    mainEntity,
})
