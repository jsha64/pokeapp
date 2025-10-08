export const PokemonModal = ({ pokemon, onClose }) => {
  if (!pokemon) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal modal-animado" onClick={e => e.stopPropagation()}>
        <h2>{pokemon.name.toUpperCase()}</h2>
        <img className="img-modal" src={pokemon.sprites.front_default} alt={pokemon.name} />
        <p>Tipos: {pokemon.types.map(t => t.type.name).join(", ")}</p>
        <p>Peso: {pokemon.weight}</p>
      </div>
    </div>
  );
};