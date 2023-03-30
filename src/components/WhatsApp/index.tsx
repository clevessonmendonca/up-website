import WhatsAppLogo from "../../assets/whatsapp.png";

import "./styles.css";

export const WhatsApp = () => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://api.whatsapp.com/send?1=pt_br&phone=5561985783047&utm_source=site&utm_medium=organic&utm_campaign=contato&utm_term=botaowhatsapp&utm_content=paginicial-home"
      className="whatsapp-button"
    >
      <img src={WhatsAppLogo} alt="whatsapp logo" />
    </a>
  );
};
