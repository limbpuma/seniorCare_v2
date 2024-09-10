/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent, d as createAstro, a as addAttribute } from '../chunks/astro/server_CC3nx09E.mjs';
import 'kleur/colors';
import { a as $$Button, $ as $$Icon, t as texts, b as $$Layout } from '../chunks/texts_CSolM1Jm.mjs';
import { $ as $$AboutSection, a as $$BannerSlider } from '../chunks/BannerSlider_J4YnVgdR.mjs';
import { R as ReactSwiperSlider, $ as $$Testimonial } from '../chunks/Testimonial_CYLunBlo.mjs';
import { $ as $$TitleCommon, a as $$GalleryMosaic } from '../chunks/TitleCommon_CZynIlac.mjs';
import { $ as $$ContactForm } from '../chunks/ContactForm_D1PJeWD2.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$5 = createAstro();
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Hero;
  const { subtitle, title, description, buttonText } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="bg-center bg-no-repeat bg-cover bg-[url('/assets/img/senior_couple__in_the_park.webp')] bg-blend-multiply"> <div class="px-4 mx-auto max-w-screen-xl text-center lg:text-left py-16 sm:py-24 lg:py-48 flex flex-col lg:flex-row lg:items-center"> <div class="lg:w-1/2 w-full px-4"> <h3 class="text-deep-blue text-ag-h5 font-ag-h5 mb-2 sm:mb-4">${subtitle}</h3> <h1 class="text-deep-blue mb-4 text-ag-h2 font-ag-h2 tracking-tight leading-tight sm:text-ag-h1 sm:leading-tight"> ${title} </h1> <p class="text-deep-blue mb-8 text-ag-body-text font-ag-body-text sm:text-lg lg:text-xl"> ${description} </p> <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center lg:justify-start sm:space-y-0"> ${renderComponent($$result, "Button", $$Button, { "variant": "primary", "size": "medium", "class": "mx-auto sm:mx-0" }, { "default": ($$result2) => renderTemplate`${buttonText}` })} </div> </div> <!-- Parte derecha vacía para pantallas grandes --> <div class="hidden lg:block lg:w-1/2"></div> </div> </section>`;
}, "C:/Users/limbp/Documents/Developer/Integra/seniorCare/src/components/home/Hero.astro", void 0);

const $$Astro$4 = createAstro();
const $$Experience = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Experience;
  const { heading, title, description, buttonText } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(["py-12 lg:py-20"], "class:list")}> <div class="container mx-auto px-4 p-4 py-6 flex flex-col lg:flex-row items-center lg:justify-between "> <div class="relative w-full lg:w-1/2 bg-gray-200"> <img src="/assets/img/Bild1.jpg" alt="Image Description" class="w-full h-full object-cover"> <div class="absolute bottom-0 left-0 bg-deep-blue p-12 flex flex-col items-center text-soft-orange"> ${renderComponent($$result, "Icon", $$Icon, { "socials": ["handhelp"], "size": "xl" })} <p class="text-white ag-h5 font-ag-h5 font-bold">Safe & Security</p> </div> </div> <div class="w-full lg:w-1/2 mt-8 lg:mt-0 lg:pl-12"> <h5 class="text-soft-blue font-ag-sub-heading text-ag-sub-heading mb-4">${heading}</h5> <h3 class="text-deep-blue font-ag-h3 text-ag-h3 mb-4">${title}</h3> <p class="text-gray-600 text-ag-body-text font-ag-body-text mb-6">${description}</p> ${renderComponent($$result, "Button", $$Button, { "variant": "primary", "size": "medium" }, { "default": ($$result2) => renderTemplate`${buttonText}` })} </div> </div> </section>`;
}, "C:/Users/limbp/Documents/Developer/Integra/seniorCare/src/components/home/Experience.astro", void 0);

const $$Astro$3 = createAstro();
const $$ImageCarrousel = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ImageCarrousel;
  const { images, title, subtitle } = Astro2.props;
  const imagenclases = "w-auto h-[192px] object-cover";
  const textclasses = "mt-2 text-white text-ag-body-text font-ag-body-text text-left";
  const wrapperClasses = "relative overflow-hidden";
  return renderTemplate`${maybeRenderHead()}<section class="relative py-12 sm:py-16 "> <div class="container mx-auto px-4"> <div class="absolute inset-0 w-full h-full"> <div class="w-full h-1/2 bg-white"></div> <div class="w-full h-1/2 bg-deep-blue"></div> </div> <div class="relative mx-auto w-full z-10"> <div class="text-center mb-8"> <p class="text-deep-blue text-ag-sub-heading font-ag-sub-heading">${subtitle}</p> <h2 class="text-deep-blue font-ag-h3 text-ag-h3">${title}</h2> </div> <div class="w-full relative"> ${renderComponent($$result, "ReactSwiperSlider", ReactSwiperSlider, { "slides": images, "imgClass": imagenclases, "textClass": textclasses, "wrapperClass": wrapperClasses, "isImageSlider": true, "divType": "flex-col", "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/limbp/Documents/Developer/Integra/seniorCare/src/components/common/Slider.jsx", "client:component-export": "default" })} </div> </div> </div> </section>`;
}, "C:/Users/limbp/Documents/Developer/Integra/seniorCare/src/components/common/ImageCarrousel.astro", void 0);

const $$Astro$2 = createAstro();
const $$ImageCarrousel2 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ImageCarrousel2;
  const { images, subtitle, title } = Astro2.props;
  const imageClasses = "w-full h-[250px] object-cover";
  const titleClasses = "text-white text-xl font-bold";
  const textClasses = "text-white text-ag-body-text font-ag-body-text text-sm";
  const wrapperClasses = "absolute bottom-0 left-0 bg-blue-900 p-2";
  return renderTemplate`${maybeRenderHead()}<section class="py-12 lg:py-20 bg-deep-blue"> <div class="container mx-auto px-4"> <div class="flex justify-between items-center mb-8"> <div class="flex flex-col"> <h2 class="text-white text-ag-sub-heading font-ag-sub-heading">${subtitle}</h2> <h2 class="text-white font-ag-h3  text-ag-h3 ">${title}</h2> </div> <div class="flex space-x-4"> <button class="text-white hover:text-blue-200 focus:outline-none" aria-label="Previous slide"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path> </svg> </button> <button class="text-white hover:text-blue-200 focus:outline-none" aria-label="Next slide"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </button> </div> </div> <div class="w-full relative"> ${renderComponent($$result, "ReactSwiperSlider", ReactSwiperSlider, { "slides": images, "imgClass": imageClasses, "titleClass": titleClasses, "textClass": textClasses, "wrapperClass": wrapperClasses, "isImageSlider": false, "divType": "flex-col", "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/limbp/Documents/Developer/Integra/seniorCare/src/components/common/Slider.jsx", "client:component-export": "default" })} </div> </div> </section>`;
}, "C:/Users/limbp/Documents/Developer/Integra/seniorCare/src/components/common/ImageCarrousel_2.astro", void 0);

const $$Astro$1 = createAstro();
const $$Location = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Location;
  const { subtitle, title, description, city, buttonText, stats } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="py-8 lg:py-16 bg-white mt-16"> <div class="container mx-auto px-4 text-white"> <div class="flex flex-col md:flex-row items-center"> <div class="w-full md:w-3/5 lg:w-2/3 mb-4 md:mb-0"> <img src="/assets/img/Bild1.jpg" alt="World map with location markers" class="w-full h-[250px] md:h-[450px] object-cover"> </div> <div class="w-full md:w-2/5 lg:w-1/3 md:pl-8 p-4"> <h2 class="text-deep-blue text-ag-sub-heading font-ag-sub-heading mb-2">${subtitle}</h2> <h1 class="text-ag-h5 font-ag-h5 text-deep-blue mb-4">${title}</h1> <p class="text-deep-blue text-ag-body-text font-ag-body-text mb-4">${description}</p> <h3 class="text-ag-h5 font-ag-h5 text-deep-blue mb-4">${city}</h3> ${renderComponent($$result, "Button", $$Button, { "class": "flex mt-4", "variant": "primary", "size": "medium" }, { "default": ($$result2) => renderTemplate`${buttonText}` })} </div> </div> <div class="bg-soft-orange p-6 md:p-12 "> <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center"> ${stats.map((stat) => renderTemplate`<div class="flex flex-col items-center"> <p class="text-ag-h3 font-ag-h3 text-blue-900">${stat.value}</p> <p class="text-ag-body-text font-ag-body-text text-black">${stat.label}</p> </div>`)} </div> </div> </div> </section>`;
}, "C:/Users/limbp/Documents/Developer/Integra/seniorCare/src/components/home/Location.astro", void 0);

