import { Header } from "../../components/Header/header";
import portImg from "../../assets/portfolio.svg"
import { Repositories } from "../../components/Repositories/repositories";

export function Portfolio(){
    return(
        <>
        <Header title="Meus Repositórios" image={portImg} alt="imagem" />   
        <Repositories />         
        </>
    ) 
}