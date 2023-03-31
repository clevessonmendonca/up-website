import { Link } from "react-router-dom";
import "./styles.css";
import { ReactNode } from "react";

interface ButtonProps {
  url: string;
  name: string;
  icon?: ReactNode
}

export const Button = ({ name, url, icon }: ButtonProps) => {
  return (
    <Link to={url || "/contact"} className="primary-button">
      {icon} {name}
    </Link>
  );
};
