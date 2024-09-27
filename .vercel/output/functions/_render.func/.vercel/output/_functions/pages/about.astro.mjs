/* empty css                                 */
import { c as createComponent, r as renderTemplate, b as renderComponent, d as createAstro, m as maybeRenderHead, a as addAttribute } from '../chunks/astro/server_CSlR2sdS.mjs';
import 'kleur/colors';
import { $ as $$BannerSection } from '../chunks/BannerSection_BpsDFL6R.mjs';
import { $ as $$AboutSection, a as $$BannerSlider } from '../chunks/BannerSlider_iax18-6E.mjs';
import { $ as $$Icon, a as $$Button, t as texts, b as $$Layout } from '../chunks/Layout_Cep_kP_F.mjs';
import { $ as $$DiscoverIcons } from '../chunks/DiscoverIcons_CIUdUjdS.mjs';
import { $ as $$Testimonial } from '../chunks/Testimonial_Dx7HlYFn.mjs';
import { $ as $$TextBlock, a as $$Section } from '../chunks/TextBlock_By9HGpQF.mjs';
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
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "background": "white", "padding": "large", "width": "full", "height": "auto", "id": "experience-section" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto px-4 max-w-screen-xl"> <div class="flex flex-col lg:flex-row items-center lg:items-start gap-8"> <div class="w-full lg:w-1/2"> ${renderComponent($$result2, "TextBlock", $$TextBlock, { "subtitle": subtitle, "title": title, "description": description, "alignment": "left", "textColor": "text-deep-blue" })} <ul class="space-y-4 mb-8 lg:ml-8"> ${listItems.map((item) => renderTemplate`<li class="flex items-center text-ag-body-text font-ag-body-text mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto"> ${renderComponent($$result2, "Icon", $$Icon, { "icons": [{ name: "check" }], "size": "medium", "variant": "accent", "customSize": "text-xl" })} <span class="ml-2">${item}</span> </li>`)} </ul> <div class="flex flex-wrap items-center lg:ml-8"> ${renderComponent($$result2, "Button", $$Button, { "href": buttonLink, "variant": "primary", "size": "medium" }, { "default": ($$result3) => renderTemplate`${buttonText}` })} </div> </div> <div class="w-full lg:w-1/2 relative"> <div class="relative aspect-w-16 aspect-h-9"> <img${addAttribute(mainImage, "src")} alt="Main Image" class="w-full h-full object-cover rounded-lg shadow-lg"> <img${addAttribute(overlayImage, "src")} alt="Overlay Image" class="absolute bottom-0 right-0 w-2/3 h-2/3 object-cover rounded-lg shadow-lg border-4 border-white transform translate-y-1/4 translate-x-1/6"> </div> </div> </div> </div> ` })}`;
}, "D:/Lim/Developer/Projects/Integra/seniorCare/src/components/about/ExpertSection.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  const title = "About Us";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "BannerSection", $$BannerSection, { ...texts.about.banner })} ${renderComponent($$result2, "AboutSection", $$AboutSection, { ...texts.home.about })} ${renderComponent($$result2, "BannerSlider", $$BannerSlider, { "slides": texts.about.bannerSlider.slides })} ${renderComponent($$result2, "ExpertSection", $$ExpertSection, { ...texts.about.expertSection })} ${renderComponent($$result2, "DiscoverIcons", $$DiscoverIcons, { ...texts.about.discoverIcons })} ${renderComponent($$result2, "Testimonial", $$Testimonial, { ...texts.home.testimonials })} ` })}`;
}, "D:/Lim/Developer/Projects/Integra/seniorCare/src/pages/about.astro", void 0);

const $$file = "D:/Lim/Developer/Projects/Integra/seniorCare/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
