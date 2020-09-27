import Cookies from 'js-cookie';

const SET_USER = 'auth/SET_USER';

const setUser = (user) => {
    return {
        type: SET_USER,
        user,
    };
};

export const login = (email, password) => {
    return async dispatch => {
        const res = await fetch('/api/session', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'XSRF-TOKEN': Cookies.get('XSRF-TOKEN'),
            },
            body: JSON.stringify({ email, password }),
        });
        res.data = await res.json(); // { user: { ... }}
        if (res.ok) {
            dispatch(setUser(res.data));
        }
        return res;
    };
};

window.login = login;

export default function authReducer(state = {}, action) {
    switch (action.type) {
        case SET_USER:
            return action.user;
        default:
            return state;
    }
}
