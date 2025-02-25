import styles from "./Footer.module.css";
import { FaQuoteRight } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.contactBox}>
        <span className={styles.contactText}>
          Se ficou interessado em nossos serviços, que tal nos contatar?
        </span>
        <button className={styles.contactButton}>Entrar em contato</button>
      </div>

      <div className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.leftContent}>
            <h3 className={styles.logo}>DEVELOPS</h3>
            <p className={styles.tagline}>Construindo soluções digitais <FaQuoteRight /></p>
          </div>

          <div className={styles.socialContent}>
            <h3 className={styles.socialTitle}>Social</h3>
            <ul className={styles.icons}>
              <li><FaLinkedinIn /></li>
              <li><LuInstagram /></li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        <p>
          ©Copyright 2025, todos os direitos reservados. Feito por
          <a href="#" className={styles.developsLink}>
            {" "}
            Develops
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
