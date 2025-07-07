import { Checkbox } from "@base-ui-components/react";
import { useState } from "react";

type Props = {
	title: string;
	description: string;
	price: string;
	expirationDate: string;
	icon?: string;
	color?: string;
};

export const Item = (props: Props) => {
	const [showCheck, setShowCheck] = useState(false);

	const expiration: string = getExpiration(new Date(props.expirationDate));
	const classDefaultIcon =
		"w-10 ml-5 h-10 rounded-full flex items-center justify-center text-white mr-4";
	const classDefaultColor = props.color ?? "bg-red-500";

	return (
		<div className="flex items-center justify-between bg-gray-50 dark:bg-yellow-200 p-4 rounded-lg shadow">
			<div className="flex items-center">
				{/* <div className={!showCheck ? "hidden" : ""}> */}
				<Checkbox.Root className="flex size-5 items-center justify-center rounded-sm outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800 data-[checked]:bg-gray-900 data-[unchecked]:border data-[unchecked]:border-gray-300 dark:data-[unchecked]:border-black">
					<Checkbox.Indicator className="flex text-gray-50  data-[unchecked]:hidden">
						<CheckIcon className="size-3" />
					</Checkbox.Indicator>
				</Checkbox.Root>
				{/* </div> */}

				<div className={`${classDefaultIcon} ${classDefaultColor}`}>
					<span className="text-lg font-bold">{props.icon ?? "i"}</span>
				</div>
				<div>
					<p className="font-semibold text-gray-800">{props.title}</p>
					<p className="text-gray-600 text-sm">{props.description}</p>
				</div>
			</div>

			<div className="text-right ml-4">
				<p className="text-green-600 text-lg font-bold">$ {props.price}</p>
				<p className="text-gray-500 text-sm font-bold">
					Days before renew: {expiration}
				</p>
			</div>
		</div>
	);
};

function CheckIcon(props: React.ComponentProps<"svg">) {
	return (
		<svg
			fill="currentcolor"
			width="10"
			height="10"
			viewBox="0 0 10 10"
			{...props}
		>
			<path d="M9.1603 1.12218C9.50684 1.34873 9.60427 1.81354 9.37792 2.16038L5.13603 8.66012C5.01614 8.8438 4.82192 8.96576 4.60451 8.99384C4.3871 9.02194 4.1683 8.95335 4.00574 8.80615L1.24664 6.30769C0.939709 6.02975 0.916013 5.55541 1.19372 5.24822C1.47142 4.94102 1.94536 4.91731 2.2523 5.19524L4.36085 7.10461L8.12299 1.33999C8.34934 0.993152 8.81376 0.895638 9.1603 1.12218Z" />
		</svg>
	);
}

function getExpiration(expirationDate: Date): string {
	return "6 dias";
}
