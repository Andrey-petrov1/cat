import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { act } from "react";

export const fetchTodos = createAsyncThunk (
   'todos/fetchTodos',
   async function () {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')

      const data = await response.json();
      
      return data;
   }
)

const todoSlice = createSlice({
   name: "todo",
   initialState: {
      todos: [],
      status: null,
      error: null,
   },
   reducers: {
      addTodo(state, action) {
       
        
        
         state.todos.push({
            id: new Date().toISOString(),
            title: action.payload.text,
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
 extraReducers: (builder) => {
  builder
    .addCase(fetchTodos.pending, (state) => {
      state.status = "loading";
      state.error = null;
    })
    .addCase(fetchTodos.fulfilled, (state, action) => {
      state.status = "resolved";
      state.todos = action.payload;
    })
    .addCase(fetchTodos.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
},

});

export const {addTodo, removeTodo, toggleTodoComplete } = todoSlice.actions;

export default todoSlice.reducer;