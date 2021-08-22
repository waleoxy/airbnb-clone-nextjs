import Image from "next/image";

function MediumCard({ img, title }) {
    const myLoader = ({ src, width, quality }) => {
        return `${src}?w=${width}&q=${quality || 75}`
    }

    return (
        <div className="hover: cursor-pointer hover:scale-105 
        transition transform duration-300 ease-out">
            <div className="relative h-80 w-80">
                <Image
                    className="rounded-xl"
                    loader={myLoader}
                    src={img}
                    layout='fill'
                />
            </div>
            <h3 className="text-2xl mt-3">{title}</h3>
        </div>
    )
}

export default MediumCard
