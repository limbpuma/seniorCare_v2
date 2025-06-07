/* empty css                                 */
import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, m as maybeRenderHead, a as addAttribute, u as unescapeHTML } from '../chunks/astro/server_DpsguGCp.mjs';
import 'kleur/colors';
import { a as $$Button, b as $$Icon, t as texts, $ as $$Layout } from '../chunks/Layout_Cqx-wyTp.mjs';
import { $ as $$Section, b as $$TextBlock, a as $$ParallaxMedia } from '../chunks/ParallaxMedia_CXSdwof_.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useRef, useEffect } from 'react';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro$d = createAstro();
const $$AboutSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$AboutSection;
  const { services, stats, buttonText, description, phoneNumber } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "background": "primary", "padding": "large", "width": "wide", "height": "auto", "id": "about-section", "animation": "fade-in" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container flex flex-col lg:flex-row justify-between items-center mb-8 sm:mb-12 space-y-8 lg:space-y-0 "> <div class="text-center lg:text-left lg:w-3/4 order-2 lg:order-1 text-white "> ${services.map((service) => renderTemplate`<h3 class="text-ag-h5 sm:text-ag-h4 md:text-ag-h3 lg:text-[40px] xl:text-[44px] font-ag-h3 mb-3 sm:mb-4 md:mb-6 leading-tight uppercase"> ${service} </h3>`)} </div> <div class="flex justify-center mx-auto items-center w-full sm:w-2/3 md:w-1/2 lg:w-1/4 order-1 lg:order-2 mb-8 lg:mb-0"> <div class="relative w-full pb-[100%] mb-8"> <img src="/assets/img/nurse_doctor_senior_care_1.webp" alt="Smiley Icon" class="absolute inset-0 w-full h-full object-cover rounded-full bg-gray-blue sm:mx-4 mx-auto" loading="lazy"> </div> </div> </div> <div class="border-t border-soft-orange mb-8 sm:mb-12"></div> <div class="flex flex-col lg:flex-row justify-between items-center text-center lg:text-left space-y-8 lg:space-y-0 text-white "> <div class="grid grid-cols-2 gap-4 sm:gap-8 md:gap-0 mb-8 lg:mb-0 w-full lg:w-1/2"> ${stats.map(({ number, label }) => renderTemplate`<div> <p class="text-ag-h3 sm:text-ag-h2 lg:text-ag-h1 font-ag-h1 mb-2"> ${number} </p> <p class="mx-4 text-ag-list-text text-soft-orange font-ag-list-text"> ${label} </p> </div>`)} </div> <div class="flex flex-col lg:items-end w-full lg:w-1/2"> <div class="mb-4 lg:mb-6 text-center lg:text-left"> <p class="text-ag-body-text font-ag-body-text"> ${description} </p> </div> <div class="flex flex-col sm:flex-row items-center justify-center sm:justify-start lg:justify-end space-y-4 sm:space-y-0 sm:space-x-12 mx-auto"> <div class="flex flex-col sm:flex-row items-center justify-center sm:justify-start lg:justify-end space-y-4 sm:space-y-0 sm:space-x-12 mx-auto"> ${renderComponent($$result2, "Button", $$Button, { "variant": "accent", "size": "medium", "href": `tel:+49 123 456 7890` }, { "default": ($$result3) => renderTemplate` <i class="fa fa-phone mr-2 text-deep-blue"></i> ${phoneNumber}` })} <div class="flex items-center text-ag-h5 font-ag-h5 mt-4 sm:mt-0"> ${buttonText} </div> </div> </div> </div> </div> ` })}`;
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

const $$Astro$c = createAstro();
const $$BannerSlider = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$BannerSlider;
  const iconClasses = "text-ag-h2 lg:text-ag-h2 text-deep-blue";
  const textClasses = "text-ag-h2 lg:text-ag-h2 font-bold text-deep-blue";
  const wrapperClasses = "flex items-center gap-4 sm:gap-12";
  const { slides } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bg-soft-orange py-12 w-full"> ${renderComponent($$result, "ReactSwiperSlider", ReactSwiperSlider, { "slides": slides, "iconClass": iconClasses, "textClass": textClasses, "wrapperClass": wrapperClasses, "divType": "flex-center", "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Lim/Developer/Projects/Integra/seniorCare/src/components/common/Slider.jsx", "client:component-export": "default" })} </div>`;
}, "D:/Lim/Developer/Projects/Integra/seniorCare/src/components/common/BannerSlider.astro", void 0);

