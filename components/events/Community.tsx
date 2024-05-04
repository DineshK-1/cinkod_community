"use client";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import EventPage from "@/components/events/EventPage";
import { Event } from "@/@types";

interface CommunityProps {
    events: Event[];
}

const Community: React.FC<CommunityProps> = ({ events }) => {
    return (
        <section className="community relative bg-background">
            <Header />
            <div className="text-white text-center mt-20 font-bold text-4xl ">
                <h1>Welcome to</h1>
                <h1 className="text-Blue">
                    CINKOD <span className="text-Yellow">DEVELOPER</span>{" "}
                    COMMUNITY
                </h1>
            </div>
            <EventPage events={events} />
            <br />
            <Footer />
        </section>
    );
};

export default Community;
