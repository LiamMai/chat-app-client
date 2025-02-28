interface BasePaginationResponse<T> {
    page: number,
    perPage: number,
    total: number,
    [key: string]: T[]
}