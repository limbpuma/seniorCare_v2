/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent, a as addAttribute, d as createAstro } from '../chunks/astro/server_C5pmyh21.mjs';
import 'kleur/colors';
import { $ as $$BannerSection } from '../chunks/BannerSection_Df0-b2RW.mjs';
import { $ as $$AboutSection, a as $$BannerSlider } from '../chunks/BannerSlider_DNjD2srS.mjs';
import { $ as $$Icon, a as $$Button, t as texts, b as $$Layout } from '../chunks/Layout_BYpjHEww.mjs';
import { $ as $$DiscoverIcons } from '../chunks/DiscoverIcons_IaiceFpn.mjs';
import { $ as $$Testimonial } from '../chunks/Testimonial_BZeOJSB_.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$ExpertSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ExpertSection;
  const {
    subtitle,
    title,
    description,
    listItems,
    buttonText,
    buttonLink,
    mainImage,
    overlayImage
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="bg-gray-100 py-16"> <div class="container mx-auto px-4 max-w-screen-xl"> <div class="flex flex-col lg:flex-row items-center lg:items-start gap-8"> <div class="w-full lg:w-1/2"> <h3 class="text-deep-blue text-ag-sub-heading font-ag-sub-heading mb-2">${subtitle}</h3> <h2 class="text-ag-h3 font-ag-h3 mb-4 text-deep-blue">${title}</h2> <p class="text-gray-600 text-ag-body-text font-ag-body-text mb-6">${description}</p> <ul class="space-y-4 mb-8"> ${listItems.map((item) => renderTemplate`<li class="flex items-center font-list-text text-list-text"> ${renderComponent($$result, "Icon", $$Icon, { "icons": [{ name: "check" }], "size": "small", "variant": "accent", "customSize": "text-xl" })} <span class="ml-2">${item}</span> </li>`)} </ul> <div class="flex flex-wrap items-center"> ${renderComponent($$result, "Button", $$Button, { "href": buttonLink, "variant": "primary", "size": "medium" }, { "default": ($$result2) => renderTemplate`${buttonText}` })} </div> </div> <div class="w-full lg:w-1/2 relative"> <div class="relative aspect-w-16 aspect-h-9"> <img${addAttribute(mainImage, "src")} alt="Main Image" class="w-full h-full object-cover rounded-lg shadow-lg"> <img${addAttribute(overlayImage, "src")} alt="Overlay Image" class="absolute bottom-0 right-0 w-2/3 h-2/3 object-cover rounded-lg shadow-lg border-4 border-white transform translate-y-1/4 translate-x-1/6"> </div> </div> </div> </div> </section>`;
}, "E:/Lim/Developer/Projects/seniorCare/src/components/about/ExpertSection.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  const title = "About Us";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "BannerSection", $$BannerSection, { ...texts.about.banner })} ${renderComponent($$result2, "AboutSection", $$AboutSection, { ...texts.home.about })} ${renderComponent($$result2, "BannerSlider", $$BannerSlider, { "slides": texts.about.bannerSlider.slides })} ${renderComponent($$result2, "ExpertSection", $$ExpertSection, { ...texts.about.expertSection })} ${renderComponent($$result2, "DiscoverIcons", $$DiscoverIcons, { ...texts.about.discoverIcons })} ${renderComponent($$result2, "Testimonial", $$Testimonial, { "testimonials": texts.home.testimonials })} ` })}`;
}, "E:/Lim/Developer/Projects/seniorCare/src/pages/about.astro", void 0);

const $$file = "E:/Lim/Developer/Projects/seniorCare/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
