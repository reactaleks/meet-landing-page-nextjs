import BtnComponent from "./BtnComponent";
import SectionNumberComponent from "./SectionNumberComponent";
import Image from "next/image";

export default function FooterComponent() {
  return (
    <div className="h-[540px] w-full grid grid-cols-12 grid-rows-12 relative">
        <div className="col-span-2 row-span-2 col-start-6 row-start-3 absolute top-5 z-20">
            <SectionNumberComponent sectionNumber={'02'} />

        </div>

      <nav className="h-[428px] relative col-span-12 row-span-10 row-start-4 ">
        <Image
          src={"/desktop/image-footer.jpg"}
          width={1440}
          height={308}
          alt=""
          className="absolute w-full h-full object-cover"
        />
        <div className="z-10 relative bg-teal h-full w-full bg-opacity-80 text-white text-center grid grid-cols-12 grid-rows-12">
          <h3 className="font-redhat text-[32px] font-bold col-span-10 col-start-2 row-span-2 row-start-3">
            Experience more together
          </h3>
          <p className="font-redhat font-light text-[18px] col-span-10 col-start-2 row-span-3 row-start-6">
            Stay connected with reliable HD meetings and unlimited one-on-one
            and group video sessions.
          </p>

          <BtnComponent
            btnSmall={false}
            btnColour="bg-purple col-span-4 row-span-2 col-start-4 row-start-9"
          />
        </div>
      </nav>
    </div>
  );
}
