import { useState, useEffect } from 'react'

import './App.css'

function App() {
  const [names, setNames] = useState([])
  useEffect(() => {
    fetch("names.json")
  .then(response => response.json())
  .then(data => setNames(data))
  }, [])
  

  return (
    <>
      <div>
       Names are: {names.join(",")}
      </div>
      
    </>
  )
}

export default App
