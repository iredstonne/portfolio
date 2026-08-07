export const splitNonEmpty = (value: string, separator: string | RegExp): string[] => value.split(separator).filter(Boolean)
