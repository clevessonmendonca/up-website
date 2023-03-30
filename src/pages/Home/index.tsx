import "./styles.css";

import { Button } from "../../components/Button";
import { Product } from "../../components/Product";
import { CarouselComponent } from "./components/Carousel";
import { Rates } from "../About/components/Rates";
import { ProductsDb } from "../../Services/Products";

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
                  <img src={product.image} alt="" />
                  <p className="card-text">{product.description}</p>
                  <Button name="Saiba mais" url="/services/:service" />
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
