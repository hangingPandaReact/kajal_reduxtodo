import { createSlice } from "@reduxjs/toolkit";

const initialState=[];
const addTodo = createSlice({
    name: "todos",
    initialState,
    reducers: {
      addTodos: (state, action) => {
        state.push(action.payload);
        return state;

      },
      removeTodos: (state, action) => {
        return state.filter((item) => item.id !== action.payload);
      },
    },
  });
 export const { addTodos , removeTodos} = addTodo.actions;
 export const reducer= addTodo.reducer;

