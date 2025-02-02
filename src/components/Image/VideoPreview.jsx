import videoPreview from "../../assets/images/Video_prewiev.png";
import { getNameImg } from "../../hooks/getNameImg";

const VideoPreview = () => {
  return <img src={videoPreview} alt={getNameImg(videoPreview)} />;
};
export default VideoPreview;
