import { Item } from "../Item/Item";

export const SampleHome = () => {
	return (
		<>
			<div className="mt-3 mb-3">
				<Item
					title="Netflix"
					description="Basic Plan"
					price="20.90"
					icon="N"
					expirationDate=""
					color="bg-red-500"
				/>
			</div>

			<div className="mt-3 mb-3">
				<Item
					title="Amazon Prime"
					description="Basic Plan"
					price="16.90"
					icon="A"
					expirationDate=""
					color="bg-blue-500"
				/>
			</div>
		</>
	);
};
