import React, { useEffect, useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  // Fetch todos on mount
  useEffect(() => {
    fetch('http://localhost:5000/api/todos')
      .then(res => res.json())
      .then(data => setTodos(data));
  }, []);

  // Add a new todo
  const addTodo = () => {
    if (!input.trim()) return;
    fetch('http://localhost:5000/api/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: input }),
    })
      .then(res => res.json())
      .then(newTodo => setTodos(todos => [...todos, newTodo]));
    setInput('');
  };

  // Delete a todo
  const deleteTodo = (id) => {
    fetch(`http://localhost:5000/api/todos/${id}`, {
      method: 'DELETE',
    }).then(() => setTodos(todos => todos.filter(todo => todo.id !== id)));
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Add new task"
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
