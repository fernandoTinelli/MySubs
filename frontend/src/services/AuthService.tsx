import axios from "axios";
import { handleError } from "../helpers/ErrorHandler";
import type { UserProfileToken } from "../models/User";

const api = import.meta.env.VITE_API_AUTH;
const port = import.meta.env.VITE_API_AUTH_PORT;
const loginPath = import.meta.env.VITE_API_AUTH_LOGIN;
const registerPath = import.meta.env.VITE_API_AUTH_REGISTER;

export const loginAPI = async (username: string, password: string) => {
	try {
		const data = await axios.post<UserProfileToken>(
			`${api}:${port}${loginPath}`,
			{
				username: username,
				password: password,
			}
		);
		return data;
	} catch (error) {
		handleError(error);
	}
};

export const registerAPI = async (
	email: string,
	username: string,
	password: string
) => {
	try {
		const data = await axios.post<UserProfileToken>(`${api}${registerPath}`, {
			email: email,
			username: username,
			password: password,
		});
		return data;
	} catch (error) {
		handleError(error);
	}
};
