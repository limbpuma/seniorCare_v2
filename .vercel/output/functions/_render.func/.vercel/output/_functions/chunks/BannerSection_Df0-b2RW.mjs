import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, d as createAstro } from './astro/server_C5pmyh21.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$BannerSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BannerSection;
  const { title, breadcrumbs, backgroundImage } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative py-16 bg-cover bg-center bg-no-repeat"${addAttribute(`background-image: url(${backgroundImage});`, "style")}> <div class="absolute inset-0 bg-black opacity-50"></div> <div class="container mx-auto px-4 relative z-10"> <h1 class="text-ag-h2 font-ag-h2 text-white mb-4">${title}</h1> <nav class="text-sm" aria-label="Breadcrumb"> <ol class="list-none p-0 inline-flex"> ${breadcrumbs.map((item, index) => renderTemplate`<li class="flex items-center"> ${index > 0 && renderTemplate`<span class="mx-2 text-gray-300 ">/</span>`} <a${addAttribute(item.url, "href")}${addAttribute(index === breadcrumbs.length - 1 ? "text-gray-300 text-body-text font-body-text" : "text-white text-body-text font-body-text hover:text-gray-200 ", "class")}> ${item.label} </a> </li>`)} </ol> </nav> </div> </div>`;
}, "E:/Lim/Developer/Projects/seniorCare/src/components/common/BannerSection.astro", void 0);

export { $$BannerSection as $ };
