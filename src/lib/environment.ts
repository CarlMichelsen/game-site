import dotenv from 'dotenv';
dotenv.config();

export const environment = {
	development: process.env['production'] !== 'true',
	githubAuthClientId: process.env['GITHUB_AUTH_CLIENT_ID'] as string,
	githubAuthSecret: process.env['GITHUB_AUTH_SECRET'] as string
};
