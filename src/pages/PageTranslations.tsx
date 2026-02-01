import { useTranslation } from "react-i18next";

export const PageTranslations = () => {
  const { t } = useTranslation();
	return <p>{t("welcomeMessage")}</p>;
};
