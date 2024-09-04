import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: {},
        openCart : false,
        openLocation: false,
    },
    reducers : {
        addItem : (state,action)=>{
            const id = action.payload.id;
            if(state.cartItems[id]){
                state.cartItems[id] = {...action.payload, quantity : state.cartItems[id]["quantity"] + 1};
            }
            else{
                state.cartItems[id] = {...action.payload, quantity : 1}
            }
        },

        removeItem : (state,action)=>{
            const id = action.payload.id;
            if(state.cartItems[id]){
                state.cartItems[id] = {...action.payload, quantity : state.cartItems[id]["quantity"] - 1};
                if(state.cartItems[id]["quantity"] === 0){
                    delete state.cartItems[id];
                }
            }
        },

        toggleCart:(state,action)=>{
            state.openCart = action.payload;
        },

        toggleLocation:(state,action)=>{
            state.openLocation = action.payload;
        }
    }
})

export const {addItem, removeItem, toggleCart, toggleLocation} = cartSlice.actions;
export default cartSlice.reducer;