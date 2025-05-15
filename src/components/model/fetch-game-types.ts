import type { ReactNode } from "react"

export interface Game {
  released: ReactNode
  description: string
  id: number
  name: string
  metacritic: number
  background_image: string
}
export interface FetchGamesResponse {
  count: number;
  results: Game[];
}

