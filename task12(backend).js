const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let todos = []; // In-memory list of todos

app.get('/api/todos', (req, res) => {
  res.json(todos);
});

app.post('/api/todos', (req, res) => {
  const newTodo = { id: Date.now(), text: req.body.text };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.delete('/api/todos/:id', (req, res) => {
  todos = todos.filter(todo => todo.id !== Number(req.params.id));
  res.status(204).send();
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
