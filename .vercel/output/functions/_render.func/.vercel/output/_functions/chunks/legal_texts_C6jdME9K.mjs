const legal = {
	banner: {
		title: "Impressum",
		backgroundImage: "/assets/img/Bild1.jpg",
		breadcrumbs: [
			{
				label: "Home",
				url: "/"
			},
			{
				label: "Impressum",
				url: "/legal"
			}
		]
	}
};
const privacypolicy = {
	banner: {
		title: "Datenschutz",
		backgroundImage: "/assets/img/Bild1.jpg",
		breadcrumbs: [
			{
				label: "Home",
				url: "/"
			},
			{
				label: "Datenschutz",
				url: "/privacypolicy"
			}
		]
	}
};
const termsconditions = {
	banner: {
		title: "Geschäftsbedingungen",
		backgroundImage: "/assets/img/Bild1.jpg",
		breadcrumbs: [
			{
				label: "Home",
				url: "/"
			},
			{
				label: "Geschäftsbedingungen",
				url: "/termsconditions"
			}
		]
	}
};
const legal_texts = {
	legal: legal,
	privacypolicy: privacypolicy,
	termsconditions: termsconditions
};

export { legal_texts as l };
