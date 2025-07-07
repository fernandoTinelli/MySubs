import { LangSelectionForm } from "../Form/LangSelectionForm";

export const Footer = () => {
	return (
		<div>
			<div className="flex mt-8 justify-end text-sm text-gray-500 dark:text-gray-400">
				<LangSelectionForm defaultLang="en-us" />
			</div>

			<div className="text-gray-500 dark:text-gray-400">versão: 1.0.0</div>
		</div>
	);
};
