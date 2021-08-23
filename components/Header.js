import Image from "next/image";
import {
    SearchIcon,
    GlobeAltIcon,
    UserCircleIcon,
    UsersIcon,
    MenuIcon,
} from '@heroicons/react/solid';
import { useState } from "react";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';

function Header() {

    const [searchIput, setSearchIput] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date())
    const [noOfGuests, setNoOfGuests] = useState('1')

    const myLoader = ({ src, width, quality }) => {
        return `https://links.papareact.com/${src}?w=${width}&q=${quality || 75}`
    }

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection'
    }

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }
    const resetInput = () => {
        setSearchIput('');
    }

    return (
        <header className="sticky top-0 z-50 
        grid grid-cols-3 bg-white shadow-md p-5 
        md: px-10">
            {/*left component*/}
            <div className="relative flex items-center
             h-10 cursor-pointer my-auto">
                <Image
                    loader={myLoader}
                    src="qd3"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                />
            </div>
            {/*middle Search section*/}
            <div className="flex items-center md:border-2 
            rounded-full py-2 md:shadow-sm">
                <input
                    value={searchIput}
                    className="pl-5 bg-transparent  
                    flex-grow outline-none text-sm
                    text-gray-600 placeholder-gray-400"
                    type="text"
                    placeholder="start your search"
                    onChange={(event) => setSearchIput(event.target.value)}
                />
                {console.log('my', searchIput)}
                <SearchIcon className="hidden md:inline-flex 
                h-8 bg-red-400 text-white 
                rounded-full p-2 cursor-pointer 
                md:mx-2" />
            </div>
            {/*right side of the header */}

            <div className="flex items-center justify-end
            space-x-4 text-gray-500">
                <p className="hidden md:inline cursor-pointer">Become a host</p>
                <GlobeAltIcon className="h-6 cursor-pointer" />
                <div className="flex items-center space-x-2 
                border-2 p-2 rounded-full">
                    <MenuIcon className="h-6 cursor-pointer" />
                    <UserCircleIcon className="h-6 cursor-pointer" />
                </div>
            </div>
            {searchIput && (
                <div className="flex flex-col col-span-3 mx-">
                    <DateRangePicker
                        ranges={[selectionRange]}
                        onChange={handleSelect}
                        minDate={new Date()}
                        rangeColors={["#fd5861"]} />
                    <div className="flex items-center border-b mb-4">
                        <h2 className="text-2xl flex-grow font-semibold ">
                            Number of Guest
                        </h2>
                        <UsersIcon className="h-5" />
                        <input
                            type="number"
                            input={noOfGuests}
                            min={1}
                            onChange={(event) => setNoOfGuests(event.target.value)}
                            className="w-12 pl-2
                            text-lg outline-none text-red-400" />
                    </div>
                    <div className="flex">
                        <button
                            className="flex-grow text-gray-500"
                            onClick={resetInput}
                        >
                            Cancel
                        </button>
                        <button
                            className="flex-grow text-red-400"
                        //onClick={}
                        >
                            Search
                        </button>
                    </div>
                </div>
            )}
        </header >
    )
}

export default Header
