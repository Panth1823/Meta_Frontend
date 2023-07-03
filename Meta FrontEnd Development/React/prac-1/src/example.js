import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  function addTodo() {
    setTodos([...todos, inputValue]);
    setInputValue('');
  }

  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
}

ReactDOM.render(<TodoList />, document.getElementById('root'));