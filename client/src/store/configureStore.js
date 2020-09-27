import { createStore, compose, combineReducers, applyMiddleWare } from 'redux';
import { thunk } from 'redux-thunk';

const rootReducer = combineReducers({
});

let storeEnhancer;

if (process.env.NODE_ENV !== 'production') {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    storeEnhancer = composeEnhancers(applyMiddleWare(thunk));
} else {
    storeEnhancer = applyMiddleWare(thunk);
}

export default function configureStore(inititalState) {
    return createStore(
        rootReducer,
        inititalState,
        storeEnhancer
    )
}