export interface Good {
    id: number,
    image_url: string,
    title: string,
    description: string,
    price: number,
    count: number,
}

export interface GoodsList {
    page: number,
    amount: number,
    total: number,
    items: Good[]
}