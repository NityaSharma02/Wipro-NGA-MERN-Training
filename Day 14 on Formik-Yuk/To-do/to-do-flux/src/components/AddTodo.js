import React, { useState } from 'react';
import TodoActions from '../actions/TodoActions';

const AddTodo = () => {
  const [text, setText] = useState('');

  const handleAdd = () => {
    if (text.trim()) {
      TodoActions.addTodo(text);
      setText('');
    }
  };

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter todo"
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default AddTodo;
