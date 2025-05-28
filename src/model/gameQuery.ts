import { Genre } from "./fetch-genre-types";
import ParentPlatform from "./ParentPlatform";

export interface GameQuery {
  selectedGenre: Genre | null;
  selectedPlatform: ParentPlatform | null;
  sortOrder: string | null;
}
