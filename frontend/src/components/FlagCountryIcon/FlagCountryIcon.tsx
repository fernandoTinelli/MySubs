type Props = {
	label?: string;
	cc: string;
	style: string;
	size: number;
};

export const FlagCountryIcon = (props: Props) => {
	const src: string = "https://flagsapi.com/:country_code/:style/:size.png";

	return (
		<div className="flex gap-2 text-sm">
			<img
				src={src
					.replace(":country_code", props.cc)
					.replace(":style", props.style)
					.replace(":size", props.size.toString())}
			/>
			{props.label}
		</div>
	);
};
