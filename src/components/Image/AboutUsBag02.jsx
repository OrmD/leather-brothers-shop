import aboutUsBag02 from "../../assets/images/About_us_bag_02.png";
import { getNameImg } from "../../hooks/getNameImg";

const AboutUsBag02 = ({ className }) => {
  return <img className={className} src={aboutUsBag02} alt={getNameImg(aboutUsBag02)} />;
};
export default AboutUsBag02;
