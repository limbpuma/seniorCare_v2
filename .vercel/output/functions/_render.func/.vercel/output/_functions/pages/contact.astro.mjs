/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent, d as createAstro, a as addAttribute } from '../chunks/astro/server_C5pmyh21.mjs';
import 'kleur/colors';
import { $ as $$Icon, t as texts, b as $$Layout } from '../chunks/Layout_BYpjHEww.mjs';
import { $ as $$BannerSection } from '../chunks/BannerSection_Df0-b2RW.mjs';
import { $ as $$ContactForm } from '../chunks/ContactForm_DHLfG7v9.mjs';
import 'clsx';
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
  return renderTemplate`${maybeRenderHead()}<section class="bg-white py-12 px-4 sm:px-6 lg:px-8"> <div class="max-w-7xl mx-auto"> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"> <div class="space-y-8"> <div> <h3 class="text-ag-sub-heading font-ag-sub-heading font-semibold ">${subtitle}</h3> <h2 class="text-ag-h3 font-ag-h3 font-bold mt-2 text-deep-blue">${title}</h2> <p class="mt-4 text-ag-body-text font-ag-body-text text-gray-600">${description}</p> </div> <div class="space-y-6"> ${contactOptions.map((option) => renderTemplate`<div class="flex items-center space-x-4"> <div class="bg-orange-100 rounded-full p-3 text-deep-blue"> ${renderComponent($$result, "Icon", $$Icon, { "icons": [{ name: iconNameMap[option.icon] || option.icon }], "size": "large", "variant": "default", "customSize": "text-xl" })} </div> <div> <h3 class="font-semibold text-gray-900">${option.title}</h3> <p class="text-gray-600">${option.description}</p> </div> </div>`)} </div> </div> <div> ${renderComponent($$result, "ContactForm", $$ContactForm, { "size": "medium", ...contactForm })} </div> </div> </div> </section>`;
}, "E:/Lim/Developer/Projects/seniorCare/src/components/contact/ContactText.astro", void 0);

const $$Astro = createAstro();
const $$MapSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MapSection;
  const { title, mapEmbedUrl } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="py-12 bg-gray-100"> <div class="container mx-auto px-4"> <h2 class="text-3xl font-bold text-center mb-8">${title}</h2> <div class="w-full h-0 pb-[56.25%] relative"> <iframe${addAttribute(mapEmbedUrl, "src")} class="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> </div> </div> </section>`;
}, "E:/Lim/Developer/Projects/seniorCare/src/components/contact/MapSection.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const title = "Contact Us";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "BannerSection", $$BannerSection, { ...texts.contact.banner })} ${renderComponent($$result2, "ContactText", $$ContactText, { ...texts.contact.contactText })} ${renderComponent($$result2, "MapSection", $$MapSection, { ...texts.contact.mapSection })} ` })}`;
}, "E:/Lim/Developer/Projects/seniorCare/src/pages/contact.astro", void 0);

const $$file = "E:/Lim/Developer/Projects/seniorCare/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