const $$Astro$b = createAstro();
const $$Experience = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Experience;
  const { heading, title, description, buttonText, icontext } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "background": "white", "padding": "large", "width": "full", "height": "auto", "id": "experience-section", "animation": "slide-in" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="py-6 flex flex-col lg:flex-row items-center lg:justify-between"> <div class="relative w-full lg:w-1/2 bg-gray-200"> <img src="/assets/img/nurse_doctor_senior_care.webp" alt="Image Description" class="w-full h-full object-cover" loading="lazy"> <div class="absolute w-2/5 bottom-0 left-0 bg-deep-blue p-12 flex flex-col items-center text-soft-orange"> <div class="transform scale-150 mb-4"> ${renderComponent($$result2, "Icon", $$Icon, { "icons": [{ name: "handhelp" }], "size": "xl", "variant": "light" })} </div> <p class="text-white ag-h5 font-ag-h5 font-bold">${icontext}</p> </div> </div> <div class="w-full lg:w-1/2 mt-8 lg:mt-0 lg:pl-12"> ${renderComponent($$result2, "TextBlock", $$TextBlock, { "subtitle": heading, "title": title, "description": description, "alignment": "left", "textColor": "text-deep-blue", "buttonText": buttonText, "buttonVariant": "primary", "buttonSize": "medium", "buttonHref": "/services" })} </div> </div> ` })}`;
}, "D:/Lim/Developer/Projects/Integra/seniorCare/src/components/home/Experience.astro", void 0);

const $$Astro$a = createAstro();
const $$ImageCarrousel = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$ImageCarrousel;
  const { images, title, subtitle } = Astro2.props;
  const imagenclases = "w-auto h-[192px] object-cover";
  const textclasses = "mt-2 text-white text-ag-body-text font-ag-body-text text-left";
  const wrapperClasses = "relative overflow-hidden";
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "width": "full", "height": "auto", "id": "ImageCarrousel-section", "class": "relative", "animation": "zoom-in" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto"> <div class="absolute inset-0 w-full h-full"> <div class="w-full h-1/2 bg-white"></div> <div class="w-full h-1/2 bg-deep-blue"></div> </div> <div class="relative mx-auto w-full z-10"> ${renderComponent($$result2, "TextBlock", $$TextBlock, { "subtitle": subtitle, "title": title, "alignment": "center", "textColor": "text-deep-blue" })} <div class="w-full relative"> ${renderComponent($$result2, "ReactSwiperSlider", ReactSwiperSlider, { "slides": images, "imgClass": imagenclases, "textClass": textclasses, "wrapperClass": wrapperClasses, "isImageSlider": true, "divType": "flex-col", "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Lim/Developer/Projects/Integra/seniorCare/src/components/common/Slider.jsx", "client:component-export": "default" })} </div> </div> </div> ` })}`;
}, "D:/Lim/Developer/Projects/Integra/seniorCare/src/components/common/ImageCarrousel.astro", void 0);

const $$Astro$9 = createAstro();
const $$ImageCarrousel2 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$ImageCarrousel2;
  const { images, subtitle, title } = Astro2.props;
  const imageClasses = "w-full h-[250px] object-cover";
  const titleClasses = "text-white text-xl font-bold";
  const textClasses = "text-white text-ag-body-text font-ag-body-text text-sm";
  const wrapperClasses = "absolute bottom-0 left-0 bg-blue-900 p-2";
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "background": "primary", "padding": "large", "width": "full", "height": "auto", "id": "experience-section", "animation": "zoom-in" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto"> <div class="flex justify-between items-center mb-8"> <div class="flex flex-col"> ${renderComponent($$result2, "TextBlock", $$TextBlock, { "subtitle": subtitle, "title": title, "alignment": "left", "textColor": "text-white" })} </div> <div class="flex space-x-4"> <button class="text-white hover:text-blue-200 focus:outline-none" aria-label="Previous slide"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path> </svg> </button> <button class="text-white hover:text-blue-200 focus:outline-none" aria-label="Next slide"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </button> </div> </div> <div class="w-full relative"> ${renderComponent($$result2, "ReactSwiperSlider", ReactSwiperSlider, { "slides": images, "imgClass": imageClasses, "titleClass": titleClasses, "textClass": textClasses, "wrapperClass": wrapperClasses, "isImageSlider": false, "divType": "flex-col", "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Lim/Developer/Projects/Integra/seniorCare/src/components/common/Slider.jsx", "client:component-export": "default" })} </div> </div> ` })}`;
}, "D:/Lim/Developer/Projects/Integra/seniorCare/src/components/common/ImageCarrousel_2.astro", void 0);

