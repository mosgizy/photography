/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	images: {
		domains: ['images.unsplash.com'],
	},
};

module.exports = {
	...nextConfig,
	// env: {
	// 	GITHUB_ID: process.env.GITHUB_ID,
	// 	GITHUB_SECREET: process.env.GITHUB_SECREET,
	// },
};
