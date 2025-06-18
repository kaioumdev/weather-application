/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import HeartIcon from "../../assets/heart.svg";
import HeartRed from "../../assets/heart-red.svg";
import { FavouriteContext } from "../../context";
const AddToFavourite = () => {
    const { addToFavourites, removeFromFavourites, favourites } = useContext(FavouriteContext);
    const [isFavourite, toggleFavourite] = useState(false);
    function handleFavourites() {
        toggleFavourite(!isFavourite);
    }
    return (
        <div className="md:col-span-2">
            <div className="flex items-center justify-end space-x-6">
                <button onClick={handleFavourites} className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]">
                    <span>Add to Favourite</span>
                    <img src={isFavourite ? HeartRed : HeartIcon} alt="HeartIcon" />
                </button>

            </div>
        </div>
    )
}

export default AddToFavourite