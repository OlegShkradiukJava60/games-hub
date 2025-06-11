import FetchDataResponse from "../model/fetch-data-response";
import { AxiosError, AxiosRequestConfig } from "axios";
import apiClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";

export default function useData<T>(endpoint: string, config?: AxiosRequestConfig){
    const queryKey: any[] = [endpoint];
    config && (queryKey.push(config));
    return useQuery<T[], AxiosError>({
        queryKey,
        queryFn: () => apiClient.get<FetchDataResponse<T>>(endpoint,
             config).then(res => res.data.results),
        staleTime: 3600 * 1000   
    })
}
