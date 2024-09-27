/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, b as createAstro, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_B9cSnyzq.mjs';
import 'kleur/colors';
import { t as texts, b as $$Layout } from '../chunks/Layout_D2qM0WZL.mjs';
import { $ as $$BannerSection } from '../chunks/BannerSection_DPr9JwHY.mjs';
import { $ as $$ContactForm } from '../chunks/ContactForm_DmiNmcLV.mjs';
import { $ as $$TextBlock, a as $$Section } from '../chunks/TextBlock_PJ7UOJOP.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$FaqContent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FaqContent;
  const { title, subtitle, faqItems, contactForm } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "background": "white", "padding": "large", "width": "full", "height": "auto", "id": "faq-section", "animation": "fade-in" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto px-4"> <div class="text-center mb-12"> ${renderComponent($$result2, "TextBlock", $$TextBlock, { "subtitle": subtitle, "title": title, "alignment": "center", "textColor": "text-deep-blue" })} </div> <div class="grid grid-cols-1 lg:grid-cols-2 gap-8"> <div class="space-y-6"> ${faqItems.map((item, index) => renderTemplate`<div class="bg-white rounded-lg shadow-md p-6"> <button class="flex justify-between items-center w-full text-left"${addAttribute(`document.getElementById('faq-answer-${index}').classList.toggle('hidden')`, "onclick")}> <h3 class="text-xl font-semibold text-gray-900"> ${item.question} </h3> <i class="fas fa-chevron-down text-blue-500"></i> </button> <p${addAttribute(`faq-answer-${index}`, "id")} class="mt-4 text-gray-600 hidden"> ${item.answer} </p> </div>`)} </div> <div> ${renderComponent($$result2, "ContactForm", $$ContactForm, { "image": "/assets/img/Bild1.jpg", "size": "small", ...contactForm })} </div> </div> </div> ` })}`;
}, "D:/Lim/Developer/Projects/Integra/seniorCare/src/components/faq/FaqContent.astro", void 0);

const $$Faq = createComponent(($$result, $$props, $$slots) => {
  const title = "FAQ";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "BannerSection", $$BannerSection, { ...texts.faq.banner })} ${renderComponent($$result2, "FaqContent", $$FaqContent, { ...texts.faq.faqContent })} ` })}`;
}, "D:/Lim/Developer/Projects/Integra/seniorCare/src/pages/faq.astro", void 0);

const $$file = "D:/Lim/Developer/Projects/Integra/seniorCare/src/pages/faq.astro";
const $$url = "/faq";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Faq,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
