import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/free-mode';

const ReactSwiperSlider = ({ slides }) => {
  const settings = {
    modules: [Autoplay, FreeMode],
    spaceBetween: 50,
    slidesPerView: 'auto',
    freeMode: true,
    loop: true,
    speed: 5000, 
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      pauseOnMouseEnter: false,
    },
  };

  return (
    <Swiper {...settings}>
      {slides.map((slide, index) => (
        <SwiperSlide key={index} style={{ width: 'auto' }}>
          <div className="flex items-center justify-center text-center p-4">
            <i className={`${slide.icon} text-ag-h2 lg:text-ag-h2 text-deep-blue mr-12`}></i>
            <p className="ml-0 text-ag-h2 lg:text-ag-h2 font-bold text-deep-blue">{slide.text}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ReactSwiperSlider;
