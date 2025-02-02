import headerBb from "../../assets/images/Header_bg_image.png";
import { getNameImg } from "../../hooks/getNameImg";
const HeaderBg = () => {
  return <img src={headerBb} alt={getNameImg(headerBb)} />;
};
export default HeaderBg;
