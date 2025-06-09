/* empty css                                 */
import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, m as maybeRenderHead, a as addAttribute } from '../chunks/astro/server_BQumHD5r.mjs';
import 'kleur/colors';
import { $ as $$Button, t as texts, c as $$Icon, a as $$Layout } from '../chunks/Layout_kHnEDicl.mjs';
import { $ as $$Section, b as $$TextBlock, a as $$ParallaxMedia } from '../chunks/ParallaxMedia_C1U-ulc2.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useRef, useEffect } from 'react';
/* empty css                                 */
import { $ as $$ContactForm } from '../chunks/ContactForm_BDRx2EMH.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$c = createAstro();
const $$AboutSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$AboutSection;
  const {
    services,
    stats,
    buttonText,
    description,
    phoneNumber = texts.header.phone,
    // Use real phone as default
    headingLevel = 2,
    imageAlt
  } = Astro2.props;
  const HeadingTag = `h${headingLevel}`;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "background": "primary", "padding": "large", "width": "wide", "height": "auto", "id": "about-section", "animation": "fade-in" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="content-narrow flex flex-col lg:flex-row lg:gap-spacing-8 xl:gap-spacing-12 justify-between items-center lg:items-center mb-spacing-8 sm:mb-spacing-12 space-y-spacing-8 lg:space-y-0" role="region" aria-label="Über uns und unsere Dienstleistungen"> <!-- Text column --> <div class="text-center lg:text-left lg:flex-1 lg:max-w-lg xl:max-w-xl order-2 lg:order-1 text-white flex flex-col justify-center items-center lg:items-start"> ${services.map((service) => renderTemplate`${renderComponent($$result2, "HeadingTag", HeadingTag, { "class": "text-h5 sm:text-h4 md:text-h3 lg:text-[38px] xl:text-[42px] font-semibold mb-spacing-3 sm:mb-spacing-4 md:mb-spacing-6 leading-tight uppercase w-full" }, { "default": ($$result3) => renderTemplate`${service}` })}`)} </div> <!-- Image column --> <div class="flex justify-center items-center w-full sm:w-2/3 md:w-1/2 lg:w-72 xl:w-80 2xl:w-[22rem] order-1 lg:order-2 mb-spacing-8 lg:mb-0 lg:flex-shrink-0" role="img" aria-label="Profilbild unseres Teams"> <div class="relative my-4 w-full pb-[100%] lg:w-72 lg:h-72 xl:w-80 xl:h-80 2xl:w-[22rem] 2xl:h-[22rem] lg:pb-0"> <img src="/assets/img/nurse_doctor_senior_care_1.webp"${addAttribute(imageAlt || "Professionelles Pflegeteam - Krankenschwester und Arzt bei der Seniorenbetreuung", "alt")} class="absolute inset-0 w-full h-full object-cover object-center rounded-full bg-neutral-200 shadow-md" loading="lazy"> </div> </div> </div> <div class="content-narrow border-t border-accent-400 mb-spacing-8 sm:mb-spacing-12" role="separator" aria-hidden="true"></div> <div class="content-narrow flex flex-col lg:flex-row lg:gap-spacing-8 xl:gap-spacing-12 justify-between items-center lg:items-center text-center lg:text-left space-y-spacing-8 lg:space-y-0 text-white"> <div class="mb-spacing-8 lg:mb-0 w-full lg:flex-1 lg:max-w-lg xl:max-w-xl flex justify-center lg:justify-start" role="region" aria-label="Unsere Statistiken und Zahlen"> <div class="grid grid-cols-2 gap-spacing-4 sm:gap-spacing-8 md:gap-0"> ${stats.map(({ number, label }) => renderTemplate`<div class="text-center"> <p class="text-h3 sm:text-h2 lg:text-[48px] xl:text-[56px] 2xl:text-[64px] font-bold mb-spacing-2"${addAttribute(`${number} ${label}`, "aria-label")}> ${number} </p> <p class="mx-4 text-body lg:text-h6 xl:text-h5 2xl:text-h4 text-accent-300 font-medium"> ${label} </p> </div>`)} </div> </div> <div class="lg:flex-1 lg:max-w-lg xl:max-w-xl flex flex-col justify-center lg:items-end w-full "> <div class="mb-spacing-4 lg:mb-spacing-6 text-center lg:text-left my-2 lg:my-4"> <p class="text-body font-normal leading-relaxed"> ${description} </p> </div> <div class="flex flex-col sm:flex-row items-center justify-center sm:justify-start lg:justify-end space-y-spacing-4 sm:space-y-0 sm:space-x-spacing-12 mx-auto gap-2 lg:gap-4 my-2 lg:my-4" role="group" aria-label="Kontaktmöglichkeiten"> ${renderComponent($$result2, "Button", $$Button, { "variant": "accent", "size": "medium", "href": `tel:${phoneNumber}`, "aria-label": `Anrufen: ${phoneNumber}`, "flex": true }, { "default": ($$result3) => renderTemplate` <i class="fa fa-phone text-primary-700" aria-hidden="true"></i> ${phoneNumber}` })} <div class="flex items-center text-h5 font-medium mt-spacing-4 sm:mt-0"> ${buttonText} </div> </div> </div> </div> ` })}`;
}, "D:/Lim/Developer/Projects/Integra/seniorCare/src/components/common/AboutSection.astro", void 0);

