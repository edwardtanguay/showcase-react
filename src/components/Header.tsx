import { Nav } from "./Nav";
import { useTranslation } from "react-i18next";

export const Header = () => {
	return (
		<>
			<h1 className="text-3xl mb-3 text-slate-800">{useTranslation().t("title")}</h1>
			<Nav/>
		</>
	);
};
