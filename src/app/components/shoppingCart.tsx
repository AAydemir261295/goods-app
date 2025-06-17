import { useSelector } from "react-redux";
import { Good } from "../store/models/Goods";
import { useState } from "react";
import TelephoneInput from "./telephoneInput";


export default function ShoppingCart() {
    const defaultValue = '+7 (___) ___ __-__';

    var items = useSelector((state: any) => state.shoppingCart);
    var [phoneValue, setPhoneValue] = useState(defaultValue);
    var [error, showError] = useState("")

    function isValidNumber() {
        return phoneValue.indexOf("_") == -1;
    }

    function buy() {
        if (isValidNumber()) {

        } else {

        }
    }



    return <div className="shopping-cart-container">
        <header className="shopping-cart-container__header">
            <h6 className="shopping-cart-container__title">Добавленные товары</h6>
        </header>
        <ul className=" shopping-cart-container__order-list nostyle-list">
            {/* {items.goods.map((v: Good) => 
            <li></li>
            )} */}
        </ul>
        <form action={buy} className="shopping-cart-container__form nostyle-form">
            <TelephoneInput value={phoneValue} setPhoneValue={setPhoneValue} showError={error}></TelephoneInput>
            <button className="shopping-cart-container__btn btn nostyle-btn" type="submit">заказать</button>
        </form>
    </div>;
}