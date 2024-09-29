/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_B9cSnyzq.mjs';
import 'kleur/colors';
import { b as $$Layout } from '../chunks/Layout_UQBh6AIC.mjs';
import { $ as $$BannerSection } from '../chunks/BannerSection_DPr9JwHY.mjs';
import { l as legal_texts } from '../chunks/legal_texts_C6jdME9K.mjs';
export { renderers } from '../renderers.mjs';

const $$Termsconditions = createComponent(($$result, $$props, $$slots) => {
  const title = "Terms & Conditions";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "BannerSection", $$BannerSection, { ...legal_texts.termsconditions.banner })} ${maybeRenderHead()}<div class="container mx-auto px-4"> <h2 class="text-2xl font-bold mb-6">Impressum</h2> <div class="bg-white shadow-md rounded-lg p-6"> <h3 class="text-xl font-semibold mb-4">1. Geltungsbereich</h3> <p class="text-gray-700 mb-4">
Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle
        Dienstleistungen, die von der Pflegedienst Integra GmbH in ihrer
        Geschäftsstelle angeboten werden. Die Nutzung der Website dient
        lediglich der Information und Kommunikation mit dem Kunden und stellt
        kein verbindliches Angebot dar.
</p> <h3 class="text-xl font-semibold mb-4">2. Vertragsabschluss</h3> <p class="text-gray-700 mb-4">
Ein Vertrag über die Erbringung von Dienstleistungen kommt
        ausschließlich durch die persönliche Kontaktaufnahme und Vereinbarung in
        unserer Geschäftsstelle zustande. Es findet keine Vertragsabwicklung
        über die Website statt.
</p> <h3 class="text-xl font-semibold mb-4">3. Dienstleistungen</h3> <p class="text-gray-700 mb-4">
Integra bietet eine Vielzahl von Pflegedienstleistungen an,
        einschließlich häuslicher Altenpflege, medizinischer Versorgung,
        Intensivpflege und Verhinderungspflege. Alle Dienstleistungen werden
        individuell auf die Bedürfnisse der Klientinnen und Klienten abgestimmt
        und ausschließlich vor Ort in unserer Geschäftsstelle vertraglich
        geregelt.
</p> <h3 class="text-xl font-semibold mb-4">4. Haftungsausschluss</h3> <p class="text-gray-700 mb-4">
Die Inhalte dieser Website dienen lediglich zu Informationszwecken.
        Integra übernimmt keine Gewähr für die Richtigkeit, Vollständigkeit und
        Aktualität der bereitgestellten Informationen. Die Nutzung der Website
        erfolgt auf eigene Verantwortung der Nutzer.
</p> <h3 class="text-xl font-semibold mb-4">5. Datenschutz</h3> <p class="text-gray-700 mb-4">
Der Schutz Ihrer persönlichen Daten ist uns wichtig. Die Verarbeitung
        personenbezogener Daten erfolgt gemäß der Datenschutz-Grundverordnung
        (DSGVO) und des Bundesdatenschutzgesetzes (BDSG). Weitere Informationen
        finden Sie in unserer <a href="/privacypolicy" class="text-blue-500 underline">Datenschutzerklärung</a>.
</p> <h3 class="text-xl font-semibold mb-4">6. Schlussbestimmungen</h3> <p class="text-gray-700 mb-4">
Sollten einzelne Bestimmungen dieser AGB unwirksam oder undurchführbar
        sein oder nach Vertragsschluss unwirksam oder undurchführbar werden,
        bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
</p> <p class="text-gray-700 mb-4">
Gerichtsstand für alle Streitigkeiten aus Vertragsverhältnissen mit
        Integra GmbH ist Dortmund.
</p> </div> </div> ` })}`;
}, "D:/Lim/Developer/Projects/Integra/seniorCare/src/pages/termsconditions.astro", void 0);

const $$file = "D:/Lim/Developer/Projects/Integra/seniorCare/src/pages/termsconditions.astro";
const $$url = "/termsconditions";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Termsconditions,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
