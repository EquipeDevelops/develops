import styles from "./Contato.module.css";
import { useState } from "react";
import { LuInstagram } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa";

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
        <p className={styles.textUpper}>
        <h2>O QUE ACHOU?</h2>
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
          <h3>Redes</h3>
          <ul>
            <li><FaLinkedinIn /></li>
            <li><LuInstagram /></li>
          </ul>
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
