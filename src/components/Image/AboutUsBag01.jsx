import aboutUsBag01 from "../../assets/images/About_us_bag_01.png";
import { getNameImg } from "../../hooks/getNameImg";
import { forwardRef } from "react";
import { motion } from "framer-motion";

const AboutUsBag01 = forwardRef(({ className }, ref) => {
  return <img className={className} src={aboutUsBag01} alt={getNameImg(aboutUsBag01)} ref={ref} />;
});
const MAboutUsBag01 = motion(AboutUsBag01);
export default MAboutUsBag01;
