import { useState, useMemo, useCallback } from 'react'

import './App.css'
// for custom hook also useCallback hook is important
function SortedList({ list, sortfunc}){
  console.log(list);
  const sortedList = useMemo(() => {
    console.log("running sorting");
    return [...list].sort(sortfunc)},
     [list, sortfunc]);
    console.log(sortedList)
  return (
    <div> Sorted List from the function: {sortedList.join(',')}</div>
  );
}
// useCallback are essential for nested component calling. MAKE SURE THAT
function App() {
  const [number, setNumber] = useState([10,20,30])
  const  total = useMemo(
    () => number.reduce((acc, number)=> acc+number,0),
    [number])

  const [names, setNames] = useState(['bam','ccam','am','dam','es'])  
  const sortedNames = useMemo(() => [...names].sort(), [names]) // duplicte copy is been sorted instead of original copy
  
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  const countTotal =  count1+count2
  
  const sortFunc = useCallback((a,b) => a.localeCompare(b),[]);
  return (
    <>
      <div>
        total is {total}
      </div> <br />
      <div>
        Names: {...names.join(',')}   
      </div> <br />
      <div>
        <SortedList list={names} sortfunc={sortFunc}/>
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
