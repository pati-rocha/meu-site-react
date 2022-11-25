import { Header } from "../../components/Header/header";
import portImg from "../../assets/portfolio.svg"
import styles from "./portfolio.module.css"

export function Portfolio(){
    return(
        <>
        <Header title="Meus Repositórios" image={portImg} alt="imagem" />   
        <main className={styles.main}>
            <p> Em desenvolvimento...</p>
        </main>
               
        </>
    ) 
}