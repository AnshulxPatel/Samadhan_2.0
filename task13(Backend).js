// app.js
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Connect to SQLite database
const db = new sqlite3.Database(':memory:');

// Create notes table
db.run('CREATE TABLE notes (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, content TEXT)');

// CRUD Routes

// Get all notes
app.get('/notes', (req, res) => {
  db.all('SELECT * FROM notes', [], (err, rows) => {
    if (err) return res.status(500).json({error: err.message});
    res.json(rows);
  });
});

// Get a note by ID
app.get('/notes/:id', (req, res) => {
  const id = req.params.id;
  db.get('SELECT * FROM notes WHERE id = ?', [id], (err, row) => {
    if (err) return res.status(500).json({error: err.message});
    res.json(row);
  });
});

// Add a new note
app.post('/notes', (req, res) => {
  const {title, content} = req.body;
  db.run('INSERT INTO notes (title, content) VALUES (?, ?)', [title, content], function(err){
    if (err) return res.status(500).json({error: err.message});
    res.json({id: this.lastID, title, content});
  });
});

// Update a note
app.put('/notes/:id', (req, res) => {
  const id = req.params.id;
  const {title, content} = req.body;
  db.run('UPDATE notes SET title = ?, content = ? WHERE id = ?', [title, content, id], function(err){
    if (err) return res.status(500).json({error: err.message});
    res.json({id, title, content});
  });
});

// Delete a note
app.delete('/notes/:id', (req, res) => {
  const id = req.params.id;
  db.run('DELETE FROM notes WHERE id = ?', [id], function(err){
    if (err) return res.status(500).json({error: err.message});
    res.json({deleted: id});
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
