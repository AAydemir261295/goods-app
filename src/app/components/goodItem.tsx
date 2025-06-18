'use client'
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { removeGood, updateOrder } from "../store/reducers/shoppingCartReducer";

export default function GoodItem(props: any) {
    var dispatch = useDispatch();
    var [isBought, setIsBought] = useState(false);
    var [count, setCount] = useState(1);
    var inputRef = useRef(null);

    function buy() {
        saveToShoppingCart(1)
        setIsBought(true);
    }

    function minus() {
        if (count == 0) {
            setIsBought(false);
        } else {
            saveToShoppingCart(count - 1);
            setCount(count - 1);
            if (count == 1) {
                dispatch(removeGood(props.id))
                setIsBought(false);
                setCount(1);
            }
        }
    }

    function plus() {
        saveToShoppingCart(count + 1);
        setCount(count + 1);
    }

    function saveToShoppingCart(count: number) {
        dispatch(updateOrder({ ...props, count: count, price: props.price * count }))
    }

    function onInputChange(e) {
        var inputValue = e.nativeEvent.data;
        var inputType = e.nativeEvent.inputType;
        console.log(e.nativeEvent);
        console.log(inputType == "deleteContentBackward");
        if (inputType == "deleteContentForward" || inputType == "deleteContentBackward") {
            console.log(count);
            if (count >= 10) {
                var tmp2: string = count + "";
                var result = +tmp2.slice(0, tmp2.length - 1)
                saveToShoppingCart(result);
                setCount(result);
            }
        } else if (!isNaN(+inputValue)) {
            let count = +inputRef.current.value
            saveToShoppingCart(count);
            setCount(count);
        }
    }

    return <li className="goods-container__goods-item">
        <figure className="goods-container__goods-figure">
            <div className="goods-container__image-wrapp">
                <img className="goods-container__item-image" src={props.imageSrc} alt="" />
            </div>
            <figcaption className="goods-container__item-image-caption">{props.title}</figcaption>
        </figure>
        <p className="goods-container__item-description">{props.description}</p>
        <h5 className="goods-container__item-price">{props.price + "₽"}</h5>
        <form className="goods-container__item-form nostyle-form">
            {isBought ?
                <menu className="goods-container__item-menu nostyle-menu">
                    <button onClick={minus} className="goods-container__item-minus btn nostyle-btn" type="button">-</button>
                    <input ref={inputRef}
                        defaultValue={count}
                        value={count}
                        onChange={onInputChange} className="goods-container__item-count input nostyle-input" type="text"></input>
                    <button onClick={plus} className="goods-container__item-plus btn nostyle-btn" type="button">+</button>
                </menu> :
                <button className="goods-container__item-btn btn nostyle-btn" onClick={buy}>купить</button>}
        </form>

    </li>
}