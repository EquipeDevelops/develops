import styles from './Sobre.module.css';
import develops from '../imgs/develops.png';
import { IoIosArrowDown } from "react-icons/io";

function Sobre() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <blockquote className={styles.blockquote}>
          <p>
            Na <span className={styles.highlight}>Develops</span>, somos
            especialistas em criar soluções digitais sob medida que impulsionam
            o crescimento do seu negócio. Com foco em desenvolvimento de
            aplicações WEB, entregamos projetos que unem tecnologia avançada,
            design inovador e velocidade incomparável.
          </p>
          <p>
            Não construímos apenas sites —{' '}
            <span className={styles.highlight}>
              criamos ferramentas estratégicas
            </span>
            . Utilizamos tecnologias de ponta e metodologias ágeis para entregar
            projetos rápidos, responsivos e adaptados às necessidades do seu
            público. Nosso design limpo e funcional não só encanta, mas também
            facilita a navegação, aumentando o engajamento e a conversão.
          </p>
          <p>
            <span className={styles.highlight}>
              Da concepção à entrega, cuidamos de cada detalhe para que você
              possa focar no que realmente importa:
            </span>{' '}
            evoluir seu negócio. Seja para fortalecer sua presença online,
            automatizar processos ou expandir suas vendas, somos o parceiro
            ideal para transformar sua visão em realidade digital.
          </p>
          <p className={styles.footer}>
            <span className={styles.highlight}>Develops:</span> Tecnologia que
            acelera resultados.
          </p>
          <p className={styles.footerP}>Seu próximo passo para o sucesso começa aqui. <IoIosArrowDown /></p>
        </blockquote>

        <a href="#" className={styles.ctaButton}>
          Entrar em contato
        </a>
        <div className={styles.triangles}></div>
      </div>

      <div className={styles.heroImg}>
        <img src={develops} alt="Logo Develops" />
      </div>
    </section>
  );
}

export default Sobre;
