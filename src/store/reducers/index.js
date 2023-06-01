import { createSlice } from "@reduxjs/toolkit";

export const IncrementDecrecmentSlice = createSlice({
    name:'incdec',
    initialState:100,
    reducers:{
        Inc : (state, action)=>{
            return state += 1;
        },
        Dec : (state, action)=>{
            return state -= 1;
        }
    }
})

export const {Inc, Dec} = IncrementDecrecmentSlice.actions; 
export default IncrementDecrecmentSlice.reducer;