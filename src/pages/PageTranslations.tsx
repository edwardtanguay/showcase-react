import { useTranslation } from "react-i18next";

export const PageTranslations = () => {
	const { t } = useTranslation();
	return (
		<div>
			<p>{t("welcomeMessage")}</p>
			<p>{t("numberOfMessages", { count: 0 })}</p>
			<p>{t("numberOfMessages", { count: 1 })}</p>
			<p>{t("numberOfMessages", { count: 5 })}</p>
			<p>{t("numberOfMessages", { count: 10 })}</p>
		</div>
	);
};
