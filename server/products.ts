"use server"
import { unstable_cache } from 'next/cache';
interface GetProductsParams{
    search?:string;
    perPage?:number;
    offset?:number
}


export const getProducts = unstable_cache(async(params:GetProductsParams):Promise<Product[]>=>{
    const res = await fetch(`https://api.escuelajs.co/api/v1/products/?title=${params.search}&offset=${params.offset}&limit=${params.perPage}`)
    const data =await res.json()
    return data;
},["products"],{
    tags:["products"]
})