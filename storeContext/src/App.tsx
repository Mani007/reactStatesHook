import { useState, useEffect, createContext, useContext } from 'react'
import {usePokemon, PokemonProvider} from './store'
import './App.css'


  const PokemonList = ():React.ReactElement => {
  const {pokemon} = usePokemon(); // use of context
   return( <div>
    {/* <div>The THEME is {theme}</div> */}
      {pokemon.map((p)=>(
        <div key={p.id}> {p.name}</div>
      ))}
    </div>
   )
  }

  function App() {
    //const {pokemon} = usePokemon()
  return (
    <>
      <div>
        <PokemonProvider>
        <PokemonList />
        </PokemonProvider>
      </div>
      
    </>
  )
}

export default App
