import { useQuery } from "@tanstack/react-query";
import { getCity } from "./apis";

export const useCity = async(cityName:string) => {
    const query = await useQuery({
        queryKey: ['city'],
        queryFn:()=> getCity(cityName)
    })
    return query
} 