import {createSlice}from '@reduxjs/toolkit';

const initialState = {
    cartItems:[]
};

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{ 
    addCart(state,action){
            const newItemId = action.payload.id;
            const existingItem = state.cartItems.find(item => item.id === newItemId);
            if (existingItem) {
                alert("item already exists, added one more quantity")
                state.cart[existingItem].quantity++;
            } else {
                const set = {...action.payload, quantity:1}
                state.cartItems.push(set);
            }
    },
    deleteCart(state,action){
        state.cartItems = state.cartItems.filter(item=>item.id!==action.payload);
    },
    incrementItem(state, action) {
            state.cartItems = state.cartItems.map(item => {
                if (item.id === action.payload) {
                    item.quantity++;
                }
                return item;
            });
        },
    decrementItem(state, action) {
            state.cartItems = state.cartItems.map(item => {
                if (item.id === action.payload) {
                    item.quantity--;
                }
                return item;
            }).filter(item => item.quantity !== 0);
        },
    clearCart(state){
        state.cartItems = [];
        }
}
});

export const {addCart,deleteCart,incrementItem,decrementItem,clearCart} = cartSlice.actions;
export default cartSlice.reducer;