import { Genre } from "../model/fetch-genre-types";
import useData from "./useData";


export default function useGenre() {
    return useData<Genre>("/genres")
    
}