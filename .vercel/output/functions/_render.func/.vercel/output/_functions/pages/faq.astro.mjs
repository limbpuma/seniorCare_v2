/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as renderComponent, d as createAstro } from '../chunks/astro/server_CC3nx09E.mjs';
import 'kleur/colors';
import { t as texts, b as $$Layout } from '../chunks/texts_CSolM1Jm.mjs';
import { $ as $$BannerSection } from '../chunks/BannerSection_BVwlDd5E.mjs';
import { $ as $$ContactForm } from '../chunks/ContactForm_D1PJeWD2.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$FaqContent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FaqContent;
  const { title, subtitle, faqItems, contactForm } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="py-12 bg-gray-100"> <div class="container mx-auto px-4"> <div class="text-center mb-12"> <h2 class="text-3xl font-bold text-gray-900 mb-2">${title}</h2> <p class="text-lg text-gray-600">${subtitle}</p> </div> <div class="grid grid-cols-1 lg:grid-cols-2 gap-8"> <div class="space-y-6"> ${faqItems.map((item, index) => renderTemplate`<div class="bg-white rounded-lg shadow-md p-6"> <button class="flex justify-between items-center w-full text-left"${addAttribute(`document.getElementById('faq-answer-${index}').classList.toggle('hidden')`, "onclick")}> <h3 class="text-xl font-semibold text-gray-900">${item.question}</h3> <i class="fas fa-chevron-down text-blue-500"></i> </button> <p${addAttribute(`faq-answer-${index}`, "id")} class="mt-4 text-gray-600 hidden">${item.answer}</p> </div>`)} </div> <div> ${renderComponent($$result, "ContactForm", $$ContactForm, { "image": "/assets/img/Bild1.jpg", "size": "small", ...contactForm })} </div> </div> </div> </section>`;
}, "C:/Users/limbp/Documents/Developer/Integra/seniorCare/src/components/faq/FaqContent.astro", void 0);

const $$Faq = createComponent(($$result, $$props, $$slots) => {
  const title = "FAQ";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "BannerSection", $$BannerSection, { ...texts.faq.banner })} ${renderComponent($$result2, "FaqContent", $$FaqContent, { ...texts.faq.faqContent })} ` })}`;
}, "C:/Users/limbp/Documents/Developer/Integra/seniorCare/src/pages/faq.astro", void 0);

const $$file = "C:/Users/limbp/Documents/Developer/Integra/seniorCare/src/pages/faq.astro";
const $$url = "/faq";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Faq,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
