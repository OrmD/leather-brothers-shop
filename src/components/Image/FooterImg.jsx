import footerImg from "../../assets/images/Footer_image.png";
import { getNameImg } from "../../hooks/getNameImg";
import { forwardRef } from "react";
import { motion } from "framer-motion";

const FooterImg = forwardRef(({ className }, ref) => {
  return <img src={footerImg} className={className} alt={getNameImg(footerImg)} ref={ref} />;
});
const MFooterImg = motion(FooterImg);
export default MFooterImg;
