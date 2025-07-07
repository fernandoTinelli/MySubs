/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_API_AUTH: string;
	readonly VITE_API_AUTH_PORT: string;
	readonly VITE_API_AUTH_REGISTER: string;
	readonly VITE_API_AUTH_LOGIN: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
