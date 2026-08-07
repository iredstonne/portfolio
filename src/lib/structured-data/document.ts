import type { JsonLdDocument, JsonLdNode } from "../../types/structured-data"

export const defineStructuredData = (node: JsonLdNode): JsonLdDocument => ({
    ...node,
    "@context": "https://schema.org",
})
