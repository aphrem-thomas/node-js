import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type stateType = {
    todo:string,
    date:string
}
type actionType = {
    type:string,
    payload:{
        todo:string;
        date:string;
    }
}

const initialState:stateType[]= [];


export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        add:(state, action:PayloadAction<stateType>)=>{
            state.push(action.payload)
        }
    }
});

export const {add} = todoSlice.actions;
export default todoSlice.reducer;