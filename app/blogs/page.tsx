import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Image from "next/image";
import Link from "next/link";
import { Blog } from "@/@types";
import axios from "axios";

async function getBlogs() {
    const blogs = await axios
        .get(process.env.NEXT_PUBLIC_HOST_URL + "/api/db/blogs/fetch")
        .then((res) => res.data)
        .catch((err) => {
            return [];
        });
    return blogs as Blog[];
}

const BlogsPage = async () => {
    const blogs = await getBlogs();

    return (
        <section className="blogs bg-background">
            <Header />
            <div className="text-white text-center mt-20 font-bold text-4xl ">
                <h1>Welcome to</h1>
                <h1 className="text-Blue">
                    CINKOD <span className="text-Yellow">DEVELOPER</span>{" "}
                    COMMUNITY
                </h1>
            </div>
            <div className="flex justify-center">
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-2/5 px-4 py-2 mt-3 mb-7 border rounded-md outline-none focus:border-blue-500 border-zinc-700 bg-transparent transition-all"
                />
            </div>

            <div className="flex justify-center mb-12 rounded-lg ">
                <div className="w-full md:w-4/5 lg:w-3/4 mb-12 bg-gradient-to-br from-Blue/20 to-transparent rounded-lg py-10 px-10">
                    {/* <div className="flex justify-between mt-2">
                        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                            Back
                        </button>
                        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                            Next
                        </button>
                    </div> */}
                    <div className="flex  text-white justify-center  mb-4">
                        {/* */}
                        <select className="mr-4 px-4 py-2 bg-gray-800 border border-gray-800 rounded-md">
                            <option value="option1">Categories</option>
                        </select>
                        {/* */}
                        <select className="px-4 py-2 bg-gray-800 border border-gray-800 rounded-md">
                            <option value="option1">Tags</option>
                        </select>
                    </div>

                    <div className="flex flex-col gap-6">
                        {blogs.map((card, index) => (
                            <div
                                key={card.id}
                                className={`relative bg-slate-900 rounded-lg shadow-lg overflow-hidden col-span-3  border-2 ${
                                    index === 0 ? "md:col-span-3" : ""
                                }`}
                            >
                                <div className="flex p-4">
                                    <Image
                                        src={``}
                                        alt={`Image${card.id}`}
                                        className="w-1/3 h-auto object-cover rounded-t-lg"
                                        width={100}
                                        height={100}
                                    />
                                    <div className="w-2/3 px-4 py-2 justify-between flex flex-col mb-6">
                                        <div className="">
                                            <h2 className="text-xl text-white font-bold mb-2">
                                                {card.title}
                                            </h2>
                                            <p className="text-white mb-24 py-2 text-sm">
                                                {card.description}
                                            </p>
                                        </div>
                                        <div className="flex flex-row gap-3 w-64 px-4">
                                            <button className="bg-yellow-500 hover:bg-yellow-400 text-slate-800 font-normal py-2 px-4 rounded">
                                                <Link href="/blogs/blogId">
                                                    UpVote!
                                                </Link>
                                            </button>
                                            <button className="bg-yellow-500 hover:bg-yellow-400 text-slate-800 font-normal py-2 px-4 rounded">
                                                <Link href="/blogs/blogId">
                                                    Comment!
                                                </Link>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <br />
            <Footer />
        </section>
    );
};

export default BlogsPage;
