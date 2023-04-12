import "./styles.css";

import ArrowCenterImg from "../../assets/arrow-center.png";
import ArrowTopImg from "../../assets/arrow-top.png";
import ArrowBottomImg from "../../assets/arrow-bottom.png";

import { Rates } from "./components/Rates";
import { ArrowDown } from "phosphor-react";
import { AnimationOnScroll } from "react-animation-on-scroll";

export const About = () => {
  return (
    <>
      <section className="container about">
        <div className="summury">
          <div>
            <h1 className="line">Sobre nós</h1>
            <p>
              Somos uma empresa com foco em Comunicação Visual e Serviços
              Gráficos, venha colocar sua ideia no papel!
            </p>
            <a href="#about" className="more" aria-label="Learn more about us!">
              <ArrowDown /> Saiba mais
            </a>
          </div>
          <img src="/about.png" alt="An astronaut waving" />
        </div>
      </section>

      <section className="about-visions" id="about">
        <div className="about-visions-container container">
          <AnimationOnScroll
            animateOnce={true}
            initiallyVisible={true}
            animateIn="animate__fadeInLeftBig"
            offset={1}
          >
            <h2>Como nossos Princípios podem te ajudar</h2>
          </AnimationOnScroll>
          <div className="visions-layout">
            <ul>
              <li>
                <span>
                  <img src={ArrowCenterImg} alt="Arrow detail" />
                </span>
                <AnimationOnScroll
                  animateOnce={true}
                  initiallyVisible={true}
                  animateIn="animate__fadeInLeftBig"
                >
                  <img
                    className="principies"
                    src="/mission.png"
                    alt="Mission Image"
                  />
                  <div>
                    <h3>Missão</h3>
                    <h4>
                      Atender qualquer cliente que idealize algo, transformando
                      tal sonho em forma <strong>Gráfica/Visual</strong> em
                      realidade.
                    </h4>
                    <p>
                      E em conjunto das necessidades, como melhor custo,
                      benefícios, prazo, qualidade e comprometimento sejam
                      sempre atendidos.
                    </p>
                  </div>
                </AnimationOnScroll>
              </li>
            </ul>
            <ul>
              <li>
                <span>
                  <img src={ArrowTopImg} alt="Arrow Detail" />
                </span>
                <AnimationOnScroll
                  animateOnce={true}
                  initiallyVisible={true}
                  animateIn="animate__fadeInLeftBig"
                >
                  <img
                    className="principies"
                    src="/vision.png"
                    alt="Vision Image"
                  />
                  <div>
                    <h3>Visão</h3>
                    <h4>
                      Ser uma excelente empresa no seguimento de Comunicação
                      Visual e Serviços Gráficos.
                    </h4>
                    <p>
                      Atendemos nossos clientes de maneira única, dedicando
                      todos os esforços para desenvolver e finalizar cada
                      serviço.
                    </p>
                  </div>
                </AnimationOnScroll>
              </li>
              <li>
                <span>
                  <img src={ArrowBottomImg} alt="Arrow Detail" />
                </span>
                <AnimationOnScroll
                  animateOnce={true}
                  initiallyVisible={true}
                  animateIn="animate__fadeInLeftBig"
                >
                  <img
                    className="principies"
                    src="/values.png"
                    alt="Values Image"
                  />
                  <div>
                    <h3>Valores</h3>
                    <h4>
                      Nossos valores são baseados em nossos princípios e crenças
                      em prol do melhor para os nossos clientes!
                    </h4>
                    <p>
                      Ter fé, Comprometimento, Ética, Agilidade, Respeito,
                      Humildade, Empatia, Atitude.
                    </p>
                  </div>
                </AnimationOnScroll>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="services-trust">
        <AnimationOnScroll
          animateOnce={true}
          initiallyVisible={true}
          animateIn="animate__fadeInLeftBig"
          offset={1}
        >
          <h2>Empresas que confiam em nossos serviços</h2>
        </AnimationOnScroll>
        <div className="companies">
          <a
            title="Vivendas"
            href="https://www.grupovivendas.com.br/"
            target="_blank"
            aria-label="Partner Company"
          >
            <img
              src="/business/vivendas.png"
              alt="Company Supermarket Vivendas"
            />
          </a>
          <a
            title="Tavares"
            href="https://www.instagram.com/tavaressupermercado/"
            target="_blank"
            aria-label="Partner Company"
          >
            <img
              src="/business/tavares.jpg"
              alt="Company Tavares Supermarket"
            />
          </a>
          <a title="Rei Massas Plásticas" href="" target="_blank">
            <img
              src="/business/rei-massas.png"
              alt="Company Rei Massas Plásticas"
            />
          </a>

          <a
            title="Autoestima"
            href="https://www.instagram.com/dmourac_autoestima/"
            target="_blank"
            aria-label="Partner Company"
          >
            <img
              src="/business/autoestima.png"
              alt="Company Estetica Autoestima"
            />
          </a>
        </div>
      </section>

      <Rates />
    </>
  );
};
