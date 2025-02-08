import { Link } from "react-router";

export function HeaderItem({ link, text }) {
  return (
    <li
      className={`header__item ${location.pathname === link ? "active" : ""}`}
    >
      <Link className="link" to={link}>
        {text}
      </Link>
    </li>
  );
}
