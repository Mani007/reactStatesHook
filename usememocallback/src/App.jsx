import { useState, useMemo } from 'react'

import './App.css'

function App() {
  const [number, setNumber] = useState([10,20,30])
  const  total = useMemo(
    () => number.reduce((acc, number)=> acc+number,0),
    [number])

  const [names, setNames] = useState(['b','c','a','e','d'])  
  const sortedNames = useMemo(() => [...names].sort(), [names]) // duplicte copy is been sorted instead of original copy
  
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  const countTotal = useMemo(() => count1+count2, [count1,count2])
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
      </div> <br />
      <div>
        <button onClick={() => setCount1(count1+1)}>Count 1: {count1}</button>
        <button onClick={() => setCount2(count2+1)}>Count 2: {count2}</button>
      </div> <br />
      <div>
        Total count: {countTotal}
      </div>

    </>
  )
}

export default App
