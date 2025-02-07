import { useEffect } from "react";
import { Link, useLocation } from "react-router";

export function HeaderItem({ link, text }) {
  function addClassActive(e) {
    const el = e.target;
    if ((el.className = "link")) {
      el.classList.add("active");
    }
  }
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
