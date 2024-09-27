import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, u as unescapeHTML, b as renderComponent, d as createAstro } from './astro/server_CSlR2sdS.mjs';
import 'kleur/colors';
import { a as $$Button } from './Layout_Cep_kP_F.mjs';
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
    large: "max-w-lg w-full px-6 sm:px-8 md:px-10 py-10 sm:py-12 md:py-14",
    medium: "max-w-md w-full px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12",
    small: "max-w-sm w-full px-3 sm:px-4 md:px-6 py-6 sm:py-8 md:py-10"
  };
  const titleClasses = {
    large: "text-ag-h4 sm:text-ag-h3 md:text-ag-h2 mb-6 sm:mb-8 md:mb-10",
    medium: "text-ag-h5 sm:text-ag-h4 md:text-ag-h3 mb-4 sm:mb-6 md:mb-8",
    small: "text-ag-body-text sm:text-ag-h5 md:text-ag-h4 mb-3 sm:mb-4 md:mb-6"
  };
  const spacingClasses = {
    large: "space-y-6 sm:space-y-7 md:space-y-8",
    medium: "space-y-4 sm:space-y-5 md:space-y-6",
    small: "space-y-3 sm:space-y-4 md:space-y-5"
  };
  const buttonClasses = {
    large: "mt-8 sm:mt-10 md:mt-12",
    medium: "mt-6 sm:mt-8 md:mt-10",
    small: "mt-4 sm:mt-6 md:mt-8"
  };
  const inputClasses = "w-full px-4 py-2 bg-inherit border-t-0 border-x-0 border-b border-primary text-primary-dark focus:outline-none text-ag-body-text font-ag-body-text";
  const getTextareaRows = () => {
    if (size === "small") return "3";
    if (size === "medium") return "4";
    return "6";
  };
  return renderTemplate`${maybeRenderHead()}<div class="relative" data-astro-cid-ayff3c4f> <form id="contact-form"${addAttribute(`bg-soft-orange mx-auto flex flex-col justify-between shadow-lg rounded-lg ${sizeClasses[size]} ${className}`, "class")} data-astro-cid-ayff3c4f> ${size === "small" && image && renderTemplate`<div class="w-full h-32 sm:h-40 md:h-48 overflow-hidden mb-4 rounded-t-lg" data-astro-cid-ayff3c4f> <img${addAttribute(image, "src")} alt="Form header" class="w-full h-full object-cover" data-astro-cid-ayff3c4f> </div>`} <h2${addAttribute(`text-ag-body-text sm:text-ag-h5 md:text-ag-h4 lg:text-[32px] xl:text-[34px] font-ag-h4 mb-2 sm:mb-3 md:mb-4 leading-tight text-center text-deep-blue uppercase ${titleClasses[size]}`, "class")} data-astro-cid-ayff3c4f>${unescapeHTML(title)}</h2> <div${addAttribute(spacingClasses[size], "class")} data-astro-cid-ayff3c4f> ${inputFields.map((input) => {
    const { type, placeholder } = input;
    let name = type;
    if (type === "tel") name = "phone";
    if (type === "text" && placeholder.toLowerCase().includes("name"))
      name = "name";
    return renderTemplate`<input${addAttribute(type, "type")}${addAttribute(name, "name")}${addAttribute(placeholder, "placeholder")}${addAttribute(inputClasses, "class")} required data-astro-cid-ayff3c4f>`;
  })} <select name="subject"${addAttribute(inputClasses, "class")} required data-astro-cid-ayff3c4f> ${selectOptions.map((option) => renderTemplate`<option data-astro-cid-ayff3c4f>${option}</option>`)} </select> <textarea name="message"${addAttribute(textareaPlaceholder, "placeholder")}${addAttribute(getTextareaRows(), "rows")}${addAttribute(inputClasses, "class")} required data-astro-cid-ayff3c4f></textarea> </div> ${renderComponent($$result, "Button", $$Button, { "type": "submit", "variant": "primary", "fullWidth": true, "class": buttonClasses[size], "data-astro-cid-ayff3c4f": true }, { "default": ($$result2) => renderTemplate`${buttonText}` })} <div class="flex items-start mt-4" data-astro-cid-ayff3c4f> <input type="checkbox" id="consent" name="consent" class="mt-1 mr-2" required data-astro-cid-ayff3c4f> <label for="consent" class="text-ag-body-text font-ag-body-text mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto" data-astro-cid-ayff3c4f>
Ich stimme der Verwendung meiner Daten zu. Mehr Infos in der <a href="/privacypolicy" class="text-primary underline" data-astro-cid-ayff3c4f>Datenschutz</a>.
</label> </div> </form> <div id="message-modal" class="hidden fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" data-astro-cid-ayff3c4f> <div class="bg-white p-6 rounded-lg shadow-lg max-w-md w-full mx-4" data-astro-cid-ayff3c4f> <h4 id="modal-title" class="text-ag-h5 sm:text-ag-h4 md:text-ag-h3 font-ag-h3 mb-4" data-astro-cid-ayff3c4f></h4> <p id="modal-message" class="text-ag-body-text font-ag-body-text mb-6" data-astro-cid-ayff3c4f></p> <button id="close-modal" class="w-full px-4 py-2 bg-deep-blue hover:bg-soft-blue text-white rounded-full transition-colors duration-300 focus:outline-none font-ag-button-text text-ag-button-text" data-astro-cid-ayff3c4f>
Schließen
</button> </div> </div> </div>  `;
}, "D:/Lim/Developer/Projects/Integra/seniorCare/src/components/common/ContactForm.astro", void 0);

export { $$ContactForm as $ };