const SliderFallback = ({ slides, imgClass, textClass, titleClass }) => /* @__PURE__ */ jsx("div", { className: "slider-fallback grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4", children: slides.slice(0, 3).map((slide, index) => /* @__PURE__ */ jsxs("div", { className: "fallback-slide", children: [
  slide.src && /* @__PURE__ */ jsx(
    "img",
    {
      loading: "lazy",
      src: slide.src,
      className: `${imgClass} w-full h-[300px] object-cover rounded`,
      alt: slide.alt || "slide image"
    }
  ),
  /* @__PURE__ */ jsxs("div", { className: "p-4 text-center", children: [
    slide.icon && /* @__PURE__ */ jsx("i", { className: `${slide.icon} text-2xl mb-2` }),
    slide.title && /* @__PURE__ */ jsx("h3", { className: titleClass, children: slide.title }),
    slide.text && /* @__PURE__ */ jsx("p", { className: textClass, children: slide.text })
  ] })
] }, index)) });
const ReactSwiperSlider = ({
  slides,
  isImageSlider = false,
  divType = "flex-center",
  imgClass = "",
  iconClass = "",
  textClass = "",
  titleClass = "",
  wrapperClass = ""
}) => {
  const [swiperLoaded, setSwiperLoaded] = useState(false);
  const [SwiperComponents, setSwiperComponents] = useState(null);
  const sliderRef = useRef(null);
  const bannerSliderSettings = {
    modules: ["Autoplay", "FreeMode"],
    spaceBetween: 30,
    slidesPerView: "auto",
    freeMode: true,
    loop: true,
    speed: 3e3,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      pauseOnMouseEnter: false
    }
  };
  const imageCarouselSettings = {
    modules: ["Autoplay", "FreeMode", "Navigation"],
    spaceBetween: 40,
    slidesPerView: "auto",
    freeMode: true,
    loop: false,
    speed: 3e3,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      pauseOnMouseEnter: false
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  };
  const divTypes = {
    "flex-center": "flex items-center justify-center text-center p-4 gap-4",
    "flex-col": "flex flex-col text-center p-4",
    "flex-row": "flex items-center justify-start text-left p-4"
  };
  const selectedDivClass = divTypes[divType] || divTypes["flex-center"];
  const settings = isImageSlider ? imageCarouselSettings : bannerSliderSettings;
  useEffect(() => {
    const loadSwiper = async () => {
      try {
        if (window.lazyLoader) {
          await window.lazyLoader.loadSwiper();
        }
        const { Swiper: Swiper2, SwiperSlide: SwiperSlide2 } = await import('swiper/react');
        const { Autoplay, FreeMode, Navigation } = await import('swiper/modules');
        if (!document.querySelector('link[href*="swiper"]')) {
          await Promise.resolve({                            }).then(n => n.s);
          await Promise.resolve({                            }).then(n => n.f);
          await Promise.resolve({                            }).then(n => n.n);
        }
        setSwiperComponents({
          Swiper: Swiper2,
          SwiperSlide: SwiperSlide2,
          modules: { Autoplay, FreeMode, Navigation }
        });
        setSwiperLoaded(true);
      } catch (error) {
        console.error("Failed to load Swiper:", error);
      }
    };
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
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
  if (!swiperLoaded || !SwiperComponents) {
    return /* @__PURE__ */ jsx("div", { ref: sliderRef, className: "slider-container", children: /* @__PURE__ */ jsx(
      SliderFallback,
      {
        slides,
        imgClass,
        textClass,
        titleClass
      }
    ) });
  }
  const { Swiper, SwiperSlide, modules } = SwiperComponents;
  const moduleMap = {
    "Autoplay": modules.Autoplay,
    "FreeMode": modules.FreeMode,
    "Navigation": modules.Navigation
  };
  const processedSettings = {
    ...settings,
    modules: settings.modules.map((moduleName) => moduleMap[moduleName]).filter(Boolean)
  };
  return /* @__PURE__ */ jsx("div", { ref: sliderRef, children: /* @__PURE__ */ jsx(Swiper, { ...processedSettings, children: slides.map((slide, index) => /* @__PURE__ */ jsx(SwiperSlide, { style: { width: "auto" }, children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
    slide.src && /* @__PURE__ */ jsx(
      "img",
      {
        loading: "lazy",
        src: slide.src,
        className: `${imgClass} w-full h-[400px] object-cover`,
        alt: slide.alt || "slide image"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: `${selectedDivClass} ${wrapperClass}`, children: [
      slide.icon && /* @__PURE__ */ jsx("i", { className: `${slide.icon} ${iconClass}` }),
      slide.title && /* @__PURE__ */ jsx("h3", { className: titleClass, children: slide.title }),
      slide.text && /* @__PURE__ */ jsx("p", { className: textClass, children: slide.text })
    ] })
  ] }) }, index)) }) });
};

