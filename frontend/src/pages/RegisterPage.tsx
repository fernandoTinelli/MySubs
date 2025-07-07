import * as Yup from "yup";
import { useAuth } from "../context/useAuth";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

type Props = {};

type RegisterFormInputs = {
	email: string;
	userName: string;
	password: string;
};

const validation = Yup.object().shape({
	email: Yup.string().required("E-mail is required"),
	userName: Yup.string().required("Username is required"),
	password: Yup.string().required("Password is required"),
});

export const RegisterPage = (props: Props) => {
	const { registerUser } = useAuth();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<RegisterFormInputs>({ resolver: yupResolver(validation) });

	const handleLogin = (form: RegisterFormInputs) => {
		registerUser(form.email, form.userName, form.password);
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 transition-colors">
			<div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg w-full max-w-md space-y-6">
				<div className="flex justify-center items-center">
					<h2 className="text-2xl font-bold text-gray-800 dark:text-white">
						MySubs
					</h2>
				</div>

				<form className="space-y-4" onSubmit={handleSubmit(handleLogin)}>
					<div>
						<label
							className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
							htmlFor="username"
						>
							Username
						</label>
						<input
							type="text"
							id="username"
							placeholder="Username"
							className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
							{...register("userName")}
						/>
						{errors.userName ? (
							<p className="text-red-500">{errors.userName.message}</p>
						) : (
							""
						)}
					</div>

					<div>
						<label
							className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
							htmlFor="email"
						>
							E-mail
						</label>
						<input
							type="email"
							id="email"
							placeholder="exemple@domain.com"
							className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
							{...register("email")}
						/>
						{errors.email ? (
							<p className="text-red-500">{errors.email.message}</p>
						) : (
							""
						)}
					</div>

					<div>
						<label
							className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
							htmlFor="password"
						>
							Password
						</label>
						<input
							type="password"
							id="password"
							placeholder="••••••••"
							className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
							{...register("password")}
						/>
						{errors.password ? (
							<p className="text-red-500">{errors.password.message}</p>
						) : (
							""
						)}
					</div>

					<button
						type="submit"
						className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition"
					>
						Register
					</button>
				</form>
			</div>
		</div>
	);
};
