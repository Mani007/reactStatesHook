import { useState, useRef, useEffect } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const inputRef = useRef(null);
  useEffect(()=> {
    inputRef.current.focus()
  },[]);

  return (
    <>
      <div>
        <input type="text" ref={inputRef} />
      </div>
     
    </>
  )
}

export default App
