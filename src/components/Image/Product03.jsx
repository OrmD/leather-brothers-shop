import product03 from "../../assets/images/Product_03.png";
import { getNameImg } from "../../hooks/getNameImg";

const Product03 = () => {
  return <img src={product03} alt={getNameImg(product03)} />;
};
export default Product03;
