import { createSlice } from "@reduxjs/toolkit";

const locationSlice = createSlice({
    name: "location",
    initialState: {
        address : ""
    },
    reducers : {

        setAddress:(state,action)=>{
            state.address = action.payload;
        }
    }
})

export const {setAddress} = locationSlice.actions;
export default locationSlice.reducer;