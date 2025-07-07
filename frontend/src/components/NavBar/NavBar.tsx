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
				<NavBarLink disabled={!isLoggedIn()}>
					<HomeIcon />
				</NavBarLink>

				<NavBarLink disabled={!isLoggedIn()}>
					<PlusIcon />
				</NavBarLink>

				<NavBarLink disabled={!isLoggedIn()}>
					<TrashIcon />
				</NavBarLink>

				<NavBarLink disabled={!isLoggedIn()} badge={2}>
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
						<NavBarLink href="login">Log in</NavBarLink>
						<NavBarLink href="register">Sign up</NavBarLink>
					</>
				)}
			</div>
		</div>
	);
};
