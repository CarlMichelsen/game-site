import dotenv from 'dotenv';
dotenv.config();

export const environment = {
	githubAuthClientId: process.env['GITHUB_AUTH_CLIENT_ID'] as string,
	githubAuthSecret: process.env['GITHUB_AUTH_SECRET'] as string
};
