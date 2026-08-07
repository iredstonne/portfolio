import { createFragmentId } from "./fragment-id"

type CreatePersonOptions = {
    url: URL
    name: string
    email: string
    sameAs: readonly string[]
}

export const createPerson = ({
    url,
    name,
    email,
    sameAs,
}: CreatePersonOptions) => ({
    "@type": "Person",
    "@id": createFragmentId(url, "person"),
    url: url.href,
    name,
    email,
    sameAs,
})
