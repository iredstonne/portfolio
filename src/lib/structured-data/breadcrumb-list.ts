import type { JsonLdNode } from "../../types/structured-data"
import {
    createListItem,
} from "./list-item"

type BreadcrumbItemInput = {
    name: string
    item: URL
}

type CreateBreadcrumbListOptions = {
    items: readonly BreadcrumbItemInput[]
}

export const createBreadcrumbList = ({
    items,
}: CreateBreadcrumbListOptions): JsonLdNode | undefined => {
    const numberOfItems = items.length
    if (!numberOfItems) {
        return
    }
    return {
        "@type": "BreadcrumbList",
        numberOfItems,
        itemListElement: items.map(({ name, item }, index) =>
            createListItem({
                name,
                item: item.href,
            }, index)
        ),
    }
}
