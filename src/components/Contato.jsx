import styles from "./Contato.module.css";

import { useState } from "react";

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Email enviado com sucesso!");
  };

  return (
    <div className={styles.container}>
      <div className={styles.heroContent}>
        <h2>O QUE ACHOU?</h2>
        <p className={styles.textUpper}>
          Na <span className={styles.highlight}>Develops</span>, sua ideia se
          torna realidade digital! Seja um site ultrarrápido, um e-commerce de
          alto desempenho ou um sistema personalizado,{" "}
          <span className={styles.highlight}>
            estamos aqui para elevar seu negócio a outro patamar
          </span>
          .
        </p>
        <p className={styles.textLower}>
          Nossa equipe está pronta para entender seus objetivos e criar a
          solução perfeita para você.
        </p>
        <div className={styles.social}>
          <p>Redes</p>
          <div className={styles.icons}>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
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
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="mensagem">O que deseja?</label>
          <textarea
            id="mensagem"
            name="mensagem"
            value={formData.mensagem}
            onChange={handleChange}
            rows="5"
            required
          ></textarea>

          <button type="submit" className={styles.ctaButton}>
            Enviar email
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contato;
