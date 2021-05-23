export interface IItemListItem {
    id: string,
    title: string,
    price: {
        currency: string,
        amount: number,
        decimals: number
    },
    picture: string,
    condition: string,
    free_shipping: boolean,
    address: {
        state_id: string,
        state_name: string,
        city_id: string,
        city_name: string
    }
}

export interface IItemList {
    author: {
        name: string
        lastname: string
    },
    categories: string[],
    items: IItemListItem[]
}
