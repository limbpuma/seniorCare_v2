import React, { useEffect, useRef, useState } from "react";

// Lazy loading fallback component while Swiper loads
const SliderFallback = ({ slides, imgClass, textClass, titleClass }) => (
  <div className="slider-fallback grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
    {slides.slice(0, 3).map((slide, index) => (
      <div key={index} className="fallback-slide">
        {slide.src && (
          <img 
            loading="lazy"
            src={slide.src}
            className={`${imgClass} w-full h-[300px] object-cover rounded`}
            alt={slide.alt || "slide image"}
          />
        )}
        <div className="p-4 text-center">
          {slide.icon && <i className={`${slide.icon} text-2xl mb-2`}></i>}
          {slide.title && <h3 className={titleClass}>{slide.title}</h3>}
          {slide.text && <p className={textClass}>{slide.text}</p>}
        </div>
      </div>
    ))}
  </div>
);

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
  const [swiperLoaded, setSwiperLoaded] = useState(false);
  const [SwiperComponents, setSwiperComponents] = useState(null);
  const sliderRef = useRef(null);

  const bannerSliderSettings = {
    modules: ['Autoplay', 'FreeMode'],
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
    modules: ['Autoplay', 'FreeMode', 'Navigation'],
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

  const divTypes = {
    "flex-center": "flex items-center justify-center text-center p-4 gap-4",
    "flex-col": "flex flex-col text-center p-4",
    "flex-row": "flex items-center justify-start text-left p-4",
  };

  const selectedDivClass = divTypes[divType] || divTypes["flex-center"];
  const settings = isImageSlider ? imageCarouselSettings : bannerSliderSettings;

  useEffect(() => {
    const loadSwiper = async () => {
      try {
        // Use lazy loader if available
        if (window.lazyLoader) {
          await window.lazyLoader.loadSwiper();
        }

        // Dynamic import with fallback
        const { Swiper, SwiperSlide } = await import("swiper/react");
        const { Autoplay, FreeMode, Navigation } = await import("swiper/modules");

        // Load CSS if not already loaded
        if (!document.querySelector('link[href*="swiper"]')) {
          await import("swiper/css");
          await import("swiper/css/free-mode");
          await import("swiper/css/navigation");
        }

        setSwiperComponents({
          Swiper,
          SwiperSlide,
          modules: { Autoplay, FreeMode, Navigation }
        });
        setSwiperLoaded(true);
      } catch (error) {
        console.error('Failed to load Swiper:', error);
        // Keep fallback UI if Swiper fails to load
      }
    };

    // Create intersection observer to load Swiper only when slider is visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !swiperLoaded) {
            loadSwiper();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sliderRef.current) {
      observer.observe(sliderRef.current);
    }

    return () => {
      if (sliderRef.current) {
        observer.unobserve(sliderRef.current);
      }
    };
  }, [swiperLoaded]);

  // Render fallback while Swiper is loading
  if (!swiperLoaded || !SwiperComponents) {
    return (
      <div ref={sliderRef} className="slider-container">
        <SliderFallback 
          slides={slides}
          imgClass={imgClass}
          textClass={textClass}
          titleClass={titleClass}
        />
      </div>
    );
  }

  const { Swiper, SwiperSlide, modules } = SwiperComponents;
  
  // Map module names to actual modules
  const moduleMap = {
    'Autoplay': modules.Autoplay,
    'FreeMode': modules.FreeMode,
    'Navigation': modules.Navigation
  };

  const processedSettings = {
    ...settings,
    modules: settings.modules.map(moduleName => moduleMap[moduleName]).filter(Boolean)
  };

  return (
    <div ref={sliderRef}>
      <Swiper {...processedSettings}>
        {slides.map((slide, index) => (
          <SwiperSlide key={index} style={{ width: "auto" }}>
            <div className="relative">
              {slide.src && (
                <img 
                  loading="lazy"
                  src={slide.src}
                  className={`${imgClass} w-full h-[400px] object-cover`}
                  alt={slide.alt || "slide image"}
                />
              )}
              <div className={`${selectedDivClass} ${wrapperClass}`}>
                {slide.icon && <i className={`${slide.icon} ${iconClass}`}></i>}
                {slide.title && <h3 className={titleClass}>{slide.title}</h3>}
                {slide.text && <p className={textClass}>{slide.text}</p>}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReactSwiperSlider;
