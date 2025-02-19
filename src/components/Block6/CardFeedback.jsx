import { getNameImg } from "../../hooks/getNameImg";
import { Image } from "../Router";

export function CardFeedback({ fotoProduct, textFeedback, clientFoto, clientName, clientCounty }) {
  const createURLFoto = (name) => {
    const imagePath = new URL(`../../assets/images/${name}`, import.meta.url).href;
    return imagePath;
  };

  return (
    <div className="feedback-card">
      <div className="feedback-card__img">
        <img src={createURLFoto(fotoProduct)} alt={getNameImg(fotoProduct)} />
      </div>
      <div className="feedback-card__info">
        <div className="feedback-card__icons">
          <Image.Quotes />
        </div>
        <p className="feedback-card__text">{textFeedback}</p>
        <div className="feedback-card__client">
          <div className="feedback-card__foto">
            <img src={createURLFoto(clientFoto)} alt={getNameImg(clientFoto)} />
          </div>
          <h6 className="feedback-card__name">{clientName}</h6>
          <span className="feedback-card__country">{clientCounty}</span>
        </div>
      </div>
    </div>
  );
}
