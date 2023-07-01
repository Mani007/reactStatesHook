import { useState, useRef, useEffect } from 'react'

import './App.css'

function App() {
  const inputRef = useRef(null);
  const [names, setNames] = useState([])
  
  useEffect(()=> {
    inputRef.current.focus();
  },[]);
  function onAddName() {
      setNames([...names,inputRef.current.value]);
      console.log(inputRef.current.value)
      console.log(names)
      inputRef.current.value = "";
  };
  return (
    <>
      <div>
        <div>
        {names.map((name)=>{
          <div key={name}>Name is {name}</div>
        })}
        </div>
        <input type="text" ref={inputRef} />
        <button onClick={onAddName}>Add Name</button>
      </div>
     
    </>
  )
}

export default App
