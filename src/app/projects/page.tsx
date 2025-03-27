import Image, {StaticImageData} from "next/image"
import firstImage from "../../../public/images/first.png"
import secondImage from "../../../public/images/second.png"
import {Metadata} from "next";

export const metadata:Metadata = {
    title: "Projects",
    description: "Halaman projects saya",
    openGraph: {
        images: "https://example.com/default-image.jpg",
        url: "https://example.com",
    }
}

export default function Page({metadata}: any) {
    return (
        <div className={"container mx-auto px-4 py-14 bg-[#f5f5f5]"}>
            <header>
                <h1 className="font-bold text-4xl text-zinc-800">Project Saya</h1>
                <p className={"text-base mt-6 text-zinc-600"}>Berikut adalah beberapa project saya yang telah saya kerjakan.</p>
            </header>
            <div className={"mt-8"}>
                <h2 className={"text-2xl text-black"}>Aplikasi</h2>
                <ul className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16 mt-8"}>
                    <ProjectItem title="Guardian Tales" url={"https://example.com"} urlDisplay={"Guardian Tales"} imageSrc={firstImage} />
                    <ProjectItem title="Dungeon Link" url={"https://example.com"} urlDisplay={"Guardian Tales"} imageSrc={secondImage} />
                </ul>
            </div>
        </div>
    )
}

type ProjectItemProps = {
    title: string
    url: string
    urlDisplay: string
    imageSrc: StaticImageData
}

function ProjectItem({ title, url, urlDisplay, imageSrc }: ProjectItemProps) {
    return (
        <li>
            <a href={url}>
                <div className={"max-w-sm rounded overflow-hidden shadow-lg"}>
                    <Image className={"w-full"} src={imageSrc} alt={title} />
                    <div className={"px-6 py-4"}>
                        <div className={"font-bold text-black text-xl mb-2"}>{title}</div>
                    </div>
                    <div className="px-6 pb-4">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            {urlDisplay}
                        </span>
                    </div>
                </div>
            </a>
        </li>
    )
}