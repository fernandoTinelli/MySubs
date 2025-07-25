import { Link } from "react-router-dom";
import { Badge } from "../Badge/Badge";
import { useAuth } from "../../context/useAuth";

type Props = {
	alwaysEnabled?: boolean;
	badge?: number;
	href?: string;
	children: React.ReactNode;
	onClick?: () => void;
};

export const NavBarLink = (props: Props) => {
	const { isLoggedIn } = useAuth();

	const classEnabled = "text-gray-900 dark:text-gray-300";
	const classDisabled =
		"pointer-events-none text-gray-300 dark:text-gray-900 cursor-not-allowed";

	return (
		<div className="relative inline-block">
			<Link
				to={{ pathname: props?.href }}
				className={
					isLoggedIn() || props.alwaysEnabled
						? `text-sm decoration-gray-400 decoration-1 underline-offset-2 outline-none hover:underline focus-visible:rounded-sm focus-visible:no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-800 ${classEnabled}`
						: `text-sm decoration-gray-400 decoration-1 underline-offset-2 outline-none hover:underline focus-visible:rounded-sm focus-visible:no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-800 ${classDisabled}`
				}
				onClick={props.onClick}
			>
				{props.children}
				{props.badge ? <Badge status={props.badge} /> : ""}
			</Link>
		</div>
	);
};
