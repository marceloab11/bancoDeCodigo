import axios from "axios";
import { Post } from "../types/post-type";

const req = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

export const getPosts = async(limit:number, start:number): Promise<Post[]> => {
    const res = await req.get(`posts?_limit=${limit}&_start=${start}`)
        return res.data;
}