import java from "../assets/Java-01.png"
import js from "../assets/JavaScript-01.png"
import sql from "../assets/MySQL-01.png"
const INFO = {
	main: {
		title: "Joandy's spot",
		name: "Joandy A.",
		email: "joandydev@outlook.com",
		logo: "../logo.png",
	},

	socials: {
		github: "https://github.com/Andy-Not",
		linkedin: "https://www.linkedin.com/in/joandy-alejo",
	},

	homepage: {
		title: "Welcome to my space! I'm Joandy, a full-stack web developer.",
		description:
		"I am a versatile developer proficient in both front-end and back-end technologies. With expertise in React, Java, Python, C and MySQL, I specialize in creating accessible and highly functional software solutions. My dedication to continuous learning drives me to seek out new opportunities to contribute to projects and expand my skill set."
	},

	about: {
		title: "I’m Tharindu N. I live in Sri Lanka, where I design the future.",
		description:
			"I've worked on a variety of projects over the years and I'm proud of the progress I've made. Many of these projects are open-source and available for others to explore and contribute to. If you're interested in any of the projects I've worked on, please feel free to check out the code and suggest any improvements or enhancements you might have in mind. Collaborating with others is a great way to learn and grow, and I'm always open to new ideas and feedback.",
	},

	projects: [
		{
			title: "Project Management App",
			description:
				"An innovative Kanban tool for streamlined project management and team collaboration.",
			logo: [java, js, sql],
			linkText: "View Project",
			link: "https://github.com/Andy-Not/groop",
		},
		{
			title: "Weather App",
			description:
			"A weather app that retrieves data from an open REST API and presents it to the user.",
			logo: [js],
			linkText: "View Project",
			link: "https://github.com/Andy-Not/groop",
		},
	],
};

export default INFO;
