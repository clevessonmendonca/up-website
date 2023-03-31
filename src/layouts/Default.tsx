import "../styles/global.css";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { WhatsApp } from "../components/WhatsApp";
import { Outlet, ScrollRestoration } from "react-router-dom";

export const Default = () => {
  return (
    <>
      <ScrollRestoration />
      <Header />
      <main>
        <Outlet />
        <WhatsApp />
      </main>
      <Footer />
    </>
  );
};
