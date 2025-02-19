import { Image } from "../Router";
import { Wrapper } from "../wrapper-blocks/Wrapper";
import ClientSayData from "../../data/clientSay.json";
import { Slider } from "./Slider";

export function Block6() {
  return (
    <Wrapper
      objProps={{
        secName: "Clients-say",
        wrapName: "Clients-say__wrapper",
        descName: "Clients-say__desc",
        titleValue: "What Our Clients Say!",
        descValue:
          "   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s....",
      }}
      item={<Image.TransitionImg className={"transition-img"} />}
    >
      <div className="Clients-say__body">
        <Slider data={ClientSayData} />
      </div>
    </Wrapper>
  );
}
