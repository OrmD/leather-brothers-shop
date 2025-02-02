import product02 from "../../assets/images/Product_02.png";
import { getNameImg } from "../../hooks/getNameImg";

const Product02 = () => {
  return <img src={product02} alt={getNameImg(product02)} />;
};
export default Product02;
