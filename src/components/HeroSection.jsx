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

        <h2 className={styles.lower}>
          CONSTRUINDO SOLUÇÕES DIGITAIS <FaQuoteRight />
        </h2>

        <div className={styles.ctaButtons}>
          <a href="#contato" className={styles.buttonCTA}>
            Entre em contato
            <FaArrowRightLong />
          </a>
          <a
            href="https://www.linkedin.com/company/developsbr"
            className={styles.btn}
          >
            Ver mais
          </a>
        </div>
        <ul className={styles.contactInfo}>
          <li>
            <IoIosCall /> +55 82 9986-8803
          </li>
          <li>
            <MdEmail /> equipedevelops@gmail.com
          </li>
        </ul>
      </div>
      <div className={styles.heroImg}>
        <img src={logo} alt="Logo" />
      </div>
    </section>
  );
}

export default HeroSection;
