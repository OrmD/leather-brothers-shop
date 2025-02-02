import feedbackImg from "../../assets/images/Feedback_img.png";
import { getNameImg } from "../../hooks/getNameImg";

const FeedbackImg = () => {
  return <img src={feedbackImg} alt={getNameImg(feedbackImg)} />;
};
export default FeedbackImg;
