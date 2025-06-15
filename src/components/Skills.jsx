import { useState } from "react";
import { motion } from "framer-motion";
import {
	FaReact,
	FaNodeJs,
	FaHtml5,
	FaCss3Alt,
	FaJs,
	FaGitAlt,
	FaJava,
	FaPython,
} from "react-icons/fa";
import {
	SiMongodb,
	SiTailwindcss,
	SiExpress,
	SiRedux,
	SiTypescript,
	SiDjango,
	SiSpring,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import clsx from "clsx";

const skills = [
	{
		name: "React",
		icon: <FaReact className="text-sky-500" />,
		category: "Frontend",
	},
	{
		name: "JavaScript",
		icon: <FaJs className="text-yellow-400" />,
		category: "Frontend",
	},
	{
		name: "HTML5",
		icon: <FaHtml5 className="text-orange-600" />,
		category: "Frontend",
	},
	{
		name: "CSS3",
		icon: <FaCss3Alt className="text-blue-500" />,
		category: "Frontend",
	},
	{
		name: "Tailwind CSS",
		icon: <SiTailwindcss className="text-cyan-400" />,
		category: "Frontend",
	},
	{
		name: "Node.js",
		icon: <FaNodeJs className="text-green-600" />,
		category: "Backend",
	},
	{
		name: "Express.js",
		icon: <SiExpress className="text-gray-500" />,
		category: "Backend",
	},
	{
		name: "MongoDB",
		icon: <SiMongodb className="text-green-500" />,
		category: "Backend",
	},
	{
		name: "MySQL",
		icon: <GrMysql className="text-blue-700" />,
		category: "Backend",
	},
	{
		name: "Redux",
		icon: <SiRedux className="text-purple-500" />,
		category: "Frontend",
	},
	{
		name: "TypeScript",
		icon: <SiTypescript className="text-blue-600" />,
		category: "Frontend",
	},
	{
		name: "Git",
		icon: <FaGitAlt className="text-orange-500" />,
		category: "Tools",
	},
	{
		name: "Django",
		icon: <SiDjango className="text-green-800" />,
		category: "Backend",
	},
	{
		name: "Java",
		icon: <FaJava className="text-red-600" />,
		category: "Backend",
	},
	{
		name: "Spring",
		icon: <SiSpring className="text-green-700" />,
		category: "Backend",
	},
	{
		name: "Python",
		icon: <FaPython className="text-blue-400" />,
		category: "Backend",
	},
];

const filters = ["All", "Frontend", "Backend", "Tools"];

const variants = {
	hidden: { opacity: 0, rotateY: -15, y: 30 },
	visible: (i) => ({
		opacity: 1,
		rotateY: 0,
		y: 0,
		transition: {
			delay: i * 0.05,
			duration: 0.5,
			type: "spring",
			stiffness: 60,
		},
	}),
};

export default function Skills() {
	const [selectedCategory, setSelectedCategory] = useState("All");

	const filteredSkills =
		selectedCategory === "All"
			? skills
			: skills.filter((skill) => skill.category === selectedCategory);

	return (
		<section
			id="skills"
			className="py-20 bg-gradient-to-b from-gray-50 via-white to-white dark:from-[#111827] dark:via-[#111827] dark:to-[#131b2b] transition-colors duration-500"
		>
			<h2 className="text-3xl font-bold text-center mb-6 text-gray-900 dark:text-white">
				My <span className="text-purple-600">Skills</span>
			</h2>

			{/* Category Filter Buttons */}
			<div className="flex justify-center flex-wrap gap-4 mb-10">
				{filters.map((category) => (
					<button
						key={category}
						onClick={() => setSelectedCategory(category)}
						className={clsx(
							"px-4 py-2 rounded-full text-sm font-semibold transition",
							selectedCategory === category
								? "bg-purple-600 text-white shadow-md"
								: "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-purple-200 dark:hover:bg-purple-800"
						)}
					>
						{category}
					</button>
				))}
			</div>

			{/* Skill Grid */}
			<div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 max-w-7xl mx-auto px-4 sm:px-6">
				{filteredSkills.map((skill, index) => (
					<motion.div
						key={skill.name}
						className="flex flex-col items-center justify-center p-5 rounded-xl shadow-md bg-white dark:bg-gray-800 transition-transform duration-300"
						custom={index}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={variants}
						whileHover={{ scale: 1.05 }}
					>
						<div className="text-4xl mb-2">{skill.icon}</div>
						<p className="text-sm font-medium text-gray-800 dark:text-gray-200">
							{skill.name}
						</p>
					</motion.div>
				))}
			</div>
		</section>
	);
}
