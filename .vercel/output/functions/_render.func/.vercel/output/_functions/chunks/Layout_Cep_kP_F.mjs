import { c as createComponent, r as renderTemplate, a as addAttribute, g as renderHead, d as createAstro, m as maybeRenderHead, s as spreadAttributes, e as renderSlot, b as renderComponent } from './astro/server_CSlR2sdS.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Astro$6 = createAstro();
const $$Head = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Head;
  const { title } = Astro2.props;
  return renderTemplate`<head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><!-- Google Fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">${renderHead()}</head>`;
}, "D:/Lim/Developer/Projects/Integra/seniorCare/src/components/meta/Head.astro", void 0);

const $$Astro$5 = createAstro();
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Button;
  const {
    href,
    class: className,
    variant = "primary",
    size = "medium",
    fullWidth = false,
    flex,
    ...props
  } = Astro2.props;
  const variantClasses = {
    primary: "text-white bg-deep-blue hover:bg-soft-blue focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:outline-none",
    secondary: "text-deep-blue bg-white hover:bg-gray-blue focus:ring-2 focus:ring-offset-2 focus:ring-deep-blue focus:outline-none",
    accent: "text-deep-blue bg-accent hover:bg-soft-orange focus:ring-2 focus:ring-offset-2 focus:ring-accent focus:outline-none"
  };
  const sizeClasses = {
    small: "text-sm px-4 py-2",
    medium: "text-ag-button-text px-8 py-4",
    large: "text-lg px-12 py-6"
  };
  const fullWidthClass = fullWidth ? "w-full" : "max-w-fit";
  const baseClasses = "rounded-full transition-colors duration-300 focus:outline-none";
  const classes = [
    variantClasses[variant],
    sizeClasses[size],
    fullWidthClass,
    baseClasses,
    className
  ];
  return renderTemplate`${maybeRenderHead()}<button${addAttribute(classes, "class:list")}${spreadAttributes(props)}> <span${addAttribute(`font-ag-button-text text-ag-button-text ${flex && "flex gap-2"}`, "class")}> ${renderSlot($$result, $$slots["default"])} </span> </button>`;
}, "D:/Lim/Developer/Projects/Integra/seniorCare/src/components/common/Button.astro", void 0);

const $$Astro$4 = createAstro();
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Icon;
  const {
    icons = [],
    size = "medium",
    customSize,
    variant = "default"
  } = Astro2.props;
  const sizes = {
    tiny: "text-xs",
    small: "text-sm",
    medium: "text-base",
    large: "text-lg",
    xl: "text-xl"
  };
  const iconClass = customSize ? customSize : sizes[size] || sizes.medium;
  const iconMap = {
    facebook: "fab fa-facebook",
    twitter: "fab fa-twitter",
    instagram: "fab fa-instagram",
    linkedin: "fab fa-linkedin",
    youtube: "fab fa-youtube",
    phone: "fas fa-phone",
    mapMarker: "fas fa-map-marker-alt",
    clock: "fas fa-clock",
    smile: "fas fa-smile",
    handhelp: "fas fa-hand-holding-heart",
    bed: "fas fa-bed",
    utensils: "fas fa-utensils",
    "shield-alt": "fas fa-shield-alt",
    seedling: "fas fa-seedling",
    ambulance: "fas fa-ambulance",
    heart: "fas fa-heart",
    check: "fas fa-check",
    envelope: "fas fa-envelope",
    location: "fas fa-map-marker-alt",
    mobilePhone: "fas fa-mobile-alt",
    globe: "fas fa-globe",
    send: "fas fa-paper-plane",
    close: "fas fa-times"
  };
  const variantClasses = {
    default: "text-[#161616] hover:text-[#5a8bba]",
    light: "text-white hover:text-[#F2B98A]",
    accent: "text-[#F2B98A] hover:text-[#ffffff]"
  };
  return renderTemplate`${icons.map((icon) => {
    const IconComponent = renderTemplate`${maybeRenderHead()}<i${addAttribute(`${iconMap[icon.name] || ""} ${iconClass} ${variantClasses[variant]} transition-colors duration-300`, "class")}></i>`;
    return icon.href ? renderTemplate`<a${addAttribute(icon.href, "href")} class=" inline-block" target="_blank" rel="noopener noreferrer">${IconComponent}</a>` : renderTemplate`<span class=" inline-block">${IconComponent}</span>`;
  })}`;
}, "D:/Lim/Developer/Projects/Integra/seniorCare/src/components/common/Icon.astro", void 0);

