import { Link } from 'react-router-dom';

const Nabvar = () => {
  return (
    <nav className="navbar">
      <ul className="ul">
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/favoritos">Favoritos</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nabvar;