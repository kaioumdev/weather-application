/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import SearchIcon from "../../assets/search.svg"
import { LocationContext } from "../../context";
import { getLocationByName } from "../../data/location-data";
import { useDebounce } from "../../hooks";

const Search = () => {
    // const [searchTerm, setSearchTerm] = useState("");
    const { setSelectedLocation } = useContext(LocationContext);

    const doSearch = useDebounce((term) => {
        const fetchedLocation = getLocationByName(term);
        setSelectedLocation({ ...fetchedLocation });
    }, 500);
    const handleChange = (e) => {
        const value = e.target.value;
        // setSearchTerm(value);
        // Debounce the search term update
        doSearch(value);
    }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log("Search Term:", searchTerm);
    //     const fetchedLocation = getLocationByName(searchTerm);
    //     console.log("Fetched Location:", fetchedLocation);
    //     setSelectedLocation({ ...fetchedLocation });
    // }
    return (
        <form action="#">
            <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
                <input
                    // onChange={(e) => setSearchTerm(e.target.value)} 
                    onChange={handleChange}
                    className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
                    type="search" placeholder="Search Location" required />
                <button type="submit">
                    <img src={SearchIcon} />
                </button>
            </div>
        </form>
    )
}

export default Search