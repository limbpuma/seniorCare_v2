/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, b as createAstro, m as maybeRenderHead } from '../chunks/astro/server_B9cSnyzq.mjs';
import 'kleur/colors';
import { b as $$Layout } from '../chunks/Layout_JG5L-0Pb.mjs';
import { a as $$Section, $ as $$TextBlock } from '../chunks/TextBlock_CTa1Hlmr.mjs';
import { $ as $$ParallaxMedia } from '../chunks/ParallaxMedia_CU6CzBKf.mjs';
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

const $$Astro = createAstro();
const $$404 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  const { alignment = "left" } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404 - Page Not Found" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Section", $$Section, { "padding": "large", "width": "full", "height": "h-screen", "id": "hero-parallax-section", "class": "relative overflow-hidden " }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="absolute inset-0 w-full h-full parallax-container"> ${renderComponent($$result3, "ParallaxMedia", $$ParallaxMedia, { "type": "image", "src": seniorCoupleImage, "alt": "404 Error - Senior couple" })} </div> <div class="relative z-10 container mx-auto h-full flex items-center justify-center lg:justify-start"> <div class="w-full max-w-3xl lg:max-w-none lg:w-1/2 px-4 text-center lg:text-left"> ${renderComponent($$result3, "TextBlock", $$TextBlock, { "subtitle": "Seite nicht gefunden", "title": "404", "descriptionBold": "Es tut uns leid, aber die gesuchte Seite konnte nicht gefunden werden", "alignment": alignment, "textColor": "white", "buttonText": "Zur\xFCck zur Startseite", "buttonVariant": "primary", "buttonSize": "medium", "buttonHref": "/" })} </div> </div> ` })} ` })}`;
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
