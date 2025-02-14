import { CardItem } from "./CardItem";
import categoriesData from "../../data/categories.json";
import { Wrapper } from "../wrapper-blocks/Wrapper";

export function Block3() {
  return (
    <Wrapper
      objProps={{
        secName: "Categories",
        wrapName: "Categories__wrapper",
        descName: "Categories__desc",
        titleValue: "Our Categories",
        descValue:
          "   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s....",
      }}
    >
      <div className="Categories__cards">
        {categoriesData.map((el, index) => {
          return <CardItem key={index} title={el.title} img={el.img} link={el.link} />;
        })}
      </div>
    </Wrapper>
  );
}
