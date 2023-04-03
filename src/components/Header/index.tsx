import { Equals, X } from "phosphor-react";
import { Button } from "../Button";
import "./styles.css";

import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

export const Header = () => {
  const [isActive, setIsActive] = useState(false);

  function handleNavbar() {
    if (isActive) return setIsActive(false);

    setIsActive(true);
  }

  useEffect(() => {
    const navElement = document.querySelector("nav");
    const overlayElement = document.querySelector(".overlay");
    const headerElement = document.querySelector("header");

    navElement?.classList.toggle("active-navbar");
    overlayElement?.classList.toggle("active-navbar");
    headerElement?.classList.toggle("active-navbar");
  }, [isActive]);

  return (
    <header>
      <div className="container">
        <img src="/logo.svg" alt="Logo by Up Comunição Visual" />
        <nav>
          <ul className="navbar" onClick={() => handleNavbar()}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">Sobre</NavLink>
            <NavLink to="/services">Serviços</NavLink>
            {isActive ? <NavLink to="/contact">Contato</NavLink> : ""}
          </ul>
        </nav>
        <Button name="Contato" url="/contact" />
        <div className="mobile-nav" onClick={() => handleNavbar()}>
         { isActive ? <X /> : <Equals />}
        </div>
      </div>
      <div className="overlay" onClick={() => handleNavbar()} />
    </header>
  );
};
