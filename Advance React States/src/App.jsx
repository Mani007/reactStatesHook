import { useState } from 'react'

import './App.css'
function NameList() {
  const [Names, setNames] = useState(["a", "b", "c", "d", "e"])
  
  return(
    <>
    <div>
      <ul>
        {Names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
    </>
  )
  
}

function Counter() {
  const [count, setCount] = useState(10)
  function addone() {
    setCount(count+1);
  }

  return (
    <>
      <div className='App'>
        <button
         onClick={addone}>count = {count}</button>
      </div>
      </>
  )
}

function App() {
  return(
    <div>
      <Counter/>
      <NameList/>
    </div>
  )
}

export default App