const $$Astro = createAstro();
const $$FormSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FormSection;
  const { subtitle, title, description, image, contactForm } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="bg-primary py-8 sm:py-12 md:py-16 lg:py-20 relative"> <div class="container mx-auto px-4 sm:px-6 lg:px-8"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"> <div class="lg:order-1 relative z-10"> <div class="transform translate-y-0 sm:translate-y-8 md:translate-y-12 lg:translate-y-0 lg:-mb-28"> ${renderComponent($$result, "ContactForm", $$ContactForm, { ...contactForm })} </div> </div> <div class="lg:order-2 text-white"> ${renderComponent($$result, "TitleCommon", $$TitleCommon, { "class": "text-center lg:text-left mb-6 sm:mb-8 md:mb-10", "title": title, "subtitle": subtitle, "desc": description })} <div class="mt-6 sm:mt-8 md:mt-10 max-w-[638px] h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] mx-auto lg:mx-0"> <img${addAttribute(image, "src")} class="object-cover w-full h-full rounded-lg shadow-lg" alt="Contact image"> </div> </div> </div> </div> </section>`;
}, "C:/Users/limbp/Documents/Developer/Integra/seniorCare/src/components/home/FormSection.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const title = "Home";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { ...texts.home.hero })} ${renderComponent($$result2, "AboutSection", $$AboutSection, { ...texts.home.about })} ${renderComponent($$result2, "BannerSlider", $$BannerSlider, { "slides": texts.home.bannerSlides })} ${renderComponent($$result2, "Experience", $$Experience, { ...texts.home.experience })} ${renderComponent($$result2, "ImageCarrousel", $$ImageCarrousel, { ...texts.home.imageCarousel })} ${renderComponent($$result2, "FormSection", $$FormSection, { ...texts.home.formSection })} ${renderComponent($$result2, "Location", $$Location, { ...texts.home.location })} ${renderComponent($$result2, "ImageCarrousel_2", $$ImageCarrousel2, { ...texts.home.imageCarousel_2 })} ${renderComponent($$result2, "Testimonial", $$Testimonial, { "testimonials": texts.home.testimonials })} ${renderComponent($$result2, "GalleryMosaic", $$GalleryMosaic, { ...texts.home.galleryMosaic })} ` })}`;
}, "C:/Users/limbp/Documents/Developer/Integra/seniorCare/src/pages/index.astro", void 0);

const $$file = "C:/Users/limbp/Documents/Developer/Integra/seniorCare/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
