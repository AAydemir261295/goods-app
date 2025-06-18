import GoodsList from "./goodsList";


const apiUrl = (page: number, size: number) => `http://o-complex.com:1337/products?page=${page}&page_size=${size}`;


export default async function Goods() {
    const data = await fetch(apiUrl(1, 20))
    var goods = await data.json();
    var items = goods.items;


    return <div className="goods-container">
            <GoodsList items={items}></GoodsList>
    </div>;
}