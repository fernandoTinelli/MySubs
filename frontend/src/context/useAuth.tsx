/* eslint-disable react-refresh/only-export-components */

import React, { createContext, useEffect, useState } from "react";
import type { UserProfile } from "../models/User";
import { useNavigate } from "react-router-dom";
import { loginAPI, registerAPI } from "../services/AuthService";
import { toast } from "react-toastify";
import axios from "axios";

type Props = { children: React.ReactNode };
type UserContextType = {
	user: UserProfile | null;
	token: string | null;
	registerUser: (email: string, username: string, password: string) => void;
	loginUser: (username: string, password: string) => void;
	logout: () => void;
	isLoggedIn: () => boolean;
};

const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserProvider = ({ children }: Props) => {
	const navigate = useNavigate();
	const [token, setToken] = useState<string | null>(null);
	const [user, setUser] = useState<UserProfile | null>(null);
	const [isReady, setIsReady] = useState(false);

	useEffect(() => {
		const user = localStorage.getItem("user");
		const token = localStorage.getItem("token");

		if (user && token) {
			setUser(JSON.parse(user));
			setToken(token);
			axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
		}

		setIsReady(true);
	}, []);

	const registerUser = async (
		email: string,
		username: string,
		password: string
	) => {
		await registerAPI(email, username, password)
			.then((res) => {
				if (res) {
					localStorage.setItem("token", res?.data.token);
					const userObject = {
						userName: res?.data.userName,
						email: res?.data.email,
					};
					localStorage.setItem("user", JSON.stringify(userObject));

					setToken(res?.data.token ?? null);
					setUser(userObject);

					toast.success("Login success!");

					navigate("/home");
				}
			})
			.catch(() => toast.warning("Server error ocurred"));
	};

	const loginUser = async (username: string, password: string) => {
		await loginAPI(username, password)
			.then((res) => {
				if (res) {
					localStorage.setItem("token", res?.data.token);
					const userObject = {
						userName: res?.data.userName,
						email: res?.data.email,
					};
					localStorage.setItem("user", JSON.stringify(userObject));

					setToken(res?.data.token ?? null);
					setUser(userObject);

					toast.success("Login success!");

					navigate("/home");
				}
			})
			.catch(() => toast.warning("Server error ocurred"));
	};

	const isLoggedIn = () => {
		return !!user;
	};

	const logout = () => {
		localStorage.removeItem("user");
		localStorage.removeItem("token");
		setUser(null);
		setToken("");
		navigate("/");
	};

	return (
		<UserContext.Provider
			value={{ loginUser, user, token, logout, isLoggedIn, registerUser }}
		>
			{isReady ? children : null}
		</UserContext.Provider>
	);
};

export const useAuth = () => React.useContext(UserContext);
