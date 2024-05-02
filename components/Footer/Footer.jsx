import React from "react";
import Socials from "./socials";
import Image from "next/image";

function Footer() {
	return (
		<div>
			<footer class="bg-transparent text-white">
				<div class="w-full py-10 px-4">
					<div class="flex w-full  lg:flex-nowrap flex-wrap justify-around gap-20 items-center">
						<div class="w-full  lg:w-2/4 mb-6 lg:mb-0">
							<a href="/" class="flex flex-col items-start ml-6 justify-center">
								<Image
									src={"/Home/logo"}
									alt="Logo"
									className="h-20 w-auto"
									width={100}
									height={100}
								/>
								<span class=" flex flex-row gap-2 mt-2  text-2xl font-bold  text-the-blue">
									CINKOD <span className="text-the-yellow">DEVELOPER</span>{" "}
									COMMUNITY
								</span>

								<div className="">
									<p class="text-gray-400 text-md mt-2">cin students;</p>
									<p class="text-gray-400 text-md ml-24">cout professionals;</p>
								</div>
							</a>
						</div>

						{/* <!-- Navigation Links --> */}
						<div class="w-full lg:w-1/2 mb-6 lg:mb-0">
							<div class="flex flex-wrap -mx-4">
								<div class="px-4 w-1/3">
									<h5 class=" uppercase font-bold text-the-blue mb-3">Home</h5>
									<ul class="list-none footer-links">
										<li>
											<a href="#" class="text-gray-400 hover:text-white">
												About us
											</a>
										</li>
										<li>
											<a href="#" class="text-gray-400 hover:text-white">
												Chapters
											</a>
										</li>
									</ul>
								</div>
								<div class="px-4 w-1/3">
									<h5 class=" uppercase font-bold mb-3 text-the-yellow">
										Community
									</h5>
									<ul class="list-none footer-links">
										<li>
											<a href="#" class="text-gray-400 hover:text-white">
												Upcoming Event
											</a>
										</li>
										<li>
											<a href="#" class="text-gray-400 hover:text-white">
												Blogs
											</a>
										</li>
									</ul>
								</div>
								<div class="px-4 w-1/3">
									<h5 class="text-the-blue uppercase font-bold mb-3">Legals</h5>
									<ul class="list-none footer-links">
										<li>
											<a href="#" class="text-gray-400 hover:text-white">
												Guidelines
											</a>
										</li>
										<li>
											<a href="#" class="text-gray-400 hover:text-white">
												Privacy Policy
											</a>
										</li>
										<li>
											<a href="#" class="text-gray-400 hover:text-white">
												Terms and Condition
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>

						{/* <!-- Social Links --> */}
						<div class="w-full lg:w-1/4 mb-6 lg:mb-0 lg:ml-24">
							<h5 class=" uppercase font-bold mb-2 text-the-blue ml-8">
								Follow us
							</h5>
							{/* <!-- Replace href with your social media links --> */}
							<div class="flex">
								<Socials />
							</div>
						</div>
					</div>

					{/* <!-- Horizontal Divider --> */}
					<hr class="my-6 mx-64 border-gray-700" />

					{/* <!-- Copyright Notice --> */}
					<div class="text-sm text-gray-400 flex justify-center items-center">
						<p>©2024 CINKOD Technologies Pvt Ltd. All rights reserved.</p>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default Footer;
