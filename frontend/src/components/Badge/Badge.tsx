export default function Badge(props: { status: number }) {
	return (
		<span className="absolute -top-2 -right-3 text-[10px] bg-red-500 text-white rounded-full h-4 w-4 flex items-center justify-center">
			{props.status}
		</span>
	);
}
