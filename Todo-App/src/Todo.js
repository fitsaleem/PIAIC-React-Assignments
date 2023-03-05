import React from 'react';
import { FaTimes } from 'react-icons/fa';

const Todo = ({ todo, onDelete, onToggle }) => {
  return (
    <div className={`todo ${todo.completed ? 'completed' : ''}`} onClick={() => onToggle(todo.id)}>
      <div className="todo-text">{todo.text}</div>
      <FaTimes className="delete-btn" onClick={(e) => {e.stopPropagation(); onDelete(todo.id)}} />
    </div>
  );
};

export default Todo;
