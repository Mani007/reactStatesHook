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

function UserForm() {

 const [state,dispatch] = useReducer((state,action) => ({
    ...state,
    ...action,
  }), {
    first: "",
    last: ""
  })
  return (
    <div>
        <label htmlFor="">First Name &nbsp;</label>
        <input type="text" value={state.first}
        onChange={(e) => dispatch({first: e.target.value})}
        /> <br />
        <label htmlFor="">Last Name &nbsp;</label>
        <input type="text" value={state.last}
         onChange={(e) => dispatch({last: e.target.value})}
        />
        <div>
          First is {state.first} <br />
          Last is {state.last}
        </div>
    </div>
  );
}
function NameList() {

 const [state, dispatch] = useReducer((state, action) => {
  switch(action.type) {
    case "SET_NAME":
      return {...state, name: action.payload}
    case "ADD_NAME":
      return {...state, 
      names: [...state.names, state.name],
      name: ""
    }

  }

 },{
    names: [],
    name: ""
  })
  //console.log(state.names)
  return(
    <div>
      {/* <Counter/>
      <NameList/> */}
      <ul>
         {state.names.map((name, index) => (
          <li key={index}>{name}</li>
       ))}
     </ul>
      <label htmlFor="">Input text &nbsp;</label> 
      <input type="text"
      value={state.name} 
      onChange={e => dispatch({type: "SET_NAME", payload: e.target.value})}
      />
      <div>Name: {state.name}</div>
      <button onClick={() => dispatch({type: "ADD_NAME"})}>Add Name</button>
    </div>
  )
}


export const App = () => {
  return (
    <>
    <UserForm/>
    <NameList/>
    </>
  )
}


export default App
