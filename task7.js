import React, { useState } from 'react';

function MiniTask() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  return (
    <div>
      <h3>Counter: {count}</h3>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <br /><br />
      <input 
        type="text" 
        value={text} 
        onChange={e => setText(e.target.value)} 
        placeholder="Type here"
      />
      <p>Live Preview: {text}</p>
    </div>
  );
}

export default MiniTask;
