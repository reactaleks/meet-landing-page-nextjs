interface PropTypes {
    sectionNumber:number
}

export default function SectionNumberComponent({sectionNumber}:PropTypes) {
    return (
        <div>
            {sectionNumber}
        </div>
    )
}