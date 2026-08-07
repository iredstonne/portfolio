import type { JsonLdNode } from "../../types/structured-data"
import { createFragmentId } from "./fragment-id"

type CreateProfilePageOptions = {
    url: URL
    name: string
    description: string
    inLanguage: string
    isPartOf: JsonLdNode
    mainEntity: JsonLdNode
}

export const createProfilePage = ({
    url,
    name,
    description,
    inLanguage,
    isPartOf,
    mainEntity,
}: CreateProfilePageOptions) => ({
    "@type": "ProfilePage",
    "@id": createFragmentId(url, "webpage"),
    url: url.href,
    name,
    description,
    inLanguage,
    isPartOf,
    mainEntity,
})
