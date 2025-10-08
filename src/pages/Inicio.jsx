import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import InputSearch from "../components/InputSearch";
import { CardPokemons } from "../components/CardPokemons";

const Inicio = () => {
  return (
    <>
      <Navbar LinkComponent={Link} />
      <InputSearch />
      <CardPokemons />
    </>
  );
};

export default Inicio;
