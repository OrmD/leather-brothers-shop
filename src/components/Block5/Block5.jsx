import { Wrapper } from "../wrapper-blocks/Wrapper";
import productData from "../../data/sellingProduct.json";
import { ProductItem } from "./ProductItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { SlideNextButton, SlidePrevButton } from "./Navigation";
import { useRef } from "react";

export function Block5() {
  const swiperRef = useRef(null);
  return (
    <Wrapper
      objProps={{
        secName: "Selling",
        wrapName: "Selling__wrapper ",
        descName: "Selling__desc",
        titleValue: "Best Selling Product",
        descValue:
          "   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s....",
      }}
      item={<div className="decor"></div>}
      item2={<div className="decor-2"></div>}
    >
      <div className="Selling__product-item">
        <Swiper spaceBetween={20} slidesPerView={4} onSlideChange={() => console.log("slide change")} onSwiper={(swiper) => (swiperRef.current = swiper)}>
          {productData.map((el, index) => {
            return (
              <SwiperSlide key={index}>
                <ProductItem title={el.title} desc={el.desc} img={el.img} />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <SlidePrevButton swiperRef={swiperRef} />
        <SlideNextButton swiperRef={swiperRef} />
      </div>
    </Wrapper>
  );
}
