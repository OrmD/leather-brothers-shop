import aboutUs from "../../assets/images/About_us image.png";
import { getNameImg } from "../../hooks/getNameImg";

const AboutUsImg = () => {
  return <img src={aboutUs} alt={getNameImg(aboutUs)} />;
};
export default AboutUsImg;
