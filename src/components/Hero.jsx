import React from "react";
import { Button } from "@mui/material";
import { FaArrowRight } from "react-icons/fa";
import varunPic from "../assets/varun.jpg";

const Hero = () => {
	return (
		<section
			id="hero"
			className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 sm:px-12 bg-gradient-to-b from-purple-50 via-gray-50 to-white dark:from-gray-900 dark:via-[#0f172a] dark:to-[#0f172a] transition-colors duration-500"
		>
			<img
				src={varunPic}
				alt="Varun Kandula"
				className="w-32 h-32 sm:w-40 sm:h-40 rounded-full shadow-lg mb-6 object-cover"
			/>

			<h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white mb-4">
				Hi, I'm{" "}
				<span className="text-purple-600 dark:text-purple-400">
					Varun Kandula
				</span>
			</h1>

			<h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-600 dark:text-gray-300 mb-4">
				React • Django • Spring Boot • Express Developer
			</h2>

			<p className="max-w-xl text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-sm sm:text-base">
				A passionate full stack developer skilled in building dynamic, scalable,
				and user-friendly web applications using modern technologies like React,
				Django, Spring Boot, Express, and MySQL.
			</p>

			<div className="flex flex-col sm:flex-row gap-4">
				<a href="#contact">
					<Button
						variant="contained"
						color="primary"
						size="large"
						className="!bg-purple-600 !hover:bg-purple-700"
						endIcon={<FaArrowRight />}
					>
						Let's Talk
					</Button>
				</a>

				<a href="/Varun Kandula_fullStackdeveloper.pdf" download>
					<Button
						variant="outlined"
						size="large"
						className="!text-purple-600 !border-purple-600 !hover:bg-purple-50 dark:!text-purple-400 dark:!border-purple-400 dark:hover:!bg-gray-800"
					>
						Download Resume
					</Button>
				</a>
			</div>

			{/* SVG Divider */}
			{/* <div className="absolute bottom-0 w-full overflow-hidden leading-none">
				<svg
					viewBox="0 0 1440 100"
					xmlns="http://www.w3.org/2000/svg"
					className="w-full h-[100px] text-gray-50 dark:text-[#0f172a]"
				>
					<path
						fill="currentColor"
						d="M0,64L60,64C120,64,240,64,360,69.3C480,75,600,85,720,80C840,75,960,53,1080,53.3C1200,53,1320,75,1380,85.3L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
					/>
				</svg>
			</div> */}
		</section>
	);
};

export default Hero;
