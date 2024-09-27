/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent, d as createAstro, a as addAttribute, e as renderSlot } from '../chunks/astro/server_CSlR2sdS.mjs';
import 'kleur/colors';
import { $ as $$BannerSection } from '../chunks/BannerSection_BpsDFL6R.mjs';
import { t as texts, b as $$Layout } from '../chunks/Layout_Cep_kP_F.mjs';
import { $ as $$DiscoverIcons } from '../chunks/DiscoverIcons_CIUdUjdS.mjs';
import { R as ReactSwiperSlider, $ as $$Testimonial } from '../chunks/Testimonial_Dx7HlYFn.mjs';
import { $ as $$GalleryMosaic } from '../chunks/GalleryMosaic_CietP-PX.mjs';
import 'clsx';
import { a as $$Section } from '../chunks/TextBlock_By9HGpQF.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro();
const $$ImageCarrousel3 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ImageCarrousel3;
  const { subtitle, title, offerings } = Astro2.props;
  const imageClasses = "w-full h-[224px] object-cover";
  const textClasses = "text-white text-xl font-bold";
  const wrapperClasses = "absolute bottom-0 left-0 bg-blue-900 p-4";
  return renderTemplate`${maybeRenderHead()}<section class="bg-deep-blue py-16"> <div class="container mx-auto px-4 max-w-screen-xl"> <div class="text-center mb-12"> <p class="text-ag-sub-heading font-ag-sub-heading text-white mb-2"> ${subtitle} </p> <h2 class="text-ag-h3 font-ag-h3 font-bold text-white">${title}</h2> </div> <div class="w-full relative"> ${renderComponent($$result, "ReactSwiperSlider", ReactSwiperSlider, { "slides": offerings, "imgClass": imageClasses, "textClass": textClasses, "wrapperClass": wrapperClasses, "isImageSlider": true, "divType": "flex-col", "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Lim/Developer/Projects/Integra/seniorCare/src/components/common/Slider.jsx", "client:component-export": "default" })} </div> </div> </section>`;
}, "D:/Lim/Developer/Projects/Integra/seniorCare/src/components/common/ImageCarrousel_3.astro", void 0);

const $$Astro$1 = createAstro();
const $$TitleCommon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TitleCommon;
  const { subtitle, title, desc, class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`flex flex-col justify-center gap-2 ${className}`, "class")}> ${subtitle && renderTemplate`<p class="font-ag-sub-heading text-ag-sub-heading">${subtitle}</p>`} <h2 class="font-ag-h3 text-ag-h4 md:text-ag-h3">${title}</h2> ${desc && renderTemplate`<p${addAttribute(`font-ag-body text-ag-body`, "class")}>${desc}</p>`} ${renderSlot($$result, $$slots["default"])} </div>`;
}, "D:/Lim/Developer/Projects/Integra/seniorCare/src/components/common/TitleCommon.astro", void 0);

const $$Astro = createAstro();
const $$WeCare = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$WeCare;
  const { title, subtitle, services } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "background": "white", "padding": "large", "width": "full", "height": "auto", "id": "wecare-section" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto relative px-4 sm:px-6 lg:px-8"> ${renderComponent($$result2, "TitleCommon", $$TitleCommon, { "title": title, "subtitle": subtitle, "class": "text-primary-dark text-center mb-12" })} <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[1fr_2fr_1fr] gap-6 md:gap-4"> ${services.map((service, i) => renderTemplate`<div class="border border-primary/40 md:border-none overflow-hidden rounded-lg shadow-md transition-shadow duration-300 hover:shadow-lg"> <a class="block relative overflow-hidden group"${addAttribute(service.href, "href")}> <img${addAttribute(service.src, "src")}${addAttribute(service.label, "alt")} class="object-cover w-full h-full max-h-[350px] transition-transform duration-300 group-hover:scale-105"> <div class="absolute inset-0 bg-gradient-to-t from-deep-blue to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4"> <span class="text-white font-semibold text-lg sm:text-xl md:text-2xl">
Mehr erfahren
</span> </div> </a> <span class="block text-center md:text-left text-ag-testimonial-text font-bold font-ag-h5 my-4 px-4"> ${service.label} </span> </div>`)} </div> </div> ` })}`;
}, "D:/Lim/Developer/Projects/Integra/seniorCare/src/components/services/WeCare.astro", void 0);

const $$Services = createComponent(($$result, $$props, $$slots) => {
  const title = "Services";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "BannerSection", $$BannerSection, { ...texts.services.banner })} ${renderComponent($$result2, "WeCare", $$WeCare, { ...texts.services.weCare })} ${renderComponent($$result2, "DiscoverIcons", $$DiscoverIcons, { ...texts.about.discoverIcons })} ${renderComponent($$result2, "ImageCarrousel_3", $$ImageCarrousel3, { ...texts.services.imageCarousel_3 })} ${renderComponent($$result2, "Testimonial", $$Testimonial, { ...texts.home.testimonials })} ${renderComponent($$result2, "GalleryMosaic", $$GalleryMosaic, { ...texts.home.galleryMosaic })} ` })}`;
}, "D:/Lim/Developer/Projects/Integra/seniorCare/src/pages/services.astro", void 0);

const $$file = "D:/Lim/Developer/Projects/Integra/seniorCare/src/pages/services.astro";
const $$url = "/services";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Services,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
