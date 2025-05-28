import type { Game } from "../model/fetch-game-types";
import type ParentPlatform from "../model/ParentPlatform.ts";
import type Ordering from "../model/ordering";
import useData from "./useData";

export default function useGame(selectedGenre: string | null, selectedPlatform: ParentPlatform | null, selectedOrder: Ordering | null): {data: Game[], isLoading: boolean, error: string} {
    return useData<Game>("/games", {params:{genres: selectedGenre, parent_platforms:selectedPlatform?.id, ordering: selectedOrder?.value}}, [selectedGenre, selectedPlatform, selectedOrder]);
}