const $$Astro$8 = createAstro();
const $$Location = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Location;
  const { subtitle, title, description, buttonText, stats } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "background": "white", "padding": "large", "width": "full", "height": "auto", "id": "experience-section", "animation": "slide-in" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto text-white"> <div class="flex flex-col md:flex-row items-center"> <div class="w-full md:w-3/5 lg:w-2/3 mb-0"> <img src="/assets/img/doctor_senior_care_tablet.webp" alt="World map with location markers" class="w-full h-[250px] md:h-[600px] object-cover" loading="lazy"> </div> <div class="w-full md:w-2/5 lg:w-1/3 md:pl-8 p-4"> ${renderComponent($$result2, "TextBlock", $$TextBlock, { "subtitle": subtitle, "title": title, "description": description, "alignment": "left", "textColor": "text-deep-blue", "buttonText": buttonText, "buttonVariant": "primary", "buttonSize": "medium", "buttonHref": "/contact" })} </div> </div> <div class="bg-soft-orange p-6 md:p-12"> <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center"> ${stats.map((stat) => renderTemplate`<div class="flex flex-col items-center"> <p class="text-ag-h3 font-ag-h3 text-blue-900">${stat.value}</p> <p class="text-ag-body-text font-ag-body-text text-black"> ${stat.label} </p> </div>`)} </div> </div> </div> ` })}`;
}, "D:/Lim/Developer/Projects/Integra/seniorCare/src/components/home/Location.astro", void 0);

const $$Astro$7 = createAstro();
const $$Testimonial = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Testimonial;
  const { titlesection, subtitlesection, items } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "background": "white", "padding": "large", "width": "full", "height": "auto", "id": "experience-section", "animation": "fade-in" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="text-center mb-12"> ${renderComponent($$result2, "TextBlock", $$TextBlock, { "subtitle": subtitlesection, "title": titlesection, "alignment": "center", "textColor": "text-deep-blue" })} </div> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"> ${items.map((testimonial) => renderTemplate`<div class="bg-white border-soft-orange p-6 rounded-lg shadow-md border h-full flex flex-col"> <p class="text-ag-body-text font-ag-body-text italic text-deep-blue mb-4 flex-grow"> ${testimonial.desc} </p> <div class="flex items-center mt-4"> <div class="flex-shrink-0 mr-4"> <div class="relative w-16 h-16 sm:w-20 sm:h-20"> <i class="fa-solid fa-quote-right text-ag-h3 text-deep-blue absolute -top-2 -left-2 z-10"></i> <img${addAttribute(testimonial.image, "src")}${addAttribute(testimonial.name, "alt")} class="w-full h-full object-cover rounded-full" loading="lazy"> </div> </div> <div> <h3 class="font-ag-sub-heading font-bold text-ag-sub-heading text-black"> ${testimonial.name} </h3> <p class="text-ag-body-text font-ag-body-text text-deep-blue"> ${testimonial.title} </p> </div> </div> </div>`)} </div> ` })}`;
}, "D:/Lim/Developer/Projects/Integra/seniorCare/src/components/common/Testimonial.astro", void 0);

