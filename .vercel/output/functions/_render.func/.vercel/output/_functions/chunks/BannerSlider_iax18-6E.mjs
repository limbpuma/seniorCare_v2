import { c as createComponent, r as renderTemplate, b as renderComponent, d as createAstro, m as maybeRenderHead } from './astro/server_CSlR2sdS.mjs';
import 'kleur/colors';
import { a as $$Button } from './Layout_Cep_kP_F.mjs';
import { a as $$Section } from './TextBlock_By9HGpQF.mjs';
import { R as ReactSwiperSlider } from './Testimonial_Dx7HlYFn.mjs';

const $$Astro$1 = createAstro();
const $$AboutSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$AboutSection;
  const { services, stats, buttonText, description, phoneNumber } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "background": "primary", "padding": "large", "width": "wide", "height": "auto", "id": "about-section" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container flex flex-col lg:flex-row justify-between items-center mb-8 sm:mb-12 space-y-8 lg:space-y-0 "> <div class="text-center lg:text-left lg:w-3/4 order-2 lg:order-1 text-white "> ${services.map((service) => renderTemplate`<h3 class="text-ag-h5 sm:text-ag-h4 md:text-ag-h3 lg:text-[40px] xl:text-[44px] font-ag-h3 mb-3 sm:mb-4 md:mb-6 leading-tight uppercase"> ${service} </h3>`)} </div> <div class="flex justify-center mx-auto items-center w-full sm:w-2/3 md:w-1/2 lg:w-1/4 order-1 lg:order-2 mb-8 lg:mb-0"> <div class="relative w-full pb-[100%] mb-8"> <img src="/assets/img/Bild1.jpg" alt="Smiley Icon" class="absolute inset-0 w-full h-full object-cover rounded-full bg-gray-blue"> </div> </div> </div> <div class="border-t border-soft-orange mb-8 sm:mb-12"></div> <div class="flex flex-col lg:flex-row justify-between items-center text-center lg:text-left space-y-8 lg:space-y-0 text-white "> <div class="grid grid-cols-2 gap-4 sm:gap-8 md:gap-0 mb-8 lg:mb-0 w-full lg:w-1/2"> ${stats.map(({ number, label }) => renderTemplate`<div> <p class="text-ag-h3 sm:text-ag-h2 lg:text-ag-h1 font-ag-h1 mb-2"> ${number} </p> <p class="mx-4 text-ag-list-text text-soft-orange font-ag-list-text"> ${label} </p> </div>`)} </div> <div class="flex flex-col lg:items-end w-full lg:w-1/2"> <div class="mb-4 lg:mb-6 text-center lg:text-left"> <p class="text-ag-body-text font-ag-body-text"> ${description} </p> </div> <div class="flex flex-col sm:flex-row items-center justify-center sm:justify-start lg:justify-end space-y-4 sm:space-y-0 sm:space-x-12 mx-auto"> <div class="flex flex-col sm:flex-row items-center justify-center sm:justify-start lg:justify-end space-y-4 sm:space-y-0 sm:space-x-12 mx-auto"> ${renderComponent($$result2, "Button", $$Button, { "variant": "accent", "size": "medium" }, { "default": ($$result3) => renderTemplate`${buttonText}` })} <div class="flex items-center text-ag-h5 font-ag-h5 mt-4 sm:mt-0"> <i class="fa fa-phone mr-2 text-soft-orange"></i> ${phoneNumber} </div> </div> </div> </div> </div> ` })}`;
}, "D:/Lim/Developer/Projects/Integra/seniorCare/src/components/common/AboutSection.astro", void 0);

const $$Astro = createAstro();
const $$BannerSlider = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BannerSlider;
  const iconClasses = "text-ag-h2 lg:text-ag-h2 text-deep-blue";
  const textClasses = "text-ag-h2 lg:text-ag-h2 font-bold text-deep-blue";
  const wrapperClasses = "flex items-center gap-4 sm:gap-12";
  const { slides } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bg-soft-orange py-12 w-full"> ${renderComponent($$result, "ReactSwiperSlider", ReactSwiperSlider, { "slides": slides, "iconClass": iconClasses, "textClass": textClasses, "wrapperClass": wrapperClasses, "divType": "flex-center", "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Lim/Developer/Projects/Integra/seniorCare/src/components/common/Slider.jsx", "client:component-export": "default" })} </div>`;
}, "D:/Lim/Developer/Projects/Integra/seniorCare/src/components/common/BannerSlider.astro", void 0);

export { $$AboutSection as $, $$BannerSlider as a };
