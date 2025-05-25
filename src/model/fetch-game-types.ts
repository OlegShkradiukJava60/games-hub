
export interface Platform {
    platform: {
        slug: string
    }

}
export interface Game {
    rating: number;
    id: number;
    name: string;
    background_image: string,
    metacritic: number,
    platforms: Platform[]
}