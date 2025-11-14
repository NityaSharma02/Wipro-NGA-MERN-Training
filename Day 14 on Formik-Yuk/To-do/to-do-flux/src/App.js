import React from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

const App = () => (
  <div>
    <h1>Flux Todo List</h1>
    <AddTodo />
    <TodoList />
  </div>
);

export default App;
