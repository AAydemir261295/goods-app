'use client'
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeGood, ShoppingCartState, updateOrder } from "../store/reducers/shoppingCartReducer";
import { Good } from "../store/models/Goods";

export default function GoodItem(props: any) {
    var dispatch = useDispatch();
    var goods = useSelector((state: { cart: ShoppingCartState }) => state.cart.goods);
    var [isBought, setIsBought] = useState(goods.find((v: Good) => v.id == props.id) == undefined ? false : true);
    var [count, setCount] = useState(isBought ? goods.find((v: Good) => v.id == props.id).count : 1);
    var inputRef = useRef(null) as any;

    function saveToShoppingCart(count: number) {
        dispatch(updateOrder({ ...props, count: count, price: props.price * count }))
    }

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



    function onInputChange(e: any) {
        var inputValue = e.nativeEvent.data;
        var inputType = e.nativeEvent.inputType;
        if (inputType == "deleteContentForward" || inputType == "deleteContentBackward") {
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