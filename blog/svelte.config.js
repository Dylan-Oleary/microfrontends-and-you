import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),

		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		},
		paths: {
			assets: 'https://microfrontends-and-you-home.vercel.app/blog',
			base: '/blog'
		},
	}
};

export default config;
