import "./styles.css";

import ArrowCenterImg from "../../assets/arrow-center.png"
import ArrowTopImg from "../../assets/arrow-top.png"
import ArrowBottomImg from "../../assets/arrow-bottom.png"

import { Rates } from "./components/Rates";
import { Button } from "../../components/Button";
import { ArrowDown } from "phosphor-react";

export const About = () => {
  return (
    <>
      <section className="container about">
        <div className="summury">
          <div>
            <h1 className="line">Sobre nós</h1>
            <p>
              Somos uma empresa com foco em Comunicação Visual e Serviços
              Gráficos, venha colocar sua ideia no papel
            </p>
            <Button icon={<ArrowDown />} name="Saiba mais" url="#about" />
          </div>
          <img src="/about.png" alt="" />
        </div>
      </section>

      <section className="about-visions">
        <div className="about-visions-container container">
          <h2>Como nossos Princípios podem te ajudar</h2>
          <div className="visions-layout">
            <ul>
              <li>
                <span>
                  <img src={ArrowCenterImg} alt="" />
                </span>
                <img
                  className="principies"
                  src="/mission.png"
                  alt=""
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
                    benefícios, prazo, qualidade e comprometimento sejam sempre
                    atendidos.
                  </p>
                </div>
              </li>
            </ul>
            <ul>
              <li>
                <span>
                  <img src={ArrowTopImg} alt="" />
                </span>
                <img
                  className="principies"
                  src="/vision.png"
                  alt=""
                />
                <div>
                  <h3>Visão</h3>
                  <h4>
                    Ser uma excelente empresa no seguimento de Comunicação
                    Visual e Serviços Gráficos
                  </h4>
                  <p>
                    Atendemos nossos clientes de maneira única, dedicando todos
                    os esforços para desenvolver e finalizar cada serviço.
                  </p>
                </div>
              </li>
              <li>
                <span>
                  <img src={ArrowBottomImg} alt="" />
                </span>
                <img
                  className="principies"
                  src="/values.png"
                  alt=""
                />
                <div>
                  <h3>Valores</h3>
                  <h4>
                    Nossos valores são baseados em nossos princípios e crenças
                    em prol do melhor para os nossos clientes
                  </h4>
                  <p>
                    Ter fé, Comprometimento, Ética, Agilidade, Respeito,
                    Humildade, Empatia, Atitude
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="services-trust">
        <h2>Empresas que confiam em nossos serviços</h2>
        <div className="companies">
          <a
            title="Vivendas"
            href="https://www.grupovivendas.com.br/"
            target="_blank"
          >
            <img
              src="/business/vivendas.png"
              alt="Empresa Supermercado Vivendas"
            />
          </a>
          <a
            title="Tavares"
            href="https://www.instagram.com/tavaressupermercado/"
            target="_blank"
          >
            <img src="/business/tavares.jpg" alt="" />
          </a>
          <a
            title="Autoestima"
            href="https://www.instagram.com/dmourac_autoestima/"
            target="_blank"
          >
            <img
              src="/business/autoestima.png"
              alt="Empresa de estetica Autoestima"
            />
          </a>
        </div>
      </section>

      <Rates />
    </>
  );
};
