import styles from "./Footer.module.css";

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
            <p className={styles.tagline}>Construindo soluções digitais</p>
          </div>

          <div className={styles.socialContent}>
            <h3 className={styles.socialTitle}>Social</h3>
            <div className={styles.icons}>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/145/145807.png"
                  alt="LinkedIn"
                />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/174/174855.png"
                  alt="Instagram"
                />
              </a>
            </div>
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
