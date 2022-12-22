// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, EffectCube } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-cube";

// Import Swiper styles
import "swiper/css";

const Carousel = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <div className="frame">
          <SwiperSlide>Slide 1</SwiperSlide>
        </div>
        <div  className="frame">
          <SwiperSlide>Slide 2</SwiperSlide>
        </div>
        <div  className="frame">
          <SwiperSlide>Slide 3</SwiperSlide>
        </div>
      </Swiper>
    </>
  );
};

export default Carousel;
