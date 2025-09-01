<form id="addNoteForm">
  <input type="text" id="title" placeholder="Title" required>
  <textarea id="content" placeholder="Content" required></textarea>
  <button type="submit">Add Note</button>
</form>
<ul id="notesList"></ul>
<script>
async function fetchNotes() {
  const res = await fetch('/notes');
  const notes = await res.json();
  document.getElementById('notesList').innerHTML = notes.map(
    note => `<li>${note.title}: ${note.content}</li>`
  ).join('');
}
document.getElementById('addNoteForm').onsubmit = async (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;
  await fetch('/notes', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({title, content})
  });
  fetchNotes();
};
fetchNotes();
</script>
