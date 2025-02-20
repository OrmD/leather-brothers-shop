import { useCallback, useEffect, useState } from "react";

export function Modal({ number, title, text, closeModal, showModal }) {
  const [isVisible, setIsVisible] = useState(false);

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    },
    [closeModal]
  );

  useEffect(() => {
    if (showModal) {
      setIsVisible(true);
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      const timer = setTimeout(() => setIsVisible(false), 800);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
      return () => clearTimeout(timer);
    }
  }, [showModal, handleKeyDown]);

  useEffect(() => {
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);
  return (
    <div className={`back-shadow ${showModal ? "show" : ""}`} onClick={closeModal}>
      <div className="article-card" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="btn-close-modal" onClick={closeModal} aria-label="Close modal"></button>
        <span className="article-card__number">{number}</span>
        <h6 className="article-card__title">{title}</h6>
        <p className="article-card__text">{text}</p>
      </div>
    </div>
  );
}
