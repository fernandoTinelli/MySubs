import { useState, type ReactNode } from "react";
import Badge from "../Badge/Badge";

export default function NavBarLink(props: {
	disabled?: boolean;
	badge?: number;
	children: ReactNode;
}) {
	const [isDisabled, setIsDisabled] = useState(() => props.disabled);

	const classDefault =
		"text-sm decoration-gray-400 decoration-1 underline-offset-2 outline-none hover:underline focus-visible:rounded-sm focus-visible:no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-800";
	const classEnabled = "text-gray-900 dark:text-gray-300";
	const classDisabled =
		"pointer-events-none text-gray-300 dark:text-gray-900 cursor-not-allowed";

	return (
		<div className="relative inline-block">
			<a
				href="#"
				className={
					!isDisabled
						? `${classDefault} ${classEnabled}`
						: `${classDefault} ${classDisabled}`
				}
			>
				{props.children}
				{props.badge ? <Badge status={props.badge} /> : ""}
			</a>
		</div>
	);
}
