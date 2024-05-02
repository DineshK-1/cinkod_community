import exampleImage from "@/public/example.jpg";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Image from "next/image";

const About = () => {
	return (
		<section className="introduction overflow-x-hidden">
			<Header />
			<div className="titl flex flex-col pt-12 pl-4  ">
				<div className="text text-center b">
					<h1 className="text-Blue uppercase font-bold text-5xl tracking-normal ">
						cinkod <span className="text-Yellow uppercase">developer</span>{" "}
						community
					</h1>
					<br />
					<h2 className="text-Yellow ">
						We are happy to have you, find your college here.{" "}
					</h2>
					<br />
					<p className="text-white">
						A vibrant tech community crafted for students, where the sparks of
						code meet creativity. It’s a place where learning and <br />
						collaborationthrive, empowering students to turn their digital
						dreams into reality. In the heart of CINKOD, every <br />
						student finds a path to grow, connect, and innovate.
					</p>
				</div>
			</div>
			<div className="title flex flex-col bg-red-400">
				{/* Your title content */}
			</div>
			<div className="cards flex flex-wrap justify-center py-6 px-24">
				{/* Displaying the cards */}
				{[...Array(6)].map((_, index) => (
					<div
						key={index}
						className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-2"
					>
						{/* Your card content */}
						<div className="w-full h-40 bg-opacity-20 border-gray-100 rounded-lg shadow-md py-8 bg-gray-300 mx-auto"></div>
					</div>
				))}
			</div>
			<div>
				<div className="quotes text-center">
					<p className="text-white text-1xl font-semibold pt-8">
						<span className="text-Blue font-bold ">&quot;</span>Bacon ipsum
						dolor amet tri-tip biltong kielbasa pancetta picanha <br />
						tenderloinspan<span className="text-Blue">&quot;</span>
					</p>
					<p className="text-Blue font-extrabold">
						_ A community to help you grow for future challenges.
					</p>
				</div>
				<br />
				<div className="title flex flex-col py-2 pl-8">
					{/* Your title content */}
				</div>
				<div className="flexCenter paddings innerWidth">
					<div className="w-full h-full flex justify-center items-center">
						<div className="w-full sm:w-3/4 h-auto flex justify-center items-center bg-gradient-to-r from-Blue via-Yellow to-blue-800 rounded-lg shadow-md p-8">
							<div className="content flex flex-col">
								<h1 className="text-black text-center font-bold text-3xl pb-4">
									Open Cinkod community in your college
								</h1>
								<p className="text-blue flex justify-start mx-4 font-medium">
									Meatloaf pastrami short loin, bacon biltong pork loin kevin
									t-bone doner. Tongue jerky kevin, turducken tail landjaeger
									rump. Ground round bacon burgdoggen alcatra. Salami strip
									steak shoulder brisket leberkas. Leberkas cupim sirloin
									porchetta. Meatloaf beef ribs tail shoulder t-bone corned beef
									short ribs strip steak shankle cupim sausage.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="title flex flex-col py-10 pt-12 pl-8">
					{/* Your title content */}
				</div>
				<div className="aboutus-text text-white flex flex-col mx-4 lg:overflow-x-hidden md:mx-96">
					<h1 className="font-bold text-2xl mb-5">ABOUT US</h1>
					<p>
						Bacon ipsum dolor amet tri-tip biltong kielbasa pancetta picanha
						tenderloin. Pork loin corned beef beef ribs salami ham hock bresaola
						pork chop shank brisket cupim buffalo jowl. Ham hock chuck
						prosciutto hamburger cow landjaeger biltong frankfurter. Hamburger
						tongue kevin t-bone kielbasa ground round turkey prosciutto meatball
						andouille brisket.
					</p>
					<br />

					<p>
						Bacon ipsum dolor amet tri-tip biltong kielbasa pancetta picanha
						tenderloin. Pork loin corned beef beef ribs salami ham hock bresaola
						pork chop shank brisket cupim buffalo jowl. Ham hock chuck
						prosciutto hamburger cow landjaeger biltong frankfurter. Hamburger
						tongue kevin t-bone kielbasa ground round turkey prosciutto meatball
						andouille brisket.
					</p>

					<br />
					<p>
						{" "}
						Meatloaf pastrami short loin, bacon biltong pork loin kevin t-bone
						doner. Tongue jerky kevin, turducken tail landjaeger rump. Ground
						round bacon burgdoggen alcatra. Salami strip steak shoulder brisket
						leberkas. Leberkas cupim sirloin porchetta. Meatloaf beef ribs tail
						shoulder t-bone corned beef short ribs strip steak shankle cupim
						sausage.
					</p>
					<br />
					<p>
						{" "}
						Meatloaf pastrami short loin, bacon biltong pork loin kevin t-bone
						doner. Tongue jerky kevin, turducken tail landjaeger rump. Ground
						round bacon burgdoggen alcatra. Salami strip steak shoulder brisket
						leberkas. Leberkas cupim sirloin porchetta. Meatloaf beef ribs tail
						shoulder t-bone corned beef short ribs strip steak shankle cupim
						sausage.
					</p>
				</div>

				<div className="flex justify-center items-center mt-7 text-white">
					<div className="flex flex-col md:flex-row mx-4 md:mx-96">
						<div className="md:w-1/2 md:pr-4">
							<Image
								src={exampleImage}
								alt="Description of your image"
								className="w-full h-auto "
							/>
						</div>
						<div className="md:w-1/2 md:pl-4">
							<h2 className="text-2xl font-bold mb-4">
								We are{" "}
								<span className="text-Blue">
									committed to towards the development
								</span>{" "}
								of your skills and activity.
							</h2>
							<p className="text-lg">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
								eget turpis quis lorem sollicitudin blandit. Integer lacinia
								odio sit amet felis lobortis vehicula. Sed ultricies dui in
								felis consectetur
							</p>
						</div>
					</div>
				</div>
				<p className="text-white w-full md:w-1/2 text-justify mt-4 mx-4 md:mx-96">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quos
					necessitatibus eum facilis ipsa quaerat deleniti, laudantium cum
					voluptatem, perferendis nihil molestias. Dolores facilis corporis
					cupiditate, numquam, blanditiis quidem animi quisquam voluptas illo
					aut voluptatibus voluptate quae tenetur praesentium ut quas mollitia
					eos unde ratione porro, impedit explicabo consequatur beatae.
				</p>
			</div>
			<br />
			<div className="guildlines flex flex-col mx-4 w-full md:mx-96">
				<h1 className="font-normal text-Yellow text-4xl">CINKOD</h1>
				<h1 className="font-normal text-Blue text-2xl mb-5">
					COMMUNITY GUIDELINES
				</h1>
				<div className="font-normal text-white text-xl">
					<a
						href="#"
						className="mb-4 block border-b border-white w-full md:w-1/2 lg:w-1/3"
					>
						<h1 className="inline-block">
							Community Guideline
							<span className="inline-block ml-2 text-blue-500">+</span>
						</h1>
					</a>
					<a
						href="#"
						className="mb-4 block border-b border-white w-full md:w-1/2 lg:w-1/3"
					>
						<h1 className="inline-block">
							Privacy Policy
							<span className="inline-block ml-2 text-blue-500">+</span>
						</h1>
					</a>
					<a
						href="#"
						className="mb-4 block border-b border-white w-full md:w-1/2 lg:w-1/3"
					>
						<h1 className="inline-block">
							Terms and Condition
							<span className="inline-block ml-2 text-blue-500">+</span>
						</h1>
					</a>
				</div>
			</div>

			<div className="flexCenter paddings innerWidth">
				<div className="w-full h-full flex justify-center items-center">
					<div className="w-3/4 h-auto flex flex-col justify-center items-center bg-gradient-to-r from-Blue via-Yellow to-blue-800 rounded-lg shadow-md p-8">
						<div className="content flex flex-col">
							<h1 className="text-black text-center font-bold text-3xl pb-4">
								Supported By:
							</h1>
							<div className="supporters flex justify-center items-center flex-col sm:flex-row">
								<Image
									src={exampleImage}
									alt="Supporter 1"
									className="w-1/4  h-auto max-w-24 rounded-full object-cover mb-4 sm:mr-4"
								/>
								<Image
									src={exampleImage}
									alt="Supporter 2"
									className="w-1/4 h-auto max-w-24 rounded-full object-cover mb-4 sm:mr-4"
								/>
								<Image
									src={exampleImage}
									alt="Supporter 3"
									className="w-1/4 h-auto max-w-24 rounded-full object-cover mb-4 sm:mr-4"
								/>
								<Image
									src={exampleImage}
									alt="Supporter 4"
									className="w-1/4 h-auto max-w-24 rounded-full object-cover mb-4 sm:mr-4"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</section>
	);
};

export default About;
