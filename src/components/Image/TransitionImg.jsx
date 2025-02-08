import product01 from "../../assets/images/Transition.png";
import { getNameImg } from "../../hooks/getNameImg";

const TransitionImg = ({ className }) => {
  return (
    <div className={className}>
      <img src={product01} alt={getNameImg(product01)} />;
    </div>
  );
};
export default TransitionImg;
