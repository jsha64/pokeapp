import { useState } from "react";
import { usePokemons } from "../hooks/usePokemons";
import { PokemonCard } from "./PokemonCard";
import { PokemonModal } from "./PokemonModal";

export const CardPokemons = () => {
  const { pokemons, loading } = usePokemons(15);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  if (loading) return <p>Cargando Pokemones...</p>;

  return (
    <div className="contenedor-inicio-grid">
      {pokemons.map(pokemon => (
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
          onClick={setSelectedPokemon}
        />
      ))}

      <PokemonModal
        pokemon={selectedPokemon}
        onClose={() => setSelectedPokemon(null)}
      />
    </div>
  );
};