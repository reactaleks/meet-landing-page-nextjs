interface PropTypes {
    btnSmall:boolean;
    btnColour:string;
}

export default function BtnComponent({btnSmall, btnColour}:PropTypes) {

    if (btnSmall) {
        return <button className={`w-[139px] h-[58px] ${btnColour}`}>What is it?</button>
    } else {
        return <button className={`w-[193px] h-[58px] ${btnColour}`}><span>Download</span> v1.3</button> 
    } 

}