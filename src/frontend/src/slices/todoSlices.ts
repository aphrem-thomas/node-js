import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type stateType = {
    todo:string,
    done:boolean,
    date:string
}

type returnStateType = {
    id:string,
    todo:string,
    done:boolean,
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

export const postTodo = createAsyncThunk(
    'postTodo',
    async (todo:stateType, thunkApi) => {
        try {
            const response = await fetch('todo/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                  },
                body: JSON.stringify(todo)
            })
            return response.json();
        } catch{

        }
    }
)

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        add:(state, action:PayloadAction<stateType>)=>{

            state.push(action.payload)
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(postTodo.fulfilled, (state, action)=>{
            state.push(JSON.parse(action.payload.data.toString()))
        })
    }
});

export const {add} = todoSlice.actions;
export default todoSlice.reducer;