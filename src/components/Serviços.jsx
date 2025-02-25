import { useState } from "react";
import styles from "./Serviços.module.css";
import lefty from "../imgs/lefty.png";
import righty from "../imgs/righty.png";
import { FaEarthAmericas } from "react-icons/fa6";
import { HiBuildingStorefront } from "react-icons/hi2";
import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { MdDevices } from "react-icons/md";
import { HiOutlineShoppingCart } from "react-icons/hi";


function Serviços() {
  const [selectedCard, setSelectedCard] = useState(null);

  const cards = [
    {
      title: "Landing Pages",
      features: ["Mobile First", "Integração com APIs", "SEO Otimizado"],
      icon: <FaEarthAmericas />
    },
    {
      title: "Sites Institucionais",
      features: [
        "Design corporativo",
        "Formulário de contato integrado",
        "SEO básico incluído",
      ],
      icon: <HiBuildingStorefront />
    },
    {
      title: "Portfólios Digitais",
      features: [
        "Galeria de projetos",
        "Integração com redes sociais",
        "Download de currículo",
      ],
      icon: <CgProfile />
    },
    {
      title: "Manutenção",
      features: [
        "Correção de bugs",
        "Backup diário",
        "Monitoramento de performance",
      ],
      icon: <IoSettingsOutline />
    },
    {
      title: "Design Responsivo",
      features: [
        "Mobile-first",
        "Layouts flexíveis",
        "Testes em múltiplos dispositivos",
      ],
      icon: <MdDevices />
    },
    {
      title: "E-commerce",
      features: [
        "Catálogo de produtos",
        "Carrinho de compras",
        "Gateway de pagamento",
      ],
      icon: <HiOutlineShoppingCart />
    },
  ];

  const handleCardClick = (index) => {
    setSelectedCard(index);
  };

  return (
    <section className={styles.serviços}>
      <div className={styles.subtexto}>
        <p>
          <img src={lefty} />{" "}
          <i>Não construímos sites, criamos experiências que convertem.</i>
          <img src={righty} />
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
            <h2>{card.title} {card.icon}</h2>
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
