import feedbackUser from "../../assets/images/Feedback_user.png";
import { getNameImg } from "../../hooks/getNameImg";

const FeedbackUser = () => {
  return <img src={feedbackUser} alt={getNameImg(feedbackUser)} />;
};
export default FeedbackUser;
