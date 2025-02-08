import styles from "./NavMenu.module.css";
import logo from "../imgs/logo1.png";

function NavMenu() {
  return (
    <div className={styles.navmenu}>
      <div className={styles.navLinksEsquerda}>
        <a href="#">Inicio</a>
        <a href="#">Serviços</a>
        <a href="#">Projetos</a>
      </div>
      <div className={styles.navLogo}>
        <img src={logo} />
      </div>
      <div className={styles.navLinksDireita}>
        <a href="#">Contato</a>
        <a href="#">Sobre</a>
        <a href="#">Depoimentos</a>
      </div>
    </div>
  );
}

export default NavMenu;
