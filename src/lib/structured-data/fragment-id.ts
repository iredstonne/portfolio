export const createFragmentId = (url: URL, fragment: string): string => {
    const id = new URL(url)
    id.hash = fragment
    return id.href
}
