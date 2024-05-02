import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Blog from "@/public/ChaptersCollege/blog-bg.png";
import Image from "next/image";
import Link from "next/link";

function BlogSpecf() {
	return (
		<>
			<div className="overflow-x-hidden relative px-28 bg-[#121212] h-full">
				<Header />

				<div className=" relative flex justify-center items-center h-full ">
					<div
						className="absolute w-80 h-80 rounded-full"
						style={{
							background:
								"linear-gradient(to bottom right, var(--color1), var(--color2), var(--color3))",
							"--color1": "rgb(241, 236, 33)",
							"--color2": "rgb(62, 141, 137)",
							"--color3": "rgb(1, 160, 225)",
							filter: "blur(7.66rem)",
							zIndex: "-1",
						}}
					></div>

					<div className="flex flex-col items-center">
						<section className="flex flex-col justify-center w-full items-center">
							<div className="text-white text-center mt-20 font-bold text-4xl ">
								<h1>Welcome to</h1>
								<h1 className="text-the-blue">
									CINKODE <span className="text-the-yellow">DEVELOPER</span>{" "}
									COMMUNITY
								</h1>
							</div>
						</section>

						<section className="h-full mt-16 flex flex-col items-center">
							<div className="h-full bg-gradient-to-tr from-cyan-400/30 via-teal-400/40  to-yellow-300/30 border border-white rounded-lg ml-16 mr-16 mb-16 flex flex-col justify-center items-center w-full">
								<div className="back flex justify-start mb-8 w-full ml-24">
									<button className="border-yellow-400 text-yellow-400 hover:bg-yellow-500 hover:text-white mt-8 border py-1 px-4">
										<Link href="/blogs">Back</Link>
									</button>
								</div>

								<div className=" flex justify-center w-full items-center relative">
									<Image
										className="bg-cover h-[23rem] w-full mx-16"
										src={Blog}
										alt=""
									/>
									<h1 className="absolute text-white text-8xl font-semibold">
										BLOG BANNER
									</h1>
								</div>

								<div className="head text-white text-2xl text-left w-full font-semibold ml-56 mb-12 mt-8  ">
									<h1>Title of the Blog</h1>
								</div>

								<div className="content flex flex-col  justify-center text-lg text-white text-left items-start w-4/5">
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Quam, libero magni? Repellendus deleniti numquam est
										molestias suscipit beatae exercitationem molestiae labore.
										Quis numquam officiis maxime architecto ea error recusandae
										eum deleniti placeat sapiente dicta libero, perspiciatis
										quos nobis aut accusamus repellendus voluptate dolore veniam
										autem voluptatibus repellat reprehenderit facilis tenetur!
										Nemo ea cumque quasi.
										<br /> <br /> Aspernatur eius illo neque rem facilis
										dignissimos quo vitae perferendis necessitatibus unde non
										doloremque, alias ab odio delectus atque voluptas. Voluptate
										in amet earum eos non corporis repudiandae atque deserunt
										asperiores unde odit ipsa cumque reiciendis fugit beatae,
										dicta incidunt architecto nisi.
										<br /> <br />
										Vitae perspiciatis est temporibus quibusdam incidunt eius
										dolorum quae possimus voluptates molestiae quod, consectetur
										consequatur illum fugiat expedita, iusto praesentium ipsum
										cupiditate fugit, odio cum cumque deleniti quasi animi!
										Corporis, debitis neque? Iure tempore blanditiis alias
										quaerat libero ad velit dolorum, officiis tenetur cumque
										animi quia assumenda at veniam commodi, id laborum
										molestiae! Impedit, obcaecati. Nemo aliquam aliquid officiis
										minima illo distinctio eius temporibus perferendis
										cupiditate iste adipisci quisquam vero eos voluptatem
										doloribus expedita provident vel ipsa praesentium odio
										recusandae, alias maxime enim. Vero sapiente aperiam
										expedita tenetur doloribus saepe consectetur corrupti optio
										at autem exercitationem dolore maxime dolorum veritatis
										rerum architecto placeat veniam, sequi blanditiis minima
										aspernatur reprehenderit ut! Optio tenetur voluptas quis
										error aspernatur a veritatis! Voluptatum nulla voluptatem
										recusandae commodi, quas iure ab quisquam odit, vel
										voluptates atque unde ratione amet quos vitae! Accusantium
										incidunt soluta ipsam fuga ex sint dolor rerum omnis
										ducimus, nostrum voluptatibus tempora maiores amet.
										<br />
										<br /> Quia sed in eveniet provident a qui harum, ut illum
										obcaecati vel expedita, quis sapiente at dolore dolorum
										libero excepturi velit delectus. Perferendis vitae velit
										deserunt architecto aliquid, quibusdam repellat tempore ex
										saepe magni sed possimus corporis repellendus! Laudantium
										minus libero dolores. Cum quidem ab dolore, atque dolorem
										aperiam reiciendis tenetur explicabo praesentium sit, iusto
										pariatur placeat aliquam unde sunt est error molestias.
										Error, possimus? Animi porro placeat optio sit, molestias
										quibusdam omnis? Praesentium quasi, eaque atque
										exercitationem fugiat libero, nam ipsam non fugit quidem
										facilis odio nobis. Reprehenderit laboriosam, nulla aliquam
										exercitationem esse vero in dolor nostrum quasi veritatis
										delectus soluta magni est unde architecto incidunt assumenda
										ratione itaque! Facere ducimus quos ratione, modi porro ab
										quod blanditiis reiciendis cumque odit dignissimos at a
										magnam voluptatum neque dolore corrupti laudantium. Deleniti
										aliquam odio natus repudiandae? Adipisci omnis reiciendis
										animi doloremque aperiam. Quam deserunt at fugiat magnam
										voluptas voluptates laborum beatae explicabo aperiam, omnis
										enim necessitatibus placeat tempore earum sequi optio,
										obcaecati itaque accusantium, reiciendis modi? Quo fuga,
										illum suscipit est ad facere aspernatur accusantium eius
										dolorem hic minima totam impedit, omnis a! Necessitatibus
										quaerat nisi eos eveniet pariatur, assumenda consequatur
										earum, ipsum a, nulla eum unde et voluptates sint fugiat
										perspiciatis cum. Soluta quis necessitatibus at officia fuga
										nesciunt autem eveniet non ut. Voluptate adipisci amet ipsam
										odit modi vero, nesciunt iusto. <br />
										<br /> Beatae tenetur inventore modi harum odit, itaque
										nobis, tempore quaerat et, iste ab voluptate. Sequi, tempora
										esse velit ducimus in non dicta rerum. Nam facere itaque
										officiis cupiditate nemo suscipit, necessitatibus doloribus,
										corrupti excepturi cum autem sint eaque neque obcaecati
										nulla beatae quam velit tempora aspernatur reprehenderit et.
										Porro reiciendis minus, repellat, natus quaerat laborum
										tenetur voluptate a necessitatibus quas aperiam sequi,
										doloremque adipisci molestias numquam illum suscipit. Magni
										asperiores in dolorem recusandae rem exercitationem facilis
										voluptas quia! Minus ullam odio doloremque aperiam ipsum
										repellat dolor, unde adipisci minima. Quam sequi cumque
										reprehenderit quis exercitationem ratione.
									</p>
								</div>

								<div className="back flex justify-center mb-12 w-full text-xl  mt-8 ml-24">
									<button className="border-yellow-400 hover:bg-yellow-500 hover:text-white text-yellow-400  border py-1 px-4">
										Next
									</button>
								</div>
							</div>
						</section>
					</div>

					{/* ******** NEXT SECTION****** */}
				</div>

				<Footer />
			</div>
		</>
	);
}

export default BlogSpecf;
