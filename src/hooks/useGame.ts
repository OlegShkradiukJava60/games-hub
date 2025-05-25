import { Game } from "../model/fetch-game-types";
import useData from "./useData";

export default function useGame(): { data: Game[], error: string, isLoading: boolean } {
    const { data, error, isLoading } = useData<Game>("/games");
    return { data, error, isLoading };
}