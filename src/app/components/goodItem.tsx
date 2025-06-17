//  id: number,
// image_url: string,
// title: string,
// description: string,
// price: number,

import { useState } from "react";

export default function GoodItem(props) {

    var [isBought, setIsBought] = useState(false);

    return <li className="goods-container__goods-item">
        <img className="goods-container__item-image" src="" alt="" />
        <h5 className="goods-container__item-title"></h5>
        <p className="goods-container__item-description"></p>
        <h5 className="goods-container__item"></h5>
        {isBought ?
            <div className="goods-container__item-menu">
                <button className="goods-container__item-minus btn">-</button>
                <input type="text" defaultValue={1} className="goods-container__item-count"></input>
                <button className="goods-container__item-plus btn">+</button>
            </div> :
            <button className="goods-container__item-btn btn">купить</button>}

    </li>
}