const $$Astro$b = createAstro();
const $$BannerSlider = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$BannerSlider;
  const iconClasses = "text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-deep-blue";
  const textClasses = "text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-deep-blue";
  const wrapperClasses = "flex items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-12";
  const { slides } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bg-soft-orange py-6 sm:py-8 md:py-10 lg:py-12 w-full"> <div class="content-narrow"> ${renderComponent($$result, "ReactSwiperSlider", ReactSwiperSlider, { "slides": slides, "iconClass": iconClasses, "textClass": textClasses, "wrapperClass": wrapperClasses, "divType": "flex-center", "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Lim/Developer/Projects/Integra/seniorCare/src/components/common/Slider.jsx", "client:component-export": "default" })} </div> </div>`;
}, "D:/Lim/Developer/Projects/Integra/seniorCare/src/components/common/BannerSlider.astro", void 0);

const $$Astro$a = createAstro();
const $$Experience = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Experience;
  const { heading, title, description, buttonText, icontext } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "background": "white", "padding": "medium", "width": "medium", "height": "auto", "id": "experience-section", "animation": "slide-in" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="py-6 flex flex-col lg:flex-row items-center lg:justify-between"> <div class="relative w-full lg:w-1/2 bg-gray-200"> <img src="/assets/img/nurse_doctor_senior_care.webp" alt="Krankenschwester und Arzt bei der Betreuung von Senioren - professionelle Pflege" class="w-full h-full object-cover" loading="lazy"> <div class="absolute w-full sm:w-3/5 md:w-2/5 bottom-0 left-0 bg-deep-blue p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col items-center text-center"> <div class="transform scale-125 sm:scale-150 mb-2 sm:mb-4"> ${renderComponent($$result2, "Icon", $$Icon, { "icons": [{ name: "handhelp" }], "size": "xl", "variant": "light" })} </div> <p class="text-white text-ag-h5 font-ag-h5 font-bold leading-tight">${icontext}</p> </div> </div> <div class="w-full lg:w-1/2 mt-8 lg:mt-0 lg:pl-12"> ${renderComponent($$result2, "TextBlock", $$TextBlock, { "subtitle": heading, "title": title, "description": description, "alignment": "left", "textColor": "text-deep-blue", "buttonText": buttonText, "buttonVariant": "primary", "buttonSize": "medium", "buttonHref": "/#services" })} </div> </div> ` })}`;
}, "D:/Lim/Developer/Projects/Integra/seniorCare/src/components/home/Experience.astro", void 0);