const $$Astro$6 = createAstro();
const $$GalleryMosaic = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$GalleryMosaic;
  const { srcs, subtitle, title, description, buttonText } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "background": "white", "padding": "large", "width": "full", "height": "auto", "id": "experience-section", "animation": "grid-in" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col lg:flex-row items-center lg:items-stretch gap-8 lg:gap-12"> <div class="lg:w-1/3 flex flex-col justify-center items-center lg:items-start text-center lg:text-left"> ${renderComponent($$result2, "TextBlock", $$TextBlock, { "subtitle": subtitle, "title": title, "description": description, "alignment": "left", "textColor": "text-deep-blue" })} <div class="mt-0 flex justify-center "> ${renderComponent($$result2, "Button", $$Button, { "href": "https://www.instagram.com/pflegedienst.integra/", "flex": true, "class": "mt-2 lg:ml-8 md:mt-2 mx-auto md:mx-0" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Icon", $$Icon, { "icons": [{ name: "instagram" }], "size": "small", "variant": "light" })} ${buttonText}` })} </div> </div> <div class="w-full lg:w-2/3 flex flex-col"> <div class="md:hidden grid grid-cols-2 grid-rows-3 gap-4 aspect-square mb-2"> ${srcs.map((src, index) => renderTemplate`<div${addAttribute(`relative ${index === 0 ? "col-span-2 row-span-2" : index === 4 ? "col-span-2" : ""}`, "class")}> <img${addAttribute(src, "src")} class="absolute inset-0 w-full h-full object-cover rounded-lg" alt="" loading="lazy"> </div>`)} </div> <div class="hidden md:grid md:grid-cols-3 gap-4 h-[600px]"> <div class="grid grid-rows-[7fr,3fr] gap-4"> <div class="relative"> <img${addAttribute(srcs[0], "src")} class="absolute inset-0 w-full h-full object-cover rounded-lg" alt="image 1 section gallery" loading="lazy"> </div> <div class="relative"> <img${addAttribute(srcs[1], "src")} class="absolute inset-0 w-full h-full object-cover rounded-lg" alt="image 2 section gallery" loading="lazy"> </div> </div> <div class="relative"> <img${addAttribute(srcs[2], "src")} class="absolute inset-0 w-full h-full object-cover rounded-lg" alt="image 3 section gallery" loading="lazy"> </div> <div class="grid grid-rows-[3fr,7fr] gap-4"> <div class="relative"> <img${addAttribute(srcs[3], "src")} class="absolute inset-0 w-full h-full object-cover rounded-lg" alt="image 4 section gallery" loading="lazy"> </div> <div class="relative"> <img${addAttribute(srcs[4], "src")} class="absolute inset-0 w-full h-full object-cover rounded-lg" alt="image 5 section gallery" loading="lazy"> </div> </div> </div> </div> </div> ` })}`;
}, "D:/Lim/Developer/Projects/Integra/seniorCare/src/components/common/GalleryMosaic.astro", void 0);

const $$Astro$5 = createAstro();
const $$ParallaxVideo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ParallaxVideo;
  const { subtitle, title, description, videoSrc, posterSrc, alignment, textColor, buttonHref, buttonSize, buttonVariant, buttonText } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "padding": "large", "width": "full", "height": "h-screen", "id": "hero-parallax-section", "class": "relative overflow-hidden" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="absolute inset-0 w-full h-full parallax-container "> ${renderComponent($$result2, "ParallaxMedia", $$ParallaxMedia, { "type": "video", "src": videoSrc, "posterSrc": posterSrc })} </div> <div class="relative z-10 container mx-auto h-full flex items-center justify-center lg:justify-start"> <div class="w-full max-w-3xl lg:max-w-none sm:text-center sm:align-center lg:w-2/5 px-4 text-center lg:text-left"> ${renderComponent($$result2, "TextBlock", $$TextBlock, { "subtitle": subtitle, "title": title, "descriptionBold": description, "alignment": alignment, "textColor": textColor, "buttonText": buttonText, "buttonVariant": buttonVariant, "buttonSize": buttonSize, "buttonHref": buttonHref })} </div> </div> ` })}`;
}, "D:/Lim/Developer/Projects/Integra/seniorCare/src/components/common/ParallaxVideo.astro", void 0);

