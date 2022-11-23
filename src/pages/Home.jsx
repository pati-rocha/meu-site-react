import { Header } from "../components/Header/header";
import { Footer } from "../components/Footer/footer";

import homeImg from "../assets/home.svg";

export function Home() {
  return (
    <> 
    <Header title="Sou a Pati Rocha" image={homeImg} />;
    <Footer name="Pati Rocha"/>
    </>
  )
}
