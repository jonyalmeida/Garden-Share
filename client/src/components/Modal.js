import React, { useState } from "react";
import { CSSTransition } from "react-transition-group"; // ES6

export default function Modal({ componentToRender, closeModal }) {
    const [inProp, setInProp] = useState(false);
    setTimeout(() => {
        setInProp(true);
    }, 0);

    const closeModalOnClick = (e) => {
        if (
            e.target.id === "backdrop-area" ||
            e.target.id === "close-modal-x"
        ) {
            closeModal(false);
        }
        return;
    };
    return (
        <div
            id='backdrop-area'
            className='modal--backdrop'
            onClick={closeModalOnClick}>
            <CSSTransition
                in={inProp}
                timeout={300}
                classNames='alert'
                unmountOnExit>
                <div className='modal--content'>
                    <button
                        id='close-modal-x'
                        className='modal--close'
                        onClick={closeModalOnClick}>
                        x
                    </button>
                    {componentToRender}
                </div>
            </CSSTransition>
        </div>
    );
}
