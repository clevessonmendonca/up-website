import { WhatsappLogo } from "phosphor-react";
import './styles.css'

export const Contact = () => {
  return (
    <>
      <header>
        <img src="/logo.svg" alt="Logo by Up Comunição Visual" />
      </header>
      <main className="container">
        <section className="cards">
          <div className="card">
            <WhatsappLogo /> Entrar em contato
          </div>
        </section>
      </main>
      <footer></footer>
    </>
  );
};
