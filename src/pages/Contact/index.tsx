import { Link, useParams } from "react-router-dom";
import "./styles.css";

import { ArrowLeft, Globe, InstagramLogo, WhatsappLogo } from "phosphor-react";
import { ProductsDb } from "../../Services/Products";

export const Contact = () => {
  const { id } = useParams();

  return (
    <>
      <header className="container">
        <img src="/logotipo.png" alt="Logo by Up Comunição Visual" />
        <h1>Links e Contato</h1>
        <p>Clique no botão em que deseja solicitar um serviço!</p>
        <span className="background-effect" />
      </header>
      <main className="linktree">
        <Link to="/" className="back-to-website">
          <ArrowLeft />
        </Link>
        <section className="container cards">
          {ProductsDb.map((product) => {
            if (id && product.id == id) {
              return (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://wa.me/5561999732123?text=Ol%C3%A1%2C+gostaria+de+solicitar+um+or%C3%A7amento%21"
                  className="card selected"
                >
                  <WhatsappLogo /> Solicitar orçamento de {product.title}.
                </a>
              );
            }
          })}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://wa.me/5561999732123?text=Ol%C3%A1%2C+gostaria+de+fazer+uma+impress%C3%A3o+UV%21"
            className="card"
          >
            <WhatsappLogo /> Quero personalizar um produto com Impressão UV.
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://wa.me/5561999732123?text=Ol%C3%A1%2C+gostaria+de+solicitar+um+or%C3%A7amento%21"
            className="card"
          >
            <WhatsappLogo /> Solicitar orçamento de um serviço.
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://wa.me/5561999732123?text=Ol%C3%A1%2C+gostaria+de+solicitar+um+or%C3%A7amento%21"
            className="card"
          >
            <WhatsappLogo /> Falar com Atedente.
          </a>
          <a
            href="https://www.instagram.com/up.cvbsb/"
            target="_blank"
            className="card"
          >
            <InstagramLogo /> Conheça nosso Instagram.
          </a>
        </section>
        <span className="background-effect" />
      </main>
      <footer className="contact container">
        <nav>
          <Link to="/">
            <Globe />
          </Link>
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
        </nav>
        <span className="background-effect" />
      </footer>
    </>
  );
};
