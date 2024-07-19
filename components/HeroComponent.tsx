import BtnComponent from "./BtnComponent";
import Image from "next/image";

export default function HeroComponent() {
  return (
    <div className="grid grid-cols-12 grid-rows-12 h-[620px] relative overflow-hidden mb-44">
      
        <Image
          src={"/desktop/image-hero-left.png"}
          width={394}
          height={303}
          alt=""
          className="w-[212px] h-[153px] -left-[20px] col-span-6 row-span-3 col-start-1 absolute"
        />
        <Image
          src={"/desktop/image-hero-right.png"}
          width={394}
          height={303}
          alt=""
          className="w-[212px] h-[153px] -right-[20px] col-span-6 row-span-3 col-start-7 absolute"
        />

   
        <h1 className="font-redhat text-headingm leading-headingm text-black text-center font-extrabold col-span-10 col-start-2 row-span-2 row-start-5">
          Group Chat for Everyone
        </h1>
        <p className="font-redhat text-overline leading-body text-gray text-center font-medium col-span-10 col-start-2 row-span-2 row-start-7">
          Meet makes it easy to connect with others face-to-face virtually and
          collaborate across any device.
        </p>

        <div className="h-[132px] w-full flex flex-col justify-between items-center row-span-3 col-span-4 row-start-9 col-start-5">
        <BtnComponent btnSmall={false} btnColour="bg-teal " />
        <BtnComponent btnSmall={true} btnColour="bg-purple " />

        </div>


    </div>
  );
}
