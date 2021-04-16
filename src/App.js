import React, { useState } from 'react'
import './App.css';
import UseEffect from './components/UseEffect'
import UseEffect2 from './components/UseEffect2';

function App() {

  const [myName, setMyName] = useState('Phuntsok')

  const changeMyName = () => {
    setMyName('Phuntsok Schagdeh');
  }

  return (
    <>
      <UseEffect/>
      <UseEffect2/>
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
