import footerImg from "../../assets/images/Footer_image.png";
import { getNameImg } from "../../hooks/getNameImg";

const FooterImg = ({ className }) => {
  return <img src={footerImg} className={className} alt={getNameImg(footerImg)} />;
};
export default FooterImg;
