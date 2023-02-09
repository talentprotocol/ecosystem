export type FetchPageResponse = Promise<{
    content: string,
    setCookies: string[]
}>;