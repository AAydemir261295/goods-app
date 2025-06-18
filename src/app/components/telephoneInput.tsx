'use client'
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ShoppingCartState, updatePhoneNumber } from "../store/reducers/shoppingCartReducer";

export default function TelephoneInput(props: any) {

    var dispatch = useDispatch();
    var inputRef = useRef(null) as any;
    var inputValue = useSelector((state: { cart: ShoppingCartState }) => state.cart.telephone);
    var [telephoneValue, setTelephoneValue] = useState(inputValue);
    var [className, setClassName] = useState(`shopping-cart-container__input input nostyle-input`)

    useEffect(() => {
        setClassName(`shopping-cart-container__input input nostyle-input ${props.showError}`);
        dispatch(updatePhoneNumber(telephoneValue));
    }, [telephoneValue, props.showError])

    function replaceChar(idx: number, foInsert: string, value: string) {
        var index = idx - 1;
        return value.slice(0, index) + foInsert + value.slice(index);
    }

    function removeCharAt(str: string, idx: number) {
        var tmp = str.split("");
        tmp.splice(idx - 1, 1);
        return tmp.join("");
    }

    function onInput(e: any) {
        e.preventDefault();
        var pressedKey = e.key;
        var inputLen = telephoneValue.length;
        var lastChar = telephoneValue.charAt(inputLen - 1);

        if (pressedKey >= 0 && pressedKey <= 9 && lastChar == "_") {
            var replaceIndex = telephoneValue.indexOf("_") + 1;
            var insertingChar = pressedKey;
            var inserted = replaceChar(
                replaceIndex,
                insertingChar,
                telephoneValue
            );
            var temp = removeCharAt(inserted, replaceIndex + 1);
            setTelephoneValue(temp);
        } else if (e.keyCode == 8) {
            var isContain = telephoneValue.indexOf("_");
            var length = isContain == -1 ? inputLen : isContain;

            for (let q = length; 4 < length; q--) {
                const charz = telephoneValue.charAt(q - 1);
                if (
                    charz != "_" &&
                    charz != "-" &&
                    charz != "(" &&
                    charz != ")" &&
                    charz != " "
                ) {
                    var removed = removeCharAt(telephoneValue, q);
                    var afterDelete = replaceChar(q, "_", removed);
                    setTelephoneValue(afterDelete);
                    break;
                }
            }
        }
        // }
        props.setErrorState("");
    }




    return <input className={className}
        ref={inputRef}
        defaultValue={telephoneValue}
        value={telephoneValue}
        onKeyDown={(e) => e.preventDefault()}
        onKeyUp={onInput}
        type="text" />
}