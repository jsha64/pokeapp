export const PokemonCard = ({ pokemon, onClick }) => {
  return (
    <div className="maron" onClick={() => onClick(pokemon)}>
      <div className="boton-pokemon"></div>
    </div>
  );
};