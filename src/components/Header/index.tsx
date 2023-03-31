import { Button } from "../Button";
import "./styles.css";

import LogoImg from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header id="header">
      <div className="container">
        <img src={LogoImg} alt="Logo by Up Comunição Visual" />
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">Sobre</NavLink>
          <NavLink to="services/">Serviços</NavLink>
        </nav>
        <Button name="Contato" url="/" />
      </div>
    </header>
  );
};
