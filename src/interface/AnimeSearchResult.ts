export interface AnimeSearchResult {
  currentPage: number,
  hasNextPage: boolean,
  results: [
    {
      id: string,
      title: string,
      image: string,
      releaseDate: string,
      subOrDub: string,
    }
  ]
}