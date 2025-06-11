import useGameQueryStore from "../state-management/store";
import { Game } from "../model/fetch-game-types";
import { AxiosRequestConfig } from "axios";
import useData from "./useData";

export default function useGame() {
   
     const gameQuery = useGameQueryStore();
     const config: AxiosRequestConfig = {
        params: {genres: gameQuery.genre, parent_platforms:gameQuery.platform?.id,
         ordering: gameQuery.ordering?.value, search: gameQuery.search}
     };
    return useData<Game>("/games", config)
}