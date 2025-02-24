import { AnimatePresence, motion } from "framer-motion";
import { Image } from "../Router";
import { useRef, useState } from "react";

export function Floor1(params) {
  const animateModal = {
    visible: {
      y: 30,
      x: 0,
      /*rotateY: 0,*/
      skewX: "0deg",
      skewY: "0deg",
      scale: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    hidden: {
      y: 80,
      x: 180,
      /*rotateY: 180,*/
      skewX: "-90deg",
      skewY: "-20deg",
      scale: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  const [visible, setVisible] = useState(false);
  const [error, setError] = useState(false);

  const inputref = useRef(null);

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  };

  const openModal = () => {
    const valueInput = inputref.current.value;

    if (validateEmail(valueInput)) {
      setVisible(true);
    } else {
      setError(true);
    }
  };
  const closeModal = () => {
    setVisible(false);
    setError(false);
  };
  return (
    <div className="floor-1 ">
      <div className="floor-1__block">
        <h3 className="floor-1__title">
          Subscribe to our <strong>Newsletter</strong>
        </h3>
        <p className="floor-1__text">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type specimen book.{" "}
        </p>
        <div className="floor-1__container-inp">
          <input ref={inputref} type="text" className="floor-1__input" placeholder="Input your emaill address in here"></input>
          <Image.ArrowButton className="floor-1__button" onClick={openModal} />
          <AnimatePresence>
            {visible && (
              <motion.div initial="hidden" whileInView="visible" variants={animateModal} exit="hidden" className="f-modal">
                <div className="f-modal__block">We have sent you a letter to your email.</div>
                <button type="button" className="f-modal__btn" onClick={closeModal}></button>
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {error && (
              <motion.div initial="hidden" whileInView="visible" variants={animateModal} exit="hidden" className="f-modal">
                <div className="f-modal__error">Enter correct Email</div>
                <button type="button" className="f-modal__btn" onClick={closeModal}></button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
