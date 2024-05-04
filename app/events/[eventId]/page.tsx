import exampleImage from "@/public/example.jpg";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import axios from "axios";
import { Event } from "@/@types";

async function getData(eventId: string) {
    try {
        const res = await axios.get(
            process.env.NEXT_PUBLIC_HOST_URL + `/api/db/event/${eventId}`
        );
        return res.data as Event;
    } catch (err) {
        console.error(err);
    }
    return undefined;
}

const EventPage = async ({ params }: { params: { eventId: string } }) => {
    const event = await getData(params.eventId);

    if (event === undefined) {
        return <div>404</div>;
    }

    return (
        <section className="event-display bg-background">
            <Header />
            <div className="text-white text-center font-bold py-8">
                <h1 className="text-2xl md:text-5xl lg:text-6xl">Welcome to</h1>
                <h1 className="text-Blue text-2xl md:text-5xl lg:text-6xl">
                    CINKOD <span className="text-Yellow">DEVELOPER</span>{" "}
                    COMMUNITY
                </h1>
            </div>
            <div className="h-auto bg-gradient-to-br from-Blue/20 to-transparent rounded-3xl mt-4 mb-16 px-5 md:px-20 md:mx-32">
                <button
                    className="text-Yellow px-2 py-2 mt-4 text-lg"
                    type="submit"
                >
                    🔙
                </button>

                <div className="heading grid grid-cols-1 md:grid-cols-2 gap-5 m-10">
                    <div className="maindeets flex flex-col gap-6">
                        <h1 className="text-white font-semibold text-2xl md:text-3xl mt-4">
                            {event.name}
                        </h1>
                        <p className="text-sm">📍 {event.venue}</p>
                        <p className="">{event.description}</p>
                    </div>
                    <Image
                        src={exampleImage}
                        alt="Description of your image"
                        className="w-full max-h-96 object-cover rounded-xl"
                    />
                </div>

                <div className="rsvp flex flex-col items-center m-6">
                    <div className="w-64 mb-2">
                        <button className="w-full text-black bg-amber-300 border-2 border-black rounded-2xl text-xl p-3 font-semibold">
                            RSVP NOW!
                        </button>
                    </div>
                    <a
                        href="#"
                        className="text-sm text-center text-amber-300 underline cursor-pointer"
                    >
                        More info
                    </a>
                </div>

                <div className="flex flex-col md:flex-row justify-around py-8 px-48 text-white text-center md:text-left mt-10">
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
                                                clipRule="evenodd"
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
                                                fillRule="evenodd"
                                                d="M3 4a2 2 0 00-2 2v8a2 2 0 002 2h4v-6H5V9h2V7.5c0-1.58.92-2.47 2.29-2.47 1.08 0 1.71.54 1.71 1.46V9h2v1h-2v6h3a2 2 0 002-2v-8a2 2 0 00-2-2H3Z"
                                                clipRule="evenodd"
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
                                                fillRule="evenodd"
                                                d="M3 4a2 2 0 00-2 2v8a2 2 0 002 2h4v-6H5V9h2V7.5c0-1.58.92-2.47 2.29-2.47 1.08 0 1.71.54 1.71 1.46V9h2v1h-2v6h3a2 2 0 002-2v-8a2 2 0 00-2-2H3Z"
                                                clipRule="evenodd"
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
                                                fillRule="evenodd"
                                                d="M3 4a2 2 0 00-2 2v8a2 2 0 002 2h4v-6H5V9h2V7.5c0-1.58.92-2.47 2.29-2.47 1.08 0 1.71.54 1.71 1.46V9h2v1h-2v6h3a2 2 0 002-2v-8a2 2 0 00-2-2H3Z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </a>
                                </div>
                                <p>Organiser</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </section>
    );
};

export default EventPage;
