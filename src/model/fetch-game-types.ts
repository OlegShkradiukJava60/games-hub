import { NumberInputControlProps } from "@chakra-ui/react";

export interface Platform {
    platform: {
        name: number
    }
    
}
export interface Game {
    id: number;
    name: string;
    background_image: string,
    metacritic: number,
    platforms: Platform[]
}
export interface FetchGamesResponse {
    count: number;
    results: Game[];
}