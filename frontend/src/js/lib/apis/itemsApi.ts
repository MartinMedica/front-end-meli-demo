import { IItem } from "../models/Item"
import { IItemList } from "../models/ItemList"

const API_URL = process.env.API_URL
export const getItemsAsync = async (search: string): Promise<IItemList> => {
    const res = await fetch(`${API_URL}/api/items?search=${search}`, {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        }),
    })
    const data = await res.json();
    return data;
}

export const getItemAsync = async (id: string): Promise<IItem> => {
    const res = await fetch(`${API_URL}/api/items/${id}`, {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        }),
    })
    const data = await res.json();
    return data;
}