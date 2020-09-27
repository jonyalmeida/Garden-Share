import React from 'react';
import { Route } from 'react-router-dom';

import LoginPage from '../components/LoginPage';
import UserList from '../components/UsersList';

export default function Pages() {
    return (
        <>
            <Route path='/users' component={UserList} />
            <Route exact path='/'>
                <h1>My Home Page</h1>
            </Route>
            <Route path='/login' component={LoginPage} />
        </>
    );
};

