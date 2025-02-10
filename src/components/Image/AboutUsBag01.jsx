import aboutUsBag01 from "../../assets/images/About_us_bag_01.png";
import { getNameImg } from "../../hooks/getNameImg";

const AboutUsBag01 = ({ className }) => {
  return <img className={className} src={aboutUsBag01} alt={getNameImg(aboutUsBag01)} />;
};
export default AboutUsBag01;
