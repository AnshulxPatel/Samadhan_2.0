const express = require('express');
const app = express();

app.use(express.json());

// Sample in-memory "database"
let students = [
  { id: 1, name: 'Alice', age: 20 },
  { id: 2, name: 'Bob', age: 21 }
];

// GET all students
app.get('/students', (req, res) => {
  res.json(students);
});

// GET single student by ID
app.get('/students/:id', (req, res) => {
  const student = students.find(s => s.id === parseInt(req.params.id));
  if (!student) return res.status(404).send('Student not found');
  res.json(student);
});

// POST create new student
app.post('/students', (req, res) => {
  const { name, age } = req.body;
  const newStudent = {
    id: students.length + 1,
    name,
    age
  };
  students.push(newStudent);
  res.status(201).json(newStudent);
});

// PUT update student by ID
app.put('/students/:id', (req, res) => {
  const student = students.find(s => s.id === parseInt(req.params.id));
  if (!student) return res.status(404).send('Student not found');
  
  const { name, age } = req.body;
  student.name = name || student.name;
  student.age = age || student.age;
  res.json(student);
});

// DELETE remove student by ID
app.delete('/students/:id', (req, res) => {
  const studentIndex = students.findIndex(s => s.id === parseInt(req.params.id));
  if (studentIndex === -1) return res.status(404).send('Student not found');
  
  students.splice(studentIndex, 1);
  res.status(204).send();
});

app.listen(3000, () => {
  console.log('Student API server running on port 3000');
});
