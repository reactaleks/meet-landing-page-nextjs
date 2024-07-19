import BtnComponent from "./BtnComponent";
import Image from "next/image";

export default function HeroComponent() {
  return (
    <div className="grid grid-cols-12 grid-rows-12 h-[620px] xl:h-[358px] relative overflow-hidden mb-44 md:mb-56">
      
        <Image
          src={"/desktop/image-hero-left.png"}
          width={394}
          height={303}
          alt=""
          className="w-[212px] h-[153px] -left-[20px] col-span-6 row-span-3 col-start-1 absolute
          md:w-[394px] md:h-[303px] md:row-span-6 xl:-left-[25px]
          "
        />
        <Image
          src={"/desktop/image-hero-right.png"}
          width={394}
          height={303}
          alt=""
          className="w-[212px] h-[153px] -right-[20px] col-span-6 row-span-3 col-start-7 absolute
          md:w-[394px] md:h-[303px] md:row-span-6 xl:-right-[25px]
          "
        />

   
        <h1 className="font-redhat text-headingm leading-headingm text-black mx-auto text-center font-black col-span-10 col-start-2 row-span-2 row-start-5
         md:col-span-6 md:col-start-4 md:row-span-2 md:row-start-8 md:text-[48px] md:leading-[48px] md:w-[339px] 
        xl:row-start-3 xl:col-span-4 xl:col-start-5 xl:text-headingxl xl:w-[445px]
        ">
          Group Chat for Everyone
        </h1>
        <p className="font-redhat text-overline leading-body text-gray text-center font-medium col-span-10 col-start-2 row-span-2 row-start-7
        md:col-span-6 md:mt-2 md:col-start-4 md:row-span-1 md:row-start-10
        xl:col-span-4 xl:col-start-5 xl:row-start-7 xl:text-body
        ">
          Meet makes it easy to connect with others face-to-face virtually and
          collaborate across any device.
        </p>

        <div className="h-[132px] w-full flex flex-col justify-between items-center row-span-3 col-span-4 row-start-9 col-start-5
        md:flex-row md:justify-around md:col-span-4 md:col-start-5 md:row-start-11
        xl:col-span-4 xl:col-start-5 xl:row-start-10 xl:h-[58px] xl:justify-center
        ">
        <BtnComponent btnSmall={false} btnColour="bg-teal md:mr-4" />
        <BtnComponent btnSmall={true} btnColour="bg-purple " />

        </div>


    </div>
  );
}
