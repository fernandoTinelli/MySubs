import type { ReactNode } from "react";

type Props = {
	title: string;
	children: ReactNode;
};

export const MainContent = (props: Props) => {
	return (
		<main className="text-gray-500 dark:text-white">
			<h2>{props.title}</h2>
			{props.children}
		</main>
	);
};
