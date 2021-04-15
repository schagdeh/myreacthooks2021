import React, { useState } from 'react'
import './App.css';

function App() {

  const [myName, setMyName] = useState('Phuntsok')

  const changeMyName = () => {
    setMyName('Phuntsok Schagdeh');
  }

  return (
    <div className="App">
      <h1>
      { myName }
      </h1>
      <button onClick={changeMyName}>click me</button>
    </div>
  );
}

export default App;
