import { Genre } from "../model/fetch-genre-types";
import useData from "./useData";

export default function useGame(): { data: Genre[], error: string, isLoading: boolean } {
    const { data, error, isLoading } = useData<Genre>("/genres");
    return { data, error, isLoading };
}