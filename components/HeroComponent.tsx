import BtnComponent from "./BtnComponent";
import Image from "next/image";


export default function HeroComponent() {
  return (
    <>
      <Image src={'/desktop/image-hero-left.png'} width={394} height={303} alt=""/>
      <Image src={'/desktop/image-hero-right.png'} width={394} height={303} alt=""/>

      <h1>Group Chat for Everyone</h1>
      <p>
        Meet makes it easy to connect with others face-to-face virtually and
        collaborate across any device.
      </p>
      <BtnComponent btnSmall={false} btnColour="bg-teal"/>
      <BtnComponent btnSmall={true} btnColour="bg-purple"/>
    </>
  );
}
