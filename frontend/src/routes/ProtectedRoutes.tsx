import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/useAuth";

type Props = {
	children: React.ReactNode;
};

export const ProtectedRoutes = (props: Props) => {
	const location = useLocation();
	const { isLoggedIn } = useAuth();

	return isLoggedIn() ? (
		<>{props.children}</>
	) : (
		<Navigate to="/login" state={{ from: location }} replace />
	);
};