const $$Astro$3 = createAstro();
const $$Logo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Logo;
  const { class: className, color } = Astro2.props;
  const dark = "#024289";
  const white = "#fff";
  let bgColor = white;
  if (color === "dark") {
    bgColor = dark;
  }
  return renderTemplate`${maybeRenderHead()}<svg version="1.0" xmlns="http://www.w3.org/2000/svg"${addAttribute(className, "class")} width="353.000000pt" height="150.000000pt" viewBox="0 0 353.000000 150.000000" preserveAspectRatio="xMidYMid meet"> <g transform="translate(0.000000,150.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"> <path fill="#F64E10" d="M2620 1434 c-225 -48 -401 -182 -500 -382 -16 -33 -30 -63 -30 -66 0
-3 38 -6 85 -6 61 0 85 3 85 13 0 24 99 142 154 185 131 101 311 138 470 97
148 -39 290 -154 356 -288 21 -43 59 -93 112 -147 l79 -82 -23 -27 c-12 -14
-44 -48 -70 -76 -28 -30 -53 -69 -63 -98 -61 -182 -242 -336 -451 -382 -111
-25 -274 -17 -374 19 -102 36 -170 79 -248 156 l-66 65 34 -50 c100 -145 245
-245 421 -289 83 -20 229 -21 322 0 198 43 378 184 470 367 56 111 72 184 71
317 -1 133 -24 220 -90 337 -45 81 -165 204 -246 251 -148 88 -339 121 -498
86z"></path> <path${addAttribute(bgColor, "fill")} d="M197 1093 c-2 -5 -7 -25 -11 -46 -4 -21 -10 -45 -13 -53 -4 -11 10
-14 80 -14 l84 0 7 38 c3 20 9 47 12 60 6 21 4 22 -74 22 -45 0 -83 -3 -85 -7z"></path> <path${addAttribute(bgColor, "fill")} d="M957 1025 c-32 -7 -59 -14 -61 -16 -1 -2 -7 -20 -12 -39 -7 -26 -16
-36 -34 -39 -44 -6 -57 -51 -15 -51 14 0 25 -4 25 -9 0 -5 -12 -58 -26 -118
-41 -175 -24 -206 112 -201 l78 3 13 50 c17 66 16 68 -7 62 -10 -3 -27 1 -36
8 -15 11 -16 19 -6 71 25 126 29 134 66 134 28 0 34 4 38 25 5 22 2 25 -23 25
-32 0 -37 18 -20 78 11 37 5 39 -92 17z"></path> <path${addAttribute(bgColor, "fill")} d="M610 929 c-13 -5 -33 -17 -42 -26 -17 -15 -18 -15 -18 5 0 21 -5 22
-85 22 -74 0 -85 -2 -85 -17 0 -10 -18 -92 -40 -182 -22 -90 -40 -167 -40
-172 0 -6 36 -9 82 -7 l82 3 28 115 c34 140 45 168 69 175 47 15 50 -26 14
-165 -36 -138 -39 -130 55 -130 l79 0 10 38 c60 230 64 275 28 317 -26 30 -94
42 -137 24z"></path> <path${addAttribute(bgColor, "fill")} d="M1242 927 c-49 -19 -100 -63 -124 -110 -32 -61 -32 -160 0 -205 36
-49 75 -65 167 -65 95 -1 148 20 182 72 37 54 32 61 -43 61 -60 0 -68 -3 -94
-30 -15 -16 -35 -30 -43 -30 -21 0 -47 28 -47 50 0 48 5 50 140 50 l128 0 7
50 c8 58 -13 111 -57 143 -34 25 -165 33 -216 14z m116 -69 c7 -7 12 -25 12
-40 0 -27 -2 -28 -50 -28 -52 0 -58 6 -39 43 20 38 54 48 77 25z"></path> <path${addAttribute(bgColor, "fill")} d="M1639 917 c-109 -74 -134 -262 -42 -322 37 -24 109 -22 146 6 l30 22
-6 -29 c-11 -55 -27 -84 -52 -96 -27 -12 -55 2 -55 28 0 11 -18 14 -75 14
l-75 0 0 -29 c0 -64 65 -104 175 -105 117 -2 175 27 215 105 15 28 110 388
110 415 0 2 -38 4 -84 4 -80 0 -84 -1 -90 -24 l-6 -24 -29 29 c-25 24 -38 29
-79 29 -34 0 -59 -7 -83 -23z m161 -72 c15 -18 8 -87 -14 -140 -12 -29 -20
-35 -45 -35 -35 0 -45 21 -35 77 16 90 62 137 94 98z"></path> <path${addAttribute(bgColor, "fill")} d="M2475 926 c-42 -16 -95 -66 -95 -91 0 -12 15 -15 69 -15 56 0 71 3
82 19 14 19 28 25 60 22 20 -1 30 -22 23 -49 -5 -16 -17 -20 -78 -25 -150 -11
-206 -48 -206 -136 0 -56 19 -86 64 -101 42 -14 109 0 140 29 29 27 34 26 28
-4 -4 -25 -4 -25 71 -25 l75 0 31 130 c17 71 31 138 31 149 0 34 -20 67 -53
86 -43 25 -185 31 -242 11z m115 -210 c0 -7 -10 -28 -23 -47 -19 -28 -29 -34
-57 -34 -29 0 -36 4 -38 23 -6 40 33 70 91 71 16 1 27 -4 27 -13z"></path> <path${addAttribute(bgColor, "fill")} d="M2801 911 c30 -40 28 -109 -5 -238 -14 -56 -26 -106 -26 -112 0 -8
66 -11 203 -11 l204 0 74 83 c41 45 82 92 92 104 18 21 17 22 -69 112 l-86 91
-204 0 -205 0 22 -29z"></path> <path${addAttribute(bgColor, "fill")} d="M155 918 c-5 -17 -85 -356 -85 -363 0 -3 37 -5 81 -3 l82 3 43 180
c24 99 43 183 44 188 0 13 -160 8 -165 -5z"></path> <path${addAttribute(bgColor, "fill")} d="M2032 748 c-23 -101 -42 -186 -42 -190 0 -5 36 -8 80 -8 l79 0 11 43
c38 155 67 197 138 197 l37 0 16 70 16 70 -34 0 c-24 0 -44 -10 -71 -34 l-38
-35 4 35 4 34 -79 0 -78 0 -43 -182z"></path> </g> </svg>`;
}, "D:/Lim/Developer/Projects/Integra/seniorCare/src/components/common/Logo.astro", void 0);

