import { Separator } from "@base-ui-components/react/separator";
import {
	EnvelopeClosedIcon,
	HomeIcon,
	PlusIcon,
	TrashIcon,
} from "@radix-ui/react-icons";
import { NavBarLink } from "../NavBarLink/NavBarLink";
import { useAuth } from "../../context/useAuth";

export const NavBar = () => {
	const { isLoggedIn, logout } = useAuth();

	return (
		<div className="flex justify-between items-center">
			<div className="flex gap-4">
				<NavBarLink>
					<HomeIcon />
				</NavBarLink>

				<NavBarLink>
					<PlusIcon />
				</NavBarLink>

				<NavBarLink>
					<TrashIcon />
				</NavBarLink>

				<NavBarLink badge={2}>
					<EnvelopeClosedIcon />
				</NavBarLink>
			</div>

			<Separator orientation="vertical" className="w-px bg-gray-300" />

			<div className="flex gap-4">
				{isLoggedIn() ? (
					<NavBarLink href="" onClick={logout}>
						Logout
					</NavBarLink>
				) : (
					<>
						<NavBarLink href="login" alwaysEnabled={true}>
							Log in
						</NavBarLink>
						<NavBarLink href="register" alwaysEnabled={true}>
							Sign up
						</NavBarLink>
					</>
				)}
			</div>
		</div>
	);
};
