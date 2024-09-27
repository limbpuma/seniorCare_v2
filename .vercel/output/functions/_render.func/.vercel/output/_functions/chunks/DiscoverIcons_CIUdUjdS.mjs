import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as renderComponent, d as createAstro } from './astro/server_CSlR2sdS.mjs';
import 'kleur/colors';
import { $ as $$Icon } from './Layout_Cep_kP_F.mjs';
import { $ as $$TextBlock } from './TextBlock_By9HGpQF.mjs';

const $$Astro = createAstro();
const $$DiscoverIcons = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$DiscoverIcons;
  const { class: className, subtitle, title, features } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(`features py-12 sm:py-16 bg-soft-orange ${className}`, "class")}> <div class="container mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8"> <div class="text-center mb-12"> ${renderComponent($$result, "TextBlock", $$TextBlock, { "subtitle": subtitle, "title": title, "alignment": "center", "textColor": "text-deep-blue" })} </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${features.map((feature, index) => renderTemplate`<div${addAttribute(`relative p-6 rounded-lg ${index === 1 ? "bg-soft-beige " : "bg-soft-orange hover:bg-soft-beige transition duration-300"} shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden`, "class")}> <div class="flex flex-col mb-4 relative z-10"> <div class="text-black mb-4 flex justify-center items-center h-16 w-16 "> <div class="transform scale-150"> ${renderComponent($$result, "Icon", $$Icon, { "icons": [{ name: feature.icon }], "size": "xl" })} </div> </div> <h3 class="text-ag-body-text sm:text-ag-h6 md:text-ag-h5 font-ag-h5 mb-2 sm:mb-3 md:mb-4 leading-tight text-deep-blue"> ${feature.title} </h3> <p class="text-ag-body-text font-ag-body-text mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto"> ${feature.description} </p> </div> <div class="absolute top-4 right-4 text-soft-blue text-ag-h1 opacity-20"> ${feature.number} </div> </div>`)} </div> </div> </section>`;
}, "D:/Lim/Developer/Projects/Integra/seniorCare/src/components/common/DiscoverIcons.astro", void 0);

export { $$DiscoverIcons as $ };
