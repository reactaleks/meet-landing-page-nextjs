interface PropTypes {
  sectionNumber: string;
}

export default function SectionNumberComponent({ sectionNumber }: PropTypes) {
  return (
      <div className="relative w-[56px] h-[56px] bg-white text-gray border border-opacity-15 border-gray font-redhat text-[16px] leading-body rounded-full flex items-center justify-center font-bold">
          <div className="w-[1px] h-[84px] bg-gray absolute bg-opacity-15 -top-[84px]"></div>

        {sectionNumber}
      </div>
  );
}
