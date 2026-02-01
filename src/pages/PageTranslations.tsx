import { useTranslation, Trans } from "react-i18next";

export const PageTranslations = () => {
	const { t } = useTranslation();
	return (
		<div>
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
					components={[<span className="text-red-700 font-bold" />]}
				/>
			</p>
		</div>
	);
};
