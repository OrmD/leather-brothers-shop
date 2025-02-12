import aboutUsBag02 from "../../assets/images/About_us_bag_02.png";
import { getNameImg } from "../../hooks/getNameImg";
import { forwardRef } from "react";
import { motion } from "framer-motion";

const AboutUsBag02 = forwardRef(({ className }, ref) => {
  return <img className={className} src={aboutUsBag02} alt={getNameImg(aboutUsBag02)} ref={ref} />;
});
const MAboutUsBag02 = motion(AboutUsBag02);
export default MAboutUsBag02;