const $$Astro$2 = createAstro();
const $$Nav = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Nav;
  const { links } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<nav> <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"> ${links.map(({ name, href }) => renderTemplate`<li> <a class="font-ag-button-text text-ag-button-text block py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"${addAttribute(href, "href")}> ${name} </a> </li>`)} </ul> </nav>`;
}, "D:/Lim/Developer/Projects/Integra/seniorCare/src/components/common/Nav.astro", void 0);

const header = {
	address: "Flughafenstraße 404, 44328 Dortmund",
	phone: "+49 123 456 7890",
	schedule: "Mo bis Sa 09:00 - 21:00",
	buttonText: "Jetzt Buchen",
	socialLinks: {
		facebook: "https://www.facebook.com/yourpage",
		twitter: "https://www.twitter.com/yourhandle",
		instagram: "https://www.instagram.com/yourprofile"
	},
	nav: {
		home: "Startseite",
		about: "Über Uns",
		services: "Leistungen",
		contact: "Kontakt",
		faq: "FAQ"
	}
};
const footer = {
	slogan: "Mit Liebe und Fürsorge für unsere Senioren.",
	followus: "Folgen Sie uns",
	linksTitle: "Schnellzugriff",
	scheduleTitle: "Öffnungszeiten",
	schedule: "Mo bis Sa 09:00 - 21:00",
	phone: "+49 123 456 7890",
	locationTitle: "Standort",
	address: "Flughafenstraße 404, 44328 Dortmund",
	viewMap: "Auf Google Maps ansehen",
	mapLink: "https://maps.app.goo.gl/UbA5eCbGWvF2pyPu9",
	copyright: "© 2024 Integra. Alle Rechte vorbehalten.",
	socialLinks: {
		facebook: "https://www.facebook.com/yourpage",
		twitter: "https://www.twitter.com/yourhandle",
		instagram: "https://www.instagram.com/yourprofile"
	}
};
const home = {
	hero: {
		subtitle: "Professionelle Pflege und Unterstützung",
		title: "Selbstbestimmt zu Hause leben",
		description: "Bei Integra steht das selbstbestimmte Leben unserer Klientinnen und Klienten im Mittelpunkt. Unsere qualifizierten Pflegekräfte bieten individuelle Betreuung, um eine hohe Lebensqualität in einer vertrauten Umgebung zu gewährleisten.",
		buttonText: "Kostenlose Beratung"
	},
	about: {
		services: [
			"Häusliche Pflege",
			"Medizinische Versorgung",
			"Ganzheitliche Betreuung"
		],
		stats: [
			{
				number: "1k+",
				label: "Betreute Personen"
			},
			{
				number: "10+",
				label: "Jahre Erfahrung"
			}
		],
		buttonText: "Jetzt Termin buchen",
		description: "Integra bietet maßgeschneiderte Pflege, die auf die individuellen Bedürfnisse unserer Klientinnen und Klienten abgestimmt ist. Unser Ziel ist es, die Unabhängigkeit und Lebensqualität der Menschen zu fördern.",
		phoneNumber: "0174 - 621 5814"
	},
	bannerSlides: [
		{
			text: "Selbstbestimmung",
			icon: "fa-solid fa-user-nurse"
		},
		{
			text: "Empathie",
			icon: "fa-solid fa-heart-pulse"
		},
		{
			text: "Familiäre Atmosphäre",
			icon: "fa-solid fa-user-doctor"
		},
		{
			text: "Ganzheitliche Pflege",
			icon: "fa-solid fa-heart-pulse"
		},
		{
			text: "Vertrauen",
			icon: "fa-solid fa-handshake"
		},
		{
			text: "Kompetenz",
			icon: "fa-solid fa-user-doctor"
		}
	],
	experience: {
		heading: "Warum Integra?",
		title: "Erfahrene Pflegekräfte",
		description: "Mit über 10 Jahren Erfahrung verstehen wir die einzigartigen Bedürfnisse unserer Klientinnen und Klienten. Unser Team bietet nicht nur professionelle Pflege, sondern auch emotionale Unterstützung und Begleitung im Alltag.",
		buttonText: "Mehr erfahren",
		icontext: "Unsere Leistungen"
	},
	imageCarousel: {
		title: "Unsere Dienstleistungen",
		subtitle: "Umfassende Pflege und Betreuung",
		images: [
			{
				src: "/assets/img/Bild1.jpg",
				alt: "Häusliche Pflege",
				text: "Häusliche Pflege"
			},
			{
				src: "/assets/img/Bild1.jpg",
				alt: "Medizinische Versorgung",
				text: "Medizinische Versorgung"
			},
			{
				src: "/assets/img/Bild1.jpg",
				alt: "Intensivpflege",
				text: "Intensivpflege"
			},
			{
				src: "/assets/img/Bild1.jpg",
				alt: "Unterstützung und Begleitung",
				text: "Unterstützung und Begleitung"
			},
			{
				src: "/assets/img/Bild1.jpg",
				alt: "Sicherheitsbesuche",
				text: "Sicherheitsbesuche"
			}
		]
	},
	formSection: {
		subtitle: "Kontaktieren Sie uns",
		title: "Wir sind für Sie da - jederzeit",
		description: "Haben Sie Fragen zu unseren Leistungen oder möchten Sie eine individuelle Beratung? Unser Team steht Ihnen jederzeit zur Verfügung.",
		image: "/assets/img/Bild1.jpg",
		contactForm: {
			title: "Ihre Fragen<br>Unser Expertenrat!",
			inputFields: [
				{
					type: "text",
					placeholder: "Vollständiger Name"
				},
				{
					type: "tel",
					placeholder: "Telefonnummer"
				},
				{
					type: "email",
					placeholder: "E-Mail-Adresse"
				}
			],
			selectOptions: [
				"Gewünschte Leistung",
				"Häusliche Pflege",
				"Medizinische Versorgung",
				"Unterstützung und Begleitung",
				"Sonstiges"
			],
			textareaPlaceholder: "Ihre Nachricht",
			buttonText: "Absenden"
		}
	},
	location: {
		subtitle: "Unsere Standorte",
		title: "Pflege in Ihrer Nähe",
		description: "Integra ist in verschiedenen Regionen vertreten, um eine qualitativ hochwertige und flächendeckende Versorgung zu gewährleisten. Unser Hauptsitz befindet sich in Dortmund.",
		city: "Scharnhorst Dortmund",
		buttonText: "Standort anzeigen",
		stats: [
			{
				value: "10+",
				label: "Jahre Erfahrung"
			},
			{
				value: "1000+",
				label: "Betreute Haushalte"
			},
			{
				value: "100+",
				label: "Pflegekräfte"
			},
			{
				value: "98%",
				label: "Zufriedene Klientinnen und Klienten"
			}
		]
	},
	imageCarousel_2: {
		title: "Unser Team",
		subtitle: "Pflegekräfte mit Herz",
		images: [
			{
				src: "/assets/img/Bild1.jpg",
				alt: "Lukas Müller",
				title: "Lukas Müller",
				text: "Pflegefachkraft"
			},
			{
				src: "/assets/img/Bild1.jpg",
				alt: "Tanja Schulz",
				title: "Tanja Schulz",
				text: "Altenpflegerin"
			},
			{
				src: "/assets/img/Bild1.jpg",
				alt: "Karl Maier",
				title: "Karl Maier",
				text: "Physiotherapeut"
			},
			{
				src: "/assets/img/Bild1.jpg",
				alt: "Anna Becker",
				title: "Anna Becker",
				text: "Ergotherapeutin"
			},
			{
				src: "/assets/img/Bild1.jpg",
				alt: "Michael Schmidt",
				title: "Michael Schmidt",
				text: "Pflegehelfer"
			},
			{
				src: "/assets/img/Bild1.jpg",
				alt: "Sophie Wagner",
				title: "Sophie Wagner",
				text: "Sozialarbeiterin"
			},
			{
				src: "/assets/img/Bild1.jpg",
				alt: "Klaus Hoffmann",
				title: "Klaus Hoffmann",
				text: "Pflegedienstleiter"
			},
			{
				src: "/assets/img/Bild1.jpg",
				alt: "Petra Klein",
				title: "Petra Klein",
				text: "Ernährungsberaterin"
			}
		]
	},
	testimonials: {
		titlesection: "Was unsere Kunden sagen",
		subtitlesection: "Erfahrungen und Eindrücke von Menschen, die Integra vertrauen",
		items: [
			{
				name: "Helga Schmidt",
				title: "Zufriedene Klientin",
				image: "/assets/img/Bild1.jpg",
				desc: "Die Pflege und Unterstützung durch Integra hat mein Leben enorm verbessert. Ich fühle mich sicher und gut umsorgt in meinem eigenen Zuhause."
			},
			{
				name: "Thomas Bauer",
				title: "Sohn einer Klientin",
				image: "/assets/img/Bild1.jpg",
				desc: "Das Team von Integra kümmert sich hervorragend um meine Mutter. Ihre Professionalität und ihr Mitgefühl sind wirklich beeindruckend."
			},
			{
				name: "Gisela Meyer",
				title: "Langjährige Klientin",
				image: "/assets/img/Bild1.jpg",
				desc: "Dank Integra kann ich trotz meiner Einschränkungen selbstständig in meiner vertrauten Umgebung leben. Das bedeutet mir sehr viel."
			},
			{
				name: "Dr. Frank Weber",
				title: "Kooperierender Hausarzt",
				image: "/assets/img/Bild1.jpg",
				desc: "Die Zusammenarbeit mit Integra ist ausgezeichnet. Ihre Pflegekräfte sind kompetent und zuverlässig in der Betreuung meiner Patienten."
			}
		]
	},
	galleryMosaic: {
		subtitle: "Einblicke in unseren Alltag",
		title: "Momente der Fürsorge",
		buttonText: "Galerie ansehen",
		description: "Erleben Sie die fürsorgliche Atmosphäre bei Integra.",
		srcs: [
			"/assets/img/Bild1.jpg",
			"/assets/img/Bild1.jpg",
			"/assets/img/Bild1.jpg",
			"/assets/img/Bild1.jpg",
			"/assets/img/Bild1.jpg"
		]
	}
};
const about = {
	banner: {
		title: "Über Uns",
		backgroundImage: "/assets/img/Bild1.jpg",
		breadcrumbs: [
			{
				label: "Startseite",
				url: "/"
			},
			{
				label: "Über Uns",
				url: "/about"
			}
		]
	},
	aboutSection: {
		services: [
			"Häusliche Pflege",
			"Gesundheitszentrum",
			"Aktiv Altern Club"
		],
		stats: [
			{
				number: "1k",
				label: "Betreute Senioren"
			},
			{
				number: "10+",
				label: "Jahre Erfahrung"
			}
		],
		buttonText: "Termin vereinbaren",
		description: "Integra stellt das selbstbestimmte Leben unserer Klienten in den Vordergrund. Mit maßgeschneiderten Pflegekonzepten und einem engagierten Team bieten wir die beste Betreuung in einem familiären Umfeld.",
		phoneNumber: "0174 - 621 5814"
	},
	bannerSlider: {
		slides: [
			{
				text: "Entspannung",
				icon: "fa-solid fa-user-nurse"
			},
			{
				text: "Mitgefühl",
				icon: "fa-solid fa-heart-pulse"
			},
			{
				text: "Familiäre Atmosphäre",
				icon: "fa-solid fa-bed-pulse"
			},
			{
				text: "Ruhe",
				icon: "fa-solid fa-hospital-user"
			},
			{
				text: "Fürsorge",
				icon: "fa-solid fa-pills"
			},
			{
				text: "Umgebung",
				icon: "fa-solid fa-house-medical"
			},
			{
				text: "Expertise",
				icon: "fa-solid fa-user-doctor"
			}
		]
	},
	expertSection: {
		subtitle: "Wer wir sind",
		title: "Experten in der Pflege von Senioren",
		description: "Mit über 10 Jahren Erfahrung im Pflegebereich bieten wir bei Integra qualitativ hochwertige Betreuung, die auf die individuellen Bedürfnisse unserer Klienten zugeschnitten ist. Wir bieten eine sichere und unterstützende Umgebung, in der sich unsere Klienten wohlfühlen können.",
		listItems: [
			"Sicherheit und Geborgenheit",
			"24/7 Pflegepersonal",
			"Entspannungsprogramme",
			"Familiäres Umfeld"
		],
		buttonText: "Mehr erfahren",
		buttonLink: "/services",
		mainImage: "/assets/img/Bild1.jpg",
		overlayImage: "/assets/img/Bild1.jpg"
	},
	discoverIcons: {
		subtitle: "Seniorenpflege",
		title: "Entdecken Sie unsere einzigartigen Angebote",
		features: [
			{
				icon: "bed",
				title: "Komfortable Wohnräume",
				description: "Wir bieten gemütliche und barrierefreie Wohnräume für ein angenehmes Wohngefühl.",
				number: "01"
			},
			{
				icon: "utensils",
				title: "Nahrhafte Speiseoptionen",
				description: "Unsere Küche bereitet ausgewogene und schmackhafte Mahlzeiten zu, die auf individuelle Bedürfnisse abgestimmt sind.",
				number: "02"
			},
			{
				icon: "shield-alt",
				title: "Sicherheits- und Schutzmaßnahmen",
				description: "Wir sorgen für ein sicheres Umfeld mit modernsten Sicherheitssystemen und geschultem Personal.",
				number: "03"
			},
			{
				icon: "seedling",
				title: "Gedächtnispflege-Dienste",
				description: "Spezielle Programme zur Unterstützung von Senioren mit Gedächtnisproblemen oder Demenz.",
				number: "04"
			},
			{
				icon: "ambulance",
				title: "Transportunterstützung",
				description: "Wir bieten Transportdienste für Arztbesuche, Einkäufe und andere Aktivitäten außerhalb der Einrichtung.",
				number: "05"
			},
			{
				icon: "heart",
				title: "Emotionale und spirituelle Unterstützung",
				description: "Unser einfühlsames Personal bietet emotionale Unterstützung und respektiert individuelle spirituelle Bedürfnisse.",
				number: "06"
			}
		]
	}
};
const services = {
	banner: {
		title: "Unsere Leistungen",
		backgroundImage: "/assets/img/Bild1.jpg",
		breadcrumbs: [
			{
				label: "Startseite",
				url: "/"
			},
			{
				label: "Leistungen",
				url: "/services"
			}
		]
	},
	discoverIcons: {
		title: "Unsere Leistungen Entdecken",
		subtitle: "Wir bieten die beste Pflege",
		icons: [
			{
				icon: "fa-solid fa-heart",
				text: "Mitfühlende Pflege"
			},
			{
				icon: "fa-solid fa-home",
				text: "Heimähnliche Umgebung"
			},
			{
				icon: "fa-solid fa-utensils",
				text: "Nahrhafte Mahlzeiten"
			},
			{
				icon: "fa-solid fa-dumbbell",
				text: "Körperliche Aktivitäten"
			},
			{
				icon: "fa-solid fa-chess",
				text: "Mentale Anregung"
			},
			{
				icon: "fa-solid fa-users",
				text: "Soziale Interaktion"
			}
		]
	},
	imageCarousel_3: {
		subtitle: "Außergewöhnliche Pflege",
		title: "Unsere Top-Leistungen",
		offerings: [
			{
				src: "/assets/img/Bild1.jpg",
				alt: "Häusliche Pflege",
				text: "Häusliche Pflege"
			},
			{
				src: "/assets/img/Bild1.jpg",
				alt: "Gesundheitsdienstleistungen",
				text: "Gesundheitsdienstleistungen"
			},
			{
				src: "/assets/img/Bild1.jpg",
				alt: "Mahlzeitendienste",
				text: "Mahlzeitendienste"
			},
			{
				src: "/assets/img/Bild1.jpg",
				alt: "Hauswirtschaft",
				text: "Hauswirtschaft"
			},
			{
				src: "/assets/img/Bild1.jpg",
				alt: "Demenzbetreuung",
				text: "Demenzbetreuung"
			}
		]
	},
	weCare: {
		title: "Breites Leistungsspektrum",
		subtitle: "Unsere Fürsorge",
		services: [
			{
				label: "Mahlzeitendienste",
				src: "/assets/img/Bild1.jpg",
				href: "/meal-services"
			},
			{
				label: "Persönliche Pflege",
				src: "/assets/img/Bild1.jpg",
				href: "/personal-care"
			},
			{
				label: "Betreutes Wohnen",
				src: "/assets/img/Bild1.jpg",
				href: "/assisted-living"
			}
		]
	}
};
const contact = {
	banner: {
		title: "Kontakt",
		backgroundImage: "/assets/img/Bild1.jpg",
		breadcrumbs: [
			{
				label: "Startseite",
				url: "/"
			},
			{
				label: "Kontakt",
				url: "/contact"
			}
		]
	},
	mapSection: {
		title: "Unser Standort",
		mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.1646759155656!2d7.534846376966431!3d51.54687930781805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b9112207af117d%3A0x91c056aa0191090f!2sPflegedienst%20Integra%20Gerling%20GmbH!5e0!3m2!1ses!2sde!4v1725482670831!5m2!1ses!2sde"
	},
	contactText: {
		subtitle: "Kontakt aufnehmen",
		title: "Wir sind für Sie da!",
		description: "Haben Sie Fragen oder benötigen Sie Unterstützung? Unser Team steht bereit, Ihnen die notwendige Hilfe zu bieten. Kontaktieren Sie uns über die unten stehenden Informationen oder füllen Sie das Formular aus, und wir melden uns so schnell wie möglich bei Ihnen.",
		contactOptions: [
			{
				icon: "location",
				title: "Unser Standort",
				description: "Flughafenstraße 404, 44328 Dortmund"
			},
			{
				icon: "mobilePhone",
				title: "Rufen Sie uns an",
				description: "+49 174 621 5814"
			},
			{
				icon: "envelope",
				title: "Schreiben Sie uns",
				description: "info@pflegedienst-integra.de"
			}
		],
		contactForm: {
			title: "Ihre Fragen<br>Kontaktieren Sie uns jetzt!",
			inputFields: [
				{
					type: "text",
					placeholder: "Vollständiger Name"
				},
				{
					type: "tel",
					placeholder: "Telefonnummer"
				},
				{
					type: "email",
					placeholder: "E-Mail-Adresse"
				}
			],
			selectOptions: [
				"Gewünschte Leistung",
				"Häusliche Pflege",
				"Medizinische Versorgung",
				"Betreuung und Unterstützung"
			],
			textareaPlaceholder: "Zusätzliche Nachricht",
			buttonText: "Absenden"
		}
	},
	dortmundSection: {
		title: "Büro Dortmund",
		address: "Flughafenstraße 404, 44328 Dortmund, Deutschland",
		phoneNumber: "+49 174 621 5814",
		email: "info@pflegedienst-integra.de",
		openingHours: [
			{
				day: "Montag - Freitag",
				hours: "09:00 - 18:00"
			},
			{
				day: "Samstag",
				hours: "10:00 - 16:00"
			},
			{
				day: "Sonntag",
				hours: "Geschlossen"
			}
		],
		image: "/assets/img/dortmund-office.jpg"
	}
};
const faq = {
	banner: {
		title: "Häufig gestellte Fragen",
		backgroundImage: "/assets/img/Bild1.jpg",
		breadcrumbs: [
			{
				label: "Startseite",
				url: "/"
			},
			{
				label: "FAQ",
				url: "/faq"
			}
		]
	},
	faqContent: {
		title: "Häufige Fragen",
		subtitle: "Finden Sie Antworten auf häufig gestellte Fragen zu unseren Pflegedienstleistungen",
		faqItems: [
			{
				question: "Welche Pflegedienstleistungen bieten Sie an?",
				answer: "Wir bieten eine Vielzahl von Pflegedienstleistungen an, darunter häusliche Alten- und Krankenpflege, Intensivpflege mit Nachtwache, ärztliche Behandlungspflege und Verhinderungspflege. Unsere Dienstleistungen sind individuell auf die Bedürfnisse jedes Einzelnen abgestimmt."
			},
			{
				question: "Wie erkenne ich, ob mein Angehöriger Pflege benötigt?",
				answer: "Anzeichen, dass Ihr Angehöriger Pflege benötigt, können Schwierigkeiten bei alltäglichen Aufgaben, Vergesslichkeit, Verhaltensänderungen oder zunehmende Isolation sein. Wir bieten kostenlose Beratungsgespräche an, um den Pflegebedarf zu ermitteln und geeignete Dienstleistungen zu empfehlen."
			},
			{
				question: "Welche Qualifikationen haben Ihre Pflegekräfte?",
				answer: "Unsere Pflegekräfte sind hochqualifizierte Fachkräfte mit Zertifizierungen in der Alten- und Krankenpflege. Sie durchlaufen strenge Hintergrundüberprüfungen und erhalten kontinuierliche Schulungen, um die bestmögliche Pflege zu gewährleisten."
			},
			{
				question: "Wie viel kosten Ihre Dienstleistungen?",
				answer: "Die Kosten unserer Dienstleistungen variieren je nach Pflegebedarf und den spezifischen erforderlichen Leistungen. Wir bieten maßgeschneiderte Pflegepläne an und erstellen nach einer Bedarfsanalyse gerne ein detailliertes Angebot."
			},
			{
				question: "Akzeptieren Sie Versicherungen oder Medicare?",
				answer: "Wir akzeptieren Pflegeversicherungen und unterstützen Sie gerne bei der Abwicklung der Ansprüche. Unter bestimmten Bedingungen kann die gesetzliche Krankenversicherung einige häusliche Pflegeleistungen abdecken. Unser Team hilft Ihnen, Ihre Deckungsoptionen zu verstehen."
			}
		],
		contactForm: {
			title: "Haben Sie noch Fragen?",
			inputFields: [
				{
					type: "text",
					placeholder: "Ihr Name"
				},
				{
					type: "email",
					placeholder: "Ihre E-Mail"
				},
				{
					type: "tel",
					placeholder: "Ihre Telefonnummer"
				}
			],
			selectOptions: [
				"Thema auswählen",
				"Pflegedienstleistungen",
				"Preise",
				"Versicherung",
				"Qualifikation der Pflegekräfte",
				"Sonstiges"
			],
			textareaPlaceholder: "Geben Sie Ihre Frage hier ein...",
			buttonText: "Frage absenden"
		}
	}
};
const error404 = {
	title: "404",
	subtitle: "Seite nicht gefunden",
	description: "Es tut uns leid, aber die gesuchte Seite konnte nicht gefunden werden. Unsere Pflegekräfte sind rund um die Uhr für Sie da, aber leider können sie diese Seite nicht wiederherstellen. Lassen Sie uns gemeinsam zurück zur Startseite gehen.",
	buttonText: "Zurück zur Startseite"
};
const texts = {
	header: header,
	footer: footer,
	home: home,
	about: about,
	services: services,
	contact: contact,
	faq: faq,
	error404: error404
};

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const headerTexts = texts.header;
  const NAVIGATION = [
    { name: headerTexts.nav.home, href: "/" },
    { name: headerTexts.nav.about, href: "about" },
    { name: headerTexts.nav.services, href: "services" },
    { name: headerTexts.nav.contact, href: "contact" },
    { name: headerTexts.nav.faq, href: "faq" }
  ];
  return renderTemplate`${maybeRenderHead()}<header> <nav> <div class="bg-gray-100 text-ag-body-text font-ag-body-text flex flex-col md:flex-row md:justify-between items-center mx-auto p-4"> <div class="flex gap-4"> <a href="https://maps.app.goo.gl/UbA5eCbGWvF2pyPu9" class="hidden sm:flex items-center gap-2 text-center sm:text-left"> ${renderComponent($$result, "Icon", $$Icon, { "icons": [{ name: "mapMarker" }], "size": "small", "variant": "default" })} ${headerTexts.address} </a> <a${addAttribute(`tel:${headerTexts.phone}`, "href")} class="flex items-center gap-2 text-center sm:text-left"> ${renderComponent($$result, "Icon", $$Icon, { "icons": [{ name: "phone", href: `tel:${headerTexts.phone}` }], "size": "small", "variant": "default" })} ${headerTexts.phone} </a> </div> <div class="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 rtl:space-x-reverse mt-2 md:mt-0"> <div class="flex items-center gap-2"> ${renderComponent($$result, "Icon", $$Icon, { "icons": [{ name: "clock" }], "size": "small", "variant": "default" })} ${headerTexts.schedule} </div> <ul class="hidden sm:flex"> <li class="space-x-2"> ${renderComponent($$result, "Icon", $$Icon, { "icons": [
    { name: "facebook", href: headerTexts.socialLinks.facebook },
    { name: "twitter", href: headerTexts.socialLinks.twitter },
    {
      name: "instagram",
      href: headerTexts.socialLinks.instagram
    }
  ], "size": "small", "variant": "default" })} </li> </ul> </div> </div> </nav> <nav> <div class="flex flex-wrap items-center justify-between mx-auto p-4"> <a href="/" class="max-w-[200px] block"> ${renderComponent($$result, "Logo", $$Logo, { "class": "h-14 md:h-20 max-w-fit", "color": "dark" })} </a> <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse"> ${renderComponent($$result, "Button", $$Button, { "class": "hidden sm:flex", "variant": "primary", "size": "medium" }, { "default": ($$result2) => renderTemplate`${headerTexts.buttonText}` })} <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false"> <span class="sr-only">Open main menu</span> <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"></path> </svg> </button> </div> <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta"> ${renderComponent($$result, "Nav", $$Nav, { "links": NAVIGATION })} </div> </div> </nav> </header>`;
}, "D:/Lim/Developer/Projects/Integra/seniorCare/src/components/common/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Navlinks = [
    { name: "About", href: "about" },
    { name: "Services", href: "services" },
    { name: "Contact", href: "contact" },
    { name: "FAQ", href: "faq" }
  ];
  const Legallinks = [
    { name: "Impressum", href: "legal" },
    { name: "Datenschutz", href: "privacypolicy" },
    { name: "Agbs", href: "termsconditions" }
  ];
  const footerTexts = texts.footer;
  return renderTemplate`${maybeRenderHead()}<footer class="bg-deep-blue mx-auto px-4"> <div class="container mx-auto p-4 py-6 lg:py-8"> <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"> <div class="footer-top mb-6 md:mb-0"> <a href="/" class="flex justify-center md:justify-start items-center mb-4"> ${renderComponent($$result, "Logo", $$Logo, { "class": "h-12 max-w-fit", "color": "white" })} </a> <p class="text-white font-ag-body-text text-ag-body-text mb-4 text-center md:text-left lg:w-11/12"> ${footerTexts.slogan} </p> <div class="flex justify-center md:justify-start space-x-2 text-soft-orange"> ${renderComponent($$result, "Icon", $$Icon, { "icons": [
    { name: "facebook", href: footerTexts.socialLinks.facebook },
    { name: "twitter", href: footerTexts.socialLinks.twitter },
    { name: "instagram", href: footerTexts.socialLinks.instagram }
  ], "size": "small", "variant": "accent" })} </div> </div> <div class="text-center md:text-left"> <h5 class="mb-6 text-soft-orange font-ag-h5 text-ag-h5"> ${footerTexts.linksTitle} </h5> <ul class="text-white font-ag-body-text text-ag-body-text"> ${Navlinks.map((link) => renderTemplate`<li class="mb-4"> <a${addAttribute(link.href, "href")} class="hover:underline"> ${link.name} </a> </li>`)} </ul> </div> <div class="text-center md:text-left"> <h5 class="mb-6 text-soft-orange font-ag-h5 text-ag-h5"> ${footerTexts.scheduleTitle} </h5> <p class="text-white font-ag-body-text text-ag-body-text mb-4"> ${footerTexts.schedule} </p> <a${addAttribute(`tel:${footerTexts.phone}`, "href")} class="text-white font-ag-body-text text-ag-body-text hover:underline"> ${renderComponent($$result, "Icon", $$Icon, { "icons": [{ name: "phone" }], "size": "small", "variant": "accent" })} ${footerTexts.phone} </a> </div> <div class="text-center md:text-left"> <h5 class="mb-6 text-soft-orange font-ag-h5 text-ag-h5"> ${footerTexts.locationTitle} </h5> <p class="text-white font-ag-body-text text-ag-body-text mb-4"> ${footerTexts.address} </p> <a${addAttribute(footerTexts.mapLink, "href")} target="_blank" rel="noopener noreferrer" class="text-white font-ag-body-text text-ag-body-text hover:underline"> ${renderComponent($$result, "Icon", $$Icon, { "icons": [{ name: "mapMarker" }], "size": "small", "variant": "accent" })} ${footerTexts.viewMap} </a> </div> </div> <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"> <div class="sm:flex sm:items-center sm:justify-between text-center md:text-left text-white font-ag-body-text text-ag-body-text"> <span>${footerTexts.copyright}</span> <div class="flex mt-4 sm:mt-0 justify-center md:justify-start space-x-4"> ${["Impressum", "Datenschutz", "Agbs"].map((linkName) => {
    const link = Legallinks.find(
      (l) => l.name.toLowerCase() === linkName.toLowerCase()
    );
    return link && renderTemplate`<a${addAttribute(link.href, "href")} class="hover:underline"> ${link.name} </a>`;
  })} </div> </div> </div> </footer>`;
}, "D:/Lim/Developer/Projects/Integra/seniorCare/src/components/common/Footer.astro", void 0);

const $$Astro$1 = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "D:/Lim/Developer/Projects/Integra/seniorCare/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> ${renderComponent($$result, "Head", $$Head, { "title": title })}${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}<link rel="stylesheet" href="/src/styles/main.css"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">${maybeRenderHead()}<body class="bg-white"> ${renderComponent($$result, "Header", $$Header, {})} <main class="relative"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "D:/Lim/Developer/Projects/Integra/seniorCare/src/layouts/Layout.astro", void 0);

export { $$Icon as $, $$Button as a, $$Layout as b, texts as t };
