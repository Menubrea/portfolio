export type devProcess = {
	id: number;
	title: string;
	description: string;
	icon: string;
};

export const describeProcess: string = `To develop a great product, it takes more than just clean code and good design. That's why I
incorporate these crucial steps when building new applications. Effective communication is
essential, and I prioritize keeping an open line of dialogue with the client throughout the
development process to guarantee that their expectations are met while also providing my own
insights and expertise to adhere to industry standards.`;

export const devProcessData: devProcess[] = [
	{
		id: 1,
		icon: 'fas fa-search',
		title: 'Research',
		description:
			'The first step is to define the scope of the project - goals, requirements, and features. As well as researching the target audience, competitors, and industry standards. This is an essential step to ensure that the project is on the right track and that the client is satisfied with the final product. It involves close communication with the client, and gathering of feedback and data from potential users.'
	},
	{
		id: 2,
		icon: 'fas fa-tasks',
		title: 'Plan',
		description:
			'Create a roadmap for the project. Define the architecture, technologies, and tools based on research and project needs. Kanban and Gantt charts is an essential part of my workflow to plan and maintain schedule and tasks and everyday communication. My preferred environment is Github Projects, as it is integrated with Github and allows for easy collaboration, and linking potential issues to project boards and PRs.'
	},
	{
		id: 3,
		icon: 'fas fa-paint-brush',
		title: 'Design',
		description:
			'Create wireframes, style tiles/style guide, and prototypes. In this step the project starts to take shape - and questions such as what the user interface will look like, and how the user will interact with the application are answered. This step is crucial to ensure that the project is on the right track, and that the client is satisfied with the design. I have experience with Figma, Adobe XD, and Sketch, but XD and other Adobe products have been an essential part of my design workflow during my studies.'
	},
	{
		id: 4,
		icon: 'fas fa-code',
		title: 'Develop',
		description:
			'Develop the project using the chosen technologies and tools. This is the step where the project starts to come to life. I have experience with a wide range of technologies and tools, and I am always eager to learn new ones and implement them to my projects and environments. My favourite techs include React, Svelte, tRPC, Next.js, TailwindCSS and MUI.'
	},
	{
		id: 5,
		icon: 'fas fa-bug',
		title: 'Test',
		description:
			'Test the project to ensure that it is working as intended. Web applications needs to work on a wide variety of different browsers, devices and view ports. Each browser has its own way of processing code, making it essential to test the project on different browsers and devices. I have experience with Cypress and Jest for unit and integration testing, as well as manual testing throughout the development process.'
	},
	{
		id: 6,
		icon: 'fas fa-tools',
		title: 'Deploy and Maintain',
		description:
			'This is the final step of the development process, and the project is now ready to be used by the client and its users. I have experience with a wide range of deployment tools and environments, such as Vercel, Netlify and Github Pages. I also have experience with CI/CD tools such as Github Actions, I do my best to hand over the project in such a state it can maintained and further developed by other developers in the future.'
	}
];
