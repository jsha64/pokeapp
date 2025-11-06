export const PokemonCard = ({ pokemon, onClick }) => {
  return (
    <div className="blanco">
      <div className="maron" onClick={() => onClick(pokemon)}>
        <div className="boton-pokemon"></div>
      </div>
    </div>
    
  );
};