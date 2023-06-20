import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(10)

  return (
    <>
      <div>
        <button>count = {count}</button>
      </div>
      </>
  )
}

export default App
