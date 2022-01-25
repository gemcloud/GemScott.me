/** @type {import('next').NextConfig} */
module.exports = {
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
	webpack: config => {
		config.module.rules.push({
			test: /\.md$/,
			loader: 'frontmatter-markdown-loader',
		})
		return config
	},
}
