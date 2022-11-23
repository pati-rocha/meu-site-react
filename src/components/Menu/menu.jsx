import { Link } from "react-router-dom";

import styles from "./menu.module.css"

export function Menu() {
  return (
    <nav>
      <ul className={styles.container}>
        <li>
          <Link to="/"> Home </Link>
        </li>
        <li>
          <Link className={styles.link}to="/sobre"> Sobre </Link>
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
