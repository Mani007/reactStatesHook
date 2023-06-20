import { useState } from 'react'

import './App.css'

function App() {
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

export default App
