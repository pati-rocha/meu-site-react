import { Header } from "../../components/Header/header";
import homeImg from "../../assets/home.svg";
import styles from "./home.module.css"

export function Home() {
  return (
    <> 
    <Header image={homeImg} alt="ilustração mulher sentada de perfil com cabelo preso usando um terno preto apoiando um notbook cinza no colo" />;
    <main className={styles.main}>
      <p>Olá, sou a Pati rocha! <br/>
      Bem vindo(a) a minha página! <br/>
      Conheça meu trabalho acessando o menu portfólio.</p>
    </main>
    </>
  )
}
