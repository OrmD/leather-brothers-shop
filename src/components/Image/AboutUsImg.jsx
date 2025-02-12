import { forwardRef } from "react";
import { motion } from "framer-motion";
import aboutUs from "../../assets/images/About_us image.png";
import { getNameImg } from "../../hooks/getNameImg";

const AboutUsImg = forwardRef(({ className }, ref) => {
  return <img className={className} src={aboutUs} alt={getNameImg(aboutUs)} ref={ref} />;
});

const MAboutUsImg = motion(AboutUsImg);

export default MAboutUsImg;
