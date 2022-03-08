/** @type {import('next').NextConfig} */
module.exports = {
	// i18n: {
	// 	locales: ['en', 'ja'],
	// 	defaultLocale: 'en',
	// 	localeDetection: false,
	// },
	reactStrictMode: true,
	trailingSlash: true,
	images: {
		// assuming you were using the Sanity.io image CDN
		// domains is an array of comma-separated strings
		// ['cdn.sanity.io', 'cdn.not-sanity.io', 'another domain']
		// domains: ['your-site domain'],
		// loader: 'cloudinary',
		// path: 'https://your-site.com/assets/images/',
	},
	// webpack: config => {
	// 	config.module.rules.push({
	// 		test: /\.md$/,
	// 		loader: 'frontmatter-markdown-loader',
	// 	})
	// 	return config
	// },
	webpack5: true,
	webpack: (config, { isServer }) => {
		config.module.rules.push({
			test: /\.md$/,
			loader: 'frontmatter-markdown-loader',
		})
		// config.resolve.fallback = { fs: false }
		// Fixes npm packages that depend on `fs` module
		// if (!isServer) {
		// 	config.resolve.fallback = {
		// 		fs: false,
		// 		path: false,
		// 		os: false,
		// 	}
		// }

		return config
	},
}
