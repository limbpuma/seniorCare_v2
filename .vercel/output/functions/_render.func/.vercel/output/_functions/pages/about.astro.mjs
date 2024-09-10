/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, d as createAstro, b as renderComponent } from '../chunks/astro/server_CC3nx09E.mjs';
import 'kleur/colors';
import { $ as $$BannerSection } from '../chunks/BannerSection_BVwlDd5E.mjs';
import { $ as $$AboutSection, a as $$BannerSlider } from '../chunks/BannerSlider_J4YnVgdR.mjs';
import { t as texts, b as $$Layout } from '../chunks/texts_CSolM1Jm.mjs';
import { $ as $$DiscoverIcons } from '../chunks/DiscoverIcons_GP7fZrnr.mjs';
import { $ as $$Testimonial } from '../chunks/Testimonial_CYLunBlo.mjs';
import 'clsx';
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
  return renderTemplate`${maybeRenderHead()}<section class="bg-gray-100 py-16"> <div class="container mx-auto px-4 max-w-screen-xl"> <div class="flex flex-col lg:flex-row items-center lg:items-start"> <div class="w-full lg:w-1/2 lg:pr-8 mb-8 lg:mb-0"> <h3 class="text-deep-blue text-ag-sub-heading font-ag-sub-heading mb-2">${subtitle}</h3> <h2 class="text-ag-h3 font-ag-h3 mb-4">${title}</h2> <p class="text-gray-600 text-ag-body-text font-ag-body-text mb-6">${description}</p> <ul class="space-y-2 mb-8"> ${listItems.map((item) => renderTemplate`<li class="flex items-center font-list-text text-list-text"> <svg class="w-5 h-5 text-blue-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path> </svg> <span>${item}</span> </li>`)} </ul> <div class="flex flex-wrap items-center"> <a${addAttribute(buttonLink, "href")} class="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold mr-4 hover:bg-blue-700 transition duration-300 mb-2 sm:mb-0"> ${buttonText} </a> <a href="#" class="text-blue-600 font-semibold flex items-center hover:underline">
How To Apply
<svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </a> </div> </div> <div class="w-full lg:w-1/2 relative"> <div class="relative"> <img${addAttribute(mainImage, "src")} alt="Main Image" class="w-full rounded-lg shadow-lg"> <img${addAttribute(overlayImage, "src")} alt="Overlay Image" class="absolute bottom-0 right-0 w-2/3 rounded-lg shadow-lg border-4 border-white transform translate-y-1/4 translate-x-1/6"> </div> </div> </div> </div> </section>`;
}, "C:/Users/limbp/Documents/Developer/Integra/seniorCare/src/components/about/ExpertSection.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  const title = "About Us";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "BannerSection", $$BannerSection, { ...texts.about.banner })} ${renderComponent($$result2, "AboutSection", $$AboutSection, { ...texts.about.aboutSection })} ${renderComponent($$result2, "BannerSlider", $$BannerSlider, { "slides": texts.about.bannerSlider.slides })} ${renderComponent($$result2, "ExpertSection", $$ExpertSection, { ...texts.about.expertSection })} ${renderComponent($$result2, "DiscoverIcons", $$DiscoverIcons, {})} ${renderComponent($$result2, "Testimonial", $$Testimonial, { "testimonials": texts.home.testimonials })} ` })}`;
}, "C:/Users/limbp/Documents/Developer/Integra/seniorCare/src/pages/about.astro", void 0);

const $$file = "C:/Users/limbp/Documents/Developer/Integra/seniorCare/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
