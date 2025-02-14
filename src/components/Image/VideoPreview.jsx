import videoPreview from "../../assets/images/Video_prewiev.png";
import { getNameImg } from "../../hooks/getNameImg";

const VideoPreview = ({ className }) => {
  return <img className={className} src={videoPreview} alt={getNameImg(videoPreview)} />;
};
export default VideoPreview;
