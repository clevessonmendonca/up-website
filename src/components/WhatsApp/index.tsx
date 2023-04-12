import WhatsAppLogo from "../../assets/whatsapp.webp";

import "./styles.css";

export const WhatsApp = () => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://wa.me/5561999732123?text=Ol%C3%A1%2C+gostaria+de+solicitar+um+or%C3%A7amento%21"
      className="whatsapp-button"
      aria-label="Click here and be redirected to the customer service center."
    >
      <img src={WhatsAppLogo} alt="whatsapp logo" />
    </a>
  );
};
