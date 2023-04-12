import { Link } from "react-router-dom";
import "./styles.css";
import { ReactNode } from "react";

interface ButtonProps {
  url: string;
  name: string;
  icon?: ReactNode;
  arial_label: string;
}

export const Button = ({ name, url, icon, arial_label }: ButtonProps) => {
  return (
    <Link
      to={url || "/contato"}
      className="primary-button"
      aria-label={arial_label || `button to ${name}`}
    >
      {icon} {name}
    </Link>
  );
};
