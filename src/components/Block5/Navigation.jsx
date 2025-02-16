import { Image } from "../Router";

export function SlideNextButton({ swiperRef }) {
  return (
    <button onClick={() => swiperRef.current?.slideNext()}>
      <Image.ArrowButton className="arrow" />
    </button>
  );
}

export function SlidePrevButton({ swiperRef }) {
  return (
    <button onClick={() => swiperRef.current?.slidePrev()}>
      <Image.ArrowButton className="arrow-prev arrow" />
    </button>
  );
}
