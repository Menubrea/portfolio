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
			'An airbnb-like website built with React and @Mui Joy UI. More information about the project can be found in the project README.md file. The frontend is deployed on Netlify.',
		images: [holiFront, holiVenue],
		url: 'https://charming-tulumba-3edec4.netlify.app/',
		github: 'https://github.com/Menubrea/project-exam-2',
		tech: ['React', 'Mui', 'Netlify', 'Vite', 'JavaScript', 'XD'],
		grade: 'Unknown'
	},
	{
		name: 'Vender | Semester Project 2',
		shortDescription: 'an auction website',
		description:
			'A dummy auction website built with vanilla JS and Tailwind. More information about the project can be found in the project README.md file. The frontend is deployed on GitHub Pages.',
		images: [venderProduct, venderFront],
		url: 'https://menubrea.github.io/Semester_Project_2/',
		github: '',
		tech: ['JavaScript', 'Tailwind', 'gh-pages', 'XD'],
		grade: 'A'
	},
	{
		name: 'Re:mote | JavaScript Frameworks',
		shortDescription: 'An E-commerce website',
		description:
			'A dummy e-commerce website built with React and @Mui Material UI. More information about the project can be found in the project README.md file. The frontend is deployed on Netlify.',
		images: [remoteProduct, remoteCart],
		url: 'https://snazzy-blini-5e3607.netlify.app/',
		github: '',
		tech: ['React', 'Mui', 'Netlify', 'JavaScript'],
		grade: 'A'
	}
];
