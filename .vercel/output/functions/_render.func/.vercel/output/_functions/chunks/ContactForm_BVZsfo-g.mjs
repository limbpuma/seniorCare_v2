import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, u as unescapeHTML, b as renderComponent, d as createAstro } from './astro/server_CC3nx09E.mjs';
import 'kleur/colors';
import { a as $$Button } from './texts_uLfmKLwa.mjs';
/* empty css                           */

const $$Astro = createAstro();
const $$ContactForm = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ContactForm;
  const {
    class: className,
    title,
    inputFields,
    selectOptions,
    textareaPlaceholder,
    buttonText,
    size = "large",
    image
  } = Astro2.props;
  const sizeClasses = {
    large: "max-w-[400px] sm:max-w-[450px] md:max-w-[500px] px-6 sm:px-8 md:px-10 py-10 sm:py-12 md:py-14",
    medium: "max-w-[300px] sm:max-w-[350px] md:max-w-[400px] px-4 sm:px-5 md:px-6 py-6 sm:py-8 md:py-10",
    small: "max-w-[250px] sm:max-w-[300px] md:max-w-[350px] px-3 sm:px-4 md:px-5 py-4 sm:py-6 md:py-8"
  };
  const titleClasses = {
    large: "text-2xl sm:text-3xl md:text-ag-h4 mb-6 sm:mb-8",
    medium: "text-lg sm:text-xl md:text-2xl mb-4 sm:mb-5",
    small: "text-base sm:text-lg md:text-xl mb-2 sm:mb-3"
  };
  const spacingClasses = {
    large: "space-y-4 sm:space-y-5 md:space-y-6",
    medium: "space-y-2 sm:space-y-3 md:space-y-4",
    small: size === "small" && image ? "space-y-1" : "space-y-1 sm:space-y-2 md:space-y-3"
  };
  const buttonClasses = {
    large: "mt-6 sm:mt-8 md:mt-10",
    medium: "mt-4 sm:mt-5 md:mt-6",
    small: size === "small" && image ? "mt-2" : "mt-3 sm:mt-4 md:mt-5"
  };
  const inputClasses = "w-full px-4 py-2 bg-inherit border-t-0 border-x-0 border-b border-primary text-primary-dark focus:outline-none";
  const getTextareaRows = () => {
    if (size === "small" && image) return "2";
    if (size === "small") return "3";
    if (size === "medium") return "4";
    return "6";
  };
  return renderTemplate`${maybeRenderHead()}<div class="relative" data-astro-cid-ayff3c4f> <form id="contact-form"${addAttribute(`bg-soft-orange mx-auto flex flex-col justify-between shadow-lg ${sizeClasses[size]} ${className}`, "class")} data-astro-cid-ayff3c4f> ${size === "small" && image && renderTemplate`<div class="w-full h-24 overflow-hidden mb-2" data-astro-cid-ayff3c4f> <img${addAttribute(image, "src")} alt="Form header" class="w-full h-full object-cover" data-astro-cid-ayff3c4f> </div>`} <h2${addAttribute(`font-ag-h4 text-primary text-center ${titleClasses[size]}`, "class")} data-astro-cid-ayff3c4f>${unescapeHTML(title)}</h2> <div${addAttribute(spacingClasses[size], "class")} data-astro-cid-ayff3c4f> ${inputFields.map((input) => {
    const { type, placeholder } = input;
    let name = type;
    if (type === "tel") name = "phone";
    if (type === "text" && placeholder.toLowerCase().includes("name")) name = "name";
    return renderTemplate`<input${addAttribute(type, "type")}${addAttribute(name, "name")}${addAttribute(placeholder, "placeholder")}${addAttribute(inputClasses, "class")} required data-astro-cid-ayff3c4f>`;
  })} <select name="subject"${addAttribute(inputClasses, "class")} required data-astro-cid-ayff3c4f> ${selectOptions.map((option) => renderTemplate`<option data-astro-cid-ayff3c4f>${option}</option>`)} </select> <textarea name="message"${addAttribute(textareaPlaceholder, "placeholder")}${addAttribute(getTextareaRows(), "rows")}${addAttribute(inputClasses, "class")} required data-astro-cid-ayff3c4f></textarea> </div> ${renderComponent($$result, "Button", $$Button, { "type": "submit", "variant": "primary", "fullWidth": true, "class": buttonClasses[size], "data-astro-cid-ayff3c4f": true }, { "default": ($$result2) => renderTemplate`${buttonText}` })} <div id="success-message" class="hidden fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" data-astro-cid-ayff3c4f> <div class="bg-white p-6 rounded-lg shadow-lg max-w-md w-full mx-4" data-astro-cid-ayff3c4f> <h3 class="text-ag-h3 font-bold text-primary mb-2" data-astro-cid-ayff3c4f>Nachricht gesendet!</h3> <p class="text-ag-body-text text-primary-dark mb-4" data-astro-cid-ayff3c4f>Vielen Dank für Ihre Kontaktaufnahme. Wir werden uns bald bei Ihnen melden.</p> <button id="close-success" class="w-full px-4 py-2 bg-deep-blue hover:bg-soft-blue text-white rounded-full transition-colors duration-300 focus:outline-none font-ag-button-text text-ag-button-text" data-astro-cid-ayff3c4f>Schließen</button> </div> </div> </form> </div>  `;
}, "E:/Lim/Developer/Projects/seniorCare/src/components/common/ContactForm.astro", void 0);

export { $$ContactForm as $ };
