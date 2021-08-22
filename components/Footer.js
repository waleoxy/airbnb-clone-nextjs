import { aboutLinkData } from "../context/aboutLinkData";
import { communityLinkData } from "../context/communityLinkData";
import { hostLinkData } from "../context/hostLinkData";
import { supportLinkData } from "../context/supportLinkData";
import Link from "next/link";

function Footer() {
    return (
        <div className="md:flex justify-around items-start p-16 space-x-5 bg-gray-100">
            <div className="m-5">
                <h5 className="font-bold text-sm">ABOUT</h5>
                {aboutLinkData.map(link => (
                    <li key={link.id} className="list-none hover:underline my-3">
                        <Link key={link.id} href={link.url}>
                            <a>{link.text}</a>
                        </Link>
                    </li>
                ))}
            </div>
            <div className="m-5">
                <h5 className="font-bold text-sm">COMMUNITY</h5>
                {communityLinkData.map(link => (
                    <li key={link.id} className="list-none hover:underline my-3">
                        <Link href={link.url}>
                            <a>{link.text}</a>
                        </Link>
                    </li>
                ))}
            </div>
            <div className="m-5">
                <h5 className="font-bold text-sm">HOST</h5>
                {hostLinkData.map(link => (
                    <li key={link.id} className="list-none hover:underline my-3">
                        <Link key={link.id} href={link.url}>
                            <a>{link.text}</a>
                        </Link>
                    </li>
                ))}
            </div>
            <div className="m-5">
                <h5 className="font-bold text-sm">SUPPORT</h5>
                {supportLinkData.map(link => (
                    <li key={link.id} className="list-none hover:underline my-3">
                        <Link key={link.id} href={link.url}>
                            <a>{link.text}</a>
                        </Link>
                    </li>
                ))}
            </div>
        </div>

    )
}

export default Footer
