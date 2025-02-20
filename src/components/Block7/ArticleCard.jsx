import { useRef } from "react";

export function ArticleCard({ number, title, text, index, openModal }) {
  const buttonRef = useRef(null);

  return (
    <div className="article-card">
      <span className="article-card__number">{number}</span>
      <h6 className="article-card__title">{title}</h6>

      <p className="article-card__text">{text}</p>
      <button id={index} className="article-card__button" type="button" ref={buttonRef} onClick={() => openModal(buttonRef)}>
        read more
      </button>
    </div>
  );
}
