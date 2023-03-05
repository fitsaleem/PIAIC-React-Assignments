import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, onDelete, onToggle }) => {
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </div>
  );
};

export default TodoList;
