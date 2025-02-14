import NavMenu from "./components/NavMenu";
import HeroSection from "./components/HeroSection";
import Serviços from "./components/Serviços";
import Projetos from "./components/Projetos";
import Sobre from "./components/Sobre";
import Contato from "./components/Contato";
import Footer from "./components/Footer";
import rightwing from "./imgs/rightwing.png";
import leftwing from "./imgs/leftwing.png";

function App() {
  return (
    <div>
      <NavMenu />
      <HeroSection />
      <div className="line"></div>
      <h1 className="services">
        <img src={leftwing} />
        SERVIÇOS
        <img src={rightwing} />
      </h1>
      <Serviços />
      <h1 className="title">
        <img src={leftwing} />
        PROJETOS
        <img src={rightwing} />
      </h1>
      <Projetos />
      <h1 className="title">
        <img src={leftwing} />
        SOBRE
        <img src={rightwing} />
      </h1>
      <div className="vertical"></div>
      <Sobre />
      <h1 className="title">
        <img src={leftwing} />
        CONTATO
        <img src={rightwing} />
      </h1>
      <Contato />
      <Footer />
    </div>
  );
}

export default App;
