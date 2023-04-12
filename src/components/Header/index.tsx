import { Equals, X } from "phosphor-react";
import { Button } from "../Button";
import "./styles.css";

import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
        <Link to="/">
          <img src="/logo.svg" alt="Logo by Up Comunição Visual" />
        </Link>
        <nav>
          <ul className="navbar" onClick={() => handleNavbar()}>
            <Link to="/" aria-label="Go to Home Page!">
              Home
            </Link>
            <Link
              to="/sobre"
              aria-label="Find out More about Up Comunicação Visual."
            >
              Sobre
            </Link>
            <Link
              to="/servicos"
              aria-label="Click here to learn more about our services and products."
            >
              Serviços
            </Link>
            {isActive ? (
              <NavLink
                className="link-mobile"
                to="/contato"
                aria-label="Click here and get in touch with us."
              >
                Contato
              </NavLink>
            ) : (
              ""
            )}
          </ul>
        </nav>
        <Button
          name="Contato"
          url="/contato"
          arial_label="Click here to open the navigation bar"
        />
        <div className="mobile-nav" onClick={() => handleNavbar()}>
          {isActive ? <X /> : <Equals />}
        </div>
      </div>
      <div className="overlay" onClick={() => handleNavbar()} />
    </header>
  );
};