const $$Astro$4 = createAstro();
const $$ContactForm = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ContactForm;
  const {
    class: className,
    title,
    inputFields,
    textareaPlaceholder,
    buttonText,
    size = "large",
    image
  } = Astro2.props;
  const sizeClasses = {
    large: "max-w-lg w-full px-6 sm:px-8 md:px-10 py-10 sm:py-12 md:py-14",
    medium: "max-w-md w-full px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12",
    small: "max-w-sm w-full px-3 sm:px-4 md:px-6 py-6 sm:py-8 md:py-10"
  };
  const titleClasses = {
    large: "text-ag-h4 sm:text-ag-h3 md:text-ag-h2 mb-6 sm:mb-8 md:mb-10",
    medium: "text-ag-h5 sm:text-ag-h4 md:text-ag-h3 mb-4 sm:mb-6 md:mb-8",
    small: "text-ag-body-text sm:text-ag-h5 md:text-ag-h4 mb-3 sm:mb-4 md:mb-6"
  };
  const spacingClasses = {
    large: "space-y-6 sm:space-y-7 md:space-y-8",
    medium: "space-y-4 sm:space-y-5 md:space-y-6",
    small: "space-y-3 sm:space-y-4 md:space-y-5"
  };
  const buttonClasses = {
    large: "mt-8 sm:mt-10 md:mt-12",
    medium: "mt-6 sm:mt-8 md:mt-10",
    small: "mt-4 sm:mt-6 md:mt-8"
  };
  const inputClasses = "w-full px-4 py-2 bg-inherit border-t-0 border-x-0 border-b border-primary text-primary-dark focus:outline-none text-ag-body-text font-ag-body-text";
  const getTextareaRows = () => {
    if (size === "small") return "3";
    if (size === "medium") return "4";
    return "6";
  };
  return renderTemplate`${maybeRenderHead()}<div class="relative" data-astro-cid-ayff3c4f> <form id="contact-form"${addAttribute(`bg-soft-orange mx-auto flex flex-col justify-between shadow-lg rounded-lg md:mb-8 ${sizeClasses[size]} ${className}`, "class")} data-astro-cid-ayff3c4f> ${size === "small" && image && renderTemplate`<div class="w-full h-32 sm:h-40 md:h-48 overflow-hidden mb-4 rounded-t-lg" data-astro-cid-ayff3c4f> <img${addAttribute(image, "src")} alt="Form header" class="w-full h-full object-cover" loading="lazy" data-astro-cid-ayff3c4f> </div>`} <h2${addAttribute(`text-ag-body-text sm:text-ag-h5 md:text-ag-h4 lg:text-[32px] xl:text-[34px] font-ag-h4 mb-2 sm:mb-3 md:mb-4 leading-tight text-center text-deep-blue uppercase ${titleClasses[size]}`, "class")} data-astro-cid-ayff3c4f>${unescapeHTML(title)}</h2> <div${addAttribute(spacingClasses[size], "class")} data-astro-cid-ayff3c4f> ${inputFields.map((input) => {
    const { type, placeholder } = input;
    let name = type;
    if (type === "tel") name = "phone";
    if (type === "text" && placeholder.toLowerCase().includes("name"))
      name = "name";
    return renderTemplate`<div class="wcag-tooltip" data-astro-cid-ayff3c4f> <input${addAttribute(type, "type")}${addAttribute(name, "name")}${addAttribute(placeholder, "placeholder")}${addAttribute(inputClasses, "class")} required${addAttribute(
      type === "tel" ? "Bitte geben Sie Ihre Telefonnummer im Format +49 XXX XXXXXXX ein" : type === "email" ? "Wir ben\xF6tigen Ihre E-Mail-Adresse, um Ihnen zu antworten" : type === "text" && placeholder.toLowerCase().includes("name") ? "Ihr vollst\xE4ndiger Name hilft uns bei der pers\xF6nlichen Betreuung" : "",
      "data-tooltip"
    )} data-astro-cid-ayff3c4f> </div>`;
  })} <div class="wcag-tooltip" data-astro-cid-ayff3c4f> <select name="subject"${addAttribute(inputClasses, "class")} required data-tooltip="Wählen Sie das Thema aus, das am besten zu Ihrer Anfrage passt" data-astro-cid-ayff3c4f> <option value="" data-astro-cid-ayff3c4f>Betreff auswählen</option> <option value="general" data-astro-cid-ayff3c4f>Allgemeine Anfrage</option> <option value="services" data-astro-cid-ayff3c4f>Leistungen</option> <option value="appointment" data-astro-cid-ayff3c4f>Terminvereinbarung</option> <option value="emergency" data-astro-cid-ayff3c4f>Notfall</option> </select> </div> <div class="wcag-tooltip" data-astro-cid-ayff3c4f> <textarea name="message"${addAttribute(textareaPlaceholder, "placeholder")}${addAttribute(getTextareaRows(), "rows")}${addAttribute(inputClasses, "class")} required data-tooltip="Beschreiben Sie Ihre Anfrage detailliert. Je mehr Informationen Sie uns geben, desto besser können wir Ihnen helfen." data-astro-cid-ayff3c4f></textarea> </div> </div> ${renderComponent($$result, "Button", $$Button, { "type": "submit", "variant": "primary", "fullWidth": true, "class": buttonClasses[size], "data-astro-cid-ayff3c4f": true }, { "default": ($$result2) => renderTemplate`${buttonText}` })} <div class="flex items-start mt-4" data-astro-cid-ayff3c4f> <input type="checkbox" id="consent" name="consent" class="mt-1 mr-2" required data-astro-cid-ayff3c4f> <label for="consent" class="text-ag-body-text font-ag-body-text mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto" data-astro-cid-ayff3c4f>
Ich stimme der Verwendung meiner Daten zu. Mehr Infos in der <a href="privacypolicy" class="text-primary underline" data-astro-cid-ayff3c4f>Datenschutz</a>.
</label> </div> </form> <div id="message-modal" class="hidden fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" data-astro-cid-ayff3c4f> <div class="bg-white p-6 rounded-lg shadow-lg max-w-md w-full mx-4" data-astro-cid-ayff3c4f> <h4 id="modal-title" class="text-ag-h5 sm:text-ag-h4 md:text-ag-h3 font-ag-h3 mb-4" data-astro-cid-ayff3c4f></h4> <p id="modal-message" class="text-ag-body-text font-ag-body-text mb-6" data-astro-cid-ayff3c4f></p> <button id="close-modal" class="w-full px-4 py-2 bg-deep-blue hover:bg-soft-blue text-white rounded-full transition-colors duration-300 focus:outline-none font-ag-button-text text-ag-button-text" data-astro-cid-ayff3c4f>
Schließen
</button> </div> </div> </div>  `;
}, "D:/Lim/Developer/Projects/Integra/seniorCare/src/components/common/ContactForm.astro", void 0);

