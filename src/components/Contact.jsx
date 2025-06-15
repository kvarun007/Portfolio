import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
	const form = useRef();
	const [loading, setLoading] = useState(false);

	const sendEmail = (e) => {
		e.preventDefault();
		setLoading(true);

		emailjs
			.sendForm(
				"service_qq438rd",
				"template_ycol2mu",
				form.current,
				"WN1l7F41D0XwBgQlh"
			)
			.then(
				() => {
					alert("✅ Message sent successfully!");
					form.current.reset();
					setLoading(false);
				},
				(error) => {
					alert("❌ Failed to send message. Please try again.");
					console.error(error);
					setLoading(false);
				}
			);
	};

	return (
		<section
			id="contact"
			className="py-16 px-6 sm:px-12 bg-gradient-to-b from-gray-50 via-white to-white dark:bg-gradient-to-b dark:from-[#111827] dark:via-[#111827] dark:to-[#131b2b] text-gray-800 dark:text-gray-100 transition-colors duration-500"
		>
			<div className="max-w-6xl mx-auto">
				<h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
					Contact Me
				</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
					{/* Contact Form */}
					<form
						ref={form}
						onSubmit={sendEmail}
						className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md"
					>
						<div className="mb-4">
							<label className="block mb-1">Name</label>
							<input
								type="text"
								name="name"
								required
								className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
							/>
						</div>

						<div className="mb-4">
							<label className="block mb-1">Email</label>
							<input
								type="email"
								name="reply_to"
								required
								className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
							/>
						</div>

						<div className="mb-4">
							<label className="block mb-1">Message</label>
							<textarea
								name="message"
								rows="5"
								required
								className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
							></textarea>
						</div>

						<input
							type="hidden"
							name="time"
							value={new Date().toLocaleString()}
						/>

						<button
							type="submit"
							className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded transition"
							disabled={loading}
						>
							{loading ? "Sending..." : "Send Message"}
						</button>
					</form>

					{/* Contact Info / Socials */}
					<div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col justify-center space-y-6">
						<div className="flex items-center space-x-4">
							<FaEnvelope className="text-purple-600 text-xl" />
							<span>kandula.varun.79@gmail.com</span>
						</div>
						<div className="flex items-center space-x-4">
							<FaPhone className="text-purple-600 text-xl" />
							<span>+91 94931 64403</span>
						</div>
						<div className="flex items-center space-x-4">
							<FaGithub className="text-purple-600 text-xl" />
							<a
								href="https://github.com/kvarun007"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:underline"
							>
								github.com/kvarun007
							</a>
						</div>
						<div className="flex items-center space-x-4">
							<FaLinkedin className="text-purple-600 text-xl" />
							<a
								href="https://linkedin.com/in/kvarun007"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:underline"
							>
								linkedin.com/in/kvarun007
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
