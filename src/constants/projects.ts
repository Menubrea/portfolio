import holiFront from './../assets/project-images/Holidaze/holiFront.webp';
import holiVenue from '../assets/project-images/Holidaze/holiVenue.webp';

import venderFront from '../assets/project-images/Vender/venderFront.webp';
import venderProduct from '../assets/project-images/Vender/venderProduct.webp';

import remoteProduct from '../assets/project-images/Remote/remoteProduct.webp';
import remoteCart from '../assets/project-images/Remote/remoteCart.webp';

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
			'An air-bnb type website, built with React and Material UI. This project was my final exam at Noroff, testing everything we have learned about coding, UI/UX design and managing projects. Project outline and additional information in project readme.',
		images: [holiFront, holiVenue],
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
			'An auction website built with Tailwind CSS and vanilla JavaScript. It is a school project testing our ability to fulfil user stories from a front-end perspective, resolving CRUD operations and authentication. Project outline and additional information in project readme. ',
		images: [venderProduct, venderFront],
		url: 'https://menubrea.github.io/Semester_Project_2/',
		github: 'https://github.com/Menubrea/Semester_Project_2',
		tech: ['devicon-tailwindcss-plain', 'devicon-javascript-plain', 'devicon-xd-plain'],
		grade: 'A'
	},
	{
		name: 'Re:mote | JavaScript Frameworks',
		shortDescription: 'An E-commerce website',
		description:
			'My first project built using React and Material UI, designed using XD. It is a basic e-commerce store testing our ability to fulfil user stories from a front-end perspective related to e-commerce. Project outline and additional information in project readme.',
		images: [remoteProduct, remoteCart],
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
	}
];
