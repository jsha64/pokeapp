import { useEffect, useState } from "react";

export const CardPokemons = () => {
  const [pokemons, setPomekons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  
  useEffect(() => {
    const getPokemons = async () => {
      try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=12")
        const data = await res.json();
      
        const fetches = data.results.map(pokemon =>
          fetch(pokemon.url).then(res => res.json())
        );
        const allData = await Promise.all(fetches);
        console.log(allData);
        
        setPomekons(allData);
        } catch(error) {
            console.error(error);
          };
    };
    getPokemons();
      
  }, []);
  return(
    <div className="contenedor-inicio-grid">
      {pokemons.map(pokemon => (
        <div key={pokemon.id} className="maron" onClick={() => setSelectedPokemon(pokemon)}>
          <div className="superior-blanco"></div>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <h3>{pokemon.name.toUpperCase()}</h3>
        </div>        
      ))}

      {selectedPokemon && (
        <div className="modal-overlay" onClick={() => setSelectedPokemon(null)}>
          <div className="modal modal-animado" onClick={e => e.stopPropagation()}>
            <h2>{selectedPokemon.name.toUpperCase()}</h2>
            <img className="img-modal" src={selectedPokemon.sprites.front_default} alt={selectedPokemon.name} />
            <p>Tipos: {selectedPokemon.types.map(t => t.type.name).join(", ")}</p>
            <p>Peso: {selectedPokemon.weight}</p>
          </div>
        </div>
      )}
    </div>
  )
};