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
function usePokemon(){
  const [pokemon, setPokemon] = useState<Pokemon[]>([])
  useEffect(()=>{
      fetch("/pokemon.json")
        .then((response) => response.json())
        .then((data) => setPokemon(data))
  }, [])
  return {pokemon}}

  function App() {
    const {pokemon} = usePokemon()
  return (
    <>
      <div>
        {JSON.stringify(pokemon)}
      </div>
      
    </>
  )
}

export default App
