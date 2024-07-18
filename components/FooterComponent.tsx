import BtnComponent from "./BtnComponent"
import Image from "next/image"


export default function FooterComponent() {
    return (
        <>

            <Image src={'/desktop/image-footer.jpg'} width={1440} height={308} alt=""/>
            <h3>Experience more together</h3>
            <p>Stay connected with reliable HD meetings and unlimited one-on-one and group video sessions.</p>

            <BtnComponent btnSmall={false} btnColour="bg-purple"/>
        </>
    ) 
}