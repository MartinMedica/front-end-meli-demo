import { IItem } from "../models/Item"
import { IItemList } from "../models/ItemList"
import { serviceResponse } from "../models/serviceResponse"

const API_URL = process.env.API_URL
export const getItemsAsync = async (search: string): Promise<serviceResponse<IItemList>> => {
    const data = await fetch(`${API_URL}/api/items?search=${search}`, {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        }),
    }).then(res=>res.json()).catch((err)=> {return {
        error: true, errorMessage:  err.message
    }})
    return data;
}

export const getItemAsync = async (id: string): Promise<serviceResponse<IItem>> => {
    const data = await fetch(`${API_URL}/api/items/${id}`, {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        }),
    }).then((res)=>res.json()).catch((err)=> {return {
        error: true, errorMessage:  err.message
    }})

    return data;
}