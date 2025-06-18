'use client'
import { useSelector } from "react-redux";
import { Good } from "../store/models/Goods";
import { useEffect, useState } from "react";
import TelephoneInput from "./telephoneInput";
import { ShoppingCartState } from "../store/reducers/shoppingCartReducer";
import { sendBuyRequest } from "../backendApi/shoppingApi";


export default function ShoppingCart() {
    var cart = useSelector((state: { cart: ShoppingCartState }) => state.cart);
    var items = useSelector((state: { cart: ShoppingCartState }) => state.cart.goods);
    var [error, setError] = useState("");

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart])


    function isValidNumber() {
        return cart.telephone.indexOf("_") == -1;
    }

    function buy() {
        if (isValidNumber()) {
            const body = { phone: cart.telephone, cart: items.map((v: Good) => { return { id: v.id, quantity: v.count } }) }
            // sendBuyRequest()

        } else {
            setError("input--error");
        }
    }



    return <div className="shopping-cart-container">
        <header className="shopping-cart-container__header">
            <h6 className="shopping-cart-container__title">Добавленные товары</h6>
        </header>
        <ul className="shopping-cart-container__order-list nostyle-list">
            {items.map((v: Good, idx: number) =>
                <li key={idx} className="shopping-cart-container__order-row">
                    <h3>{v.title}</h3>
                    <h3>{`x${v.count}`}</h3>
                    <h3>{`${v.price}₽`}</h3>
                </li>


            )}
        </ul>
        <form action={buy} className="shopping-cart-container__form nostyle-form">
            <TelephoneInput showError={error} setErrorState={setError}></TelephoneInput>
            <button className="shopping-cart-container__btn btn nostyle-btn" type="submit">заказать</button>
        </form>
    </div>;
}