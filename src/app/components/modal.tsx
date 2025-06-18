'use client'

import { useEffect, useRef } from "react";

export default function Modal(props: any) {

    var modalRef = useRef(null) as any;

    useEffect(() => {
        if (props.modalState == true) {
            show();
        }
    }, [props])

    function close() {
        modalRef.current.style.animation = "slideOut 0.3s ease-in";
        modalRef.current.style.animationFillMode = "forwards";
        props.setModalState(false);
    }

    function show() {
        modalRef.current.style.animation = "slideIn 0.3s ease-in";
        modalRef.current.style.animationFillMode = "forwards";
    }

    return <div ref={modalRef} className="modal">
        <span className="modal__close" onClick={close}>✕</span>
        <h1 className="modal__title">Заказ успешно оформлен!</h1>
    </div>;
}