
export interface Cart {
    id: number,
    quantity: number
}

export interface Order {
    phone: string,
    cart: Cart[]
}