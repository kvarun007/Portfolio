import React from "react";
import { FaUser, FaGraduationCap } from "react-icons/fa";

const About = () => {
	return (
		<section
			id="about"
			className="px-4 sm:px-10 py-20 bg-white dark:bg-gray-100 text-gray-800"
		>
			<h2 className="text-4xl font-extrabold text-center mb-12">
				About <span className="text-purple-600">Me</span>
			</h2>

			<div className="flex flex-col gap-12 items-center max-w-5xl mx-auto">
				{/* Personal Info */}
				<div className="w-full bg-white rounded-3xl shadow-lg p-8 border border-gray-200">
					<div className="flex items-center gap-4 mb-8">
						<div className="text-4xl text-purple-600 bg-purple-100 p-4 rounded-full">
							<FaUser />
						</div>
						<h3 className="text-2xl font-semibold">Personal Info</h3>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 text-sm">
						<div>
							<p className="text-gray-500 font-medium">Name</p>
							<p className="text-gray-800 font-semibold">Varun Kandula</p>
						</div>
						<div>
							<p className="text-gray-500 font-medium">Role</p>
							<p className="text-gray-800 font-semibold">
								Full Stack Developer
							</p>
						</div>
						<div>
							<p className="text-gray-500 font-medium">Email</p>
							<p className="text-gray-800 font-semibold break-all">
								kandula.varun.79@gmail.com
							</p>
						</div>
						<div>
							<p className="text-gray-500 font-medium">Phone</p>
							<p className="text-gray-800 font-semibold">9493164403</p>
						</div>
						<div>
							<p className="text-gray-500 font-medium">Location</p>
							<p className="text-gray-800 font-semibold">Hyderabad, India</p>
						</div>
						<div>
							<p className="text-gray-500 font-medium">Availability</p>
							<p className="text-gray-800 font-semibold">
								Full-time / Freelance
							</p>
						</div>
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
				<div className="w-full bg-white rounded-3xl shadow-lg p-8 border border-gray-200">
					<h3 className="text-2xl font-semibold text-purple-600 mb-4">
						Biography
					</h3>
					<p className="text-gray-700 leading-relaxed mb-4">
						I specialize in crafting responsive and intuitive user interfaces
						using <strong>React</strong>, <strong>Tailwind CSS</strong>, and{" "}
						<strong>Material UI</strong>. My focus lies in building accessible,
						clean, and engaging UI experiences that scale across devices and
						browsers.
					</p>
					<p className="text-gray-700 leading-relaxed">
						I develop robust backend systems using <strong>Express</strong>,{" "}
						<strong>Django</strong>, and <strong>Spring</strong>. My backend
						work involves building scalable REST APIs, managing relational data
						with <strong>MySQL</strong>, and ensuring efficient server-side
						logic for full-stack solutions.
					</p>
				</div>

				{/* Education */}
				<div className="w-full bg-white rounded-3xl shadow-lg p-8 border border-gray-200">
					<div className="flex items-center gap-3 mb-6 text-purple-600">
						<FaGraduationCap className="text-2xl" />
						<h4 className="text-2xl font-semibold text-gray-800">Education</h4>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div>
							<p className="font-semibold text-gray-800">
								B.Sc in Computer Science
							</p>
							<p className="text-sm text-gray-500">2018 – 2021</p>
							<p className="text-sm text-gray-600">GCRJY</p>
						</div>
						<div>
							<p className="font-semibold text-gray-800">M.Sc in Geology</p>
							<p className="text-sm text-gray-500">2021 – 2023</p>
							<p className="text-sm text-gray-600">University of Mysore</p>
						</div>
					</div>
				</div>

				{/* Call to Action */}
				<div className="text-center pt-8">
					<p className="text-lg font-medium mb-3">
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
