import { useState, useReducer} from 'react'

import './App.css'
// function NameList() {
//   const [Names, setNames] = useState(["a", "b", "c", "d", "e"])
//   const [AddName, setAddName] = useState(() =>"z")
//   const addnewname = () => {
//     //Names.push(AddName)
//     setNames([...Names, AddName])
//     setAddName("")
//   }
  
//   return(
//     <>
//     <div>
//       <ul>
//         {Names.map((name) => (
//           <li key={name}>{name}</li>
//         ))}
//       </ul>
//       <input type="text" 
//       value={AddName}
//       onChange={(e) => setAddName(e.target.value)}
//       />
//     <button onClick={addnewname}> Add Name</button>
//     </div>
//     </>
//   )
  
// }

// function Counter() {
//   const [count, setCount] = useState(10)
//   function addone() {
//     setCount(count+1);
//   }

//   return (
//     <>
//       <div className='App'>
//         <button
//          onClick={addone}>count = {count}</button>
//       </div>
//       </>
//   )
// }



// USE REDUCER CODE BELOW FOR STATE MANAGEMENT

function App() {

 const [state, dispatch] = useReducer((state, action) => {
  switch(action.type) {
    case "SET_NAME":
    //return {...state, name: action.payload}
    state.name = action.payload
    return state
  }

 },{
    names: [],
    name: ""
  })
  return(
    <div>
      {/* <Counter/>
      <NameList/> */}
      <label htmlFor="">Input text &nbsp;</label> 
      <input type="text"
      value={state.name} 
      onChange={e => dispatch({type: "SET_NAME", payload: e.target.value})}
      />
      <div>Name: {state.name}</div>
    </div>
  )
}

export default App
