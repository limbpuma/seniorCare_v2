import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

const bannerSliderSettings = {
  modules: [Autoplay, FreeMode],
  spaceBetween: 30,
  slidesPerView: "auto",
  freeMode: true,
  loop: true,
  speed: 3000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    pauseOnMouseEnter: false,
  },
};

const imageCarouselSettings = {
  modules: [Autoplay, FreeMode, Navigation],
  spaceBetween: 40,
  slidesPerView: "auto",
  freeMode: true,
  loop: false,
  speed: 3000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    pauseOnMouseEnter: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
};

const ReactSwiperSlider = ({
  slides,
  isImageSlider = false,
  divType = "flex-center",
  imgClass = "",
  iconClass = "",
  textClass = "",
  titleClass = "",
  wrapperClass = "",
}) => {
  const settings = isImageSlider ? imageCarouselSettings : bannerSliderSettings;

  const divTypes = {
    "flex-center": "flex items-center justify-center text-center p-4 gap-4",
    "flex-col": "flex flex-col text-center p-4",
    "flex-row": "flex items-center justify-start text-left p-4",
  };

  const selectedDivClass = divTypes[divType] || divTypes["flex-center"];

  return (
    <Swiper {...settings}>
      {slides.map((slide, index) => (
        <SwiperSlide key={index} style={{ width: "auto" }}>
          <div className="relative">
            {slide.src && (
              <img
                src={slide.src}
                className={`${imgClass} w-full h-[400px] object-cover`}
                alt={slide.alt || "slide image"}
              />
            )}
            <div className={wrapperClass}>
              {slide.icon && <i className={`${slide.icon} ${iconClass}`}></i>}
              {slide.title && <h3 className={titleClass}>{slide.title}</h3>}
              {slide.text && <p className={textClass}>{slide.text}</p>}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ReactSwiperSlider;
