import { useState, useEffect, createContext, useContext } from 'react'

import './App.css'

interface Pokemon {
  id: number;
  name: string;
  type: string[];
  hp: number;
  attack: number;
  defense: number;
  special_attack: number;
  special_defense: number;
  speed: number;
}

// creating custome hook
function usePokemon():{pokemon: Pokemon[]}{
  const [pokemon, setPokemon] = useState<Pokemon[]>([])
  useEffect(()=>{
      fetch("/pokemon.json")
        .then((response) => response.json())
        .then((data) => setPokemon(data))
  }, [])
  return {pokemon}}

  const PokemonList = ():React.ReactElement => {
  const {pokemon} = useContext(PokemonContext); // use of context
   return( <div>
    {/* <div>The THEME is {theme}</div> */}
      {pokemon.map((p)=>(
        <div key={p.id}> {p.name}</div>
      ))}
    </div>
   )
  }

  const PokemonContext = createContext({
    pokemon: [] as Pokemon[]   // empty array as interface of Pokemon
  })
  // Applying context API
  function App() {
    //const {pokemon} = usePokemon()
  return (
    <>
      <div>
        <PokemonContext.Provider value={usePokemon()}>
        <PokemonList />
        </PokemonContext.Provider>
      </div>
      
    </>
  )
}

export default App