const $$Astro$3 = createAstro();
const $$ContactText = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ContactText;
  const { subtitle, title, description, contactOptions, contactForm } = Astro2.props;
  const iconNameMap = {
    "fa-globe": "globe",
    "fa-map-marker-alt": "location",
    "fa-phone-alt": "mobilePhone",
    "fa-envelope": "envelope"
  };
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "background": "white", "padding": "large", "width": "full", "height": "auto", "id": "experience-section", "animation": "fade-in" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-7xl mx-auto"> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"> <div class="space-y-8"> <div> ${renderComponent($$result2, "TextBlock", $$TextBlock, { "subtitle": subtitle, "title": title, "description": description, "alignment": "left", "textColor": "text-deep-blue" })} </div> <div class="space-y-6"> ${contactOptions.map((option) => renderTemplate`<div class="flex items-center space-x-4 lg:ml-8"> <div class="bg-soft-orange p-4 rounded-full text-deep-blue"> ${renderComponent($$result2, "Icon", $$Icon, { "icons": [{ name: iconNameMap[option.icon] || option.icon }], "size": "large", "variant": "default", "customSize": "text-xl" })} </div> <div class="text-ag-body-text font-ag-body-text mb-2 sm:mb-2 md:mb-2 max-w-3xl mx-auto"> <h3 class="font-semibold">${option.title}</h3> <p class="text-gray-600">${option.description}</p> </div> </div>`)} </div> </div> <div> ${renderComponent($$result2, "ContactForm", $$ContactForm, { "size": "medium", ...contactForm })} </div> </div> </div> ` })}`;
}, "D:/Lim/Developer/Projects/Integra/seniorCare/src/components/contact/ContactText.astro", void 0);

const $$Astro$2 = createAstro();
const $$DiscoverIcons = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$DiscoverIcons;
  const { class: className, subtitle, title, features } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "animation": "slide-in", "class": `features py-12 sm:py-16 bg-soft-orange ${className}` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8"> <div class="text-center mb-12"> ${renderComponent($$result2, "TextBlock", $$TextBlock, { "subtitle": subtitle, "title": title, "alignment": "center", "textColor": "text-deep-blue" })} </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${features.map((feature, index) => renderTemplate`<div${addAttribute(`relative p-6 rounded-lg ${index === 1 ? "bg-soft-beige " : "bg-soft-orange hover:bg-soft-beige transition duration-300"} shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden`, "class")}> <div class="flex flex-col mb-4 relative z-10"> <div class="text-black mb-4 flex justify-center items-center h-16 w-16 "> <div class="transform scale-150"> ${renderComponent($$result2, "Icon", $$Icon, { "icons": [{ name: feature.icon }], "size": "xl" })} </div> </div> <h3 class="text-ag-body-text sm:text-ag-h6 md:text-ag-h5 font-ag-h5 mb-2 sm:mb-3 md:mb-4 leading-tight text-deep-blue"> ${feature.title} </h3> <p class="text-ag-body-text font-ag-body-text mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto"> ${feature.description} </p> </div> <div class="absolute top-4 right-4 text-soft-blue text-ag-h1 opacity-20"> ${feature.number} </div> </div>`)} </div> </div> ` })}`;
}, "D:/Lim/Developer/Projects/Integra/seniorCare/src/components/common/DiscoverIcons.astro", void 0);

