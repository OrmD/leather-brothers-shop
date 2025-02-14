import { Image } from "../Router";
import { Wrapper } from "../wrapper-blocks/Wrapper";
import ReactPlayer from "react-player/youtube";

export function Block4() {
  return (
    <Wrapper
      objProps={{
        secName: "Video",
        wrapName: "Video__wrapper",
        descName: "Video__desc",
        titleValue: "Video",
        descValue:
          "   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s....",
      }}
    >
      <div className="Video__player-wrapper">
        <ReactPlayer
          className="Video__player-body"
          playIcon={<Image.VideoPlay className="Video__play-icon" />}
          light={<Image.VideoPreview className="Video__play-img" />}
          url="https://www.youtube.com/watch?v=aAcqOGD3QAY"
          width="100%"
          height="100%"
          playing
        />
      </div>
    </Wrapper>
  );
}
