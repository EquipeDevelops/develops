import styles from "./HeroSection.module.css";
import logo from "../imgs/logo.png";

function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.rounded}></div>
      <div className={styles.heroContent}>
        <h1 className={styles.upper}>
          SOMOS <span className={styles.highlight}>DEVELOPS</span>
        </h1>
        <br />

        <h1 className={styles.lower}>CONSTRUINDO SOLUÇÕES DIGITAIS</h1>

        <div className={styles.ctaButtons}>
          <a href="#" className={styles.buttonCTA}>
            Entre em contato
          </a>
          <a href="#" className={styles.btn}>
            Ver mais
          </a>
        </div>
        <p className={styles.contactInfo}>
          📞 (82) 9 9999-9999 &nbsp;&nbsp; ✉️ contato@develops.com
        </p>
      </div>
      <div className={styles.heroImg}>
        <img src={logo} alt="Logo" />
      </div>
    </section>
  );
}

export default HeroSection;
