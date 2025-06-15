import React from "react";
import { FaUser, FaGraduationCap } from "react-icons/fa";

const About = () => {
	return (
		<section
			id="about"
			className="px-4 sm:px-10 py-20 bg-gradient-to-b from-gray-50 via-white to-white dark:bg-gradient-to-b dark:from-[#111827] dark:via-[#111827] dark:to-[#131b2b] text-gray-800 dark:text-gray-100 transition-colors duration-500"
		>
			<h2 className="text-4xl font-extrabold text-center mb-12">
				About <span className="text-purple-600 dark:text-purple-400">Me</span>
			</h2>

			<div className="flex flex-col gap-12 items-center max-w-5xl mx-auto">
				{/* Personal Info */}
				<div className="w-full bg-white dark:bg-[#1f2937] rounded-3xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
					<div className="flex items-center gap-4 mb-8">
						<div className="text-4xl text-purple-600 bg-purple-100 dark:bg-purple-900 p-4 rounded-full">
							<FaUser />
						</div>
						<h3 className="text-2xl font-semibold dark:text-white">
							Personal Info
						</h3>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 text-sm">
						{[
							{ label: "Name", value: "Varun Kandula" },
							{ label: "Role", value: "Full Stack Developer" },
							{ label: "Email", value: "kandula.varun.79@gmail.com" },
							{ label: "Phone", value: "9493164403" },
							{ label: "Location", value: "Hyderabad, India" },
							{ label: "Availability", value: "Full-time / Freelance" },
						].map(({ label, value }, i) => (
							<div key={i}>
								<p className="text-gray-500 dark:text-gray-400 font-medium">
									{label}
								</p>
								<p className="text-gray-800 dark:text-gray-100 font-semibold break-words">
									{value}
								</p>
							</div>
						))}
					</div>

					<a
						href="/Varun Kandula_fullStackdeveloper.pdf"
						download
						className="block mt-10 text-center bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-xl font-medium transition duration-300"
					>
						Download Resume
					</a>
				</div>

				{/* Biography */}
				<div className="w-full bg-white dark:bg-[#1f2937] rounded-3xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
					<h3 className="text-2xl font-semibold text-purple-600 dark:text-purple-400 mb-4">
						Biography
					</h3>
					<p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
						I specialize in crafting responsive and intuitive user interfaces
						using <strong>React</strong>, <strong>Tailwind CSS</strong>, and{" "}
						<strong>Material UI</strong>. My focus lies in building accessible,
						clean, and engaging UI experiences that scale across devices and
						browsers.
					</p>
					<p className="text-gray-700 dark:text-gray-300 leading-relaxed">
						I develop robust backend systems using <strong>Express</strong>,{" "}
						<strong>Django</strong>, and <strong>Spring</strong>. My backend
						work involves building scalable REST APIs, managing relational data
						with <strong>MySQL</strong>, and ensuring efficient server-side
						logic for full-stack solutions.
					</p>
				</div>

				{/* Education */}
				<div className="w-full bg-white dark:bg-[#1f2937] rounded-3xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
					<div className="flex items-center gap-3 mb-6 text-purple-600 dark:text-purple-400">
						<FaGraduationCap className="text-2xl" />
						<h4 className="text-2xl font-semibold text-gray-800 dark:text-white">
							Education
						</h4>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{[
							{
								title: "B.Sc in Computer Science",
								duration: "2018 – 2021",
								institute: "GCRJY",
							},
							{
								title: "M.Sc in Geology",
								duration: "2021 – 2023",
								institute: "University of Mysore",
							},
						].map((edu, i) => (
							<div key={i}>
								<p className="font-semibold text-gray-800 dark:text-white">
									{edu.title}
								</p>
								<p className="text-sm text-gray-500 dark:text-gray-400">
									{edu.duration}
								</p>
								<p className="text-sm text-gray-600 dark:text-gray-300">
									{edu.institute}
								</p>
							</div>
						))}
					</div>
				</div>

				{/* Call to Action */}
				<div className="text-center pt-8">
					<p className="text-lg font-medium mb-3 dark:text-white">
						Interested in working together?
					</p>
					<a
						href="#contact"
						className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-xl font-semibold transition-all duration-300"
					>
						Let’s Connect
					</a>
				</div>
			</div>
		</section>
	);
};

export default About;
