import { useQuery } from "@tanstack/react-query";
import { getPosts } from "./api";

export const usePosts = (limit:number, start:number) => {
    const query = useQuery({
         queryKey: ['post', limit, start],
          queryFn:() => getPosts(limit, start),
          staleTime:Infinity,
        });
     return query
}
