'use client'
import { useState } from "react";

export default function GoodItem(props: any) {
    console.log(props);

    var [isBought, setIsBought] = useState(false);
    var [count, setCount] = useState(1);

    function buy() {
        setIsBought(true);
    }

    var isCopyPaste = 0;

    function validate(e: any) {
        console.log(e.key);
        if (e.key >= 0 || e.key <= 9) {
        } else if (e.key == "Backspace" || e.key == "Delete") {
        } else if (e.key == "Control" || e.key == "v" || e.key == 'c') {
            isCopyPaste++;
            if (isCopyPaste == 2) {
                isCopyPaste = 0;
            }
        } else {
            e.preventDefault();
        }
    }

    function minus() {

        if (count == 0) {
            setIsBought(false);
        } else {
            setCount(count - 1);
            if (count == 1) {
                setIsBought(false);
                setCount(1);
            }
        }

    }

    return <li className="goods-container__goods-item">
        <figure className="goods-container__goods-figure">
            <img className="goods-container__item-image" src={props.imageSrc} alt="" />
            <figcaption className="goods-container__item-image-caption">{props.title}</figcaption>
        </figure>
        <p className="goods-container__item-description">{props.description}</p>
        <h5 className="goods-container__item-price">{props.price + "₽"}</h5>
        <form className="goods-container__item-form nostyle-form">
            {isBought ?
                <menu className="goods-container__item-menu nostyle-menu">
                    <button onClick={minus} className="goods-container__item-minus btn nostyle-btn" type="button">-</button>
                    <input onKeyDown={validate} value={count} className="goods-container__item-count input nostyle-input" type="text"></input>
                    <button onClick={() => setCount(count + 1)} className="goods-container__item-plus btn nostyle-btn" type="button">+</button>
                </menu> :
                <button className="goods-container__item-btn btn nostyle-btn" onClick={buy}>купить</button>}
        </form>

    </li>
}