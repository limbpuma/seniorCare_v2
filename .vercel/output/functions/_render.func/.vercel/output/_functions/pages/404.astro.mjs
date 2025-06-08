/* empty css                                 */
import { c as createComponent, r as renderTemplate, d as renderComponent, u as unescapeHTML, m as maybeRenderHead } from '../chunks/astro/server_DpsguGCp.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_Cqx-wyTp.mjs';
import { $ as $$Section, a as $$ParallaxMedia, b as $$TextBlock } from '../chunks/ParallaxMedia_CXSdwof_.mjs';
export { renderers } from '../renderers.mjs';

const seniorCoupleImage = new Proxy({"src":"/_astro/doctor_senior_care_help_6.CUcbXRxA.webp","width":1840,"height":1228,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Lim/Developer/Projects/Integra/seniorCare/public/assets/img/doctor_senior_care_help_6.webp";
							}
							
							return target[name];
						}
					});

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$404 = createComponent(($$result, $$props, $$slots) => {
  const page = "404";
  const title = "404 - Seite nicht gefunden";
  const redirectScript = `
  setTimeout(() => {
    window.location.href = '/';
  }, 5000);

  function goHome() {
    window.location.href = '/';
  }
`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404 - Page Not Found", "page": page }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Layout", $$Layout, { "title": title, "page": page }, { "default": ($$result3) => renderTemplate(_a || (_a = __template([" ", " <script>", "<\/script> "])), renderComponent($$result3, "Section", $$Section, { "padding": "large", "width": "full", "height": "h-screen", "id": "hero-parallax-section", "class": "relative overflow-hidden" }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col items-center justify-center h-full text-center z-10 relative"> <h1 class="text-4xl md:text-6xl font-bold mb-4 text-white">404 - Seite nicht gefunden</h1> <p class="text-xl md:text-2xl mb-8 text-white">Die gesuchte Seite konnte leider nicht gefunden werden.</p> <button onclick="goHome()" class="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded transition duration-300">
Zur Startseite
</button> <p class="text-sm mt-4 text-white">Sie werden in 5 Sekunden automatisch weitergeleitet...</p> </div> <div class="absolute inset-0 w-full h-full parallax-container"> ${renderComponent($$result4, "ParallaxMedia", $$ParallaxMedia, { "type": "image", "src": seniorCoupleImage, "alt": "404 Error - Senior couple" })} </div> <div class="relative z-10 container mx-auto h-full flex items-center justify-center"> <div class="w-full max-w-3xl px-4 text-center"> ${renderComponent($$result4, "TextBlock", $$TextBlock, { "subtitle": "Seite nicht gefunden", "title": "404", "descriptionBold": "Es tut uns leid, aber die gesuchte Seite konnte nicht gefunden werden", "description": "Sie werden in 5 Sekunden zur Startseite weitergeleitet", "textColor": "white", "buttonText": "Sofort zur Startseite", "buttonVariant": "primary", "buttonSize": "large", "buttonHref": "/" })} </div> </div> ` }), unescapeHTML(redirectScript)) })} ` })}`;
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
