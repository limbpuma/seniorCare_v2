import { jsx, jsxs } from 'react/jsx-runtime';
import 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Navigation } from 'swiper/modules';
/* empty css                         */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, d as createAstro } from './astro/server_CC3nx09E.mjs';
import 'kleur/colors';
import 'clsx';

const bannerSliderSettings = {
  modules: [Autoplay, FreeMode],
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
  modules: [Autoplay, FreeMode, Navigation],
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
  const settings = isImageSlider ? imageCarouselSettings : bannerSliderSettings;
  const divTypes = {
    "flex-center": "flex items-center justify-center text-center p-4 gap-4",
    "flex-col": "flex flex-col text-center p-4",
    "flex-row": "flex items-center justify-start text-left p-4"
  };
  const selectedDivClass = divTypes[divType] || divTypes["flex-center"];
  return /* @__PURE__ */ jsx(Swiper, { ...settings, children: slides.map((slide, index) => /* @__PURE__ */ jsx(SwiperSlide, { style: { width: "auto" }, children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
    slide.src && /* @__PURE__ */ jsx(
      "img",
      {
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
  ] }) }, index)) });
};

const $$Astro = createAstro();
const $$Testimonial = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Testimonial;
  const { testimonials } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8"> <div class="max-w-7xl mx-auto"> <div class="text-center mb-12"> <p class="text-ag-sub-heading font-semibold mb-2">Testimonials</p> <h2 class="text-ag-h3 font-ag-h3 text-primary-dark">What Our Clients Say About Us</h2> </div> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"> ${testimonials.map((testimonial) => renderTemplate`<div class="bg-white border-soft-orange p-6 rounded-lg shadow-md border h-full flex flex-col"> <p class="text-ag-body-text font-ag-body-text italic text-deep-blue mb-4 flex-grow">${testimonial.desc}</p> <div class="flex items-center mt-4"> <div class="flex-shrink-0 mr-4"> <div class="relative w-16 h-16 sm:w-20 sm:h-20"> <i class="fa-solid fa-quote-right text-ag-h3 text-deep-blue absolute -top-2 -left-2 z-10"></i> <img${addAttribute(testimonial.image, "src")}${addAttribute(testimonial.name, "alt")} class="w-full h-full object-cover rounded-full"> </div> </div> <div> <h3 class="font-ag-sub-heading font-bold text-ag-sub-heading text-black">${testimonial.name}</h3> <p class="text-ag-body-text font-ag-body-text text-deep-blue">${testimonial.title}</p> </div> </div> </div>`)} </div> </div> </section>`;
}, "E:/Lim/Developer/Projects/seniorCare/src/components/common/Testimonial.astro", void 0);

export { $$Testimonial as $, ReactSwiperSlider as R };
