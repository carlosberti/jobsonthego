export {};

declare global {
	namespace NodeJS {
		interface ProcessEnv {
			REACT_APP_ENV: 'development' | 'production';
			REACT_APP_API_URL: string;
		}
	}
}
