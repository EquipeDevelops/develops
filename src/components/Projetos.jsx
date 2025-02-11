import styles from "./Projetos.module.css";
import cris from "../imgs/cristovao.png";

function Projetos() {
  return (
    <main className={styles.projetos}>
      <h1>PROJETOS</h1>
      <p>
        Confira alguns exemplos de projetos que desenvolvemos para nossos
        clientes.
      </p>

      <div className={styles.projetocard}>
        <h1>Portfólio de advocacia</h1>
        <p> Um portifólio que desenvolvemos para um escritório de advocacia</p>
        <img src={cris} />
      </div>
    </main>
  );
}

export default Projetos;
