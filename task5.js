const express = require('express');
const app = express();

app.use(express.json());

let students = [
  { id: 1, name: "Rahul", age: 20 },
  { id: 2, name: "Priya", age: 21 },
  { id: 3, name: "Amit", age: 22 }
];

app.get('/students', (req, res) => {
  res.json(students);
});

app.post('/students', (req, res) => {
  const student = req.body;
  student.id = students.length + 1;
  students.push(student);
  res.status(201).json(student);
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
