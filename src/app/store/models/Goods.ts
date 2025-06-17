export interface Good {
    id: number,
    image_url: string,
    title: string,
    description: string,
    price: number
}

export interface GoodsList {
    page: number,
    amount: number,
    total: number,
    items: Good[]
}