import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import axios from "axios";
import EventPage from "@/components/events/EventPage";
import { Event } from "@/@types";

async function getData() {
    const res = await axios
        .get(process.env.NEXT_PUBLIC_HOST_URL + "/api/db/events/fetch")
        .catch((err) => {
            console.log(err);
            return { data: [] };
        });

    return res.data as Event[];
}

const Community = async () => {
    // const [selectedCategory, setSelectedCategory] = useState(null);
    // const [selectedTag, setSelectedTag] = useState(null);

    // const [colleges, setColleges] = useState<College[]>([]);

    // useEffect(() => {
    // 	getData().then((data) => {
    // 		setColleges(data);
    // 	});
    // }, []);

    // const cards = Array.from({ length: 9 }).map((_, index) => ({
    // 	id: index + 1,
    // 	title: `Title ${index + 1}`,
    // 	description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    // 	category: index % 2 === 0 ? "Category A" : "Category B",
    // 	tags: ["Tag A", "Tag B"],
    // }));

    const events = await getData();

    // const filterByCategory = (event: any) => {
    // 	const category = event.target.value;
    // 	setSelectedCategory(category === "All Categories" ? null : category);
    // 	setSelectedTag(null);
    // };

    // const filterByTag = (event: any) => {
    // 	const tag = event.target.value;
    // 	setSelectedTag(tag === "All Tags" ? null : tag);
    // 	setSelectedCategory(null);
    // };

    // const cardMatchesFilters = (card: any) => {
    // 	if (selectedCategory && card.category !== selectedCategory) {
    // 		return false;
    // 	}
    // 	if (selectedTag && !card.tags.includes(selectedTag)) {
    // 		return false;
    // 	}
    // 	return true;
    // };

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
