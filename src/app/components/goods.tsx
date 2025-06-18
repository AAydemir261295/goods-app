import Loader from "./loader";
import GoodItem from "./goodItem";
import { Good } from "../store/models/Goods";
import GoodsList from "./goodsList";
// import { useSelector } from "react-redux";

const apiUrl = (page: number, size: number) => `http://o-complex.com:1337/products?page=${page}&page_size=${size}`;


export default async function Goods() {
    const data = await fetch(apiUrl(1, 20))
    var goods = await data.json();
    var items = goods.items;
    console.log(items);


    return <div className="goods-container">
        <GoodsList items={items}></GoodsList>
    </div>;
}