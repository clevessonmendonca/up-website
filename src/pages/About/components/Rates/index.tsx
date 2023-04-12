import "./styles.css";

import AvatarImg from "../../../../assets/avatar.webp";
import { AnimationOnScroll } from "react-animation-on-scroll";

export const Rates = () => {
  return (
    <section id="services" className=" rates">
      <AnimationOnScroll
        animateOnce={true}
        initiallyVisible={true}
        animateIn="animate__fadeInUpBig"
      >
        <h2>Sua Opinião Importa!</h2>
        <p>Avaliações de nossos clientes.</p>
      </AnimationOnScroll>
      <div className="cards">
        <div className="card">
          <img src={AvatarImg} alt="avatar anonymous" />
          <h3 className="card-title">Isadora Santos</h3>
          <p className="card-text">
            O resultado final ficou incrível, superando minhas expectativas. A
            qualidade do material é excelente e o preço foi justo.
          </p>
        </div>
        <div className="card">
          <img src={AvatarImg} alt="avatar anonymous" />
          <h3 className="card-title">Mateus Oliveira</h3>
          <p className="card-text">
            Recomendo a Up para quem precisa de serviços de comunicação visual
            de qualidade, com uma equipe competente e atenciosa. Com certeza vou
            voltar a fazer negócio com eles no futuro!
          </p>
        </div>
        <div className="card">
          <img src={AvatarImg} alt="avatar anonymous" />
          <h3 className="card-title">Igor Ferreira</h3>
          <p className="card-text">
            Eu tive uma ótima experiência com a Up! Eles fizeram um excelente
            trabalho na criação do meu logotipo, cartão de visitas e banners
            para a minha empresa.
          </p>
        </div>
      </div>
    </section>
  );
};
