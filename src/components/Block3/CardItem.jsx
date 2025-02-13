const images = import.meta.glob("../../assets/images/*", { eager: true });
import { Link } from "react-router";

export function CardItem({ title, img, link }) {
  return (
    <div className="card">
      <Link to={link} className="card__body" style={{ backgroundImage: `url(${images[`../../assets/images/${img}`].default})` }}>
        <h5 className="card__name">categories</h5>
        <div className="card__title">{title}</div>
      </Link>
    </div>
  );
}
