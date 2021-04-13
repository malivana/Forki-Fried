import {createStore} from 'redux';
import reducer from './reducers/';

const initialState = {
    menu: [],
    cart: [],

    totalPrice: 0,

    loading: true,
    error: false
}

const store = createStore(reducer, initialState);

export default store; 