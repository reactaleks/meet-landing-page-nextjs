import Image from "next/image"
import SectionNumberComponent from "./SectionNumberComponent"

export default function ImageGalleryComponent() {
    return (
        <div className="w-[full] h-[374px] mx-auto grid grid-cols-12 grid-rows-12 gap-4 relative">
            <div className="row-span-2 col-span-2 col-start-6 row-start-1 absolute -top-24">
                <SectionNumberComponent sectionNumber="01"/>
            </div>
            <Image src={'/desktop/image-woman-in-videocall.jpg'} height={484} width={510} className="w-[151px] h-[143px] col-span-5 row-span-6 col-start-2 row-start-2 rounded-xl" alt="Woman in a video call" priority/>
            <Image src={'/desktop/image-women-videochatting.jpg'} height={484} width={510} className="w-[151px] h-[143px] col-span-5 row-span-6 col-start-7 row-start-2 rounded-xl" alt="Women video chatting" priority/>
            <Image src={'/desktop/image-men-in-meeting.jpg'} height={484} width={510} className="w-[151px] h-[143px] col-span-5 row-span-6 col-start-2 row-start-7 rounded-xl" alt="Men in meeting" priority/>
            <Image src={'/desktop/image-man-texting.jpg'} height={484} width={510} className="w-[151px] h-[143px] col-span-5 row-span-6 col-start-7 row-start-7 rounded-xl" alt="Man texting" priority/>

        </div>
    )
}