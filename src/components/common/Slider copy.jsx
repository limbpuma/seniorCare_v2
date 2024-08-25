import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';

const bannerSliderSettings = {
  modules: [Autoplay, FreeMode],
  spaceBetween: 20,
  slidesPerView: 1,
  freeMode: false,
  loop: true,
  speed: 3000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    pauseOnMouseEnter: false,
  },
};

const imageCarouselSettings = {
  modules: [Autoplay, FreeMode],
  spaceBetween: 20,
  slidesPerView: 2, 
  freeMode: false,
  loop: true,
  speed: 3000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    pauseOnMouseEnter: false,
  },
};

const ReactSwiperSlider = ({ slides, isImageSlider = false, divType = 'flex-center' ,imagenclases}) => {
  const settings = isImageSlider ? imageCarouselSettings : bannerSliderSettings;

  const divTypes = {
    'flex-center': 'flex items-center justify-center text-center p-4',
    'flex-col': 'flex flex-col text-center p-4',
    'flex-row': 'flex items-center justify-start text-left p-4',
  };

  const selectedDivClass = divTypes[divType] || divTypes['flex-center'];


  return (
    <Swiper {...settings}>
      {slides.map((slide, index) => (
        <SwiperSlide key={index} style={{ width: 'auto' }}>
          <div className={selectedDivClass}>
            {slide.customContent ? (
              slide.customContent
            ) : (
              <>
                {isImageSlider ? (
                  <>
                    <img src={slide.src} className={imagenclases} alt={slide.alt} />
                    <p className="mt-2 text-gray-700 text-ag-body-text font-ag-body-text">{slide.description}</p>

                  </>
                ) : (
                  <>
                    <i className={`${slide.icon} text-ag-h2 lg:text-ag-h2 text-deep-blue mr-12`}></i>
                    <p className="ml-0 text-ag-h2 lg:text-ag-h2 font-bold text-deep-blue">{slide.text}</p>
                  </>
                )}
              </>
            )}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ReactSwiperSlider;