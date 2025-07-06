import type { ReactNode } from "react";

export default function MainContent(props: {
	title: string;
	children: ReactNode;
}) {
	return (
		<main className="text-gray-500 dark:text-white">
			<h2>{props.title}</h2>
			{props.children}
		</main>
	);
}
