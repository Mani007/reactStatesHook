import { useState, useMemo } from 'react'

import './App.css'

function App() {
  const [number, setNumber] = useState([10,20,30])
  const  total = useMemo(
    () => number.reduce((acc, number)=> acc+number,0),
    [number])

  const [names, setNames] = useState(['b','c','a','e','d'])  
  const sortedNames = useMemo(() => [...names].sort(), [names]) // duplicte copy is been sorted instead of original copy
  return (
    <>
      <div>
        total is {total}
      </div> <br />
      <div>
        Names: {...names.join(',')}   
      </div> <br />
      <div>
        Sorted Names: {sortedNames.join(',')}
      </div>
    </>
  )
}

export default App
