import Image from "next/image"

export default function NavComponent() {
    return (
        <>
            <Image src={'/logo.svg'} width={119} height={28} alt="Company logo"/>
        </>
    )
}