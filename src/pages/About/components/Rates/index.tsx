import "./styles.css";

import AvatarImg from "../../../../assets/avatar.png";
import { AnimationOnScroll } from "react-animation-on-scroll";

export const Rates = () => {
  return (
    <section id="services" className=" rates">
      <AnimationOnScroll
        animateOnce={true}
        initiallyVisible={true}
        animateIn="animate__fadeInUpBig"
      >
        <h2>A Opinião Importa!</h2>
        <p>Avaliações de nossos clientes.</p>
      </AnimationOnScroll>
      <div className="cards">
        <div className="card">
          <img src={AvatarImg} alt="avatar anonymous" />
          <h3 className="card-title">Isadora Santos</h3>
          <p className="card-text">Adorei! Eles superaram minha expectativa.</p>
        </div>
        <div className="card">
          <img src={AvatarImg} alt="avatar anonymous" />
          <h3 className="card-title">Mateus Oliveira</h3>
          <p className="card-text">
            Desde que conheci a UP, só faço com eles meus produtos.
          </p>
        </div>
        <div className="card">
          <img src={AvatarImg} alt="avatar anonymous" />
          <h3 className="card-title">Igor Ferreira</h3>
          <p className="card-text">
            Qualquer coisa que eu precise dos serviços deles, eu corro para
            eles... Uso e recomendo!
          </p>
        </div>
      </div>
    </section>
  );
};
