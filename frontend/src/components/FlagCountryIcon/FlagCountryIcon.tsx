export default function FlagCountryIcon(props: {
	label?: string;
	cc: string;
	style: string;
	size: number;
}) {
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
}
