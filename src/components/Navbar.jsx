import React, { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
	const [darkMode, setDarkMode] = useState(() => {
		return (
			localStorage.getItem("theme") === "dark" ||
			(!("theme" in localStorage) &&
				window.matchMedia("(prefers-color-scheme: dark)").matches)
		);
	});

	useEffect(() => {
		if (darkMode) {
			document.documentElement.classList.add("dark");
			localStorage.setItem("theme", "dark");
		} else {
			document.documentElement.classList.remove("dark");
			localStorage.setItem("theme", "light");
		}
	}, [darkMode]);

	const toggleDarkMode = () => {
		setDarkMode(!darkMode);
	};

	const navLinks = [
		{ name: "About", href: "#about" },
		{ name: "Skills", href: "#skills" },
		{ name: "Projects", href: "#projects" },
		{ name: "Contact", href: "#contact" },
	];

	return (
		<nav className="fixed top-0 left-0 w-full h-16 z-50 bg-white dark:bg-[#111827] shadow-sm transition-colors duration-300">
			<div className="max-w-6xl mx-auto h-full px-4 sm:px-8 flex items-center justify-end">
				<ul className="flex gap-6 text-sm font-medium text-gray-700 dark:text-gray-300 items-center">
					{navLinks.map((link) => (
						<li key={link.name}>
							<a
								href={link.href}
								className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
							>
								{link.name}
							</a>
						</li>
					))}
					<li>
						<button
							onClick={toggleDarkMode}
							className="text-lg text-gray-800 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 transition"
						>
							{darkMode ? <FaSun /> : <FaMoon />}
						</button>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
