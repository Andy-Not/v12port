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
		github: "https://github.com/",
		linkedin: "https://linkedin.com/",
	},

	homepage: {
		title: "Full-stack web and mobile app developer, and amateur astronaut.",
		description:
			"I am a backend developer with expertise in Node.js. I have experience in building scalable, secure and reliable web applications using various frameworks and technologies. I enjoy solving complex problems and learning new skills. I am passionate about creating high-quality code that follows best practices and industry standards. I am always looking for new challenges and opportunities to grow as a developer.",
	},

	about: {
		title: "I’m Tharindu N. I live in Sri Lanka, where I design the future.",
		description:
			"I've worked on a variety of projects over the years and I'm proud of the progress I've made. Many of these projects are open-source and available for others to explore and contribute to. If you're interested in any of the projects I've worked on, please feel free to check out the code and suggest any improvements or enhancements you might have in mind. Collaborating with others is a great way to learn and grow, and I'm always open to new ideas and feedback.",
	},

	projects: [
		{
			title: "Project Management App (GROOP)",
			description:
				"A innovative and collaborative Kanban project management tool designed to streamline project organization and team collaboration.",
			logo: [java, js, sql],
			linkText: "View Project",
			link: "https://github.com/Andy-Not/groop",
		},
		{
			title: "Weather App",
			description:
				"A innovative and collaborative Kanban project management tool designed to streamline project organization and team collaboration.",
			logo: [js],
			linkText: "View Project",
			link: "https://github.com/Andy-Not/groop",
		},
	],
};

export default INFO;
