// import vender from './../assets/images/vender.webp';
// import holidaze from './../assets/images/holidaze-front.webp';
// import remote from './../assets/images/remote-front.webp';
const tempImage: string =
	'https://images.rawpixel.com/image_1300/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1LzQwMy1mZWxpeC1tZy05OTEzXzIuanBn.jpg';

export type Project = {
	name: string;
	shortDescription: string;
	description: string;
	image: string;
	url: string;
	github: string;
	tech: string[];
	grade: string;
};

export const projects: Project[] = [
	{
		name: 'Holidaze | Project Exam 2',
		shortDescription: 'A venue booking website',
		description:
			'The website is built with React and @Mui Joy UI. The frontend is deployed on Netlify.',
		image: tempImage,
		url: 'https://charming-tulumba-3edec4.netlify.app/',
		github: 'https://github.com/Menubrea/project-exam-2',
		tech: ['React', 'Mui', 'Netlify', 'Vite', 'JavaScript'],
		grade: 'Unknown'
	},
	{
		name: 'Vender | Semester Project 2',
		shortDescription: 'An auction website',
		description:
			'An auction website built with vanilla JS and Tailwind. The frontend is deployed on Netlify.',
		image: tempImage,
		url: 'https://menubrea.github.io/Semester_Project_2/',
		github: '',
		tech: ['JavaScript', 'Tailwind', 'Netlify'],
		grade: 'A'
	},
	{
		name: 'Re:mote | JavaScript Frameworks',
		shortDescription: 'An online shopping website',
		description:
			'An online shopping website built with React and @Mui Material UI. The frontend is deployed on Netlify.',
		image: tempImage,
		url: 'https://snazzy-blini-5e3607.netlify.app/',
		github: '',
		tech: ['React', 'Mui', 'Netlify', 'JavaScript'],
		grade: 'A'
	}
];
