import type { ReactNode } from "react";
import { NavBar } from "../NavBar/NavBar";
import { MainContent } from "../MainContent/MainContent";
import { Footer } from "../Footer/Footer";

type Props = {
	title?: string;
	children?: ReactNode;
};

export const NormalPage = (props: Props) => {
	return (
		<div className="font-sans bg-gray-100 dark:bg-gray-900 min-h-screen flex justify-center lg:flex lg:items-center lg:justify-center px-4 py-8">
			<div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md w-full max-w-xl mx-auto p-6 sm:p-8">
				<NavBar />
				<MainContent title={props.title ?? ""}>{props.children}</MainContent>
				<Footer />
			</div>
		</div>
	);
};
