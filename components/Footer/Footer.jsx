import Socials from "./socials";
import Image from "next/image";

function Footer() {
	return (
		<div>
			<footer className="bg-transparent text-white">
				<div className="w-full py-10 px-4">
					<div className="flex w-full lg:flex-nowrap flex-wrap justify-around gap-20 items-center">
						<div className="w-full lg:w-2/4 mb-6 lg:mb-0">
							<a
								href="/"
								className="flex flex-col items-start ml-6 mb-2 justify-center"
							>
								<Image
									src={"/Home/logo.png"}
									alt="Logo"
									width={100}
									height={80}
								/>
								<span className=" flex flex-row gap-2 mt-2  text-2xl font-bold  text-the-blue">
									CINKOD <span className="text-the-yellow">DEVELOPER</span>{" "}
									COMMUNITY
								</span>

								<div className="">
									<p className="text-gray-400 text-md mt-2">cin students;</p>
									<p className="text-gray-400 text-md ml-24">
										cout professionals;
									</p>
								</div>
							</a>
						</div>

						{/* <!-- Navigation Links --> */}
						<div className="w-full lg:w-1/2 mb-6 lg:mb-0">
							<div className="flex flex-wrap -mx-4">
								<div className="px-4 w-1/3">
									<h5 className=" uppercase font-bold text-the-blue mb-3">
										Home
									</h5>
									<ul className="list-none footer-links">
										<li>
											<a href="#" className="text-gray-400 hover:text-white">
												About us
											</a>
										</li>
										<li>
											<a href="#" className="text-gray-400 hover:text-white">
												Chapters
											</a>
										</li>
									</ul>
								</div>
								<div className="px-4 w-1/3">
									<h5 className=" uppercase font-bold mb-3 text-the-yellow">
										Community
									</h5>
									<ul className="list-none footer-links">
										<li>
											<a href="#" className="text-gray-400 hover:text-white">
												Upcoming Event
											</a>
										</li>
										<li>
											<a href="#" className="text-gray-400 hover:text-white">
												Blogs
											</a>
										</li>
									</ul>
								</div>
								<div className="px-4 w-1/3">
									<h5 className="text-the-blue uppercase font-bold mb-3">
										Legals
									</h5>
									<ul className="list-none footer-links">
										<li>
											<a href="#" className="text-gray-400 hover:text-white">
												Guidelines
											</a>
										</li>
										<li>
											<a href="#" className="text-gray-400 hover:text-white">
												Privacy Policy
											</a>
										</li>
										<li>
											<a href="#" className="text-gray-400 hover:text-white">
												Terms and Condition
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>

						{/* <!-- Social Links --> */}
						<div className="w-full lg:w-1/4 mb-6 lg:mb-0 lg:ml-24">
							<h5 className=" uppercase font-bold mb-2 text-the-blue ml-8">
								Follow us
							</h5>
							{/* <!-- Replace href with your social media links --> */}
							<div className="flex">
								<Socials />
							</div>
						</div>
					</div>

					{/* <!-- Horizontal Divider --> */}
					<hr className="my-6 mx-64 border-gray-700" />

					{/* <!-- Copyright Notice --> */}
					<div className="text-sm text-gray-400 flex justify-center items-center">
						<p>©2024 CINKOD Technologies Pvt Ltd. All rights reserved.</p>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default Footer;
