import headerBb from "../../assets/images/Header_bg_image.png";
import { getNameImg } from "../../hooks/getNameImg";
const HeaderBg = ({ className }) => {
  return (
    <img className={className} src={headerBb} alt={getNameImg(headerBb)} />
  );
};
export default HeaderBg;
