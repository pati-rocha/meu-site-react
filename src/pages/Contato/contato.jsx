import { Header } from "../../components/Header/header";
import contactImg  from "../../assets/contact.svg"

import styles from "./contato.module.css"

export function Contato(){
    return(
        <>
        <Header title="Entre em contato" image={contactImg}/>   
        <form className={styles.form}>
            <input className={styles.formInput} placeholder="Digite seu nome"  />
            <input  className={styles.formInput} placeholder="Digite seu email"  />
            <textarea  className={styles.formText} placeholder="Digite sua mensagem" cols="30" rows="5"/>
            <button className={styles.formButton} type="submit">Enviar mensagem</button>           
        </form>     
        </>
    )
}