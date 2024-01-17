import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice.jsx'
import authenticationReducer from './authenticationslice.jsx';

const store= configureStore({
    reducer:{
        cart:cartReducer,
        authentication:authenticationReducer
    }
});

export default store;