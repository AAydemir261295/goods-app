'use client'
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { updatePhoneNumber } from "../store/reducers/shoppingCartReducer";

export default function TelephoneInput(props: any) {
    var dispatch = useDispatch();
    var inputRef = useRef(null) as any;
    var [inputValue, setInputValue] = useState(props.value);
    var [className, setClassName] = useState(`shopping-cart-container__input input nostyle-input ${props.showError}`)

    useEffect(() => {
        setClassName(`shopping-cart-container__input input nostyle-input ${props.showError}`);
        dispatch(updatePhoneNumber(inputValue));
    }, [inputValue])

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
        var value = inputRef.current.value;
        var inputLen = value.length;
        var lastChar = value.charAt(inputLen - 1);

        if (inputLen <= 18) {
            if (pressedKey >= 0 && pressedKey <= 9 && lastChar == "_") {
                var replaceIndex = value.indexOf("_") + 1;
                var insertingChar = pressedKey;
                var inserted = replaceChar(
                    replaceIndex,
                    insertingChar,
                    value
                );
                var temp = removeCharAt(inserted, replaceIndex + 1);
                setInputValue(temp);
                props.setPhoneValue(temp);
             

            } else if (e.keyCode == 8) {
                var isContain = value.indexOf("_");
                var length = isContain == -1 ? inputLen : isContain;

                for (let q = length; 4 < length; q--) {
                    const charz = value.charAt(q - 1);
                    if (
                        charz != "_" &&
                        charz != "-" &&
                        charz != "(" &&
                        charz != ")" &&
                        charz != " "
                    ) {
                        var removed = removeCharAt(value, q);
                        var afterDelete = replaceChar(q, "_", removed);
                        setInputValue(afterDelete);
                        props.setPhoneValue(afterDelete);
                        break;
                    }
                }
            }
        }
        props.setErrorState("");
    }




    return <input className={className}
        ref={inputRef}
        defaultValue={inputValue}
        onKeyDown={onInput}
        type="text" />
}