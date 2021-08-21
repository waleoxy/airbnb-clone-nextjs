import Image from "next/image";
import { SearchIcon } from '@heroicons/react/solid';

function Header() {

    const myLoader = ({ src, width, quality }) => {
        return `https://links.papareact.com/${src}?w=${width}&q=${quality || 75}`
    }

    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md: px-10">
            {/*left component*/}
            <div className="relative flex items-center h-10 cursor-pointer my-auto">
                <Image
                    loader={myLoader}
                    src="qd3"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                />
            </div>
            {/*middle Search section*/}
            <div className="flex items-center md:border-2 rounded-full py-2">
                <input
                    className="pl-5 bg-tranparent"
                    type="text"
                    placeholder="start your search"
                />
                <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer" />
            </div>
            {/*right */}
            <div>

            </div>
        </header >
    )
}

export default Header
