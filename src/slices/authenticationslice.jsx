import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    isAuth:false
}

const authSlice = createSlice({
    name:'authentication',
    initialState,
    reducers:{
        loginUser(state){
        state.isAuth=true;
        },
        logoutUser(state){
        state.isAuth=false;
    }
    
}
});

export const {loginUser,logoutUser}=authSlice.actions;
export default authSlice.reducer;