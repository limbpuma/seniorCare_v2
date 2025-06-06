/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, b as createAstro, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_B9cSnyzq.mjs';
import 'kleur/colors';
import { $ as $$Icon, t as texts, b as $$Layout } from '../chunks/Layout_CMFYuxJT.mjs';
import { $ as $$AboutSection, b as $$BannerSlider, a as $$ImageCarrousel2 } from '../chunks/ImageCarrousel_2_DIfEkbSg.mjs';
import { $ as $$TextBlock, a as $$Section } from '../chunks/TextBlock_pUV8bRiu.mjs';
import { R as ReactSwiperSlider, $ as $$ParallaxVideo, a as $$Testimonial } from '../chunks/ParallaxVideo_CnTGqRjE.mjs';
import { $ as $$GalleryMosaic } from '../chunks/GalleryMosaic_Cq6tEA3C.mjs';
import { $ as $$ContactForm } from '../chunks/ContactForm_CcLavPXB.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$3 = createAstro();
const $$Experience = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Experience;
  const { heading, title, description, buttonText, icontext } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "background": "white", "padding": "large", "width": "full", "height": "auto", "id": "experience-section", "animation": "slide-in" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="py-6 flex flex-col lg:flex-row items-center lg:justify-between"> <div class="relative w-full lg:w-1/2 bg-gray-200"> <img src="/assets/img/nurse_doctor_senior_care.webp" alt="Image Description" class="w-full h-full object-cover" loading="lazy"> <div class="absolute w-2/5 bottom-0 left-0 bg-deep-blue p-12 flex flex-col items-center text-soft-orange"> <div class="transform scale-150 mb-4"> ${renderComponent($$result2, "Icon", $$Icon, { "icons": [{ name: "handhelp" }], "size": "xl", "variant": "light" })} </div> <p class="text-white ag-h5 font-ag-h5 font-bold">${icontext}</p> </div> </div> <div class="w-full lg:w-1/2 mt-8 lg:mt-0 lg:pl-12"> ${renderComponent($$result2, "TextBlock", $$TextBlock, { "subtitle": heading, "title": title, "description": description, "alignment": "left", "textColor": "text-deep-blue", "buttonText": buttonText, "buttonVariant": "primary", "buttonSize": "medium", "buttonHref": "/services" })} </div> </div> ` })}`;
}, "D:/Lim/Developer/Projects/Integra/seniorCare/src/components/home/Experience.astro", void 0);

const $$Astro$2 = createAstro();
const $$ImageCarrousel = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ImageCarrousel;
  const { images, title, subtitle } = Astro2.props;
  const imagenclases = "w-auto h-[192px] object-cover";
  const textclasses = "mt-2 text-white text-ag-body-text font-ag-body-text text-left";
  const wrapperClasses = "relative overflow-hidden";
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "width": "full", "height": "auto", "id": "ImageCarrousel-section", "class": "relative", "animation": "zoom-in" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto"> <div class="absolute inset-0 w-full h-full"> <div class="w-full h-1/2 bg-white"></div> <div class="w-full h-1/2 bg-deep-blue"></div> </div> <div class="relative mx-auto w-full z-10"> ${renderComponent($$result2, "TextBlock", $$TextBlock, { "subtitle": subtitle, "title": title, "alignment": "center", "textColor": "text-deep-blue" })} <div class="w-full relative"> ${renderComponent($$result2, "ReactSwiperSlider", ReactSwiperSlider, { "slides": images, "imgClass": imagenclases, "textClass": textclasses, "wrapperClass": wrapperClasses, "isImageSlider": true, "divType": "flex-col", "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Lim/Developer/Projects/Integra/seniorCare/src/components/common/Slider.jsx", "client:component-export": "default" })} </div> </div> </div> ` })}`;
}, "D:/Lim/Developer/Projects/Integra/seniorCare/src/components/common/ImageCarrousel.astro", void 0);

const $$Astro$1 = createAstro();
const $$Location = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Location;
  const { subtitle, title, description, buttonText, stats } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "background": "white", "padding": "large", "width": "full", "height": "auto", "id": "experience-section", "animation": "slide-in" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto text-white"> <div class="flex flex-col md:flex-row items-center"> <div class="w-full md:w-3/5 lg:w-2/3 mb-0"> <img src="/assets/img/doctor_senior_care_tablet.webp" alt="World map with location markers" class="w-full h-[250px] md:h-[600px] object-cover" loading="lazy"> </div> <div class="w-full md:w-2/5 lg:w-1/3 md:pl-8 p-4"> ${renderComponent($$result2, "TextBlock", $$TextBlock, { "subtitle": subtitle, "title": title, "description": description, "alignment": "left", "textColor": "text-deep-blue", "buttonText": buttonText, "buttonVariant": "primary", "buttonSize": "medium", "buttonHref": "/contact" })} </div> </div> <div class="bg-soft-orange p-6 md:p-12"> <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center"> ${stats.map((stat) => renderTemplate`<div class="flex flex-col items-center"> <p class="text-ag-h3 font-ag-h3 text-blue-900">${stat.value}</p> <p class="text-ag-body-text font-ag-body-text text-black"> ${stat.label} </p> </div>`)} </div> </div> </div> ` })}`;
}, "D:/Lim/Developer/Projects/Integra/seniorCare/src/components/home/Location.astro", void 0);

const $$Astro = createAstro();
const $$FormSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FormSection;
  const { subtitle, title, description, image, contactForm } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "background": "primary", "padding": "large", "width": "wide", "height": "auto", "id": "experience-section", "animation": "fade-in" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto lg:px-8 "> <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 "> <div class="lg:order-1 relative z-10"> <div class="transform translate-y-0 sm:translate-y-8 md:translate-y-12 lg:translate-y-0 lg:-mb-28 mx-2"> ${renderComponent($$result2, "ContactForm", $$ContactForm, { ...contactForm })} </div> </div> <div class="lg:order-2 text-white"> ${renderComponent($$result2, "TextBlock", $$TextBlock, { "subtitle": subtitle, "title": title, "description": description, "alignment": "left", "textColor": "white" })} <div class="mt-6 sm:mt-8 md:mt-10 max-w-[638px] h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] mx-auto lg:mx-0 "> <img${addAttribute(image, "src")} class="object-cover w-full h-full rounded-lg shadow-lg" alt="Contact image" loading="lazy"> </div> </div> </div> </div> ` })}`;
}, "D:/Lim/Developer/Projects/Integra/seniorCare/src/components/home/FormSection.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const title = "Home";
  const page = "home";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "page": page }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ParallaxVideo", $$ParallaxVideo, { ...texts.home.heroVideo, "preload": "metadata" })} ${renderComponent($$result2, "AboutSection", $$AboutSection, { ...texts.home.about })} ${renderComponent($$result2, "BannerSlider", $$BannerSlider, { "slides": texts.home.bannerSlides })} ${renderComponent($$result2, "Experience", $$Experience, { ...texts.home.experience })} ${renderComponent($$result2, "ImageCarrousel", $$ImageCarrousel, { ...texts.home.imageCarousel })} ${renderComponent($$result2, "FormSection", $$FormSection, { ...texts.home.formSection })} ${renderComponent($$result2, "Location", $$Location, { ...texts.home.location })} ${renderComponent($$result2, "ImageCarrousel_2", $$ImageCarrousel2, { ...texts.home.imageCarousel_2 })} ${renderComponent($$result2, "Testimonial", $$Testimonial, { ...texts.home.testimonials })} ${renderComponent($$result2, "GalleryMosaic", $$GalleryMosaic, { ...texts.home.galleryMosaic })} ` })} `;
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
