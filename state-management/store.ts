import { create } from "zustand";
import ParentPlatform from "../src/model/ParentPlatform";
import { SortOption } from "../src/components/SortSelector";
interface GameQueryStore {
  search: string | null;
  genre: string | null;
  platform: ParentPlatform | null;
  ordering: SortOption | null;
  setSearch: (search: string|null) => void;
  setGenre: (genre: string|null) => void;
  setPlatform: (platform: ParentPlatform|null) => void;
  setOrdering: (ordering: SortOption|null) => void;
}
const useGameQueryStore = create<GameQueryStore>((set) => ({
  search: null,
  genre: null,
  platform: null,
  ordering: null,
  setSearch: (search) =>
    set(() => ({search, genre: null})),
  setGenre: (genre) =>
    set((state) => {
       return state.genre === genre ? state : {genre, search: null}
    }),
  setOrdering: (ordering) =>
    set((state) => {
      return state.ordering === ordering ? state : { ordering };
    }),
  setPlatform: (platform) =>
    set((state) => {
      return state.platform?.slug === platform?.slug ? state : { platform };
    }),
}));
export default useGameQueryStore;
