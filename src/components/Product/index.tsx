import { AnimationOnScroll } from "react-animation-on-scroll";
import { ProductsDb } from "../../Services/Products";
import { Button } from "../Button";
import "./styles.css";

export const Product = () => {
  return (
    <div id="services" className="container products">
      <AnimationOnScroll
        animateOnce={true}
        initiallyVisible={true}
        animateIn="animate__fadeInUpBig"
      >
        <h2 className="line">Serviços</h2>
        <p>Veja abaixo produtos e serviços que prestamos</p>
      </AnimationOnScroll>
      <div className="cards">
        {ProductsDb.map((product) => (
          <AnimationOnScroll
            key={product.id}
            initiallyVisible={window.screen.width <= 1020 ? false : true}
            animateOnce={true}
            animateIn="animate__fadeInLeftBig"
          >
            <div className="card">
              <h3 className="card-title">{product.title}</h3>
              <img src={product.image} alt={product.title} />
              <p className="card-text">{product.description}</p>
              <Button name="Saiba mais" url={`/contact/${product.id}`} />
            </div>
          </AnimationOnScroll>
        ))}
      </div>
    </div>
  );
};
