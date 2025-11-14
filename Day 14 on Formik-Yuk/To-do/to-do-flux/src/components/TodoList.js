import React, { useEffect, useState } from 'react';
import TodoStore from '../stores/TodoStore';

const TodoList = () => {
  const [todos, setTodos] = useState(TodoStore.getTodos());

  useEffect(() => {
    const update = () => setTodos([...TodoStore.getTodos()]);
    TodoStore.addChangeListener(update);

    return () => TodoStore.removeChangeListener(update);
  }, []);

  return (
    <ul>
      {todos.map((todo, idx) => (
        <li key={idx}>{todo}</li>
      ))}
    </ul>
  );
};

export default TodoList;
