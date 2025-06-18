
export interface Cart {
    id: number,
    quantity: number
}

export interface OrderBody {
    phone: string,
    cart: Cart[]
}