const $$Astro$9 = createAstro();
const $$ImageCarrousel = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$ImageCarrousel;
  const { images, title, subtitle } = Astro2.props;
  const imagenclases = "w-auto h-[240px] sm:h-[280px] md:h-[320px] lg:h-[360px] object-cover rounded-lg shadow-medium";
  const textclasses = "mt-3 sm:mt-4 text-white text-ag-body-text font-ag-body-text text-left leading-relaxed";
  const wrapperClasses = "relative overflow-hidden rounded-lg";
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "width": "medium", "height": "auto", "padding": "medium", "id": "ImageCarrousel-section", "class": "relative", "animation": "zoom-in" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="absolute inset-0 w-full h-full"> <div class="w-full h-1/2 bg-white"></div> <div class="w-full h-1/2 bg-deep-blue"></div> </div> <div class="relative mx-auto w-full z-10"> ${renderComponent($$result2, "TextBlock", $$TextBlock, { "subtitle": subtitle, "title": title, "alignment": "center", "textColor": "text-deep-blue" })} <div class="w-full relative"> ${renderComponent($$result2, "ReactSwiperSlider", ReactSwiperSlider, { "slides": images, "imgClass": imagenclases, "textClass": textclasses, "wrapperClass": wrapperClasses, "isImageSlider": true, "divType": "flex-col", "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Lim/Developer/Projects/Integra/seniorCare/src/components/common/Slider.jsx", "client:component-export": "default" })} </div> </div> ` })}`;
}, "D:/Lim/Developer/Projects/Integra/seniorCare/src/components/common/ImageCarrousel.astro", void 0);

const $$Astro$8 = createAstro();
const $$ImageCarrousel2 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$ImageCarrousel2;
  const { images, subtitle, title } = Astro2.props;
  const imageClasses = "w-full h-[250px] object-cover";
  const titleClasses = "text-white text-xl font-bold";
  const textClasses = "text-white text-ag-body-text font-ag-body-text text-sm";
  const wrapperClasses = "absolute bottom-0 left-0 bg-blue-900 p-2";
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "background": "primary", "padding": "medium", "width": "medium", "height": "auto", "id": "experience-section", "animation": "zoom-in" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex justify-between items-center mb-8"> <div class="flex flex-col"> ${renderComponent($$result2, "TextBlock", $$TextBlock, { "subtitle": subtitle, "title": title, "alignment": "left", "textColor": "text-white" })} </div> <div class="flex space-x-4"> <button class="text-white hover:text-blue-200 focus:outline-none" aria-label="Previous slide"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path> </svg> </button> <button class="text-white hover:text-blue-200 focus:outline-none" aria-label="Next slide"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </button> </div> </div> <div class="w-full relative"> ${renderComponent($$result2, "ReactSwiperSlider", ReactSwiperSlider, { "slides": images, "imgClass": imageClasses, "titleClass": titleClasses, "textClass": textClasses, "wrapperClass": wrapperClasses, "isImageSlider": false, "divType": "flex-col", "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Lim/Developer/Projects/Integra/seniorCare/src/components/common/Slider.jsx", "client:component-export": "default" })} </div> ` })}`;
}, "D:/Lim/Developer/Projects/Integra/seniorCare/src/components/common/ImageCarrousel_2.astro", void 0);

