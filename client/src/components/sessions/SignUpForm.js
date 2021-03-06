import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { registerUser } from "../../store/thunks/authThunks";
import { setPage } from "../../store/actions/navActions";

export default function SignUpForm({ isLoginOrSignup }) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("demo@example.com");
    const [password, setPassword] = useState("password");

    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zipCode, setZipCode] = useState("");

    const userGeocode = [13, 123];

    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await dispatch(
            registerUser(
                email,
                password,
                firstName,
                lastName,
                address,
                userGeocode
            )
        );
        if (res === "ok") dispatch(setPage("home"));
    };

    return (
        <form
            className='form--auth'
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column" }}>
            <div className='form--auth-label'>
                <div className='form--auth-label-input'>
                    <label>
                        First name:&nbsp;&nbsp;&nbsp;
                        <input
                            variant='filled'
                            label='First Name'
                            type='text'
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </label>
                    <label>
                        Last name:&nbsp;&nbsp;&nbsp;
                        <input
                            variant='filled'
                            label='Last Name'
                            type='text'
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </label>
                </div>
            </div>
            <div className='form--auth-label'>
                <div className='form--auth-label-input'>
                    <label>
                        Email:&nbsp;&nbsp;&nbsp;
                        <input
                            variant='filled'
                            label='E-mail'
                            type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>
                    <label>
                        Password:&nbsp;&nbsp;&nbsp;
                        <input
                            variant='filled'
                            label='Password'
                            type='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                </div>
            </div>
            <h1 style={{ textAlign: "center" }}>Address</h1>
            <div className='form--auth-label-input'>
                <label>
                    Address:&nbsp;&nbsp;&nbsp;
                    <input
                        id='autocomplete'
                        variant='filled'
                        label='Full Address'
                        type='text'
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </label>
            </div>
            <div className='form--auth-label'>
                <div className='form--auth-label-input'>
                    <label>
                        City:&nbsp;&nbsp;&nbsp;
                        <input
                            variant='filled'
                            label='City'
                            type='text'
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                    </label>
                </div>
                <div className='form--auth-label-input'>
                    <label>
                        State:&nbsp;&nbsp;&nbsp;
                        <input
                            variant='filled'
                            label='State'
                            type='text'
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                        />
                    </label>
                </div>
                <div className='form--auth-label-input'>
                    <label>
                        Zip code:&nbsp;&nbsp;&nbsp;
                        <input
                            variant='filled'
                            label='Zip Code'
                            type='text'
                            value={zipCode}
                            onChange={(e) => setZipCode(e.target.value)}
                        />
                    </label>
                </div>
            </div>
            <div onClick={handleSubmit} className='form--auth-login auth-link'>
                Sign Up
            </div>
            <p>
                Already a member?
                <font
                    onClick={() => isLoginOrSignup(true)}
                    className='auth-link'
                    style={{ textDecoration: "underline" }}>
                    Log in
                </font>
                .
            </p>
        </form>
    );
}
