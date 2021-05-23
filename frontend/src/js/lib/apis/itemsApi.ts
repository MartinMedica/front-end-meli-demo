import { IItem } from "../models/Item"
import { IItemList} from "../models/ItemList"

export const getItemsAsync = async (search: string)  : Promise<IItemList> => {
    const res = await fetch(`/api/items?search=${search}`)
    const data = await res.json();
    return data;
}

export const getItemAsync = async (id: string) : Promise<IItem> =>{
    const res = await fetch(`/api/items/${id}`)
    const data = await res.json();
    return data;
}