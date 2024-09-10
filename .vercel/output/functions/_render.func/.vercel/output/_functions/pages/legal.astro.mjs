/* empty css                                 */
import { c as createComponent, r as renderTemplate, b as renderComponent } from '../chunks/astro/server_CC3nx09E.mjs';
import 'kleur/colors';
import { t as texts, b as $$Layout } from '../chunks/texts_CSolM1Jm.mjs';
import { $ as $$BannerSection } from '../chunks/BannerSection_BVwlDd5E.mjs';
export { renderers } from '../renderers.mjs';

const $$Legal = createComponent(($$result, $$props, $$slots) => {
  const title = "Legal";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "BannerSection", $$BannerSection, { ...texts.legal.banner })} ` })}`;
}, "C:/Users/limbp/Documents/Developer/Integra/seniorCare/src/pages/legal.astro", void 0);

const $$file = "C:/Users/limbp/Documents/Developer/Integra/seniorCare/src/pages/legal.astro";
const $$url = "/legal";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Legal,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
