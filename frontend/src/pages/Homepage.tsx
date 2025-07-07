import { NormalPage } from "../components/NormalPage/NormalPage";

type Props = {};

export const HomePage = (props: Props) => {
	return (
		<NormalPage>
			<div className="pt-5">Logged!</div>
		</NormalPage>
	);
};
