interface PropTypes {
    btnSmall:boolean;
    btnColour:string;
}

export default function BtnComponent({btnSmall, btnColour}:PropTypes) {

    if (btnSmall) {
        return <button className={`w-[139px] h-[58px] ${btnColour} hover:brightness-110 cursor-pointer rounded-full text-white font-redhat text-overline leading-overline`}>What is it?</button>
    } else {
        return <button className={`w-[193px] h-[58px] ${btnColour} hover:brightness-110 cursor-pointer rounded-full text-white font-redhat text-overline leading-overline`}><span className="font-black">Download</span> v1.3</button> 
    } 

}