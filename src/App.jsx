import NavMenu from "./components/NavMenu";
import HeroSection from "./components/HeroSection";
import Serviços from "./components/Serviços";
import Projetos from "./components/Projetos";
import Sobre from "./components/Sobre";
import Contato from "./components/Contato";
function App() {
  return (
    <div>
      <NavMenu />
      <HeroSection />
      <Serviços />
      <Projetos />
      <h1 className="sobre">SOBRE</h1>
      <Sobre />
      <h1 className="contato">CONTATO</h1>
      <Contato />
    </div>
  );
}

export default App;
