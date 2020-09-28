import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { TextField, Container } from '@material-ui/core';

import { login } from '../store/auth';
import AuthSubmitButton from '../components/AuthSubmitButton';
import SignUpLoginLogo from '../components/SignUpLoginLogo';

function LoginPage() {
    const [email, setEmail] = useState('demo@example.com');
    const [password, setPassword] = useState('password');
    const currentUserId = useSelector(state => state.auth.id);
    console.log(currentUserId);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(email, password));
    }

    if (currentUserId) {
        return (
            <Redirect to='/' />
        )
    }

    return (
        <>
            <SignUpLoginLogo />
            <Container fixed maxWidth='sm' style={{ marginTop: '-10%' }}>
                <h1 style={{ textAlign: 'center' }}>Log in / Sign up</h1>
                <form
                    onSubmit={handleSubmit}
                    style={{ display: 'flex', flexDirection: 'column' }}
                >
                    <TextField
                        variant='filled'
                        label='E-mail'
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                    <TextField
                        variant='filled'
                        label='Password'
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                    <AuthSubmitButton>Log in</AuthSubmitButton>
                </form>
            </Container >
        </>
    );
}

export default LoginPage;