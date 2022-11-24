import { Header } from "../../components/Header/header";
import sobreImg from "../../assets/sobre.svg";
import styles from "./sobre.module.css";

export function Sobre() {
  return (
    <>
      <Header title="Sobre mim" image={sobreImg} alt="" />
      <main className={styles.main}>
        <p className={styles.paragraph}>
          Desenvolvedora Frontend participante do Bootcamp Todas em Tech da
          Reprograma. Na condição de curiosa e apreciadora de tecnologia invisto
          no aprendizado contínuo como forma de aprimorar meus conhecimentos
          iniciados de forma autônoma. Nas minhas experiências profissionais
          pude desenvolver habilidades de liderança, capacidade de análise,
          relacionamento interpessoal, gerenciamento de conflitos e boa
          comunicação. Tenho como objetivo me tornar desenvolvedora especialista
          em conjunto com os assuntos dentro das várias áreas de atuação. Gosto
          de trabalhar em equipe compartilhando ideias e experiências com as
          quais posso aprender e também ensinar.
        </p>
      </main>
    </>
  );
}
