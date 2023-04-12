import "./styles.css";

import { Button } from "../../components/Button";
import { Product } from "../../components/Product";
import { CarouselComponent } from "./components/Carousel";
import { Rates } from "../About/components/Rates";
import { ProductsDb } from "../../Services/Products";
import { AnimationOnScroll } from "react-animation-on-scroll";

export function Home() {
  return (
    <>
      <CarouselComponent />

      <div className="container introduction">
        <h2>Os mais Vendidos</h2>
        <div className="cards">
          {ProductsDb.map((product) => {
            if (product.star) {
              return (
                <div className="card" key={product.id}>
                  <h3 className="card-title">{product.title}</h3>
                  <img src={product.image} alt={product.title} />
                  <p className="card-text">{product.description}</p>
                  <AnimationOnScroll
                    animateOnce={true}
                    initiallyVisible={true}
                    animateIn="animate__tada"
                  >
                    <Button
                      name="Saiba mais"
                      url={`/contato/${product.id}`}
                      arial_label={`Learn more about ${product.title} product.`}
                    />
                  </AnimationOnScroll>
                </div>
              );
            }
          })}
        </div>
      </div>

      <Product />

      <Rates />
    </>
  );
}
