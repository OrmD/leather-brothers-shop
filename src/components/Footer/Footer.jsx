import { Image } from "../Router";
import { Floor1 } from "./Floor1";
import { Floor2 } from "./Floor2";
import { Floor3 } from "./Floor3";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <>
      <footer className="footer">
        <motion.div viewport={{ amount: 0.5 }} className="footer__wrapper">
          <Image.MFooterImg
            className="footer__img"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { delay: 0.5, duration: 0.5, ease: "easeInOut" } }}
            exit={{ opacity: 0 }}
          />
          <Floor1 />
          <Floor2 />
          <Floor3 />
        </motion.div>
      </footer>
    </>
  );
}
