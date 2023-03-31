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
      </header>
      <main className="linktree">
        <Link to="/" className="back-to-website">
          <ArrowLeft />
        </Link>
        <section className="container cards">
          {ProductsDb.map((product) => {
            if (id && product.id == id) {
              return (
                <Link to="" className="card selected">
                  <WhatsappLogo /> Solicitar orçamento de {product.title}.
                </Link>
              );
            }
          })}
          <Link to="" className="card">
            <WhatsappLogo /> Quero personalizar um produto com Impressão UV.
          </Link>
          <Link to="" className="card">
            <WhatsappLogo /> Solicitar orçamento de um serviço.
          </Link>
          <Link to="" className="card">
            <WhatsappLogo /> Falar com Atedente.
          </Link>
          <Link to="" className="card">
            <InstagramLogo /> Conheça nosso Instagram.
          </Link>
        </section>
      </main>
      <footer className="contact container">
        <nav>
          <a href="/">
            <Globe />
          </a>
          <a href="">
            <InstagramLogo />
          </a>
          <a href="">
            <WhatsappLogo />
          </a>
        </nav>
      </footer>
    </>
  );
};
