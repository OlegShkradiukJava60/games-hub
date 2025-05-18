import type { ReactNode } from "react"

export interface Genre {
  released: ReactNode
  description: string
  id: number
  name: string
  metacritic: number
  background_image: string
}
export interface FetchGamesResponse {
  count: number;
  results: Genre[];
}

