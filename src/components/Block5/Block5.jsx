import { Wrapper } from "../wrapper-blocks/Wrapper";

export function Block5() {
  return (
    <Wrapper
      objProps={{
        secName: "Selling",
        wrapName: "Selling__wrapper",
        descName: "Selling__desc",
        titleValue: "Best Selling Product",
        descValue:
          "   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s....",
      }}
    >
      <p>Selling</p>
    </Wrapper>
  );
}
