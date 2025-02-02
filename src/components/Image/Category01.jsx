import category01 from "../../assets/images/Category_01.png";
import { getNameImg } from "../../hooks/getNameImg";

const Category01 = () => {
  return <img src={category01} alt={getNameImg(category01)} />;
};
export default Category01;
