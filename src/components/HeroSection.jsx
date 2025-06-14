// src/components/HeroSection.jsx
import React from "react";
import { Button, Typography } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

const HeroSection = () => {
	return (
		<section className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
			<Typography
				variant="h2"
				className="!font-bold !text-4xl md:!text-6xl mb-4"
			>
				Hi, I'm Varun Kandula
			</Typography>

			<Typography
				variant="h5"
				className="!text-xl md:!text-2xl !font-light mb-6 max-w-xl"
			>
				A Full-Stack Developer with a passion for creating fast, elegant, and
				user-focused web apps.
			</Typography>

			<Button
				variant="contained"
				color="primary"
				size="large"
				startIcon={<FileDownloadIcon />}
				href="/varun_resume.pdf"
				download
				className="!rounded-full !px-6 !py-3 !shadow-lg !bg-blue-600 hover:!bg-blue-700"
			>
				Download Resume
			</Button>
		</section>
	);
};

export default HeroSection;