const $$Astro$7 = createAstro();
const $$Location = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Location;
  const { subtitle, title, description, buttonText, stats } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "background": "white", "padding": "medium", "width": "medium", "height": "auto", "id": "experience-section", "animation": "slide-in" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="content-narrow flex flex-col md:flex-row items-center"> <div class="w-full md:w-3/5 lg:w-2/3 mb-6 md:mb-0"> <img src="/assets/img/doctor_senior_care_tablet.webp" alt="Arzt mit Tablet bei der Seniorenbetreuung - moderne digitale Pflege" class="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded-lg shadow-medium" loading="lazy"> </div> <div class="w-full md:w-2/5 lg:w-1/3 md:pl-8 p-4"> ${renderComponent($$result2, "TextBlock", $$TextBlock, { "subtitle": subtitle, "title": title, "description": description, "alignment": "left", "textColor": "text-deep-blue", "buttonText": buttonText, "buttonVariant": "primary", "buttonSize": "medium", "buttonHref": "/#contact" })} </div> </div> <div class="content-narrow bg-soft-orange p-6 md:p-8 lg:p-12 rounded-lg shadow-medium mt-8"> <div class="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center"> ${stats.map((stat) => renderTemplate`<div class="flex flex-col items-center space-y-2"> <p class="text-h3 sm:text-h2 lg:text-[48px] xl:text-[56px] 2xl:text-[64px] font-bold text-deep-blue">${stat.value}</p> <p class="text-body lg:text-h6 xl:text-h5 2xl:text-h4 font-medium text-gray-800"> ${stat.label} </p> </div>`)} </div> </div> ` })}`;
}, "D:/Lim/Developer/Projects/Integra/seniorCare/src/components/home/Location.astro", void 0);

const $$Astro$6 = createAstro();
const $$Testimonial = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Testimonial;
  const { titlesection, subtitlesection, items } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "background": "white", "padding": "medium", "width": "medium", "height": "auto", "id": "experience-section", "animation": "fade-in" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="text-center mb-12 content-narrow"> ${renderComponent($$result2, "TextBlock", $$TextBlock, { "subtitle": subtitlesection, "title": titlesection, "alignment": "center", "textColor": "text-deep-blue" })} </div> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 content-narrow"> ${items.map((testimonial) => renderTemplate`<div class="bg-white border-2 border-soft-orange p-6 lg:p-8 rounded-xl shadow-soft hover:shadow-medium transition-shadow duration-300 h-full flex flex-col"> <div class="relative mb-4"> <i class="fa-solid fa-quote-right text-2xl text-soft-orange absolute -top-2 -right-2 z-10" aria-hidden="true"></i> <p class="text-ag-body-text font-ag-body-text italic text-gray-700 leading-relaxed flex-grow pr-6">
"${testimonial.desc}"
</p> </div> <div class="flex items-center mt-auto pt-4 border-t border-gray-200"> <div class="flex-shrink-0 mr-4"> <div class="relative w-14 h-14 sm:w-16 sm:h-16"> <img${addAttribute(testimonial.image, "src")}${addAttribute(`Foto von ${testimonial.name}, ${testimonial.title}`, "alt")} class="w-full h-full object-cover rounded-full border-2 border-soft-orange" loading="lazy"> </div> </div> <div> <h3 class="font-ag-sub-heading font-bold text-ag-sub-heading text-deep-blue"> ${testimonial.name} </h3> <p class="text-sm text-gray-600 font-medium"> ${testimonial.title} </p> </div> </div> </div>`)} </div> ` })}`;
}, "D:/Lim/Developer/Projects/Integra/seniorCare/src/components/common/Testimonial.astro", void 0);

const $$Astro$5 = createAstro();
const $$GalleryMosaic = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$GalleryMosaic;
  const { srcs, subtitle, title, description, buttonText } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "background": "white", "padding": "medium", "width": "medium", "height": "auto", "id": "experience-section", "animation": "grid-in" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col lg:flex-row items-center lg:items-stretch gap-8 lg:gap-12"> <div class="lg:w-1/3 flex flex-col justify-center items-center lg:items-start text-center lg:text-left"> ${renderComponent($$result2, "TextBlock", $$TextBlock, { "subtitle": subtitle, "title": title, "description": description, "alignment": "left", "textColor": "text-deep-blue" })} <div class="mt-0 flex justify-center "> ${renderComponent($$result2, "Button", $$Button, { "href": "https://www.instagram.com/pflegedienst.integra/", "flex": true, "class": "mt-2 lg:ml-8 md:mt-2 mx-auto md:mx-0" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Icon", $$Icon, { "icons": [{ name: "instagram" }], "size": "small", "variant": "light" })} ${buttonText}` })} </div> </div> <div class="w-full lg:w-2/3 flex flex-col"> <div class="md:hidden grid grid-cols-2 grid-rows-3 gap-4 aspect-square mb-2"> ${srcs.map((src, index) => renderTemplate`<div${addAttribute(`relative ${index === 0 ? "col-span-2 row-span-2" : index === 4 ? "col-span-2" : ""}`, "class")}> <img${addAttribute(src, "src")} class="absolute inset-0 w-full h-full object-cover rounded-lg" alt="" loading="lazy"> </div>`)} </div> <div class="hidden md:grid md:grid-cols-3 gap-4 h-[600px]"> <div class="grid grid-rows-[7fr,3fr] gap-4"> <div class="relative"> <img${addAttribute(srcs[0], "src")} class="absolute inset-0 w-full h-full object-cover rounded-lg" alt="image 1 section gallery" loading="lazy"> </div> <div class="relative"> <img${addAttribute(srcs[1], "src")} class="absolute inset-0 w-full h-full object-cover rounded-lg" alt="image 2 section gallery" loading="lazy"> </div> </div> <div class="relative"> <img${addAttribute(srcs[2], "src")} class="absolute inset-0 w-full h-full object-cover rounded-lg" alt="image 3 section gallery" loading="lazy"> </div> <div class="grid grid-rows-[3fr,7fr] gap-4"> <div class="relative"> <img${addAttribute(srcs[3], "src")} class="absolute inset-0 w-full h-full object-cover rounded-lg" alt="image 4 section gallery" loading="lazy"> </div> <div class="relative"> <img${addAttribute(srcs[4], "src")} class="absolute inset-0 w-full h-full object-cover rounded-lg" alt="image 5 section gallery" loading="lazy"> </div> </div> </div> </div> </div> ` })}`;
}, "D:/Lim/Developer/Projects/Integra/seniorCare/src/components/common/GalleryMosaic.astro", void 0);

