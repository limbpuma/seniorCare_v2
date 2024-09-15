import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent, a as addAttribute, d as createAstro, e as renderSlot } from './astro/server_C5pmyh21.mjs';
import 'kleur/colors';
import { $ as $$Icon, a as $$Button } from './Layout_BYpjHEww.mjs';
import 'clsx';

const $$Astro$1 = createAstro();
const $$GalleryMosaic = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$GalleryMosaic;
  const { srcs, subtitle, title, description, buttonText } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="py-12 lg:py-20"> <div class="container mx-auto px-4"> <div class="flex flex-col lg:flex-row items-center lg:items-stretch gap-8 lg:gap-12"> <div class="lg:w-1/3 flex flex-col justify-center items-center lg:items-start text-center lg:text-left"> <p class="text-ag-sub-heading mb-2 font-ag-sub-heading">${subtitle}</p> <h2 class="text-ag-h3 font-ag-h3 mb-6 text-deep-blue">${title}</h2> <p class="text-ag-sub-heading mb-2 font-ag-sub-heading">${description}</p> <div class=" mt-2 flex justify-center"> ${renderComponent($$result, "Button", $$Button, { "flex": true, "class": "mt-2 md:mt-8 mx-auto md:mx-0" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icon, { "icons": [{ name: "instagram" }], "size": "small" })} ${buttonText}` })} </div> </div> <div class="w-full lg:w-2/3 flex flex-col"> <div class="md:hidden grid grid-cols-2 grid-rows-3 gap-4 aspect-square mb-2"> ${srcs.map((src, index) => renderTemplate`<div${addAttribute(`relative ${index === 0 ? "col-span-2 row-span-2" : index === 4 ? "col-span-2" : ""}`, "class")}> <img${addAttribute(src, "src")} class="absolute inset-0 w-full h-full object-cover rounded-lg" alt=""> </div>`)} </div> <div class="hidden md:grid md:grid-cols-3 gap-4 h-[600px]"> <div class="grid grid-rows-[7fr,3fr] gap-4"> <div class="relative"> <img${addAttribute(srcs[0], "src")} class="absolute inset-0 w-full h-full object-cover rounded-lg" alt=""> </div> <div class="relative"> <img${addAttribute(srcs[1], "src")} class="absolute inset-0 w-full h-full object-cover rounded-lg" alt=""> </div> </div> <div class="relative"> <img${addAttribute(srcs[2], "src")} class="absolute inset-0 w-full h-full object-cover rounded-lg" alt=""> </div> <div class="grid grid-rows-[3fr,7fr] gap-4"> <div class="relative"> <img${addAttribute(srcs[3], "src")} class="absolute inset-0 w-full h-full object-cover rounded-lg" alt=""> </div> <div class="relative"> <img${addAttribute(srcs[4], "src")} class="absolute inset-0 w-full h-full object-cover rounded-lg" alt=""> </div> </div> </div> <div class="md:hidden mt-2 flex justify-center"> ${renderComponent($$result, "Button", $$Button, { "class": "flex", "variant": "primary", "size": "medium" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icon, { "icons": [{ name: "instagram" }], "size": "small" })} ${buttonText}` })} </div> </div> </div> </div> </section>`;
}, "E:/Lim/Developer/Projects/seniorCare/src/components/common/GalleryMosaic.astro", void 0);

const $$Astro = createAstro();
const $$TitleCommon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TitleCommon;
  const { subtitle, title, desc, class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`flex flex-col justify-center gap-2 ${className}`, "class")}> ${subtitle && renderTemplate`<p class="font-ag-sub-heading text-ag-sub-heading">${subtitle}</p>`} <h2 class="font-ag-h3 text-ag-h4 md:text-ag-h3">${title}</h2> ${desc && renderTemplate`<p${addAttribute(`font-ag-body text-ag-body`, "class")}>${desc}</p>`} ${renderSlot($$result, $$slots["default"])} </div>`;
}, "E:/Lim/Developer/Projects/seniorCare/src/components/common/TitleCommon.astro", void 0);

export { $$TitleCommon as $, $$GalleryMosaic as a };
