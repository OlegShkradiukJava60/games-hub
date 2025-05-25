import { useEffect, useState } from "react";
import api from '../services/api-client'
import FetchDataResponse from "../model/fetch-data-response";
import { AxiosError } from "axios";

export default function useData<T>(endpoint: string): { data: T[], error: string, isLoading: boolean } {
    const [data, setGenres] = useState<T[]>([])
    const [error, setError] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    useEffect(() => {
        setIsLoading(true);
        api.get<FetchDataResponse<T>>(endpoint)
            .then(res => setGenres(res.data.results))
            .catch((e: AxiosError) => {
                setError(e.message)
            }).finally(() => setIsLoading(false))
    }, []);
    return { data, error, isLoading };
}