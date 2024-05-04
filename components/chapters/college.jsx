import Example from "@/public/example.jpg";
import Image from "next/image";
import Link from "next/link";

function College({ college }) {
    return (
        <div>
            <div className="bg-gray-800 rounded-lg flex flex-col md:flex-row gap-10 p-4 shadow-lg">
                <div className="w-full">
                    <Image src={Example} alt="" />
                </div>

                <div className="w-full flex flex-col gap-2 justify-between">
                    <div className="flex flex-col gap-2">
                        <h3 className="text-xl font-bold">{college.name}</h3>
                        <p className="text-gray-400">{college.description}</p>
                    </div>
                    <Link
                        href={`/chapters/${college.id}`}
                        className="mt-4 bg-yellow-500 text-black py-2 px-4 rounded-lg hover:bg-yellow-400 font-medium text-center cursor-pointer"
                    >
                        <span>View More</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default College;
