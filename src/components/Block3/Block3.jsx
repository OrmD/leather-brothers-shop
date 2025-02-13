import { CardItem } from "./CardItem";
import categoriesData from "../../data/categories.json";

export function Block3() {
  return (
    <section className="categories">
      <div className="categories__wrapper">
        <h2 className="categories__title">Our Categories</h2>
        <div className="categories__desc">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s....
        </div>

        <div className="categories__cards">
          {categoriesData.map((el, index) => {
            return <CardItem key={index} title={el.title} img={el.img} link={el.link} />;
          })}
        </div>
      </div>
    </section>
  );
}
