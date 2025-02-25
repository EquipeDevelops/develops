import styles from "./HeroSection.module.css";
import logo from "../imgs/logo.png";
import { FaQuoteRight } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";


function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.upper}>
          SOMOS <span className={styles.highlight}>DEVELOPS</span>
        </h1>

        <h2 className={styles.lower}>CONSTRUINDO SOLUÇÕES DIGITAIS <FaQuoteRight /></h2>

        <div className={styles.ctaButtons}>
          <a href="#" className={styles.buttonCTA}>
            Entre em contato
            <FaArrowRightLong />
          </a>
          <a href="#" className={styles.btn}>
            Ver mais
          </a>
        </div>
        <ul className={styles.contactInfo}>
           <li><IoIosCall /> (82) 9 9999-9999</li>
           <li><MdEmail /> contato@develops.com</li>
        </ul>
      </div>
      <div className={styles.heroImg}>
        <img src={logo} alt="Logo" />
      </div>
    </section>
  );
}

export default HeroSection;
