import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const TodoForm = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      const newTodo = {
        id: uuidv4(),
        text: text,
        completed: false,
      };
      onAdd(newTodo);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Add Todo" value={text} onChange={(e) => setText(e.target.value)} />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
