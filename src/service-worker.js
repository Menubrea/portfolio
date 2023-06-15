import { build, files, prerendered, version } from '$service-worker';
import { precacheAndRoute } from 'workbox-precaching';

const precache_list = [...build, ...files, ...prerendered].map((file) => ({
	url: file,
	revision: version
}));

const isProduction = process.env.NODE_ENV === 'production';
if (isProduction) {
	console.log('Service worker enabled');
	precacheAndRoute(precache_list);
}
