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
		title: "I'm Joandy, a computer science student from Pennsylvania.",
		description:
		"I am both a student and an enthusiast in the tech field, always on the lookout for new opportunities to learn and acquire a new set of skills. At this current moment, I have obtained an associate's degree in web development and am also on my way to obtaining a bachelor's degree in computer science from Bloomsburg University of Pennsylvania. I am always striving to become a better and more well-rounded developer, with the ability to help others thrive alongside me."
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
		{
			title: "Messaging App",
			description:
				"A real-time messaging app utilizing Java sockets to enable instantaneous communication between users.",
			logo: [java],
			linkText: "View Project",
			link: "https://github.com/EdisonYCA/virtual-chat",
		},
	],
};

export default INFO;
