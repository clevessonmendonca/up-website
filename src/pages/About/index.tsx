import "./styles.css";

import ArrowCenterImg from "../../assets/arrow-center.webp";
import ArrowTopImg from "../../assets/arrow-top.webp";
import ArrowBottomImg from "../../assets/arrow-bottom.webp";

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
          <img src="/about.webp" alt="An astronaut waving" />
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
                    src="/mission.webp"
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
                    src="/vision.webp"
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
                    src="/values.webp"
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
          <ul>
            <li>
              <a
                title="Vivendas"
                href="https://www.grupovivendas.com.br/"
                target="_blank"
                aria-label="Partner Company"
              >
                <img
                  src="/business/vivendas.webp"
                  alt="Company Supermarket Vivendas"
                />
              </a>
            </li>
            <li>
              <a
                title="Tavares"
                href="https://www.instagram.com/tavaressupermercado/"
                target="_blank"
                aria-label="Partner Company"
              >
                <img
                  src="/business/tavares.webp"
                  alt="Company Tavares Supermarket"
                />
              </a>
            </li>
            <li>
              <a title="Rei Massas Plásticas" href="" target="_blank">
                <img
                  src="/business/rei-massas.webp"
                  alt="Company Rei Massas Plásticas"
                />
              </a>
            </li>
            <li>
              <a
                title="Autoestima"
                href="https://www.instagram.com/dmourac_autoestima/"
                target="_blank"
                aria-label="Partner Company"
              >
                <img
                  src="/business/autoestima.webp"
                  alt="Company Estetica Autoestima"
                />
              </a>
            </li>
            <li>
              <a
                title="Dreams Personalizados"
                href="#"
                target="_blank"
                aria-label="Partner Company"
              >
                <img
                  src="/business/dreams-personalizados.webp"
                  alt="Company Dreams Personalizados"
                />
              </a>
            </li>
            <li>
              <a
                title="Mundo Zoo"
                href="#"
                target="_blank"
                aria-label="Partner Company"
              >
                <img src="/business/mundo-zoo.webp" alt="Company Mundo Zoo" />
              </a>
            </li>
            <li>
              <a
                title="Mineirão"
                href="#"
                target="_blank"
                aria-label="Partner Company"
              >
                <img src="/business/mineirao.webp" alt="Company Mineirão" />
              </a>
            </li>
            <li>
              <a
                title="Nossa Kaza"
                href="#"
                target="_blank"
                aria-label="Partner Company"
              >
                <img src="/business/nossakaza.webp" alt="Company Nosso Kaza" />
              </a>
            </li>
            <li>
              <a
                title="The 300"
                href="#"
                target="_blank"
                aria-label="Partner Company"
              >
                <img src="/business/the300.webp" alt="Company The 300" />
              </a>
            </li>
            <li>
              <a
                title="Texugo's Burguers"
                href="#"
                target="_blank"
                aria-label="Partner Company"
              >
                <img
                  src="/business/texugos-burguer.webp"
                  alt="Company Texugo's Burguer"
                />
              </a>
            </li>
            <li>
              <a
                title="Espaço 29"
                href="#"
                target="_blank"
                aria-label="Partner Company"
              >
                <img src="/business/espaco-29.webp" alt="Company Espaço 29" />
              </a>
            </li>
            <li>
              <a
                title="Toca do Peixe"
                href="#"
                target="_blank"
                aria-label="Partner Company"
              >
                <img
                  src="/business/toca-do-peixe.webp"
                  alt="Company Toca do Peixe"
                />
              </a>
            </li>
            <li>
              <a
                title="Euro, Araujo, Soares & Lima"
                href="#"
                target="_blank"
                aria-label="Partner Company"
              >
                <img
                  src="/business/euro-araujo-soares.webp"
                  alt="Company Euro, Araujo, Soares & Lima"
                />
              </a>
            </li>
            <li>
              <a
                title="Santa Maria Shopping"
                href="#"
                target="_blank"
                aria-label="Partner Company"
              >
                <img
                  src="/business/santa-maria-shop.webp"
                  alt="Company Santa Maria Shopping"
                />
              </a>
            </li>
          </ul>
        </div>
      </section>

      <Rates />
    </>
  );
};
