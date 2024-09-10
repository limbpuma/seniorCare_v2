/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent, d as createAstro, a as addAttribute } from '../chunks/astro/server_CC3nx09E.mjs';
import 'kleur/colors';
import { $ as $$BannerSection } from '../chunks/BannerSection_BVwlDd5E.mjs';
import { t as texts, b as $$Layout } from '../chunks/texts_CSolM1Jm.mjs';
import { $ as $$DiscoverIcons } from '../chunks/DiscoverIcons_GP7fZrnr.mjs';
import { R as ReactSwiperSlider, $ as $$Testimonial } from '../chunks/Testimonial_CYLunBlo.mjs';
import { $ as $$TitleCommon, a as $$GalleryMosaic } from '../chunks/TitleCommon_CZynIlac.mjs';
import 'clsx';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro();
const $$ImageCarrousel3 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ImageCarrousel3;
  const { subtitle, title, offerings } = Astro2.props;
  const imageClasses = "w-full h-[224px] object-cover";
  const textClasses = "text-white text-xl font-bold";
  const wrapperClasses = "absolute bottom-0 left-0 bg-blue-900 p-4";
  return renderTemplate`${maybeRenderHead()}<section class="bg-deep-blue py-16"> <div class="container mx-auto px-4 max-w-screen-xl"> <div class="text-center mb-12"> <p class="text-ag-sub-heading font-ag-sub-heading text-white mb-2">${subtitle}</p> <h2 class="text-ag-h3 font-ag-h3 font-bold text-white">${title}</h2> </div> <div class="w-full relative"> ${renderComponent($$result, "ReactSwiperSlider", ReactSwiperSlider, { "slides": offerings, "imgClass": imageClasses, "textClass": textClasses, "wrapperClass": wrapperClasses, "isImageSlider": true, "divType": "flex-col", "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/limbp/Documents/Developer/Integra/seniorCare/src/components/common/Slider.jsx", "client:component-export": "default" })} </div> </div> </section>`;
}, "C:/Users/limbp/Documents/Developer/Integra/seniorCare/src/components/common/ImageCarrousel_3.astro", void 0);

const $$Astro$1 = createAstro();
const $$VideoServices = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$VideoServices;
  const { subtitle, title, services } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="relative py-16 overflow-hidden"> <div class="absolute inset-0 z-0"> <div class="h-1/2 bg-white"></div> <div class="h-1/2 bg-soft-orange"></div> </div> <div class="container mx-auto px-4 relative z-10"> <div class="text-center mb-12"> <p class="text-ag-sub-heading font-ag-sub-heading mb-2">${subtitle}</p> <h2 class="text-ag-h3 font-ag-h3 text-deep-blue">${title}</h2> </div> <div class="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-7 gap-8"> ${services.map((service, index) => renderTemplate`<div${addAttribute(`flex flex-col items-center ${index === 1 ? "md:col-span-3 lg:col-span-3" : "md:col-span-2"}`, "class")}> <div class="w-full h-64 mb-4 overflow-hidden rounded-lg shadow-lg"> <img${addAttribute(service.image, "src")}${addAttribute(service.title, "alt")} class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"> </div> <h3 class="text-xl font-semibold text-gray-800">${service.title}</h3> </div>`)} </div> </div> </section>`;
}, "C:/Users/limbp/Documents/Developer/Integra/seniorCare/src/components/services/VideoServices.astro", void 0);

const $$Astro = createAstro();
const $$WeCare = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$WeCare;
  const { srcs } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="relative py-10 px-4 md:px-0 md:py-0 md:max-h-[550px] mb-10" data-astro-cid-rox7micv> <div class="container mx-auto relative md:top-28" data-astro-cid-rox7micv> ${renderComponent($$result, "TitleCommon", $$TitleCommon, { "title": "Wide Range Of Services", "subtitle": "We Care", "class": "text-primary-dark text-center", "data-astro-cid-rox7micv": true }, { "default": ($$result2) => renderTemplate` <div class="mt-12 grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-6 md:gap-4" data-astro-cid-rox7micv> ${srcs.map((item, i) => {
    const { label, src, href } = item;
    return renderTemplate`<div class="border md:border-none border-primary/40 " data-astro-cid-rox7micv> <a${addAttribute(`pos-${i + 1} before-content block md:mt-0`, "class")}${addAttribute(href, "href")} data-astro-cid-rox7micv> <img${addAttribute(src, "src")} alt="" class="object-cover w-full h-full max-h-[350px] " data-astro-cid-rox7micv> </a> <span class="md:text-left text-center text-ag-testimonial-text font-bold font-ag-h5 block my-4" data-astro-cid-rox7micv>${label}</span> </div>`;
  })} </div> ` })}</div> </section> `;
}, "C:/Users/limbp/Documents/Developer/Integra/seniorCare/src/components/services/WeCare.astro", void 0);

const $$Services = createComponent(($$result, $$props, $$slots) => {
  const title = "Services";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "BannerSection", $$BannerSection, { ...texts.services.banner })} ${renderComponent($$result2, "WeCare", $$WeCare, { "srcs": [
    { label: "Meal Services", src: "/assets/img/Bild1.jpg" },
    { label: "Personal Care", src: "/assets/img/Bild1.jpg", href: "/" },
    { label: "Assited Living", src: "/assets/img/Bild1.jpg" }
  ] })} ${renderComponent($$result2, "DiscoverIcons", $$DiscoverIcons, {})} ${renderComponent($$result2, "VideoServices", $$VideoServices, { ...texts.services.videoservices })} ${renderComponent($$result2, "ImageCarrousel_3", $$ImageCarrousel3, { ...texts.services.imageCarousel_3 })} ${renderComponent($$result2, "Testimonial", $$Testimonial, { "testimonials": texts.home.testimonials })} ${renderComponent($$result2, "GalleryMosaic", $$GalleryMosaic, { ...texts.home.galleryMosaic })} ` })}`;
}, "C:/Users/limbp/Documents/Developer/Integra/seniorCare/src/pages/services.astro", void 0);

const $$file = "C:/Users/limbp/Documents/Developer/Integra/seniorCare/src/pages/services.astro";
const $$url = "/services";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Services,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
