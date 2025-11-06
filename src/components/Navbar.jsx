const Navbar = ({ LinkComponent }) => {
  const routes = [
    { path: "/", label: "Inicio" },
    { path: "/favoritos", label: "Favoritos" },
  ];
  
  return (
    <nav className="navbar">
      <ul className="ul">
        {routes.map((route) => (
          <li className="li" key={route.path}>
            <LinkComponent to={route.path}>{route.label}</LinkComponent>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;