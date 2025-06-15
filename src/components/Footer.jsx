import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="bg-white dark:bg-gradient-to-b dark:from-[#111827] dark:to-[#131b2b] text-gray-800 dark:text-gray-100 transition-colors duration-300">
			<div className="max-w-6xl mx-auto px-4 sm:px-8 py-10 flex flex-col sm:flex-row justify-between items-center gap-4">
				<div className="text-sm text-center sm:text-left">
					&copy; {new Date().getFullYear()} Varun Kandula. All rights reserved.
				</div>

				<div className="flex gap-6 text-lg">
					<a
						href="https://github.com/kvarun007"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-purple-600 dark:hover:text-purple-400 transition"
					>
						<FaGithub />
					</a>
					<a
						href="https://www.linkedin.com/in/varun-kandula/"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-purple-600 dark:hover:text-purple-400 transition"
					>
						<FaLinkedin />
					</a>
					<a
						href="mailto:kandula.varun.79@gmail.com"
						className="hover:text-purple-600 dark:hover:text-purple-400 transition"
					>
						<FaEnvelope />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
