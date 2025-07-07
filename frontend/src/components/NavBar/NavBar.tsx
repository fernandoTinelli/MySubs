import { Separator } from "@base-ui-components/react/separator";
import {
	EnvelopeClosedIcon,
	HomeIcon,
	PlusIcon,
	TrashIcon,
} from "@radix-ui/react-icons";
import NavBarLink from "../NavBarLink/NavBarLink";

export default function NavBar() {
	return (
		<div className="flex justify-between items-center">
			<div className="flex gap-4">
				<NavBarLink disabled={true}>
					<HomeIcon />
				</NavBarLink>

				<NavBarLink disabled={true}>
					<PlusIcon />
				</NavBarLink>

				<NavBarLink disabled={true}>
					<TrashIcon />
				</NavBarLink>

				<NavBarLink disabled={true} badge={2}>
					<EnvelopeClosedIcon />
				</NavBarLink>
			</div>

			<Separator orientation="vertical" className="w-px bg-gray-300" />

			<div className="flex gap-4">
				<NavBarLink href="login">Log in</NavBarLink>
				<NavBarLink>Sign up</NavBarLink>
			</div>
		</div>
	);
}
