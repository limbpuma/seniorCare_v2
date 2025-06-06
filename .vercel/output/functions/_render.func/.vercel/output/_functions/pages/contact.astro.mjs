/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, b as createAstro, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_B9cSnyzq.mjs';
import 'kleur/colors';
import { $ as $$Icon, t as texts, b as $$Layout } from '../chunks/Layout_CMFYuxJT.mjs';
import { $ as $$BannerSection } from '../chunks/BannerSection_DPr9JwHY.mjs';
import { $ as $$ContactForm } from '../chunks/ContactForm_CcLavPXB.mjs';
import { $ as $$TextBlock, a as $$Section } from '../chunks/TextBlock_pUV8bRiu.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$ContactText = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ContactText;
  const { subtitle, title, description, contactOptions, contactForm } = Astro2.props;
  const iconNameMap = {
    "fa-globe": "globe",
    "fa-map-marker-alt": "location",
    "fa-phone-alt": "mobilePhone",
    "fa-envelope": "envelope"
  };
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "background": "white", "padding": "large", "width": "full", "height": "auto", "id": "experience-section", "animation": "fade-in" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-7xl mx-auto"> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"> <div class="space-y-8"> <div> ${renderComponent($$result2, "TextBlock", $$TextBlock, { "subtitle": subtitle, "title": title, "description": description, "alignment": "left", "textColor": "text-deep-blue" })} </div> <div class="space-y-6"> ${contactOptions.map((option) => renderTemplate`<div class="flex items-center space-x-4 lg:ml-8"> <div class="bg-soft-orange p-4 rounded-full text-deep-blue"> ${renderComponent($$result2, "Icon", $$Icon, { "icons": [{ name: iconNameMap[option.icon] || option.icon }], "size": "large", "variant": "default", "customSize": "text-xl" })} </div> <div class="text-ag-body-text font-ag-body-text mb-2 sm:mb-2 md:mb-2 max-w-3xl mx-auto"> <h3 class="font-semibold">${option.title}</h3> <p class="text-gray-600">${option.description}</p> </div> </div>`)} </div> </div> <div> ${renderComponent($$result2, "ContactForm", $$ContactForm, { "size": "medium", ...contactForm })} </div> </div> </div> ` })}`;
}, "D:/Lim/Developer/Projects/Integra/seniorCare/src/components/contact/ContactText.astro", void 0);

const $$Astro = createAstro();
const $$MapSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MapSection;
  const { title, subtitle, description, mapEmbedUrl } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "animation": "zoom-in", "padding": "medium", "width": "full", "height": "auto" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto px-4"> ${renderComponent($$result2, "TextBlock", $$TextBlock, { "subtitle": subtitle, "title": title, "description": description, "alignment": "center", "textColor": "text-deep-blue" })} <div class="w-full h-0 pb-[56.25%] relative"> <iframe${addAttribute(mapEmbedUrl, "src")} class="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> </div> </div> ` })}`;
}, "D:/Lim/Developer/Projects/Integra/seniorCare/src/components/contact/MapSection.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const title = "Contact Us";
  const page = "contact";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "page": page }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "BannerSection", $$BannerSection, { ...texts.contact.banner })} ${renderComponent($$result2, "ContactText", $$ContactText, { ...texts.contact.contactText })} ${renderComponent($$result2, "MapSection", $$MapSection, { ...texts.contact.mapSection })} ` })}`;
}, "D:/Lim/Developer/Projects/Integra/seniorCare/src/pages/contact.astro", void 0);

const $$file = "D:/Lim/Developer/Projects/Integra/seniorCare/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
