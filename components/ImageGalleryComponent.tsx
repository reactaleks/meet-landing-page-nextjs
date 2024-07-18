import Image from "next/image"

export default function ImageGalleryComponent() {
    return (
        <>
            <Image src={'/desktop/image-woman-in-videocall.jpg'} height={484} width={510} alt="Woman in a video call" priority/>
            <Image src={'/desktop/image-women-videochatting.jpg'} height={484} width={510} alt="Women video chatting" priority/>
            <Image src={'/desktop/image-men-in-meeting.jpg'} height={484} width={510} alt="Men in meeting" priority/>
            <Image src={'/desktop/image-man-texting.jpg'} height={484} width={510} alt="Man texting" priority/>

        </>
    )
}