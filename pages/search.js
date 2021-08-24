import { format } from "date-fns";
import { useRouter } from "next/dist/client/router";
import InfoCard from "../components/InfoCard";
const { default: Footer } = require("../components/Footer");
const { default: Header } = require("../components/Header");

function Search({ searchResults }) {
    const router = useRouter();
    const { location, startDate, endDate, noOfGuests } = router.query;
    const formattedStartDate = format(new Date(startDate), "MMM dd")
    const formattedEndDate = format(new Date(endDate), "MMM dd")
    const range = `${formattedStartDate} - ${formattedEndDate}`

    return (
        <div>
            <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`} />

            <main className="flex">
                <section className="flex-grow pt-14 px-6">
                    <p className="text-xs ">300+ stays - {range}- {noOfGuests} {({ noOfGuests } > 1) ? 'guests' : 'guest'}</p>
                    <h1 className="text-3xl font-semibold mt-2 mb-2">
                        Stays in {location}
                    </h1>
                    <div className="hidden md:inline-flex mb-5 
                    space-x-3 text-gray-800 whitespace-nowrap">
                        <p className="button">
                            Free cancellation
                        </p>
                        <p className="button">
                            Type of place
                        </p>
                        <p className="button">
                            Price
                        </p>
                        <p className="button">
                            Rooms and beds
                        </p>
                        <p className="button">
                            More filters
                        </p>
                    </div>
                    <div className="flex flex-col" >
                        {searchResults.map(item => (
                            <InfoCard
                                key={item.img}
                                img={item.img}
                                location={item.location}
                                title={item.title}
                                description={item.description}
                                star={item.star}
                                price={item.price}
                                total={item.total}

                            />
                        ))}
                    </div>

                </section>

            </main>
            <Footer />
        </div>
    )
}

export default Search

export async function getServerSideProps() {
    const searchResults = await fetch("https://links.papareact.com/isz")
        .then(response => response.json())
    return {
        props: {
            searchResults
        }
    }
}
