import { Wrapper } from "../wrapper-blocks/Wrapper";

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
      <p>Articles</p>
    </Wrapper>
  );
}
