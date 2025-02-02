import footerImg from "../../assets/images/Footer_image.png";
import { getNameImg } from "../../hooks/getNameImg";

const FooterImg = () => {
  return <img src={footerImg} alt={getNameImg(footerImg)} />;
};
export default FooterImg;
