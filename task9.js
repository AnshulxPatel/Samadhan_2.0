// StudentDirectory.js
import React, { useState, useEffect } from 'react';

const StudentDirectory = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/api/students') // Node API endpoint
      .then(response => {
        if (!response.ok) throw new Error('Failed to fetch');
        return response.json();
      })
      .then(data => setStudents(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Student Directory</h2>
      <ul>
        {students.map(student => (
          <li key={student.id}>{student.name} ({student.email})</li>
        ))}
      </ul>
    </div>
  );
};

export default StudentDirectory;
