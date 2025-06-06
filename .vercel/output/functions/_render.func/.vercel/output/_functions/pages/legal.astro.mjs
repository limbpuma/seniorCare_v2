/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_B9cSnyzq.mjs';
import 'kleur/colors';
import { b as $$Layout } from '../chunks/Layout_CMFYuxJT.mjs';
import { $ as $$BannerSection } from '../chunks/BannerSection_DPr9JwHY.mjs';
import { l as legal_texts } from '../chunks/legal_texts_ClPMJUVC.mjs';
export { renderers } from '../renderers.mjs';

const $$Legal = createComponent(($$result, $$props, $$slots) => {
  const title = "Legal";
  const page = "impressum";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "page": page }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "BannerSection", $$BannerSection, { ...legal_texts.legal.banner })} ${maybeRenderHead()}<section class="bg-gray-100 py-10"> <div class="container mx-auto px-4"> <h2 class="text-2xl font-bold mb-6">Impressum</h2> <div class="bg-white shadow-md rounded-lg p-6"> <p class="text-gray-700"><strong>Pflegedienst Integra Gerling GmbH</strong></p> <p class="text-gray-700 mt-2">
Flughafenstraße 404<br>44328 Dortmund<br>Deutschland
</p> <p class="text-gray-700 mt-4"><strong>Kontakt:</strong></p> <p class="text-gray-700">
Telefon: 0231 9125000<br>E-Mail: info@pflegedienst-integra.de
</p> <p class="text-gray-700 mt-4"><strong>Vertreten durch:</strong></p> <p class="text-gray-700">Gerling, Geschäftsführer</p> <p class="text-gray-700 mt-4"><strong>Registereintrag:</strong></p> <p class="text-gray-700">
Eintragung im Handelsregister.<br>Registergericht: Amtsgericht
          Dortmund<br>Registernummer: HRB --
</p> <p class="text-gray-700 mt-4"><strong>Umsatzsteuer-ID:</strong></p> <p class="text-gray-700">
Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz:
          DE--
</p> <p class="text-gray-700 mt-4"> <strong>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</strong> </p> <p class="text-gray-700">
Gerling<br>Flughafenstraße 404<br>44328 Dortmund<br>Deutschland
</p> <p class="text-gray-700 mt-4"><strong>Haftungsausschluss:</strong></p> <p class="text-gray-700">
Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für
          die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir
          jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7
          Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen
          Gesetzen verantwortlich.
</p> <p class="text-gray-700 mt-4"><strong>Streitbeilegung:</strong></p> <p class="text-gray-700">
Die Europäische Kommission stellt eine Plattform zur
          Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr" class="text-blue-500 underline">https://ec.europa.eu/consumers/odr</a>. Unsere E-Mail-Adresse finden Sie oben im Impressum.
</p> </div> </div> </section> ` })}`;
}, "D:/Lim/Developer/Projects/Integra/seniorCare/src/pages/legal.astro", void 0);

const $$file = "D:/Lim/Developer/Projects/Integra/seniorCare/src/pages/legal.astro";
const $$url = "/legal";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Legal,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
