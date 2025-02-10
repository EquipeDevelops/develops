import { useState } from "react";
import styles from "./Serviços.module.css";

function Serviços() {
  const [selectedCard, setSelectedCard] = useState(null);

  const cards = [
    {
      title: "Landing Pages",
      features: ["Mobile First", "Integração com APIs", "SEO Otimizado"],
    },
    {
      title: "Sites Institucionais",
      features: [
        "Design corporativo",
        "Formulário de contato integrado",
        "SEO básico incluído",
      ],
    },
    {
      title: "Portfólios Digitais",
      features: [
        "Galeria de projetos",
        "Integração com redes sociais",
        "Download de currículo",
      ],
    },
    {
      title: "Manutenção",
      features: [
        "Correção de bugs",
        "Backup diário",
        "Monitoramento de performance",
      ],
    },
    {
      title: "Design Responsivo",
      features: [
        "Mobile-first",
        "Layouts flexíveis",
        "Testes em múltiplos dispositivos",
      ],
    },
    {
      title: "E-commerce",
      features: [
        "Catálogo de produtos",
        "Carrinho de compras",
        "Gateway de pagamento",
      ],
    },
  ];

  const handleCardClick = (index) => {
    setSelectedCard(index);
  };

  return (
    <section className={styles.serviços}>
      <h1>SERVIÇOS</h1>
      <div className={styles.subtexto}>
        <p>
          <i>Não construímos sites, criamos experiências que convertem.</i>
        </p>
      </div>

      <div className={styles.cardsContainer}>
        {cards.map((card, index) => (
          <div
            key={index}
            className={`${styles.card} ${
              selectedCard === index ? styles.cardSelected : ""
            }`}
            onClick={() => handleCardClick(index)}
          >
            <h2>{card.title}</h2>
            <ul>
              {card.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Serviços;
