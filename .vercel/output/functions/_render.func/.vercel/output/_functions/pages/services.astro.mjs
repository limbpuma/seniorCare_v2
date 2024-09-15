/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent, d as createAstro, a as addAttribute } from '../chunks/astro/server_C5pmyh21.mjs';
import 'kleur/colors';
import { $ as $$BannerSection } from '../chunks/BannerSection_Df0-b2RW.mjs';
import { t as texts, b as $$Layout } from '../chunks/Layout_BYpjHEww.mjs';
import { $ as $$DiscoverIcons } from '../chunks/DiscoverIcons_IaiceFpn.mjs';
import { R as ReactSwiperSlider, $ as $$Testimonial } from '../chunks/Testimonial_BZeOJSB_.mjs';
import { $ as $$TitleCommon, a as $$GalleryMosaic } from '../chunks/TitleCommon_Cs01lWCS.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$ImageCarrousel3 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ImageCarrousel3;
  const { subtitle, title, offerings } = Astro2.props;
  const imageClasses = "w-full h-[224px] object-cover";
  const textClasses = "text-white text-xl font-bold";
  const wrapperClasses = "absolute bottom-0 left-0 bg-blue-900 p-4";
  return renderTemplate`${maybeRenderHead()}<section class="bg-deep-blue py-16"> <div class="container mx-auto px-4 max-w-screen-xl"> <div class="text-center mb-12"> <p class="text-ag-sub-heading font-ag-sub-heading text-white mb-2">${subtitle}</p> <h2 class="text-ag-h3 font-ag-h3 font-bold text-white">${title}</h2> </div> <div class="w-full relative"> ${renderComponent($$result, "ReactSwiperSlider", ReactSwiperSlider, { "slides": offerings, "imgClass": imageClasses, "textClass": textClasses, "wrapperClass": wrapperClasses, "isImageSlider": true, "divType": "flex-col", "client:load": true, "client:component-hydration": "load", "client:component-path": "E:/Lim/Developer/Projects/seniorCare/src/components/common/Slider.jsx", "client:component-export": "default" })} </div> </div> </section>`;
}, "E:/Lim/Developer/Projects/seniorCare/src/components/common/ImageCarrousel_3.astro", void 0);

const $$Astro = createAstro();
const $$WeCare = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$WeCare;
  const { title, subtitle, services } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="relative py-10 px-4 md:px-0 md:py-0 md:max-h-[550px] mb-10" data-astro-cid-rox7micv> <div class="container mx-auto relative md:top-28" data-astro-cid-rox7micv> ${renderComponent($$result, "TitleCommon", $$TitleCommon, { "title": title, "subtitle": subtitle, "class": "text-primary-dark text-center", "data-astro-cid-rox7micv": true })} <div class="mt-12 grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-6 md:gap-4" data-astro-cid-rox7micv> ${services.map((service, i) => renderTemplate`<div class="border md:border-none border-primary/40" data-astro-cid-rox7micv> <a${addAttribute(`pos-${i + 1} before-content block md:mt-0`, "class")}${addAttribute(service.href, "href")} data-astro-cid-rox7micv> <img${addAttribute(service.src, "src")}${addAttribute(service.label, "alt")} class="object-cover w-full h-full max-h-[350px]" data-astro-cid-rox7micv> </a> <span class="md:text-left text-center text-ag-testimonial-text font-bold font-ag-h5 block my-4" data-astro-cid-rox7micv>${service.label}</span> </div>`)} </div> </div> </section> `;
}, "E:/Lim/Developer/Projects/seniorCare/src/components/services/WeCare.astro", void 0);

const $$Services = createComponent(($$result, $$props, $$slots) => {
  const title = "Services";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "BannerSection", $$BannerSection, { ...texts.services.banner })} ${renderComponent($$result2, "WeCare", $$WeCare, { ...texts.services.weCare })} ${renderComponent($$result2, "DiscoverIcons", $$DiscoverIcons, { ...texts.about.discoverIcons })} ${renderComponent($$result2, "ImageCarrousel_3", $$ImageCarrousel3, { ...texts.services.imageCarousel_3 })} ${renderComponent($$result2, "Testimonial", $$Testimonial, { "testimonials": texts.home.testimonials })} ${renderComponent($$result2, "GalleryMosaic", $$GalleryMosaic, { ...texts.home.galleryMosaic })} ` })}`;
}, "E:/Lim/Developer/Projects/seniorCare/src/pages/services.astro", void 0);

const $$file = "E:/Lim/Developer/Projects/seniorCare/src/pages/services.astro";
const $$url = "/services";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Services,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
