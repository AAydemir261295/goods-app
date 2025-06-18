'use client'
import { useDispatch, useSelector } from "react-redux";
import { Good } from "../store/models/Goods";
import { useEffect, useState } from "react";
import TelephoneInput from "./telephoneInput";
import { resetState, ShoppingCartState } from "../store/reducers/shoppingCartReducer";
import { sendBuyRequest } from "../backendApi/shoppingApi";
import Modal from "./modal";


export default function ShoppingCart() {
    var dispatch = useDispatch();
    var cart = useSelector((state: { cart: ShoppingCartState }) => state.cart);
    var items = useSelector((state: { cart: ShoppingCartState }) => state.cart.goods);
    var [error, setError] = useState("");
    var [modalState, setModalState] = useState(false);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart])


    function isValidNumber() {
        return cart.telephone.indexOf("_") == -1;
    }

    async function buy(e: any) {
        e.preventDefault();
        if (isValidNumber()) {
            const body = { phone: cart.telephone, cart: items.map((v: Good) => { return { id: v.id, quantity: v.count } }) }
            console.log(body);
            if (body.cart.length > 0) {
                // var isBought = await sendBuyRequest(body);
                // if (isBought) {
                    setModalState(true);
                    // localStorage.removeItem("cart");
                    // dispatch(resetState());
                // }

            }

        } else {
            setError("input--error");
        }
    }



    return <div className="shopping-cart-container">
        <Modal modalState={modalState} setModalState={setModalState} />
        <header className="shopping-cart-container__header">
            <h6 className="shopping-cart-container__title">Добавленные товары</h6>
        </header>
        <ul className="shopping-cart-container__order-list nostyle-list">
            {items.map((v: Good, idx: number) =>
                <li key={idx} className="shopping-cart-container__order-row">
                    <h3 className="shopping-cart-container__order-title">{v.title}</h3>
                    <h3>{`x${v.count}`}</h3>
                    <h3>{`${v.price}₽`}</h3>
                </li>


            )}
        </ul>
        <form onSubmit={buy} className="shopping-cart-container__form nostyle-form">
            <TelephoneInput showError={error} setErrorState={setError}></TelephoneInput>
            <button className="shopping-cart-container__btn btn nostyle-btn" type="submit">заказать</button>
        </form>
    </div>;
}