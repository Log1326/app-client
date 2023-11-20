/** @type {import('next').NextConfig} */
const nextConfig = {
	env: {
		API_URL: process.env.API_URL
	},
	images: {
		domains: ['localhost', 'cxl.com']
	}
}

module.exports = nextConfig
