/* empty css                                 */
import { c as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_C5pmyh21.mjs';
import 'kleur/colors';
import { a as $$Button, b as $$Layout, t as texts } from '../chunks/Layout_BYpjHEww.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  const title = "Error 404";
  const { subtitle, title: pageTitle, description, buttonText } = texts.error404;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="bg-center bg-no-repeat bg-cover bg-[url('/assets/img/senior_couple__in_the_park.webp')] bg-blend-multiply"> <div class="px-4 mx-auto max-w-screen-xl text-center lg:text-left py-16 sm:py-24 lg:py-48 flex flex-col lg:flex-row lg:items-center"> <div class="lg:w-1/2 w-full px-4"> <h1 class="ext-deep-blue mb-4 text-ag-h2 font-ag-h2 tracking-tight leading-tight sm:text-ag-h2 sm:leading-tight"> ${pageTitle} </h1> <h3 class="text-deep-blue text-ag-sub-heading font-ag-sub-heading mb-2 sm:mb-4">${subtitle}</h3> <p class="text-deep-blue mb-8 text-ag-body-text font-ag-body-text sm:text-lg lg:text-xl"> ${description} </p> <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center lg:justify-start sm:space-y-0"> <a href="/" class="inline-block mx-auto sm:mx-0"> ${renderComponent($$result2, "Button", $$Button, { "variant": "primary", "size": "medium" }, { "default": ($$result3) => renderTemplate`${buttonText}` })} </a> </div> </div> <div class="hidden lg:block lg:w-1/2"></div> </div> </section> ` })}`;
}, "E:/Lim/Developer/Projects/seniorCare/src/pages/404.astro", void 0);

const $$file = "E:/Lim/Developer/Projects/seniorCare/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
