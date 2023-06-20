import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(10)
  function addone() {
    count++;
  }

  return (
    <>
      <div>
        <button
         onClick={addone}>count = {count}</button>
      </div>
      </>
  )
}

export default App
