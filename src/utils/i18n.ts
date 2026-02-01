import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
	en: {
		translation: {
			title: "React Showcase",
			welcomeMessage: "Welcome to React and react-i18next!",
			numberOfMessages_one: "You have {{count}} message.",
			numberOfMessages_other: "You have {{count}} messages.",
		},
	},
	fr: {
		translation: {
			title: "Démonstration React",
			welcomeMessage: "Bienvenue à React et react-i18next!",
			numberOfMessages_one: "Vous avez {{count}} message.",
			numberOfMessages_other: "Vous avez {{count}} messages.",
		},
	},
};

i18n.use(initReactI18next) // passes i18n down to react-i18next
	.init({
		resources,
		fallbackLng: "en",
		lng: "fr",
		interpolation: {
			escapeValue: false, // react already safes from xss
		},
	});

export default i18n;
