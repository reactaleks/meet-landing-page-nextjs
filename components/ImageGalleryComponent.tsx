import Image from "next/image"
import SectionNumberComponent from "./SectionNumberComponent"

export default function ImageGalleryComponent() {
    return (
        <div className="w-[full] h-[374px] md:h-[223px] md:w-[689px] mx-auto grid grid-cols-12 grid-rows-12 gap-4 relative">
            <div className="row-span-2 col-span-2 col-start-6 row-start-1 absolute -top-24 md:left-0 md:right-0 md:-top-20 md:flex md:justify-center ">
                <SectionNumberComponent sectionNumber="01"/>
            </div>
            <Image src={'/desktop/image-woman-in-videocall.jpg'} height={484} width={510} className="w-[151px] h-[143px] md:w-[172px] md:h-[156px] col-span-5 row-span-6 col-start-2 row-start-2 rounded-xl md:col-start-1 md:col-span-3" alt="Woman in a video call" priority/>
            <Image src={'/desktop/image-women-videochatting.jpg'} height={484} width={510} className="w-[151px] h-[143px] md:w-[172px] md:h-[156px] col-span-5 row-span-6 col-start-7 row-start-2 rounded-xl md:col-start-4 md:col-span-3" alt="Women video chatting" priority/>
            <Image src={'/desktop/image-men-in-meeting.jpg'} height={484} width={510} className="w-[151px] h-[143px] md:w-[172px] md:h-[156px] col-span-5 row-span-6 col-start-2 row-start-7 rounded-xl md:row-start-2 md:col-start-7 md:col-span-3" alt="Men in meeting" priority/>
            <Image src={'/desktop/image-man-texting.jpg'} height={484} width={510} className="w-[151px] h-[143px] md:w-[172px] md:h-[156px] col-span-5 row-span-6 col-start-7 row-start-7 rounded-xl md:row-start-2 md:col-start-10 md:col-span-3" alt="Man texting" priority/>

        </div>
    )
}