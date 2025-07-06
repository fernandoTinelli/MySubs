import type { ReactNode } from "react";
import MainContent from "../MainContent/MainContent";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

export default function NormalPage(props: {
	title?: string;
	children?: ReactNode;
}) {
	return (
		<div className="font-sans bg-gray-100 dark:bg-gray-900 min-h-screen flex justify-center lg:flex lg:items-center lg:justify-center px-4 py-8">
			<div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md w-full max-w-xl mx-auto p-6 sm:p-8">
				<NavBar />
				<MainContent title={props.title ?? ""}>{props.children}</MainContent>
				<Footer />
			</div>
		</div>
	);
}
