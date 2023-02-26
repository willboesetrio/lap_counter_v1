import React, {useState} from "react";
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [savedSession, setSavedSession] = useState(0);
  return (
    <div className="App">
      <h1>Lap Counter Exercise v1</h1>
      <div>
        <h3>LAP COUNT</h3>
        <h2 className="counter">{count}</h2>
        <button className="button-19" onClick={() => setCount(count + 1)}>INCREMENT</button>
        <button className="button-19" onClick={() => setCount(count - 1)} disabled={count <= 0}>DECREMENT</button>
        <div>   
        <button className="button-19" onClick={() => setCount(0)}>RESET</button>
        <button className="button-19" onClick={() => {setSavedSession(count); setCount(0)}} disabled={count <= 0}>SAVE SESSION</button>
        </div>
        <h3>PREVIOUS SESSION: {savedSession}</h3>
      </div>
    </div>
  );
}

export default App;
