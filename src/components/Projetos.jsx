import styles from "./Projetos.module.css";
import cris from "../imgs/cristovao.png";
import { IoIosArrowRoundUp } from "react-icons/io";

function Projetos() {
  return (
    <section className={styles.projetos}>
      <p>
        Confira alguns exemplos de projetos que desenvolvemos para nossos
        clientes.
      </p>
      <div className={styles.projetocard}>
        <div className={styles.textSection}>
          <h2>Portfólio de advocacia</h2>
          <a href="#">Um portfólio que desenvolvemos para um escritório de advocacia <IoIosArrowRoundUp /></a>
        </div>
        <div className={styles.imageSection}>
          <img src={cris} alt="Foto do portfólio de advocacia" />
        </div>
      </div>
    </section>
  );
}

export default Projetos;
