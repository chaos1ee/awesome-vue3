declare module 'List' {
  interface ListResponse<T> {
    currentPage: number
    totalPage: number
    list: T
  }
}
