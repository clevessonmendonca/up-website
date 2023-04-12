import "./styles.css";

import { Link } from "react-router-dom";
import { Globe, InstagramLogo, WhatsappLogo } from "phosphor-react";

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="content">
          <div>
            <img src="/logotipo.webp" alt="Logo by Up Comunição Visual" />
            <div className="social-medias">
              <a href="https://www.instagram.com/up.cvbsb/" target="_blank">
                <InstagramLogo />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://wa.me/5561999732123?text=Ol%C3%A1%2C+gostaria+de+solicitar+um+or%C3%A7amento%21"
              >
                <WhatsappLogo />
              </a>
              <Link to="/">
                <Globe />
              </Link>
            </div>
            <p>Up Comuicação Visual 2023</p>
            <p>Todos os direitos reservados.</p>
          </div>
          <nav>
            <Link to="/" aria-label="Go to Home Page!">Home</Link>
            <Link to="/sobre"  aria-label="Find out More about Up Comunicação Visual.">Quem somos</Link>
            <Link to="/servicos" aria-label="Click here to learn more about our services and products.">Serviços</Link>
            <Link to="/contato" aria-label="Click here and get in touch with us.">Contato</Link>
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
          <a target="_blank" href="https://clevessoncontacto.com" aria-label="Go to developer Site">
            Aurora
          </a>
        </p>
      </div>
    </footer>
  );
};
