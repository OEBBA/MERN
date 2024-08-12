import './App.css';
import React, { useState } from 'react';
import Task1 from './components/Task1';
import Task2 from './components/Task2';

function App() {
  const [page, setPage] = useState(1);

  const sendToPage = (page) => {
    setPage(page);
  }

  return (
    <div className="App">
      <div>
        {page === 1 ? <Task1 /> : <Task2 />}
      </div>
      <br />
      <div>
        <div>Tasks:</div>
        <br />
        <button onClick={() => sendToPage(1)}>1</button>
        <button onClick={() => sendToPage(2)}>2</button>
      </div>
    </div>
  );
}

export default App;
