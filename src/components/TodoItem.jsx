import React from 'react'

const TodoItem = ({id, text, removeTodo, toggleTodoComplite}) => {
  return (
    <li>
         <input type="checkbox"
        
         onChange={() => toggleTodoComplite(id)} />

               <span>{text}</span>
               <span className="delete" style={{color: 'red'}} onClick={() => removeTodo(id)}>&times;</span>
    </li>
  )
}

export default TodoItem
