export type ListItemInput = {
    name: string
    item: string
}

export const createListItem = (
    { name, item }: ListItemInput,
    index: number,
) => ({
    "@type": "ListItem",
    position: index + 1,
    name,
    item,
})
