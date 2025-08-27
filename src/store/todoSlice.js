import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const todoSlice = createSlice({
   name: "todo",
   initialState: {
      todos: [],
   },
   reducers: {
      addTodo(state, action) {
       
        
        
         state.todos.push({
            id: new Date().toISOString(),
            text: action.payload.text,
            complited: false,
         });
      },
      removeTodo(state, action) {
           state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
      },
      toggleTodoComplete(state, action) {
        const toggletTodo = state.todos.find(todo => todo.id === action.payload.id)
        toggletTodo.complited = !toggletTodo.complited;
      },
   },
});

export const {addTodo, removeTodo, toggleTodoComplete } = todoSlice.actions;

export default todoSlice.reducer;