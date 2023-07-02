import { useState, useEffect } from 'react'

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

  const PokemonList = ({pokemon}: {pokemon: Pokemon[]}):React.ReactElement => {
   return( <div>
      {pokemon.map((p)=>(
        <div key={p.id}> {p.name}</div>
      ))}
    </div>
   )
  }
  function App() {
    const {pokemon} = usePokemon()
  return (
    <>
      <div>
        <PokemonList pokemon={pokemon}/>
      </div>
      
    </>
  )
}

export default App
