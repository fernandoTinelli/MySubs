import { NormalPage } from "../components/NormalPage/NormalPage";
import { SampleHome } from "../components/SampleHome/SampleHome";

export const HomePage = () => {
	return (
		<NormalPage>
			<div className="pt-5">
				<p className="text-center">
					Control all your subscriptions in one place!!!
				</p>
			</div>
			<div className="pt-5">
				<SampleHome />
			</div>
		</NormalPage>
	);
};
