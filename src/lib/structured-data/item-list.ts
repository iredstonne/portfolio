import type { JsonLdNode } from "../../types/structured-data"
import { createListItem, type ListItemInput } from "./list-item"

type CreateItemListOptions = {
    items: readonly ListItemInput[]
}

export const createItemList = (
    { items }: CreateItemListOptions,
): JsonLdNode | undefined => {
    const numberOfItems = items.length
    if (!numberOfItems) {
        return
    }
    return {
        "@type": "ItemList",
        numberOfItems,
        itemListElement: items.map(createListItem),
    }
}
