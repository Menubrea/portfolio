import { build, files, prerendered } from '$service-worker';
import { precacheAndRoute } from 'workbox-precaching';
import packageJson from '../package.json';

const version = packageJson.version;

const precache_list = [...build, ...files, ...prerendered].map((file) => ({
	url: file,
	revision: version
}));

if ('servieWorker' in navigator) {
	window.addEventListener('load', () => {
		navigator.serviceWorker
			.register('/service-worker.js')
			.then((registration) => {
				console.log('SW registered: ', registration);
			})
			.catch((registrationError) => {
				console.log('SW registration failed: ', registrationError);
			});
	});
}

precacheAndRoute(precache_list);
