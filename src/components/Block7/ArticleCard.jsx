export function ArticleCard({ number, title, text }) {
  return (
    <div className="article-card">
      <div className="article-card__face face1">
        <div className="article-card__content">
          <span className="article-card__number">{number}</span>
          <h6 className="article-card__title">{title}</h6>
        </div>
      </div>
      <div className="article-card__face face2">
        <div className="article-card__content">
          <p className="article-card__text">{text}</p>
          <button className="article-card__button" type="button">
            read more
          </button>
        </div>
      </div>
    </div>
  );
}
