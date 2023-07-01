import { useState, useRef, useEffect } from 'react'

import './App.css'

function App() {
  const inputRef = useRef(null);
  const [names, setNames] = useState([])
  //console.log("app rerender")
  useEffect(()=> {
    inputRef.current.focus();
  },[names]);
  const onAddName = () => {
      setNames([...names,inputRef.current.value]);
      console.log(inputRef.current.value)
      console.log(names)
      //inputRef.current.value = "";
  };
  return (
    <>
      <div>
        <div>
        {names.map((name, index)=>{
          <p key={index}>{index}. Name is {name}</p>
        })}
        </div>
        <div>
        <input type="text" ref={inputRef} onChange={e => setNames(...names,e.target.value)}/>
        <button onClick={onAddName}>Add Name</button>
        <div>current name is {names}</div>
        </div>
      </div>
     
    </>
  )
}

export default App
