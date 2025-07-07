type Props = {
	title: string;
	children: React.ReactNode;
};

export const MainContent = (props: Props) => {
	return (
		<main className="text-gray-500 dark:text-white">
			<h2>{props.title}</h2>
			{props.children}
		</main>
	);
};
