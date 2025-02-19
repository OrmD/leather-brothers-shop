import { Wrapper } from "../wrapper-blocks/Wrapper";
import articleData from "../../data/articles.json";
import { ArticleCard } from "./ArticleCard";
export function Block7() {
  return (
    <Wrapper
      objProps={{
        secName: "Articles",
        wrapName: "Articles__wrapper",
        descName: "Articles__desc",
        titleValue: "Articles / Blogs",
        descValue:
          "   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s....",
      }}
    >
      <div className="Articles__container-cards">
        {articleData.map((el, index) => {
          return <ArticleCard key={index} number={el.number} title={el.title} text={el.text} />;
        })}
      </div>
    </Wrapper>
  );
}
