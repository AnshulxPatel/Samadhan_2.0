import React, { useState } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  function handleAdd() {
    if (input.trim()) {
      setTasks([...tasks, input]);
      setInput('');
    }
  }

  function handleRemove(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  return (
    <div>
      <h2>To-Do List</h2>
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {tasks.map((task, i) => (
          <li key={i}>
            {task} <button onClick={() => handleRemove(i)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
