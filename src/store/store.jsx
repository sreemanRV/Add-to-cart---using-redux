import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../slices/cartSlice.jsx'
import authenticationReducer from '../slices/authenticationslice.jsx';

const store= configureStore({
    reducer:{
        cart:cartReducer,
        authentication:authenticationReducer
    }
});

export default store;