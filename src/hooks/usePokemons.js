import { useEffect, useState } from "react";

export const usePokemons = (limit = 15) => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPokemons = async () => {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=15");
        const data = await response.json();
        
        const fetches = data.results.map(pokemon =>
          fetch(pokemon.url).then(res => res.json())
        );
        const allData = await Promise.all(fetches);
        
        setPokemons(allData);
      } catch (error) {
        console.error("Error fetching pokemons:", error);
      } finally {
        setLoading(false);
      }
    };

    getPokemons();
  }, [limit]);

  return { pokemons, loading };
};
