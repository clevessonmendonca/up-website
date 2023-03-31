import { ProductsDb } from "../../Services/Products";
import { Button } from "../Button";
import "./styles.css";

export const Product = () => {
  return (
    <div id="services" className="container products">
      <h2 className="line">Serviços</h2>
      <p>Veja abaixo produtos e serviços que prestamos</p>
      <div className="cards">
        {ProductsDb.map((product) => (
          <div className="card" key={product.id}>
            <h3 className="card-title">{product.title}</h3>
            <img src={product.image} alt="" />
            <p className="card-text">{product.description}</p>
            <Button name="Saiba mais" url={`/contact/${product.id}`} />
          </div>
        ))}
      </div>
    </div>
  );
};
