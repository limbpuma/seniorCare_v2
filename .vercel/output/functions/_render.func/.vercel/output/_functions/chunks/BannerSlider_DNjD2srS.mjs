import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent, d as createAstro } from './astro/server_C5pmyh21.mjs';
import 'kleur/colors';
import { a as $$Button } from './Layout_BYpjHEww.mjs';
import { R as ReactSwiperSlider } from './Testimonial_BZeOJSB_.mjs';

const $$Astro$1 = createAstro();
const $$AboutSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$AboutSection;
  const { services, stats, buttonText, description, phoneNumber } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto px-4 bg-deep-blue"> <div class="container mx-auto px-8 py-6 lg:py-12 text-white"> <div class="flex flex-col lg:flex-row justify-between items-center mb-8 sm:mb-12 space-y-8 lg:space-y-0"> <div class="text-center lg:text-left lg:w-3/4 order-2 lg:order-1"> ${services.map((service) => renderTemplate`<h2 class="text-ag-h3 sm:text-ag-h3 lg:text-ag-h3 font-ag-h3 sm:text-ag-h3 mb-4 lg:mb-6"> ${service} </h2>`)} </div> <div class="flex justify-center mx-auto items-center lg:w-1/4 order-1 lg:order-2 mb-8 lg:mb-0"> <img src="/assets/img/Bild1.jpg" alt="Smiley Icon" class="bg-gray-blue h-24 w-24 sm:h-32 sm:w-32 md:h-48 md:w-48 lg:h-48 lg:w-48 rounded-full inline-block sm:mb-4"> </div> </div> <div class="border-t border-soft-orange mb-8 sm:mb-12"></div> <div class="flex flex-col lg:flex-row justify-between items-center text-center lg:text-left space-y-8 lg:space-y-0 "> <div class="grid grid-cols-2 gap-4 sm:gap-8 md:gap-0 mb-8 lg:mb-0 w-full lg:w-1/2"> ${stats.map(({ number, label }) => renderTemplate`<div> <p class="text-ag-h3 sm:text-ag-h2 lg:text-ag-h1 font-ag-h1 mb-2">${number}</p> <p class="mx-4 text-ag-list-text text-soft-orange font-ag-list-text">${label}</p> </div>`)} </div> <div class="flex flex-col lg:items-end w-full lg:w-1/2 "> <div class="mb-4 lg:mb-6 text-center lg:text-left"> <p class="text-ag-body-text font-ag-body-text"> ${description} </p> </div> <div class="flex flex-col sm:flex-row items-center justify-center sm:justify-start lg:justify-end space-y-4 sm:space-y-0 sm:space-x-12 mx-auto"> <div class="flex flex-col sm:flex-row items-center justify-center sm:justify-start lg:justify-end space-y-4 sm:space-y-0 sm:space-x-12 mx-auto"> ${renderComponent($$result, "Button", $$Button, { "variant": "accent", "size": "medium" }, { "default": ($$result2) => renderTemplate`${buttonText}` })} <div class="flex items-center text-ag-h5 font-ag-h5 mt-4 sm:mt-0"> <i class="fa fa-phone mr-2 text-soft-orange"></i> ${phoneNumber} </div> </div> </div> </div> </div> </div> </section>`;
}, "E:/Lim/Developer/Projects/seniorCare/src/components/common/AboutSection.astro", void 0);

const $$Astro = createAstro();
const $$BannerSlider = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BannerSlider;
  const iconClasses = "text-ag-h2 lg:text-ag-h2 text-deep-blue";
  const textClasses = "text-ag-h2 lg:text-ag-h2 font-bold text-deep-blue";
  const wrapperClasses = "flex items-center gap-4 sm:gap-12";
  const { slides } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bg-soft-orange py-12 w-full"> ${renderComponent($$result, "ReactSwiperSlider", ReactSwiperSlider, { "slides": slides, "iconClass": iconClasses, "textClass": textClasses, "wrapperClass": wrapperClasses, "divType": "flex-center", "client:load": true, "client:component-hydration": "load", "client:component-path": "E:/Lim/Developer/Projects/seniorCare/src/components/common/Slider.jsx", "client:component-export": "default" })} </div>`;
}, "E:/Lim/Developer/Projects/seniorCare/src/components/common/BannerSlider.astro", void 0);

export { $$AboutSection as $, $$BannerSlider as a };
