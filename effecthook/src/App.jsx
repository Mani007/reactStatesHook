import { useState, useEffect } from 'react'

import './App.css'
// Use of arrow fuction instead of the direct value change
const Stopwatch = () => {
  const [time, setTime] = useState(0)
  useEffect(() => 
  {
    const interval = setInterval(() => {
    //console.log(time)
    setTime((t) => {
    //console.log(t);
    return t+1;
  });
  },1000);
return () => clearInterval(interval)} // cleanup function
  ,[])
  return (
    <div> time is {time}</div>
  )
}

function App() {
  const [names, setNames] = useState([])
  useEffect(() => {
    fetch("names.json")
  .then(response => response.json())
  .then(data => setNames(data))
  }, [])
  //const [selectedNames,setSelectedNames ] = useState(null)
  const [selectedNamesDetails,setSelectedNamesDetails ] = useState(null)
  // useEffect(() => {
  //   if (selectedNames) {
    
  // }
  // }, [selectedNames])
  const onSelectNames = (name) => {
  fetch(`/${name}.json`)
  .then(response => response.json())
  .then(data => setSelectedNamesDetails(data))
  }

  return (
    <>
      <Stopwatch/>
      <div>
       Names are: {names.map((name) => 
       <button  onClick={
        () => onSelectNames(name)
       }>{name}</button>)
       }
      </div>
      {/* <div>You have selected : {selectedNames}</div> <br /> */}
      <div>Details are {JSON.stringify(selectedNamesDetails)}</div>
      
    </>
  )
}

export default App
