import exampleImage from "@/public/example.jpg";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";

const Event = () => {
	return (
		<section className="event-display">
			<Header />
			<div className="text-white text-center font-bold text-2xl md:text-5xl lg:text-6xl py-8 ">
				<h1>Welcome to</h1>
				<h1 className="text-Blue">
					CINKOD <span className="text-Yellow">DEVELOPER</span> COMMUNITY
				</h1>
			</div>
			<div className="h-auto bg-gradient-to-br from-Blue/20 to-transparent rounded-3xl mx-4 md:mx-32 px-5 md:px-20 w-full md:w-auto">
				<button
					className="border-2 border-Yellow text-Yellow px-2 py-2 mt-4"
					type="submit"
				>
					Back
				</button>

				<h1 className="text-white font-bold text-3xl py-8">Event Name</h1>
				<div className="flex flex-col md:flex-row justify-center md:justify-start items-center">
					<Image
						src={exampleImage}
						alt="Description of your image"
						className="w-full max-h-96 mx-3 object-cover"
					/>
				</div>
				<h1 className="text-white font-bold text-3xl py-8">About the event</h1>
				<div className="text-white">
					<p>
						Meatloaf pastrami short loin, bacon biltong pork loin kevin t-bone
						doner. Tongue jerky kevin, turducken tail landjaeger rump. Ground
						round bacon burgdoggen alcatra. Salami strip steak shoulder brisket
						leberkas. Leberkas cupim sirloin porchetta. Meatloaf beef ribs tail
						shoulder t-bone corned beef short ribs strip steak shankle cupim
						sausage.
					</p>
					<br />
					<p>
						Meatloaf pastrami short loin, bacon biltong pork loin kevin t-bone
						doner. Tongue jerky kevin, turducken tail landjaeger rump. Ground
						round bacon burgdoggen alcatra. Salami strip steak shoulder brisket
						leberkas. Leberkas cupim sirloin porchetta. Meatloaf beef ribs tail
						shoulder t-bone corned beef short ribs strip steak shankle cupim
						sausage.
					</p>
				</div>

				<div className="innerWidth py-8">
					<h1 className="text-white font-bold text-3xl">Venue Details</h1>
					<div className="flex flex-col md:flex-row py-2 text-white font-normal">
						<p className="mb-4 md:mb-0 md:mr-4">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Error vel
							harum dolores tenetur dolorem libero.
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Error vel
							harum dolores tenetur dolorem libero.
						</p>
					</div>
					<div className="flex flex-col md:flex-row justify-around py-8 px-48 text-white text-center md:text-left">
						<div className="flex flex-wrap justify-center md:justify-between   w-full">
							<div className="flex flex-wrap justify-between md:justify-between gap-3 mx-4">
								<div className="text-center mb-4 md:mb-0 relative">
									<div className="relative inline-block px-8">
										<Image
											src={exampleImage}
											alt="Supporter 1"
											className="w-24 h-24 rounded-full object-cover mx-auto md:mx-0"
										/>
										<a
											href="YOUR_LINKEDIN_PROFILE"
											className="absolute bottom-0 left-14 transform translate-x-1/2 translate-y-1/2"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-6 w-6 text-blue-500"
												viewBox="0 0 20 20"
												fill="currentColor"
											>
												<path
													fillRule="evenodd"
													d="M3 4a2 2 0 00-2 2v8a2 2 0 002 2h4v-6H5V9h2V7.5c0-1.58.92-2.47 2.29-2.47 1.08 0 1.71.54 1.71 1.46V9h2v1h-2v6h3a2 2 0 002-2v-8a2 2 0 00-2-2H3Z"
													clip-rule="evenodd"
												/>
											</svg>
										</a>
									</div>
									<p>Organiser</p>
								</div>
								<div className="text-center mb-4 md:mb-0 relative">
									<div className="relative inline-block px-8">
										<Image
											src={exampleImage}
											alt="Supporter 1"
											className="w-24 h-24 rounded-full object-cover mx-auto md:mx-0"
										/>
										<a
											href="YOUR_LINKEDIN_PROFILE"
											className="absolute bottom-0 left-14 transform translate-x-1/2 translate-y-1/2"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-6 w-6 text-blue-500"
												viewBox="0 0 20 20"
												fill="currentColor"
											>
												<path
													fill-rule="evenodd"
													d="M3 4a2 2 0 00-2 2v8a2 2 0 002 2h4v-6H5V9h2V7.5c0-1.58.92-2.47 2.29-2.47 1.08 0 1.71.54 1.71 1.46V9h2v1h-2v6h3a2 2 0 002-2v-8a2 2 0 00-2-2H3Z"
													clip-rule="evenodd"
												/>
											</svg>
										</a>
									</div>
									<p>Organiser</p>
								</div>
								<div className="text-center mb-4 md:mb-0 relative px-8">
									<div className="relative inline-block">
										<Image
											src={exampleImage}
											alt="Supporter 1"
											className="w-24 h-24 rounded-full object-cover mx-auto md:mx-0"
										/>
										<a
											href="YOUR_LINKEDIN_PROFILE"
											className="absolute bottom-0 right-12 transform translate-x-1/2 translate-y-1/2"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-6 w-6 text-blue-500"
												viewBox="0 0 20 20"
												fill="currentColor"
											>
												<path
													fill-rule="evenodd"
													d="M3 4a2 2 0 00-2 2v8a2 2 0 002 2h4v-6H5V9h2V7.5c0-1.58.92-2.47 2.29-2.47 1.08 0 1.71.54 1.71 1.46V9h2v1h-2v6h3a2 2 0 002-2v-8a2 2 0 00-2-2H3Z"
													clip-rule="evenodd"
												/>
											</svg>
										</a>
									</div>
									<p>Organiser</p>
								</div>
								<div className="text-center mb-4 md:mb-0 relative">
									<div className="relative inline-block px-8">
										<Image
											src={exampleImage}
											alt="Supporter 1"
											className="w-24 h-24 rounded-full object-cover mx-auto md:mx-0"
										/>
										<a
											href="YOUR_LINKEDIN_PROFILE"
											className="absolute bottom-0 left-14 transform translate-x-1/2 translate-y-1/2"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-6 w-6 text-blue-500"
												viewBox="0 0 20 20"
												fill="currentColor"
											>
												<path
													fill-rule="evenodd"
													d="M3 4a2 2 0 00-2 2v8a2 2 0 002 2h4v-6H5V9h2V7.5c0-1.58.92-2.47 2.29-2.47 1.08 0 1.71.54 1.71 1.46V9h2v1h-2v6h3a2 2 0 002-2v-8a2 2 0 00-2-2H3Z"
													clip-rule="evenodd"
												/>
											</svg>
										</a>
									</div>
									<p>Organiser</p>
								</div>
							</div>
						</div>
					</div>
					<div className="flex justify-center items-center flex-col">
						<button className="bg-transparent text-Blue border-2 border-Blue w-24 flex justify-center">
							RSVP
						</button>
						<a
							href="#"
							className="text-Yellow text-2xl font-medium flex justify-center py-8 underline"
						>
							CLICK HERE FOR MORE DETAILS
						</a>
					</div>
				</div>
			</div>
			<Footer />
		</section>
	);
};

export default Event;
