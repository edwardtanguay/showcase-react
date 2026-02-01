import { useTranslation, Trans } from "react-i18next";

export const PageTranslations = () => {
	const { t, i18n } = useTranslation();
	const currentLang = i18n?.language || "en";
	return (
		<div>
			<div className="flex items-center gap-3 mb-4">
				<span className="font-semibold">Language:</span>
				<button
					className={`px-3 py-1 rounded ${
						currentLang === "en"
							? "bg-blue-500 text-white"
							: "bg-gray-200"
					}`}
					onClick={() => i18n.changeLanguage("en")}
				>
					EN
				</button>
				<button
					className={`px-3 py-1 rounded ${
						currentLang === "fr"
							? "bg-blue-500 text-white"
							: "bg-gray-200"
					}`}
					onClick={() => i18n.changeLanguage("fr")}
				>
					FR
				</button>
			</div>
			<h2 className="text-2xl mb-3">useTranslation</h2>
			<p>{t("welcomeMessage")}</p>
			<p>{t("numberOfMessages", { count: 0 })}</p>
			<p>{t("numberOfMessages", { count: 1 })}</p>
			<p>{t("numberOfMessages", { count: 5 })}</p>
			<p>{t("numberOfMessages", { count: 10 })}</p>
			<h2 className="text-2xl mt-3 mb-3">Trans</h2>
			<p>
				<Trans
					i18nKey="invitation"
					components={[
						<span className="text-red-700 font-bold" />,
						<span className="text-green-900 font-bold" />,
					]}
				/>
			</p>
		</div>
	);
};
