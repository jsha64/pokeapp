import Nabvar from "../components/Navbar";
import { CardPokemons } from "../components/CardPokemons";
const Favoritos = () => {
    return (
      <>
        <Nabvar />
        <div className="contenedor_favoritos">
          <h1>Favoritos</h1>
          <div className="card_favoritos">
            <CardPokemons />
          </div>
        </div>
      </>
    );
}
  
export default Favoritos;