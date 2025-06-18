'use client'
import { Good } from "../store/models/Goods";
import GoodItem from "./goodItem";
import Loader from "./loader";
import { retrieveGoods } from "../backendApi/goodsApi";
import { useState } from "react";

export default function GoodsList(props: any) {
    var [items, setItems] = useState(props.items);
    var [isLoading, setIsLoading] = useState(false);
    var lastPage = 2;
    var totalPages = 11
    var size = 20;

    async function loadContent(e: any) {
        let scrollableArea = e.target;
        let maxScroll = scrollableArea.scrollHeight - 1500 - 500;
        let scrollPosition = scrollableArea.scrollTop;



        if (scrollPosition >= maxScroll) {
            if (!isLoading) {
                setIsLoading(true);
                var data = await retrieveGoods(lastPage, size)
                if (data) {
                    setIsLoading(false);
                    setItems([...items, ...data.items]);
                    if (lastPage < totalPages) {
                        lastPage++;
                    }
                }
            }
        }

    }


    return <><ul className="goods-container__goods-list nostyle-list"
        onScroll={loadContent}>
        {
            items.map((v: Good, idx: number) =>
                <GoodItem key={idx} id={v.id} imageSrc={v.image_url} title={v.title} description={v.description} price={v.price} ></GoodItem>
            )
        }

    </ul>
        {isLoading ? <Loader /> : ""}/


    </>
}