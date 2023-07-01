import { useState, useRef, useEffect } from 'react'

import './App.css'

function App() {
  const inputRef = useRef(null);
  const [names, setNames] = useState([])
  const [myObj, setMyObj] = useState([
    {id:1, name: "abc"},
    {id:2, name: "xyz"}
  ])
  const objRef = useRef()
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
  const addObj = () => {
          console.log(myObj)
  }

  return (
    <>
      <div>
        <div>
          <ul>
        {names.map((name, index)=>(
            
            <li key={index}>{index}. Name is {name}</li>
            
        ))}
        </ul>
        </div>
        <div>
        <input type="text" ref={inputRef} />
        <button onClick={onAddName}>Add Name</button>
        <button onClick={addObj}>Add Obj</button>
        <div>current name is {names}</div> <br />
        <div>
          <ul>
          {myObj.map((obj) => (
            
            <li key={obj.id}>{obj.id}. Name is {obj.name}</li>
            
          ))}
          </ul>
        </div>
        </div>
      </div>
     
    </>
  )
}

export default App
