import product01 from "../../assets/images/Product_01.png";
import { getNameImg } from "../../hooks/getNameImg";

const Product01 = () => {
  return <img src={product01} alt={getNameImg(product01)} />;
};
export default Product01;
