import { motion } from "framer-motion"; // ✅ Використовуємо motion без createMotion()
import { Image } from "../Router";
import { useEffect, useState } from "react";

const imgAnimation = {
  hidden: { x: -100, opacity: 0 },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.5, ease: "easeInOut" },
  }),
};
const imgAnimation1 = {
  hidden: { scale: 0, opacity: 0 },
  visible: (custom) => ({
    scale: 1,
    opacity: 1,
    transition: { delay: custom, duration: 0.5, ease: "easeInOut" },
  }),
};
export function Block2() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <motion.section initial="hidden" whileInView="visible" viewport={{ amount: 0.3, once: true }} className="block2">
      <Image.TransitionImg className={"transition-img"} />
      <div className="trn-button"></div>
      <div className="block2__wrapper ">
        <div className="block2__body">
          <div className="block2__container-img-text">
            <div className="block2__img">
              <Image.MAboutUsImg custom={isMobile ? 1.7 : 1} variants={imgAnimation} />
            </div>
            <motion.div custom={isMobile ? 0.7 : 2} variants={imgAnimation} className="block2__img-title">
              <h3>Leather Brothers designs, owns and operates all steps in the creation of our extensive variety of handcrafted leather goods, including :</h3>
            </motion.div>
            <motion.div custom={isMobile ? 2.4 : 2.7} variants={imgAnimation} className="block2__img-desc">
              <p className="block2__img-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged..
              </p>
            </motion.div>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ amount: 0.8, once: true }} className="block2__container-btn-bags">
            <Image.MAboutUsBag01 custom={0.3} variants={imgAnimation1} className="block2__about-us-bag01" />
            <div className="block2__body-btn-bags">
              <div className="block2__bags-title">
                <h4>Handcrafted to be one of a kind</h4>
              </div>
              <div className="block2__bags-descr">
                <p className="block2__bags-text">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged...
                </p>
              </div>
              <button type="button" className="block2__button">
                Family pack
              </button>
            </div>
            <Image.MAboutUsBag02 custom={0.5} variants={imgAnimation1} className="block2__about-us-bag02" />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