const $$Astro$1 = createAstro();
const $$MapSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MapSection;
  const { title, subtitle, description, mapEmbedUrl } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "animation": "zoom-in", "padding": "medium", "width": "full", "height": "auto" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto px-4"> ${renderComponent($$result2, "TextBlock", $$TextBlock, { "subtitle": subtitle, "title": title, "description": description, "alignment": "center", "textColor": "text-deep-blue" })} <div class="w-full h-0 pb-[56.25%] relative"> <iframe${addAttribute(mapEmbedUrl, "src")} class="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> </div> </div> ` })}`;
}, "D:/Lim/Developer/Projects/Integra/seniorCare/src/components/contact/MapSection.astro", void 0);

const $$Astro = createAstro();
const $$FaqContent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FaqContent;
  const { title, subtitle, faqItems, contactForm } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "background": "white", "padding": "large", "width": "full", "height": "auto", "id": "faq-section", "animation": "fade-in" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto px-4"> <div class="text-center mb-12"> ${renderComponent($$result2, "TextBlock", $$TextBlock, { "subtitle": subtitle, "title": title, "alignment": "center", "textColor": "text-deep-blue" })} </div> <div class="gap-8"> <div class="space-y-6"> ${faqItems.map((item, index) => renderTemplate`<div class="bg-white rounded-lg shadow-md p-6"> <button class="flex justify-between items-center w-full "${addAttribute(`document.getElementById('faq-answer-${index}').classList.toggle('hidden')`, "onclick")}> <h3 class="text-xl font-semibold text-gray-900 text-center"> ${item.question} </h3> <i class="fas fa-chevron-down text-blue-500"></i> </button> <p${addAttribute(`faq-answer-${index}`, "id")} class="mt-4 text-gray-600 hidden"> ${item.answer} </p> </div>`)} </div> </div> </div> ` })}`;
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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "page": page, "navAnchors": navAnchors, "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="home" class="scroll-section" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "ParallaxVideo", $$ParallaxVideo, { ...texts.home.heroVideo, "preload": "metadata", "data-astro-cid-j7pv25f6": true })} </div> <div id="about" class="scroll-section" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "AboutSection", $$AboutSection, { ...texts.home.about, "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "BannerSlider", $$BannerSlider, { "slides": texts.home.bannerSlides, "data-astro-cid-j7pv25f6": true })} </div> <div id="services" class="scroll-section" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Experience", $$Experience, { ...texts.home.experience, "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "DiscoverIcons", $$DiscoverIcons, { ...texts.about.discoverIcons, "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "ImageCarrousel", $$ImageCarrousel, { ...texts.home.imageCarousel, "data-astro-cid-j7pv25f6": true })} </div> <div id="experience" class="scroll-section" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "ImageCarrousel_2", $$ImageCarrousel2, { ...texts.home.imageCarousel_2, "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Testimonial", $$Testimonial, { ...texts.home.testimonials, "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "GalleryMosaic", $$GalleryMosaic, { ...texts.home.galleryMosaic, "data-astro-cid-j7pv25f6": true })} </div> <div id="contact" class="scroll-section" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "ContactText", $$ContactText, { ...texts.contact.contactText, "data-astro-cid-j7pv25f6": true })} </div> <div id="faq" class="scroll-section" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "FaqContent", $$FaqContent, { ...texts.faq.faqContent, "data-astro-cid-j7pv25f6": true })} </div> <div id="location" class="scroll-section" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Location", $$Location, { ...texts.home.location, "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "MapSection", $$MapSection, { ...texts.contact.mapSection, "data-astro-cid-j7pv25f6": true })} </div> ` })} `;
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
