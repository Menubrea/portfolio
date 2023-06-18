import holiFront from '../../assets/project-images/Holidaze/holiFront.webp';
import holiVenue from '../../assets/project-images/Holidaze/holiVenue.webp';
import holiPics from '../../assets/project-images/Holidaze/holiPics.webp';
import holiBrowse from '../../assets/project-images/Holidaze/holiBrowse.webp';

import venderFront from '../../assets/project-images/Vender/venderFront.webp';
import venderProduct from '../../assets/project-images/Vender/venderProduct.webp';
import venderCards from '../../assets/project-images/Vender/venderCards.webp';

import remoteProduct from '../../assets/project-images/Remote/remoteProduct.webp';
import remoteCart from '../../assets/project-images/Remote/remoteCart.webp';
import remoteProducts from '../../assets/project-images/Remote/remoteProducts.webp';
import remoteFront from '../../assets/project-images/Remote/remoteFront.webp';

const placeholder: string = 'https://via.placeholder.com/720x480.png';

export type Project = {
	name: string;
	shortDescription: string;
	description: string;
	images: string[];
	url: string;
	github: string;
	tech: string[];
	grade: string;
};

export const projects: Project[] = [
	{
		name: 'Holidaze | Project Exam 2',
		shortDescription: 'An airbnb-like website ',
		description:
			'An air-bnb type website, built with React and Material UI. This project was my final exam at Noroff, testing everything we have learned about coding, UI/UX design and managing projects.',
		images: [holiFront, holiVenue, holiPics, holiBrowse],
		url: 'https://charming-tulumba-3edec4.netlify.app/',
		github: 'https://github.com/Menubrea/project-exam-2',
		tech: [
			'devicon-react-original',
			'devicon-materialui-plain',
			'devicon-sass-original',
			'devicon-javascript-plain',
			'devicon-xd-plain'
		],
		grade: 'A'
	},
	{
		name: 'Vender | Semester Project 2',
		shortDescription: 'an auction website',
		description:
			'An auction website built with Tailwind CSS and vanilla JavaScript. It is a school project testing our ability to fulfil user stories from a front-end perspective, resolving CRUD operations and authentication. ',
		images: [venderProduct, venderFront, venderCards],
		url: 'https://menubrea.github.io/Semester_Project_2/',
		github: 'https://github.com/Menubrea/Semester_Project_2',
		tech: ['devicon-tailwindcss-plain', 'devicon-javascript-plain', 'devicon-xd-plain'],
		grade: 'A'
	},
	{
		name: 'Re:mote | JavaScript Frameworks',
		shortDescription: 'An E-commerce website',
		description:
			'My first project built using React and Material UI, designed using XD. It is a basic e-commerce store testing our ability to fulfil user stories from a front-end perspective related to e-commerce. ',
		images: [remoteProduct, remoteCart, remoteProducts, remoteFront],
		url: 'https://snazzy-blini-5e3607.netlify.app/',
		github: 'https://github.com/Menubrea/online-shop',
		tech: [
			'devicon-react-original',
			'devicon-materialui-plain',
			'devicon-sass-original',
			'devicon-javascript-plain',
			'devicon-xd-plain'
		],
		grade: 'A'
	},
	{
		name: 'Square Eyes | CMS',
		shortDescription: 'A movie database',
		description:
			'A basic front to a film-viewing site built with vanilla JS, HTML and CSS, using WordPress as a CMS. Part of Noroff module, learning basic concepts of web development and CMS.',
		images: [placeholder],
		url: 'https://blissful-ramanujan-439480.netlify.app/index.html',
		github: '',
		tech: [
			'devicon-wordpress-plain',
			'devicon-javascript-plain',
			'devicon-xd-plain',
			'devicon-css3-plain',
			'devicon-html5-plain'
		],
		grade: 'A'
	},
	{
		name: 'Simple Living | Project Exam 1',
		shortDescription: 'A blog website',
		description:
			'A blog website built with vanilla JS, HTML and CSS, using WordPress as a CMS. My first project exam, testing our ability to fufill read operations from a CMS, and web fundamentals.',
		images: [placeholder],
		url: 'https://lively-naiad-05eca0.netlify.app/index.html',
		github: '',
		tech: [
			'devicon-wordpress-plain',
			'devicon-javascript-plain',
			'devicon-xd-plain',
			'devicon-css3-plain',
			'devicon-html5-plain'
		],
		grade: 'A'
	},
	{
		name: 'CodeHub | JavaScript 2',
		shortDescription: 'A social hub for coders',
		description:
			'A social hub for coders, built with vanilla JS, HTML and CSS, accessing one of Noroffs APIs to create an appealing and functional front. Delivery project for JavaScript 2 module at Noroff.',
		images: [placeholder],
		url: 'https://648df9d512fa582e2440223d--exquisite-rabanadas-187691.netlify.app/',
		github: '',
		tech: [
			'devicon-javascript-plain',
			'devicon-xd-plain',
			'devicon-css3-plain',
			'devicon-html5-plain'
		],
		grade: 'Not graded'
	},
	{
		name: 'Menubrea.dev | Portfolio',
		shortDescription: 'My portfolio',
		description:
			'My portfolio website, built with love for all things web related, using modern robust web-technologies such as SvelteKit, Tailwind CSS and TypeScript. I have many long term plans for this website, and I am excited to see where it will take me.',
		images: [placeholder],
		url: 'https://menubrea.dev',
		github: '',
		tech: [
			'devicon-svelte-plain',
			'devicon-tailwindcss-plain',
			'devicon-typescript-plain',
			'devicon-xd-plain'
		],
		grade: ''
	}
];
