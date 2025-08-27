import React from 'react';
import { useDispatch } from 'react-redux'; 'react-redux';
import { removeTodo, toggleTodoComplete } from '../store/todoSlice';

const TodoItem = ({id, text}) => {
  const dispatch = useDispatch( );
  return (
    <li>
         <input type="checkbox"
        
         onChange={() => dispatch(toggleTodoComplete(id))} />

               <span>{text}</span>
               <span className="delete" style={{color: 'red'}} onClick={() => dispatch(removeTodo({id}))}>&times;</span>
    </li>
  )
}

export default TodoItem
