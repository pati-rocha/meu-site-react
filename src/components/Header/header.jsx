import styles from "./header.module.css";

export function Header({ title, image }) {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
      <img className={styles.image} src={image} alt="ilustração mulher sentada de perfil com cabelo preso usando um terno preto apoiando um notbook cinza no colo" />
    </header>
  );
}
