/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, b as createAstro, m as maybeRenderHead } from '../chunks/astro/server_B9cSnyzq.mjs';
import 'kleur/colors';
import { $ as $$BannerSection } from '../chunks/BannerSection_DPr9JwHY.mjs';
import { t as texts, b as $$Layout } from '../chunks/Layout_CMFYuxJT.mjs';
import { $ as $$DiscoverIcons } from '../chunks/DiscoverIcons_CdnLrPpP.mjs';
import { R as ReactSwiperSlider, $ as $$ParallaxVideo, a as $$Testimonial } from '../chunks/ParallaxVideo_CnTGqRjE.mjs';
import { a as $$Section } from '../chunks/TextBlock_pUV8bRiu.mjs';
import { $ as $$GalleryMosaic } from '../chunks/GalleryMosaic_Cq6tEA3C.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$ImageCarrousel3 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ImageCarrousel3;
  const { subtitle, title, offerings } = Astro2.props;
  const imageClasses = "w-full h-[224px] object-cover";
  const textClasses = "text-white text-xl font-bold";
  const wrapperClasses = "absolute bottom-0 left-0 bg-blue-900 p-4";
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "background": "primary", "padding": "large", "width": "full", "height": "auto", "id": "experience-section", "animation": "zoom-in" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto max-w-screen-xl"> <div class="text-center mb-12"> <p class="text-ag-sub-heading font-ag-sub-heading text-white mb-2"> ${subtitle} </p> <h2 class="text-ag-h3 font-ag-h3 font-bold text-white">${title}</h2> </div> <div class="w-full relative"> ${renderComponent($$result2, "ReactSwiperSlider", ReactSwiperSlider, { "slides": offerings, "imgClass": imageClasses, "textClass": textClasses, "wrapperClass": wrapperClasses, "isImageSlider": true, "divType": "flex-col", "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Lim/Developer/Projects/Integra/seniorCare/src/components/common/Slider.jsx", "client:component-export": "default" })} </div> </div> ` })}`;
}, "D:/Lim/Developer/Projects/Integra/seniorCare/src/components/common/ImageCarrousel_3.astro", void 0);

const $$Services = createComponent(($$result, $$props, $$slots) => {
  const title = "Services";
  const page = "services";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "page": page }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "BannerSection", $$BannerSection, { ...texts.services.banner })} ${renderComponent($$result2, "DiscoverIcons", $$DiscoverIcons, { ...texts.about.discoverIcons })} ${renderComponent($$result2, "ParallaxVideo", $$ParallaxVideo, { ...texts.services.servicesVideo })} ${renderComponent($$result2, "ImageCarrousel_3", $$ImageCarrousel3, { ...texts.services.imageCarousel_3 })} ${renderComponent($$result2, "Testimonial", $$Testimonial, { ...texts.home.testimonials })} ${renderComponent($$result2, "GalleryMosaic", $$GalleryMosaic, { ...texts.home.galleryMosaic })} ` })}`;
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
