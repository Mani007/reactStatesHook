import { useReducer ,useState, useEffect, createContext, useContext, useCallback } from 'react'
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
 function usePokemonSource():{
  pokemon: Pokemon[],
  search: string
  setSearch: (search: string) => void } {
    // const [pokemon, setPokemon] = useState<Pokemon[]>([])
    // const [search, setSearch] = useState<string>("")
    
    type PokemonState = {
      pokemon: Pokemon[],
      search: string
    }

    type PokemonActions = 
    {type: "setPokemon", payload: Pokemon[]} | {type: "setSearch", payload: string}
    // useReducer hook below
    const [{pokemon, search}, dispatch] = useReducer((state: PokemonState,action: PokemonActions) => {
      switch(action.type) {
        case "setPokemon":
          return {...state, pokemon: action.payload}
        case "setSearch":
            return {...state, search: action.payload}
      }
    },{ // Initial state
      pokemon: [],
      search: ""
    })

    useEffect(()=>{
        fetch("/pokemon.json")
          .then((response) => response.json())
          .then((data) => dispatch({
            type: "setPokemon",
            payload: data}))
    }, [])

    const setSearch = useCallback((search: string) => {
      dispatch({
        type: "setSearch",
        payload: search
      })
},[])

    return {pokemon, search, setSearch}}

 const PokemonContext = createContext<ReturnType<typeof usePokemonSource>>(
        {} as unknown as ReturnType<typeof usePokemonSource>)



export function usePokemon(){
        return useContext(PokemonContext)
      }

export function PokemonProvider({
    children,}:{ children: React.ReactNode} ) {
        //const {pokemon} = usePokemon()
      return (
        <>
          <div>
            <PokemonContext.Provider value={usePokemonSource()}>
            {children}
            </PokemonContext.Provider>
          </div>
          
        </>
      )
    }