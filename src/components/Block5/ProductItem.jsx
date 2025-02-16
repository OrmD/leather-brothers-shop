import { getNameImg } from "../../hooks/getNameImg";

export function ProductItem({ img, title, desc }) {
  const imagePath = new URL(`../../assets/images/${img}`, import.meta.url).href;
  return (
    <div className="product-item">
      <img className="product-item__img" src={imagePath} alt={getNameImg(img)} />
      <h6 className="product-item__title">{title}</h6>
      <div className="product-item__desc">{desc}</div>
    </div>
  );
}
