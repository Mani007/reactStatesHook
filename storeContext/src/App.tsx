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
function usePokemonSource():{pokemon: Pokemon[]}{
  const [pokemon, setPokemon] = useState<Pokemon[]>([])
  useEffect(()=>{
      fetch("/pokemon.json")
        .then((response) => response.json())
        .then((data) => setPokemon(data))
  }, [])
  return {pokemon}}

  function usePokemon(){
    return useContext(PokemonContext)
  }
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
// Understanding types here is vital
  const PokemonContext = createContext<ReturnType<typeof usePokemonSource>>(
    {} as unknown as ReturnType<typeof usePokemonSource>)
  // handling the undefined part of source code
  function App() {
    //const {pokemon} = usePokemon()
  return (
    <>
      <div>
        <PokemonContext.Provider value={usePokemonSource()}>
        <PokemonList />
        </PokemonContext.Provider>
      </div>
      
    </>
  )
}

export default App
