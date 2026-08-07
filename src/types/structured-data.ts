export type JsonLdNode = {
    "@type": string
    "@id"?: string
} & Record<string, unknown>

export type JsonLdDocument = {
    "@context": "https://schema.org"
} & JsonLdNode
