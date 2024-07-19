import Image from "next/image"

export default function NavComponent() {
    return (
        <div className="h-[130px] w-full flex justify-center items-center">
            <Image  src={'/logo.svg'} width={119} height={28} className="w-[119px] h-[28px]"  alt="Company logo"/>
        </div>
    )
}