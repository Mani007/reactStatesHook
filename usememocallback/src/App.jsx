import { useState } from 'react'

import './App.css'

function App() {
  const [number, setNumber] = useState([10,20,30])
  const  total = number.reduce((acc, number)=> acc+number,0)

  return (
    <>
      <div>
        total is {total}
      </div>
    </>
  )
}

export default App
