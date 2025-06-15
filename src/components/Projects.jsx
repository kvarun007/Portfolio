import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import vehiclePic from "../assets/vehicle.infoFullScreenshot.png";
import chatterboxPic from "../assets/chatterbox.png";
import whatsappPic from "../assets/whatsapp.png";
import Portfolio from "../assets/portfolio.png";

const projects = [
	{
		title: "Vehicle Info App",
		description:
			"A full-stack platform like CarWale to compare vehicles, manage garage, and view user-reported mileage.",
		tags: ["React", "Django", "MySQL", "Tailwind"],
		image: vehiclePic,
		github: "https://github.com/kvarun007/veh.info/tree/main-1",
		live: "",
	},
	{
		title: "Portfolio Website",
		description:
			"Personal portfolio site showcasing projects, skills, and contact. Built with React and Tailwind.",
		tags: ["React", "Tailwind", "GitHub Pages"],
		image: Portfolio,
		github: "https://github.com/kvarun007/Portfolio.git",
		live: "https://kvarun007.github.io/Portfolio/",
	},
	{
		title: "Chatter Box",
		description:
			"A real-time chat app using Socket.io. Supports rooms, live messaging, and responsive design.",
		tags: ["React", "Node.js", "Socket.io", "Express"],
		image: chatterboxPic,
		github: "https://github.com/kvarun007/ChatterBox",
		live: "",
	},
	{
		title: "WhatsApp Quick Connect",
		description:
			"A lightweight utility to send WhatsApp messages to unsaved numbers. Built with HTML, Tailwind, and JavaScript.",
		tags: ["HTML", "Tailwind", "JavaScript"],
		image: whatsappPic,
		github: "https://github.com/kvarun007/whataspp-india-",
		live: "https://kvarun007.github.io/whatsapp-quick-connect/",
	},
];

const Projects = () => {
	return (
		<section
			id="projects"
			className="py-20 px-6 sm:px-12 bg-gradient-to-b from-gray-50 via-white to-white dark:bg-gradient-to-b dark:from-[#111827] dark:via-[#111827] dark:to-[#131b2b] text-gray-800 dark:text-gray-100 transition-colors duration-500"
		>
			<div className="max-w-7xl mx-auto">
				<h2 className="text-4xl font-bold text-center mb-16">Projects</h2>

				<div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
					{projects.map((project, index) => (
						<div
							key={index}
							className="bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 duration-300"
						>
							<img
								src={project.image}
								alt={project.title}
								className="w-full h-52 object-cover"
							/>

							<div className="p-6">
								<h3 className="text-2xl font-semibold mb-3">{project.title}</h3>

								<p className="text-sm mb-4 leading-relaxed">
									{project.description}
								</p>

								<div className="flex flex-wrap gap-2 mb-4">
									{project.tags.map((tag, idx) => (
										<span
											key={idx}
											className="bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 text-xs font-semibold px-3 py-1 rounded-full"
										>
											{tag}
										</span>
									))}
								</div>

								<div className="flex gap-6">
									<a
										href={project.github}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center gap-1 text-sm hover:text-purple-600 dark:hover:text-purple-400 transition"
									>
										<FaGithub /> GitHub
									</a>

									{project.live && (
										<a
											href={project.live}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center gap-1 text-sm hover:text-purple-600 dark:hover:text-purple-400 transition"
										>
											<FaExternalLinkAlt /> Live Demo
										</a>
									)}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
