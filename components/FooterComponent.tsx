import BtnComponent from "./BtnComponent";
import SectionNumberComponent from "./SectionNumberComponent";
import Image from "next/image";

export default function FooterComponent() {
  return (
    <div className="h-[540px] xl:h-[410px] w-full grid grid-cols-12 grid-rows-12 relative">
        <div className="col-span-2 row-span-2 col-start-6 row-start-3 absolute top-5 md:top-4 xl:top-2 z-20 md:col-start-6 md:left-0 md:right-0 md:flex md:justify-center">
            <SectionNumberComponent sectionNumber={'02'} />

        </div>

      <footer className="h-[428px] xl:h-[308px] relative col-span-12 row-span-10 row-start-4 

      ">
        <Image
          src={"/desktop/image-footer.jpg"}
          width={1440}
          height={308}
          alt=""
          className="absolute w-full h-full object-cover"
        />
        <div className="z-10 relative bg-teal h-full w-full bg-opacity-80 text-white text-center grid grid-cols-12 grid-rows-12 xl:items-center

        ">
          <h3 className="font-redhat text-[32px] font-black col-span-10 col-start-2 row-span-2 row-start-3
          md:col-span-6 md:col-start-4 xl:col-start-2 xl:row-start-6 xl:col-span-3 xl:text-start xl:text-headingm
          ">
            Experience more together
          </h3>
          <p className="font-redhat font-light text-[18px] col-span-10 col-start-2 row-span-3 row-start-6
          md:col-span-8 md:col-start-3 xl:col-span-3 xl:col-start-6 xl:text-start xl:row-start-5 
          ">
            Stay connected with reliable HD meetings and unlimited one-on-one
            and group video sessions.
          </p>

          <BtnComponent
            btnSmall={false}
            btnColour="bg-purple col-span-4 row-span-2 col-start-4 row-start-9 md:col-start-5 md:mx-auto md-col-span-3 xl:col-start-9 xl:row-start-5"
          />
        </div>
      </footer>
    </div>
  );
}
