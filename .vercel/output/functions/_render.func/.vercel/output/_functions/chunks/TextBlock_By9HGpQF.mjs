import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, s as spreadAttributes, e as renderSlot, d as createAstro, b as renderComponent } from './astro/server_CSlR2sdS.mjs';
import 'clsx';
import 'kleur/colors';
import { a as $$Button } from './Layout_Cep_kP_F.mjs';

const $$Astro$1 = createAstro();
const $$Section = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Section;
  const {
    background = "white",
    padding = "medium",
    width = "full",
    height = "auto",
    class: className,
    id,
    ...props
  } = Astro2.props;
  const backgroundClasses = {
    white: "bg-white",
    primary: "bg-deep-blue",
    primaryLight: "bg-primary-light",
    accent: "bg-accent",
    transparent: "bg-transparent"
  };
  const paddingClasses = {
    none: "",
    xs: "py-2 px-4 sm:py-2 sm:px-4 md:py-3 md:px-6 lg:py-3 lg:px-6 xl:py-4 xl:px-8 2xl:py-4 2xl:px-8",
    small: "py-4 px-6 sm:py-5 sm:px-7 md:py-6 md:px-8 lg:py-7 lg:px-9 xl:py-8 xl:px-10 2xl:py-9 2xl:px-11",
    medium: "py-8 px-6 sm:py-10 sm:px-8 md:py-12 md:px-10 lg:py-14 lg:px-12 xl:py-16 xl:px-14 2xl:py-18 2xl:px-16",
    large: "py-12 px-6 sm:py-16 sm:px-8 md:py-20 md:px-10 lg:py-24 lg:px-12 xl:py-28 xl:px-14 2xl:py-32 2xl:px-16",
    xl: "py-16 px-6 sm:py-20 sm:px-8 md:py-24 md:px-10 lg:py-28 lg:px-12 xl:py-32 xl:px-14 2xl:py-36 2xl:px-16"
  };
  const widthClasses = {
    full: "w-full",
    wide: "w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
    medium: "w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8",
    narrow: "w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"
  };
  const innerClasses = [
    paddingClasses[padding],
    widthClasses[width],
    "transition-all duration-300 ease-in-out",
    className
  ].filter(Boolean);
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute([backgroundClasses[background], "w-full"], "class:list")}${addAttribute(`min-height: ${height};`, "style")}${spreadAttributes(props)}> <div${addAttribute(innerClasses, "class:list")}> <div class="w-full h-full flex flex-col justify-center"> ${renderSlot($$result, $$slots["default"])} </div> </div> </section>`;
}, "D:/Lim/Developer/Projects/Integra/seniorCare/src/components/common/Section.astro", void 0);

const $$Astro = createAstro();
const $$TextBlock = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TextBlock;
  const {
    subtitle,
    title,
    secondTitle,
    thirdTitle,
    description,
    testimonial,
    alignment = "left",
    textColor = "text-deep-blue",
    buttonText,
    buttonVariant = "primary",
    buttonSize = "medium",
    buttonHref
  } = Astro2.props;
  const alignmentClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right"
  };
  const alignmentClass = alignmentClasses[alignment];
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`${alignmentClass} ${textColor} max-w-4xl mx-auto px-4 sm:px-6 lg:px-8`, "class")}> ${subtitle && renderTemplate`<h3 class="text-ag-sub-heading font-ag-sub-heading mb-2 sm:mb-3 md:mb-4"> ${subtitle} </h3>`} ${title && renderTemplate`<h2 class="text-ag-h4 sm:text-ag-h3 md:text-ag-h2 lg:text-[56px] xl:text-[60px] font-ag-h2 mb-4 sm:mb-6 md:mb-8 leading-tight"> ${title} </h2>`} ${secondTitle && renderTemplate`<h3 class="text-ag-h5 sm:text-ag-h4 md:text-ag-h3 lg:text-[40px] xl:text-[44px] font-ag-h3 mb-3 sm:mb-4 md:mb-6 leading-tight"> ${secondTitle} </h3>`} ${thirdTitle && renderTemplate`<h4 class="text-ag-body-text sm:text-ag-h5 md:text-ag-h4 lg:text-[32px] xl:text-[34px] font-ag-h4 mb-2 sm:mb-3 md:mb-4 leading-tight"> ${thirdTitle} </h4>`} ${description && renderTemplate`<p class="text-ag-body-text font-ag-body-text mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto"> ${description} </p>`} ${testimonial && renderTemplate`<blockquote class="text-ag-testimonial-text font-ag-testimonial-text italic mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto">
"${testimonial}"
</blockquote>`} ${buttonText && renderTemplate`<div${addAttribute(`mt-6 sm:mt-8 md:mt-10 ${alignment === "center" ? "text-center" : ""}`, "class")}> ${renderComponent($$result, "Button", $$Button, { "href": buttonHref, "variant": buttonVariant, "size": buttonSize }, { "default": ($$result2) => renderTemplate`${buttonText}` })} </div>`} </div>`;
}, "D:/Lim/Developer/Projects/Integra/seniorCare/src/components/common/TextBlock.astro", void 0);

export { $$TextBlock as $, $$Section as a };
