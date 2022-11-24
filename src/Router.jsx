import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Menu } from "./components/Menu/menu";
import { Footer } from "./components/Footer/footer"

import { Home } from "./pages/Home/home";
import { Sobre } from "./pages/Sobre/sobre";
import { Portfolio } from "./pages/Portfolio/portfolio";
import { Contato } from "./pages/Contato/contato";

export function Router() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
