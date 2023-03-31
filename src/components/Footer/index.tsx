import "./styles.css";

import { Link } from "react-router-dom";
import { Globe, InstagramLogo, WhatsappLogo } from "phosphor-react";

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="content">
          <div>
            <img src="/logotipo.png" alt="Logo by Up Comunição Visual" />
            <div className="social-medias">
              <a href="https://www.instagram.com/up.cvbsb/" target="_blank">
                <InstagramLogo />
              </a>
              <a>
                <WhatsappLogo />
              </a>
              <a href="/">
                <Globe />
              </a>
            </div>
            <p>Up Comuicação Visual 2023</p>
            <p>Todos os direitos reservados.</p>
          </div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">Quem somos</Link>
            <Link to="/services">Serviços</Link>
            <Link to="/contact">Contato</Link>
          </nav>
        </div>
        <div className="hour">
          <h3>Horário de Atendimento:</h3>
          <p>
            <strong>WhatsApp:</strong> Segunda a Sexta das 09:00 às 18 horas e
            <br /> Sábado das 09:00 às 12:00 horas
          </p>
        </div>
      </div>
      <div className="clevesson-men">
        <p>
          Developed by{" "}
          <a target="_blank" href="https://clevessoncontato.com">
            Aurora
          </a>
        </p>
      </div>
    </footer>
  );
};
