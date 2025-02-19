import { Swiper, SwiperSlide } from "swiper/react";
import { CardFeedback } from "./CardFeedback";
import "swiper/css";
import { useRef } from "react";
import { SlideNextButton, SlidePrevButton } from "../Block5/Navigation";

export function Slider({ data }) {
  const swiperRef = useRef(null);
  return (
    <>
      <Swiper spaceBetween={50} slidesPerView={1} onSlideChange={() => console.log("slide change")} onSwiper={(swiper) => (swiperRef.current = swiper)} speed={1500}>
        {data.map((el, index) => {
          return (
            <SwiperSlide key={index}>
              <CardFeedback
                fotoProduct={el.productFeedback}
                textFeedback={el.feedback}
                clientFoto={el.clientFoto}
                clientName={el.clientName}
                clientCounty={el.clinetCountry}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <SlidePrevButton swiperRef={swiperRef} />
      <SlideNextButton swiperRef={swiperRef} />
    </>
  );
}
