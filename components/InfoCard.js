const { StarIcon } = require("@heroicons/react/solid")
const { HeartIcon } = require("@heroicons/react/outline")
const { default: Image } = require("next/image")

function InfoCard({ img, location, title, description, star, price, total }) {

    const myLoader = ({ src, width, quality }) => {
        return `${src}?w=${width}&q=${quality || 75}`
    }

    return (
        <div className="py-7 px-2 md:flex mb-5
         mt-5 border-b cursor-pointer hover:opacity 
         hover:shadow-lg transiton duration-200
         ease-out first:border-t">
            <div className="relative">
                <div className="relative h-72 w-full md:h-56 md:w-80">
                    <Image
                        className="rounded-2xl"
                        loader={myLoader}
                        src={img}
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <HeartIcon className="absolute md:hidden fill-current right-5 top-2 h-7 cursor-pointer" />
            </div>
            <div className="flex flex-col flex-grow pl-2">
                <div className="flex justify-between">
                    <p>{location} </p>
                    <HeartIcon className="invisible md:visible h-7 cursor-pointer" />
                </div>
                <h4 className="text-xl">{title} </h4>
                <div className="border-b w-10 pt-2" />
                <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>

                <div className="flex justify-between items-end">
                    <p className="flex items-center">
                        <StarIcon className="h-5 text-red-400" />
                        {star}
                    </p>
                    <div className="text-lg font-semibold pb-2 lg:text-2xl">
                        <p>
                            {price}
                        </p>
                        <p className="text-right font-extralight">
                            {total}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoCard
