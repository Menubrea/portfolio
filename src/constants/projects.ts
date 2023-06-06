type Project = {
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
		shortDescription: 'A venue booking website',
		description:
			'A venue booking website for a fictional hotel chain. The website is built with React and @Mui Joy UI. The frontend is deployed on Netlify.',
		images: ['holidaze-1.png', 'holidaze-2.png', 'holidaze-3.png'],
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
		images: ['vender-1.png', 'vender-2.png', 'vender-3.png'],
		url: 'https://vender.netlify.app/',
		github: '',
		tech: ['JavaScript', 'Tailwind', 'Netlify'],
		grade: 'A'
	},
	{
		name: 'Re:mote | JavaScript Frameworks',
		shortDescription: 'An online shopping website',
		description:
			'An online shopping website built with React and @Mui Material UI. The frontend is deployed on Netlify.',
		images: ['remote-1.png', 'remote-2.png', 'remote-3.png'],
		url: 'https://remote.netlify.app/',
		github: '',
		tech: ['React', 'Mui', 'Netlify', 'JavaScript'],
		grade: 'A'
	}
];
