import React from "react";
import TodoItem from "./TodoItem";
const TodoList = ({todos, removeTodo, toggleTodoComplite}) => {
   return (
      <ul>
         {todos.map((todo) => (
            <TodoItem
               key={todo.id}
               toggleTodoComplite={toggleTodoComplite}
               removeTodo={removeTodo}
               {...todo}
            />
         ))}
      </ul>
   );
};

export default TodoList;
