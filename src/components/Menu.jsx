import { Link } from "react-router-dom";

export function Menu() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/"> Home </Link>
        </li>
        <li>
          <Link to="/sobre"> Sobre </Link>
        </li>
        <li>
          <Link to="/portfolio"> Portfólio </Link>
        </li>
        <li>
          <Link to="/contato"> Contato</Link>
        </li>
      </ul>
    </nav>
  );
}
