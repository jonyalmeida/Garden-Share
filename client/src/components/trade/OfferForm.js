import React, { useState } from "react";

export default function OfferForm() {
    const [name, setName] = useState("");
    const [qty, setQty] = useState("");
    const [description, setDescription] = useState("");
    const [vegetables, setVegetables] = useState(true);
    const [animal, setAnimal] = useState(false);
    const [fruit, setFruit] = useState(false);

    const onClickSelect = (e) => {
        console.log(e.target.id);

        if (e.target.id === "vegetables") {
            setVegetables(true);
        } else {
            setVegetables(false);
        }

        if (e.target.id === "animal") {
            setAnimal(true);
        } else {
            setAnimal(false);
        }

        if (e.target.id === "fruit") {
            setFruit(true);
        } else {
            setFruit(false);
        }
    };

    return (
        <div className='offer'>
            <form className='offer--form'>
                <div className='offer--form-item'>
                    <label name='product-name'>Product name: </label>
                    <input
                        placeholder='ie.: Fresh organic carrots'
                        name='product-name'
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className='offer--form-item'>
                    <label name='product-qty'>Product quantity: </label>
                    <input
                        placeholder='ie.: 9 x 1lb bunches of lettuce'
                        name='product-qty'
                        onChange={(e) => setQty(e.target.value)}
                    />
                </div>
                <div className='offer--form-item'>
                    <label name='product-description'>
                        Product description:{" "}
                    </label>
                    <textarea
                        placeholder='ie.: The tomato is the edible berry of the plant Solanum lycopersicum, commonly known as a tomato plant. The species originated in western South America and Central America.'
                        name='product-description'
                        rows='5'
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className='offer--form-item'>
                    <p>Select a product type:</p>
                    <div>
                        <input
                            type='radio'
                            id='vegetables'
                            name='vegetables'
                            value='vegetables'
                            className='offer--form--radio-input'
                            onChange={onClickSelect}
                            checked={vegetables}
                        />
                        <label htmlFor='vegetables'>Produce</label>
                    </div>
                    <div>
                        <input
                            type='radio'
                            id='animal'
                            name='animal'
                            value='animal'
                            className='offer--form--radio-input'
                            onChange={onClickSelect}
                            checked={animal}
                        />
                        <label htmlFor='animal'>Animal</label>
                    </div>
                    <div>
                        <input
                            type='radio'
                            id='fruit'
                            name='fruit'
                            value='fruit'
                            className='offer--form--radio-input'
                            onChange={onClickSelect}
                            checked={fruit}
                        />
                        <label htmlFor='fruit'>Fruits</label>
                    </div>
                </div>
            </form>
        </div>
    );
}
