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
    if (!isActive) {
      const navElement = document.querySelector("nav");
      const overlayElement = document.querySelector(".overlay");
      const headerElement = document.querySelector("header");

      navElement?.classList.remove("active-navbar");
      overlayElement?.classList.remove("active-navbar");
      headerElement?.classList.remove("active-navbar");
    } else {
      const navElement = document.querySelector("nav");
      const overlayElement = document.querySelector(".overlay");
      const headerElement = document.querySelector("header");

      navElement?.classList.add("active-navbar");
      overlayElement?.classList.add("active-navbar");
      headerElement?.classList.add("active-navbar");
    }
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
            {isActive ? (
              <NavLink className="link-mobile" to="/contact">
                Contato
              </NavLink>
            ) : (
              ""
            )}
          </ul>
        </nav>
        <Button name="Contato" url="/contact" />
        <div className="mobile-nav" onClick={() => handleNavbar()}>
          {isActive ? <X /> : <Equals />}
        </div>
      </div>
      <div className="overlay" onClick={() => handleNavbar()} />
    </header>
  );
};
