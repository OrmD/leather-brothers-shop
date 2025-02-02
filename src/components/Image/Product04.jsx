import product04 from "../../assets/images/Product_04.png";
import { getNameImg } from "../../hooks/getNameImg";

const Product04 = () => {
  return <img src={product04} alt={getNameImg(product04)} />;
};
export default Product04;
