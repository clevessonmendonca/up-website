import { Button } from "../Button";
import "./styles.css";

export const Error = () => {
  return (
    <div className="error-page container">
      <span className="background-effect" />
      <img src="/logotipo.png" alt="Logo by Up Comunicação Visual" />
      <h1>Oops!</h1>
      <span className="background-effect" />
      <h2>Parece que você foi muito longe!</h2>
      <span className="background-effect" />
      <p>Mas não se preocupe! Tente voltar para a Home e tentar novamente.</p>
      <Button name="RETORNAR À HOME" url="/" arial_label="Back to Home" />
      <span className="background-effect" />
    </div>
  );
};
