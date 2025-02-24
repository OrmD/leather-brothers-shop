import { NavLink } from "react-router";

export function HeaderItem({ link, text }) {
  return (
    <li className={`header__item `}>
      <NavLink className="link" to={link}>
        {text}
      </NavLink>
    </li>
  );
}
