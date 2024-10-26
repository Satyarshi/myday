import React from 'react'; // Import React
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper components
import 'swiper/css'; // Import Swiper styles

const MySwiperComponent = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      {/* Add more slides as needed */}
    </Swiper>
  );
};

export default MySwiperComponent;
