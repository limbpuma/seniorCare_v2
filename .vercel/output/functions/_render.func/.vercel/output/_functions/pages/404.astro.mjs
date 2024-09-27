/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_B9cSnyzq.mjs';
import 'kleur/colors';
import { a as $$Button, b as $$Layout, t as texts } from '../chunks/Layout_D2qM0WZL.mjs';
import { a as $$Section, $ as $$TextBlock } from '../chunks/TextBlock_PJ7UOJOP.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  const title = "Error 404";
  const { subtitle, title: pageTitle, description, buttonText } = texts.error404;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Section", $$Section, { "padding": "large", "width": "full", "height": "auto", "id": "experience-section", "class": "bg-center bg-no-repeat bg-cover bg-[url('/assets/img/senior_couple__in_the_park.webp')] bg-blend-multiply" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="px-4 mx-auto max-w-screen-xl text-center lg:text-left py-16 sm:py-24 lg:py-48 flex flex-col lg:flex-row lg:items-center"> <div class="lg:w-1/2 w-full px-4"> ${renderComponent($$result3, "TextBlock", $$TextBlock, { "subtitle": subtitle, "title": title, "description": description, "alignment": "left", "textColor": "text-deep-blue" })} <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center lg:justify-start sm:space-y-0"> <a href="/" class="inline-block mx-auto sm:mx-0"> ${renderComponent($$result3, "Button", $$Button, { "variant": "primary", "size": "medium" }, { "default": ($$result4) => renderTemplate`${buttonText}` })} </a> </div> </div> <div class="hidden lg:block lg:w-1/2"></div> </div> ` })} ` })}`;
}, "D:/Lim/Developer/Projects/Integra/seniorCare/src/pages/404.astro", void 0);

const $$file = "D:/Lim/Developer/Projects/Integra/seniorCare/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
