import React, { useState } from 'react'
import './App.css';
import UseEffect from './components/UseEffect'

function App() {

  const [myName, setMyName] = useState('Phuntsok')

  const changeMyName = () => {
    setMyName('Phuntsok Schagdeh');
  }

  return (
    <>
      <UseEffect/>
      <div className="App">
      <h1>
      { myName }
      </h1>
      <button onClick={changeMyName}>click me</button>
    </div>
    </>
  );
}

export default App;