const $$Astro$4 = createAstro();
const $$ParallaxVideo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ParallaxVideo;
  const { subtitle, title, description, videoSrc, posterSrc, alignment, textColor, buttonHref, buttonSize, buttonVariant, buttonText } = Astro2.props;
  return renderTemplate`<!-- 
  VIEWPORT OPTIMIZATION: 
  Hero section height is calculated to fit within 100vh minus header height
  Mobile: ~5rem header = calc(100vh - 5rem)
  Tablet: ~5.5rem header = calc(100vh - 5.5rem) 
  Desktop: ~6rem header = calc(100vh - 6rem)
  This ensures no scroll is needed to see main content on landing
-->${renderComponent($$result, "Section", $$Section, { "padding": "large", "width": "full", "height": "100%", "id": "hero-parallax-section", "class": "relative overflow-hidden motion-safe:parallax-enabled hero-optimized h-full w-full", "data-astro-cid-r6plijng": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="absolute inset-0 w-full h-full parallax-container motion-reduce:opacity-50" data-astro-cid-r6plijng> ${renderComponent($$result2, "ParallaxMedia", $$ParallaxMedia, { "type": "video", "src": videoSrc, "posterSrc": posterSrc, "data-astro-cid-r6plijng": true })} <!-- Enhanced overlay for better text contrast --> <div class="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent z-[1]" aria-hidden="true" data-astro-cid-r6plijng></div> </div>  <div class="relative z-10 w-full max-w-7xl mx-auto h-full flex items-center justify-center lg:justify-start px-4 sm:px-6 lg:px-8" data-astro-cid-r6plijng> <div class="w-full max-w-3xl lg:max-w-none text-center lg:text-left lg:w-2/5" data-astro-cid-r6plijng> ${renderComponent($$result2, "TextBlock", $$TextBlock, { "subtitle": subtitle, "title": title, "descriptionBold": description, "alignment": alignment, "textColor": textColor, "buttonText": buttonText, "buttonVariant": buttonVariant, "buttonSize": buttonSize, "buttonHref": buttonHref, "data-astro-cid-r6plijng": true })} </div> </div>  <div class="sr-only" role="status" aria-live="polite" data-astro-cid-r6plijng>
Video background showing professional senior care services
</div> ` })} `;
}, "D:/Lim/Developer/Projects/Integra/seniorCare/src/components/common/ParallaxVideo.astro", void 0);

const $$Astro$3 = createAstro();
const $$ContactText = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ContactText;
  const { subtitle, title, description, contactOptions, contactForm } = Astro2.props;
  const iconNameMap = {
    "fa-globe": "globe",
    "fa-map-marker-alt": "location",
    "fa-phone-alt": "mobilePhone",
    "fa-envelope": "envelope",
    "fa-clock": "clock"
  };
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "background": "white", "padding": "medium", "width": "medium", "height": "auto", "id": "experience-section", "animation": "fade-in" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center content-narrow"> <div class="space-y-6 sm:space-y-8"> <div> ${renderComponent($$result2, "TextBlock", $$TextBlock, { "subtitle": subtitle, "title": title, "description": description, "alignment": "left", "textColor": "text-deep-blue" })} </div><div class="space-y-4 sm:space-y-6"> ${contactOptions.map((option) => renderTemplate`<div class="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"> <div class="bg-soft-orange w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full text-deep-blue flex-shrink-0 flex items-center justify-center"> ${renderComponent($$result2, "Icon", $$Icon, { "icons": [{ name: iconNameMap[option.icon] || option.icon }], "size": "medium", "customSize": "text-lg sm:text-xl lg:text-2xl", "variant": "default" })} </div> <div class="flex-1 min-w-0"> <h3 class="font-ag-sub-heading font-semibold text-ag-sub-heading sm:text-lg lg:text-xl text-deep-blue mb-1 sm:mb-2"> ${option.title} </h3> <p class="text-ag-body-text font-ag-body-text text-sm sm:text-base text-gray-700 leading-relaxed"> ${option.icon === "mobilePhone" && option.description.match(/^\d+\s?\d*\s?\d*/) ? renderTemplate`<a${addAttribute(`tel:${option.description.replace(/\s/g, "")}`, "href")} class="text-primary hover:underline font-medium"> ${option.description} </a>` : option.icon === "envelope" && option.description.includes("@") ? renderTemplate`<a${addAttribute(`mailto:${option.description}`, "href")} class="text-primary hover:underline"> ${option.description} </a>` : option.description} </p> </div> </div>`)} </div> </div> <div> ${renderComponent($$result2, "ContactForm", $$ContactForm, { "size": "medium", ...contactForm })} </div> </div> ` })}`;
}, "D:/Lim/Developer/Projects/Integra/seniorCare/src/components/contact/ContactText.astro", void 0);

const $$Astro$2 = createAstro();
const $$DiscoverIcons = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$DiscoverIcons;
  const { class: className, subtitle, title, features } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "background": "accent", "padding": "medium", "width": "medium", "height": "auto", "animation": "slide-in", "class": className }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="text-center mb-12 content-narrow"> ${renderComponent($$result2, "TextBlock", $$TextBlock, { "subtitle": subtitle, "title": title, "alignment": "center", "textColor": "text-deep-blue" })} </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 content-narrow"> ${features.map((feature, index) => renderTemplate`<div${addAttribute(`relative p-6 rounded-lg ${index === 1 ? "bg-soft-beige " : "bg-soft-orange hover:bg-soft-beige transition duration-300"} shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden`, "class")}> <div class="flex flex-col mb-4 relative z-10"> <div class="text-black mb-4 flex justify-center items-center h-16 w-16 "> <div class="transform scale-150"> ${renderComponent($$result2, "Icon", $$Icon, { "icons": [{ name: feature.icon }], "size": "xl" })} </div> </div> <h3 class="text-ag-body-text sm:text-ag-h6 md:text-ag-h5 font-ag-h5 mb-2 sm:mb-3 md:mb-4 leading-tight text-deep-blue"> ${feature.title} </h3> <p class="text-ag-body-text font-ag-body-text mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto"> ${feature.description} </p> </div> <div class="absolute top-4 right-4 text-soft-blue text-ag-h1 opacity-20"> ${feature.number} </div> </div>`)} </div> ` })}`;
}, "D:/Lim/Developer/Projects/Integra/seniorCare/src/components/common/DiscoverIcons.astro", void 0);

const $$Astro$1 = createAstro();
const $$MapSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MapSection;
  const { title, subtitle, description, mapEmbedUrl } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "animation": "zoom-in", "padding": "medium", "width": "medium", "height": "auto" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mx-2 md:mx-4 lg:mx-12 xl:mx-16 2xl:mx-24"> ${renderComponent($$result2, "TextBlock", $$TextBlock, { "subtitle": subtitle, "title": title, "description": description, "alignment": "center", "textColor": "text-deep-blue" })} <div class="w-full h-0 pb-[56.25%] relative"> <iframe${addAttribute(mapEmbedUrl, "src")} class="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> </div> </div> ` })}`;
}, "D:/Lim/Developer/Projects/Integra/seniorCare/src/components/contact/MapSection.astro", void 0);

const $$Astro = createAstro();
const $$FaqContent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FaqContent;
  const { title, subtitle, faqItems } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "background": "white", "padding": "medium", "width": "medium", "height": "auto", "id": "faq-section", "animation": "fade-in" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="text-center mb-12 content-narrow"> ${renderComponent($$result2, "TextBlock", $$TextBlock, { "subtitle": subtitle, "title": title, "alignment": "center", "textColor": "text-deep-blue" })} </div> <div class="gap-8 mx-2 md:mx-4 lg:mx-12 xl:mx-16 2xl:mx-24"> <div class="space-y-6"> ${faqItems.map((item, index) => renderTemplate`<div class="bg-white rounded-lg shadow-md p-6"> <button class="flex justify-between items-center w-full "${addAttribute(`document.getElementById('faq-answer-${index}').classList.toggle('hidden')`, "onclick")}> <h3 class="text-xl font-semibold text-gray-900 text-center"> ${item.question} </h3> <i class="fas fa-chevron-down text-blue-500"></i> </button> <p${addAttribute(`faq-answer-${index}`, "id")} class="mt-4 text-gray-600 hidden"> ${item.answer} </p> </div>`)} </div> </div> ` })}`;
}, "D:/Lim/Developer/Projects/Integra/seniorCare/src/components/faq/FaqContent.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const title = "Integra Senior Care | Umfassende Seniorenbetreuung";
  const page = "home";
  const navAnchors = [
    { id: "home", label: "Home" },
    { id: "about", label: "\xDCber uns" },
    { id: "services", label: "Leistungen" },
    { id: "experience", label: "Erfahrung" },
    { id: "contact", label: "Kontakt" },
    { id: "faq", label: "FAQ" },
    { id: "location", label: "Standort" }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "page": page, "navAnchors": navAnchors, "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate`    ${maybeRenderHead()}<div id="about" class="scroll-section" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "AboutSection", $$AboutSection, { ...texts.home.about, "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "BannerSlider", $$BannerSlider, { "slides": texts.home.bannerSlides, "data-astro-cid-j7pv25f6": true })} </div> <div id="services" class="scroll-section" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Experience", $$Experience, { ...texts.home.experience, "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "DiscoverIcons", $$DiscoverIcons, { ...texts.about.discoverIcons, "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "ImageCarrousel", $$ImageCarrousel, { ...texts.home.imageCarousel, "data-astro-cid-j7pv25f6": true })} </div> <div id="experience" class="scroll-section" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "ImageCarrousel_2", $$ImageCarrousel2, { ...texts.home.imageCarousel_2, "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Testimonial", $$Testimonial, { ...texts.home.testimonials, "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "GalleryMosaic", $$GalleryMosaic, { ...texts.home.galleryMosaic, "data-astro-cid-j7pv25f6": true })} </div> <div id="contact" class="scroll-section" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "ContactText", $$ContactText, { ...texts.contact.contactText, "data-astro-cid-j7pv25f6": true })} </div> <div id="faq" class="scroll-section" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "FaqContent", $$FaqContent, { ...texts.faq.faqContent, "data-astro-cid-j7pv25f6": true })} </div> <div id="location" class="scroll-section" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Location", $$Location, { ...texts.home.location, "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "MapSection", $$MapSection, { ...texts.contact.mapSection, "data-astro-cid-j7pv25f6": true })} </div> `, "hero": ($$result2) => renderTemplate`${renderComponent($$result2, "ParallaxVideo", $$ParallaxVideo, { ...texts.home.heroVideo, "preload": "metadata", "id": "home", "slot": "hero", "data-astro-cid-j7pv25f6": true })}` })}  `;
}, "D:/Lim/Developer/Projects/Integra/seniorCare/src/pages/index.astro", void 0);

const $$file = "D:/Lim/Developer/Projects/Integra/seniorCare/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
