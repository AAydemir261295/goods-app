'use client'
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { updateOrder, updateOrderById } from "../store/reducers/shoppingCartReducer";

export default function GoodItem(props: any) {
    var dispatch = useDispatch();
    var [isBought, setIsBought] = useState(false);
    var [count, setCount] = useState(1);
    var inputRef = useRef(null);

    function buy() {
        setIsBought(true);
    }


    function validate(e: any) {
        if (e.key >= 0 || e.key <= 9) {
            setCount(parseInt(inputRef.current.value));
        } else if (e.key == "Backspace" || e.key == "Delete") {
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

    function plus() {
        setCount(count + 1)
    }


    function saveToOrder(e) {
        // dispatch(updateOrder({ ...props, count: count }))
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
                    <input ref={inputRef} onKeyUp={(e) => { validate(e); }} defaultValue={count} onChange={saveToOrder} className="goods-container__item-count input nostyle-input" type="text"></input>
                    <button onClick={plus} className="goods-container__item-plus btn nostyle-btn" type="button">+</button>
                </menu> :
                <button className="goods-container__item-btn btn nostyle-btn" onClick={buy}>купить</button>}
        </form>

    </li>
}